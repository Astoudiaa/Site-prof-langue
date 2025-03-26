window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navigation");
  if (window.scrollY > 50) {
      navbar.classList.add("scrolled"); // Ajoute la classe au scroll
  } else {
      navbar.classList.remove("scrolled"); // Retire la classe en haut de page
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navigation");
  const heroBg = document.querySelector(".hero-bg");

  window.addEventListener("scroll", function () {
      let scrollValue = window.scrollY;

      // Effet de déplacement de l'image
      heroBg.style.transform = `translateY(${scrollValue * 0.5}px)`;

      // Modification de la navbar au scroll
      if (scrollValue > 50) {
          nav.classList.add("scrolled");
      } else {
          nav.classList.remove("scrolled");
      }
  });
});