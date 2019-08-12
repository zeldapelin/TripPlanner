//console.log('hello!')
const mapboxgl = require("mapbox-gl");
mapboxgl.accessToken = 'pk.eyJ1IjoicGVsaW5lIiwiYSI6ImNqejhremRtOTE4Y3YzbnFpc2N3dzE0bzAifQ.keZleN7D4o3J-D3LgDUmJw';
//we got the API token from mapbox.com. after some complicated things.
const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
