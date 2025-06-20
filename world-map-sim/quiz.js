// quiz.js
// Seterra-style quiz logic for quiz.html

const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('#quiz-map')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const projection = d3.geoMercator()
  .scale((width / 2 / Math.PI))
  .translate([width / 2, height / 2]);

const path = d3.geoPath().projection(projection);
const g = svg.append('g');

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
  .attr('fill', regionColors['Ocean']);

// Quiz state
let quizActive = true;
let quizCountries = [];
let quizCurrent = null;
let quizScore = 0;
let quizAnswered = new Set();

const promptSpan = document.getElementById('quiz-prompt');
const scoreSpan = document.getElementById('quiz-score');
const restartBtn = document.getElementById('restart-quiz');
const backBtn = document.getElementById('back-to-map');

function resetQuizUI() {
  promptSpan.textContent = '';
  scoreSpan.textContent = '';
}

function startQuiz() {
  quizActive = true;
  quizScore = 0;
  quizAnswered = new Set();
  quizCountries = g.selectAll('path').data().map(d => d.id).filter(id => window.countryInfoAll[id]);
  d3.shuffle(quizCountries);
  scoreSpan.textContent = `Score: 0/${quizCountries.length}`;
  nextQuizRound();
  g.selectAll('path').attr('stroke', '#333').attr('stroke-width', 1).attr('fill', d => {
    const region = window.countryRegions[d.id] || 'Unknown';
    return regionColors[region] || '#ff00ff';
  });
}

function endQuiz() {
  quizActive = false;
  promptSpan.textContent = `Quiz complete! Final score: ${quizScore}/${quizCountries.length}`;
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
      }
    });
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

  g.selectAll('path').remove();
  g.selectAll('path')
    .data(countries)
    .enter().append('path')
    .attr('d', path)
    .attr('fill', d => {
      const region = window.countryRegions[d.id] || 'Unknown';
      return regionColors[region] || '#ff00ff';
    })
    .attr('stroke', '#333')
    .attr('cursor', 'pointer');

  setQuizListeners();
  startQuiz();
});

if (restartBtn) restartBtn.onclick = startQuiz;
if (backBtn) backBtn.onclick = function() {
  window.location.href = 'index.html';
};
resetQuizUI();
