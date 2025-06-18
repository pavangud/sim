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

  // Uncolor the map by setting all countries to a neutral color only
  g.selectAll('path')
    .data(countries)
    .enter().append('path')
    .attr('d', path)
    .attr('fill', '#e0e0e0') // neutral gray for all countries
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
});

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
