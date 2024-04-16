// Fonction pour ouvrir le pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Fonction pour fermer le pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Écouteur d'événement pour le clic sur le bouton de paiement
document.getElementById("bouton-Paiement").addEventListener("click", openPopup);