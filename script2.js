// Obtenir la date actuelle
var today = new Date();
  
// Formatage de la date au format ISO (YYYY-MM-DD)
var yyyy = today.getFullYear();
var mm = String(today.getMonth() + 1).padStart(2, '0');
var dd = String(today.getDate()).padStart(2, '0');
var minDate = yyyy + '-' + mm + '-' + dd;

// Définir la date minimale comme la date d'aujourd'hui
document.getElementById('partyDate').setAttribute('min', minDate);
document.getElementById('partyDate').setAttribute('value', minDate);
document.getElementById('End').setAttribute('min', minDate);
document.getElementById('partyDate2').setAttribute('min', minDate);
document.getElementById('partyDate2').setAttribute('value', minDate);
document.getElementById('End2').setAttribute('min', minDate);