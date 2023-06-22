function calculateRent() {
    var durationInput = document.getElementById("duration");
    var numTenantsInput = document.getElementById("numTenants");
    var totalRentOutput = document.getElementById("totalRent");

    var duration = parseFloat(durationInput.value);
    var numTenants = parseInt(numTenantsInput.value);

    // Vérification de validité des entrées
    if (isNaN(duration) || isNaN(numTenants) || duration <= 0 || numTenants <= 0) {
        totalRentOutput.textContent = "Veuillez entrer des valeurs numériques valides pour la durée et le nombre de locataires.";
        return;
    }

    // Calcul du loyer
    var area = 17; // Surface en mètres carrés
    var pricePerSquareMeter = 40.00; // Prix par mètre carré par personne

    if (numTenants > 3) {
        pricePerSquareMeter = 3; // Réduction si plus de 3 locataires
    }

    var totalRent = area * pricePerSquareMeter * duration * numTenants;

    // Affichage du résultat
    totalRentOutput.textContent = "Loyer total : " + totalRent.toFixed(2) + "€";
}
