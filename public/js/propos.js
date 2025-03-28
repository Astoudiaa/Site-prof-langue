// Quand la page est complètement chargée
window.addEventListener('load', () => {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Ajoute la classe 'visible' pour démarrer l'animation
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});

