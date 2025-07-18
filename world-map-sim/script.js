// script.js
// This script will render the world map and handle zoom/country info

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('#map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const projection = d3.geoMercator()
  .scale((width / 2 / Math.PI))
  .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);

const g = svg.append('g');

// Ensure map renders immediately on page load
window.addEventListener('DOMContentLoaded', function() {
  // If your map rendering logic is not already here, move it here.
  // For example, if you have a function like renderMap(), call it here.
  // If the code is already at the top level, this is just a safeguard.

  // Add a loading indicator and disable quiz buttons until map is ready
  document.getElementById('start-quiz').disabled = true;
  document.getElementById('restart-quiz').disabled = true;
  document.getElementById('quiz-prompt').textContent = 'Loading map...';

  // Add a new button to go to the quiz page (ensure it is created after DOM is ready)
  const mapDiv = document.getElementById('map');
  if (mapDiv && !document.getElementById('go-to-quiz-page')) {
    const quizPageBtn = document.createElement('button');
    quizPageBtn.id = 'go-to-quiz-page';
    quizPageBtn.textContent = 'Go to Quiz Page';
    quizPageBtn.style.position = 'absolute';
    quizPageBtn.style.top = '60px';
    quizPageBtn.style.right = '20px';
    quizPageBtn.style.zIndex = 1100;
    quizPageBtn.style.padding = '10px 18px';
    quizPageBtn.style.fontSize = '1rem';
    quizPageBtn.style.background = '#fff';
    quizPageBtn.style.border = '1px solid #333';
    quizPageBtn.style.borderRadius = '8px';
    quizPageBtn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
    document.body.appendChild(quizPageBtn);
    quizPageBtn.onclick = function() {
      window.location.href = 'quiz.html';
    };
  }

  // Load world map data (TopoJSON)
  d3.json('https://unpkg.com/world-atlas@2.0.2/countries-110m.json').then(worldData => {
    let countries = topojson.feature(worldData, worldData.objects.countries).features;

    // Merge features with the same id (e.g., Somalia/Somaliland)
    const merged = {};
    countries.forEach(f => {
      if (!merged[f.id]) {
        merged[f.id] = f;
      } else {
        // Merge geometries
        merged[f.id] = {
          ...f,
          geometry: {
            type: 'MultiPolygon',
            coordinates: [].concat(
              merged[f.id].geometry.type === 'Polygon' ? [merged[f.id].geometry.coordinates] : merged[f.id].geometry.coordinates,
              f.geometry.type === 'Polygon' ? [f.geometry.coordinates] : f.geometry.coordinates
            )
          }
        };
      }
    });
    countries = Object.values(merged);

    // Color palette for continents/regions
    const regionColors = {
      'Africa': '#f4a261',
      'Americas': '#2a9d8f',
      'Asia': '#e76f51',
      'Europe': '#264653',
      'Oceania': '#a8dadc',
      'Antarctica': '#bdbdbd',
      'Ocean': '#4f8ad1',
    };

    // Draw ocean background
    svg.insert('rect', ':first-child')
      .attr('width', width)
      .attr('height', height)
      .attr('fill', regionColors['Ocean'])
      .on('mousemove', function(event) {
        // Optional: show ocean popup on hover
        showOceanInfo(event);
      })
      .on('mouseout', function() {
        hidePopup();
      });

    // Remove any existing paths before drawing new ones
    g.selectAll('path').remove();

    // Color all countries by continent/region, including those labeled 'Unknown'
    g.selectAll('path')
      .data(countries)
      .enter().append('path')
      .attr('d', path)
      .attr('fill', d => {
        const region = window.countryRegions[d.id] || 'Unknown';
        return regionColors[region] || '#ff00ff';
      })
      .attr('stroke', '#333')
      .attr('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        d3.select(this)
          .attr('stroke', '#ff0')
          .attr('stroke-width', 3)
          .raise();
      })
      .on('mouseout', function(event, d) {
        d3.select(this)
          .attr('stroke', '#333')
          .attr('stroke-width', 1);
      })
      .on('click', function(event, d) {
        zoomToCountry(d);
        showCountryInfo(d);
      });

    // --- Seterra-style Quiz Mechanic ---
    // Quiz state variables
    let quizActive = false;
    let quizCountries = [];
    let quizCurrent = null;
    let quizScore = 0;
    let quizAnswered = new Set();

    // Get quiz UI elements
    const startBtn = document.getElementById('start-quiz');
    const restartBtn = document.getElementById('restart-quiz');
    const promptSpan = document.getElementById('quiz-prompt');
    const scoreSpan = document.getElementById('quiz-score');

    function resetQuizUI() {
      promptSpan.textContent = '';
      scoreSpan.textContent = '';
      startBtn.style.display = '';
      restartBtn.style.display = 'none';
    }

    function startQuiz() {
      quizActive = true;
      quizScore = 0;
      quizAnswered = new Set();
      quizCountries = g.selectAll('path').data().map(d => d.id).filter(id => window.countryInfoAll[id]);
      d3.shuffle(quizCountries);
      startBtn.style.display = 'none';
      restartBtn.style.display = '';
      scoreSpan.textContent = `Score: 0/${quizCountries.length}`;
      nextQuizRound();
      // Remove previous highlights
      g.selectAll('path').attr('stroke', '#333').attr('stroke-width', 1).attr('fill', d => {
        const region = window.countryRegions[d.id] || 'Unknown';
        return regionColors[region] || '#ff00ff';
      });
    }

    function endQuiz() {
      quizActive = false;
      promptSpan.textContent = `Quiz complete! Final score: ${quizScore}/${quizCountries.length}`;
      restartBtn.style.display = '';
    }

    function nextQuizRound() {
      if (quizCountries.length === 0) {
        endQuiz();
        return;
      }
      quizCurrent = quizCountries.pop();
      const info = window.countryInfoAll[quizCurrent];
      promptSpan.textContent = `Find: ${info ? info.name : quizCurrent}`;
      scoreSpan.textContent = `Score: ${quizScore}/${g.selectAll('path').data().length}`;
    }

    function handleQuizClick(event, d) {
      if (!quizActive || quizAnswered.has(d.id)) return;
      if (d.id === quizCurrent) {
        // Correct
        d3.select(this)
          .attr('stroke', 'green')
          .attr('stroke-width', 4)
          .raise();
        quizScore++;
        quizAnswered.add(d.id);
        scoreSpan.textContent = `Score: ${quizScore}/${g.selectAll('path').data().length}`;
        setTimeout(() => {
          nextQuizRound();
        }, 700);
      } else {
        // Incorrect
        d3.select(this)
          .attr('stroke', 'red')
          .attr('stroke-width', 4)
          .raise();
        setTimeout(() => {
          d3.select(this)
            .attr('stroke', '#333')
            .attr('stroke-width', 1);
        }, 700);
      }
    }

    // Remove all previous listeners and set up only quiz-aware listeners
    g.selectAll('path').on('.quiz', null).on('mouseover', null).on('mouseout', null).on('click', null);

    function setQuizListeners() {
      g.selectAll('path')
        .on('mouseover', function(event, d) {
          if (quizActive && d.id === quizCurrent && !quizAnswered.has(d.id)) {
            d3.select(this).attr('stroke', '#0f0').attr('stroke-width', 3).raise();
          } else if (quizActive && !quizAnswered.has(d.id)) {
            d3.select(this).attr('stroke', '#ff0').attr('stroke-width', 3).raise();
          } else {
            d3.select(this).attr('stroke', '#ff0').attr('stroke-width', 3).raise();
          }
        })
        .on('mouseout', function(event, d) {
          if (quizActive && quizAnswered.has(d.id)) return;
          d3.select(this).attr('stroke', '#333').attr('stroke-width', 1);
        })
        .on('click', function(event, d) {
          if (quizActive) {
            handleQuizClick.call(this, event, d);
          } else {
            zoomToCountry(d);
            showCountryInfo(d);
          }
        });
    }

    // Add event listeners to quiz buttons
    if (startBtn) startBtn.onclick = function() {
      quizActive = true;
      quizScore = 0;
      quizAnswered = new Set();
      quizCountries = g.selectAll('path').data().map(d => d.id).filter(id => window.countryInfoAll[id]);
      d3.shuffle(quizCountries);
      startBtn.style.display = 'none';
      restartBtn.style.display = '';
      scoreSpan.textContent = `Score: 0/${quizCountries.length}`;
      nextQuizRound();
      g.selectAll('path').attr('stroke', '#333').attr('stroke-width', 1).attr('fill', d => {
        const region = window.countryRegions[d.id] || 'Unknown';
        return regionColors[region] || '#ff00ff';
      });
      setQuizListeners();
      // Show the prompt span if hidden
      promptSpan.style.display = '';
    };
    if (restartBtn) restartBtn.onclick = function() {
      startBtn.onclick();
    };
    // Make sure the prompt span is visible on load
    promptSpan.style.display = '';

    // Enable quiz buttons and clear loading message when map is ready
    document.getElementById('start-quiz').disabled = false;
    document.getElementById('restart-quiz').disabled = false;
    document.getElementById('quiz-prompt').textContent = '';
  });
});

