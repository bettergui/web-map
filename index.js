mapboxgl.accessToken =
"pk.eyJ1IjoiYmV0dGVyZ3VpIiwiYSI6ImNrMDBrb2IzODBta2UzbXFzZXkxaGhsZnAifQ.L5f-wDyZLGX7sRPZ9IFK8A";
const map = new mapboxgl.Map({
   container: "map", // container ID
   style: "https://d3dt5tsgfu6lcf.cloudfront.net/style/santurce/web?mode=default", // style URL
   center: [-74.5, 40], // starting position [lng, lat]
   zoom: 9, // starting zoom
});
