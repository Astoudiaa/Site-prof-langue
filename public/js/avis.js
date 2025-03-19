document.addEventListener("DOMContentLoaded", function () {
    const avisForm = document.getElementById("avis-form");
    const avisContainer = document.getElementById("avis-container");

    // Avis par défaut
    const avisParDefaut = [
        {
            nom: "Robert-Charles Chemoul, Directeur - Fondateur de l’Association Atouts cours",
            message: "Depuis 2018, Dalila prend en charge des ateliers socio-linguistiques en français langue étrangère. Elle montre à cette occasion un réel talent de pédagogue ainsi que des capacités certaines dans la transmission des connaissances à ses apprenants venus des quatre coins du monde. Elle a toujours fait preuve de sérieux et d’efficacité tout en créant un lien de confiance avec ses apprenants."
        },
        {
            nom: "Mursel, Turc, chef de chantier",
            message: "Dalila est très pédagogue et patiente. J’ai bien progressé mon français avec elle principalement pour être plus à l’aise dans le cadre de mon travail."
        },
        {
            nom: "Tiziania, Italienne, vendeuse de prêt-à-porter",
            message: "Je tiens à vous dire que le travail que nous avons fait ensemble ces derniers mois m’a été très utile aussi bien dans ma vie professionnelle que personnelle. Votre patience, pédagogie et gentillesse ont été des atouts d’accompagnement."
        }
    ];

    // Fonction pour récupérer les avis depuis LocalStorage
    function chargerAvis() {
        let avisList = JSON.parse(localStorage.getItem("avis"));
        if (!avisList) {
            // Si pas d'avis dans LocalStorage, on utilise les avis par défaut
            avisList = avisParDefaut;
            localStorage.setItem("avis", JSON.stringify(avisList));
        }
        avisContainer.innerHTML = ""; // Vider l'affichage avant de le remplir

        avisList.forEach((avis, index) => {
            const avisDiv = document.createElement("div");
            avisDiv.classList.add("avis");
            avisDiv.innerHTML = `<strong>${avis.nom}</strong> : ${avis.message} 
                <button onclick="supprimerAvis(${index})">❌</button>`;
            avisContainer.appendChild(avisDiv);
        });
    }

    // Fonction pour ajouter un avis
    avisForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const nom = document.getElementById("nom").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (nom && message) {
            const avisList = JSON.parse(localStorage.getItem("avis")) || [];
            avisList.push({ nom, message });
            localStorage.setItem("avis", JSON.stringify(avisList));
            chargerAvis();
            avisForm.reset();
        }
    });

    // Fonction pour supprimer un avis
    window.supprimerAvis = function (index) {
        const avisList = JSON.parse(localStorage.getItem("avis")) || [];
        avisList.splice(index, 1);
        localStorage.setItem("avis", JSON.stringify(avisList));
        chargerAvis();
    };

    // Charger les avis au démarrage
    chargerAvis();
});