// If on the main map page, redirect to quiz.html when Start Quiz is clicked
const startQuizBtn = document.getElementById('start-quiz');
if (startQuizBtn) {
  startQuizBtn.onclick = function() {
    window.location.href = 'quiz.html';
  };
}

// Remove the global quizPageBtn variable, as it is now created in DOMContentLoaded

function zoomToCountry(d) {
  const [[x0, y0], [x1, y1]] = path.bounds(d);
  svg.transition().duration(750).call(
    zoom.transform,
    d3.zoomIdentity
      .translate(width / 2, height / 2)
      .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
      .translate(-(x0 + x1) / 2, -(y0 + y1) / 2)
  );
}

// Add this after the d3/topojson script tags in index.html:
// <script src="countryInfoAll.js"></script>

function showCountryInfo(d) {
  // Use the global countryInfoAll object for all countries
  const info = window.countryInfoAll[d.id] || { name: 'Unknown', capital: 'Unknown', population: 'Unknown' };

  // Create popup div if not exists
  let popup = document.getElementById('country-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'country-popup';
    popup.style.position = 'absolute';
    popup.style.background = '#fff';
    popup.style.border = '1px solid #333';
    popup.style.padding = '10px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    popup.style.zIndex = 1000;
    document.body.appendChild(popup);
  }
  popup.innerHTML = `<b>${info.name}</b><br>Capital: ${info.capital}<br>Population: ${info.population}<br><button id='close-popup'>Close</button>`;

  // Position popup near mouse
  document.addEventListener('click', closePopupOnOutside, true);
  function closePopupOnOutside(e) {
    if (!popup.contains(e.target)) {
      popup.style.display = 'none';
      document.removeEventListener('click', closePopupOnOutside, true);
    }
  }
  document.getElementById('close-popup').onclick = () => {
    popup.style.display = 'none';
    document.removeEventListener('click', closePopupOnOutside, true);
  };
  popup.style.display = 'block';
  // Use last click event for position
  popup.style.left = (window.event.pageX + 10) + 'px';
  popup.style.top = (window.event.pageY - 30) + 'px';
}

function showOceanInfo(event) {
  let popup = document.getElementById('country-popup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'country-popup';
    popup.style.position = 'absolute';
    popup.style.background = '#fff';
    popup.style.border = '1px solid #333';
    popup.style.padding = '10px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
    popup.style.zIndex = 1000;
    document.body.appendChild(popup);
  }
  popup.innerHTML = `<b>Ocean</b><br>This is the open ocean or sea.`;
  popup.style.display = 'block';
  popup.style.left = (event.pageX + 10) + 'px';
  popup.style.top = (event.pageY - 30) + 'px';
}

function hidePopup() {
  let popup = document.getElementById('country-popup');
  if (popup) popup.style.display = 'none';
}

const zoom = d3.zoom()
  .scaleExtent([1, 8])
  .on('zoom', (event) => {
    g.attr('transform', event.transform);
  });

svg.call(zoom);

// Add reset zoom button functionality
const resetBtn = document.getElementById('reset-zoom');
if (resetBtn) {
  resetBtn.onclick = () => {
    svg.transition().duration(750).call(
      zoom.transform,
      d3.zoomIdentity
    );
  };
}
