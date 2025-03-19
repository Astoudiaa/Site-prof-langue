// Attendre 2 secondes, puis appliquer une jolie transition et rediriger
setTimeout(function() {
    // Appliquer une transition avec opacité réduite, zoom et mouvement vers le bas
    document.getElementById('logoPage').style.opacity = '0';
    document.getElementById('logoPage').style.transform = 'translateY(30px) scale(0.5)';  // Zoom arrière et déplacement
  
    // Après 1.5 secondes (pour laisser le temps de la transition), rediriger
    setTimeout(function() {
      window.location.href = 'home.html';  // Remplace 'home.html' par l'URL de ta page d'accueil
    }, 1500);  // Délai pour attendre que la transition soit terminée
  }, 2000);  // 2000 millisecondes = 2 secondes pour afficher le logo
  

  // Lorsque la page d'accueil est chargée, on ajoute la classe 'loaded' pour le fondu
window.onload = function() {
    document.body.classList.add('loaded');
  };
  