
var locations = [
    { lat: 33.830132, lon: 10.869262 },
    { lat: 33.726475, lon: 10.741845 },
    { lat: 33.707424, lon: 10.757585 },
    { lat: 33.724437, lon: 10.843285 },
    { lat: 33.775580, lon: 11.040320 },
    // Ajoutez autant de coordonnées que vous le souhaitez
];

var map = L.map('map').setView([33.80677398124305, 10.880648587112974], 10.2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

locations.forEach(function (location) {
    L.marker([location.lat, location.lon]).addTo(map);
});




