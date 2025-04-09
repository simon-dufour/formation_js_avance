const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    // Nettoyage
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    const city = document.getElementById("city");
    const tel = document.getElementById("tel");

    const cityFirstChar = city.value.charAt(0);

    if (cityFirstChar != cityFirstChar.toUpperCase()) {
        document.getElementById("cityError").textContent = "La ville doit commencer par une majuscule.";
        valid = false;
    }

    if (tel.value && tel.value.length != 10) {
        document.getElementById("telError").textContent = "Le n° de téléphone doit contenir exactement 10 chiffres.";
        valid = false;
    }

    if (valid) {
        alert("Formulaire valide ! Données envoyées.");
        form.reset();
    }
});
