document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    worldCopyJump: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  let geojsonLayer;
  let lastClickedLayer;
  let sidebarVisible = false;

  // Boolean variable to toggle sidebar feature
  const enableSidebarFeature = true;

  // Function to set transparent style
  function setTransparentStyle(feature) {
    return {
      color: 'transparent',
      fillColor: 'transparent',
      weight: 1,
      fillOpacity: 0.1,
    };
  }

  // Function to highlight style
  function setHighlightStyle() {
    return {
      color: '#ff7800',
      fillColor: '#ff7800',
      weight: 2,
      fillOpacity: 0.5,
    };
  }

  // Debounce function to limit the rate of events
  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  // Function to handle country click
  function onCountryClick(layer, feature) {
    if (lastClickedLayer) {
      geojsonLayer.resetStyle(lastClickedLayer);
    }
    lastClickedLayer = layer;

    // Highlight the clicked country
    layer.setStyle(setHighlightStyle());

    // Update sidebar content
    const infoContent = `
      <h3>${feature.properties.name}</h3>
      <ul>
        <li>Random fact 1</li>
        <li>Random fact 2</li>
        <li>Random fact 3</li>
      </ul>
    `;
    document.getElementById('info-content').innerHTML = infoContent;

    if (enableSidebarFeature) {
      showSidebar();
    }
  }

  // Function to show sidebar
  function showSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mapContainer = document.getElementById('map');
    sidebar.classList.add('visible');
    mapContainer.classList.remove('full');
    sidebarVisible = true;
  }

  // Function to hide sidebar
  function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mapContainer = document.getElementById('map');
    sidebar.classList.remove('visible');
    mapContainer.classList.add('full');
    sidebarVisible = false;
  }

  fetch('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
    .then(response => response.json())
    .then(data => {
      geojsonLayer = L.geoJSON(data, {
        style: setTransparentStyle,
        onEachFeature: function (feature, layer) {
          layer.on({
            click: debounce(function () {
              onCountryClick(layer, feature);
            }, 100) // Debouncing with 100ms delay
          });
        }
      }).addTo(map);
    });

  // Click handler for map to reset country highlight
  map.on('click', function(e) {
    if (lastClickedLayer) {
      geojsonLayer.resetStyle(lastClickedLayer);
      lastClickedLayer = null;
      document.getElementById('info-content').innerHTML = 'Click on a country to see information here.';
      if (enableSidebarFeature) {
        hideSidebar();
      }
    }
  });

  // Placeholder function to get lat/lng for a country
  function getLatLngForCountry(countryName) {
    // You need to implement a proper way to get lat/lng for each country
    const countryLatLng = {
      'France': { lat: 46.603354, lng: 1.888334 },
      'Germany': { lat: 51.165691, lng: 10.451526 },
      // Add other countries here
    };
    return countryLatLng[countryName] || { lat: 0, lng: 0 };
  }
});
