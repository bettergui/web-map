mapboxgl.accessToken =
"pk.eyJ1IjoiYmV0dGVyZ3VpIiwiYSI6ImNrMDBrb2IzODBta2UzbXFzZXkxaGhsZnAifQ.L5f-wDyZLGX7sRPZ9IFK8A";
const map = new mapboxgl.Map({
   container: "map", // container ID
   style: "mapbox://styles/bettergui/cll465svt008c01ojex9obsh2", // style URL
   center: [-74.5, 40], // starting position [lng, lat]
   zoom: 9, // starting zoom
});
