
var map = L.map('map').setView([/* 51.505, -0.09 */ 48.86627360532145, 2.4947319246837263], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([51.505, -0.09]).addTo(map);
L.marker([48.86627360532145, 2.4947319246837263]).addTo(map);
