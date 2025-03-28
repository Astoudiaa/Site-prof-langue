document.addEventListener('DOMContentLoaded', () => {
    const subtitles = [
        "Apprendre le français est bien plus qu’un simple exercice linguistique",
        "C’est une porte ouverte sur une culture, ",
        "Une élégance et une aisance Qui vous permettront d’évoluer avec confiance ",
        "Dans un environnement francophone."
    ];

    const subtitleElement = document.getElementById('subtitle');

    function typeWriter(text, element) {
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                setTimeout(fadeOut, 3000);
            }
        }

        function fadeOut() {
            element.style.opacity = 0;
            setTimeout(changeSubtitle, 1000);
        }

        function changeSubtitle() {
            const nextSubtitle = subtitles[Math.floor(Math.random() * subtitles.length)];
            typeWriter(nextSubtitle, element);
        }

        element.style.opacity = 1;
        type();
    }

    // Initial subtitle
    typeWriter(subtitles[0], subtitleElement);
});