function changeImage(img) {
    img.src = './assets/img/cours-gouter.jpeg';  // Change l'image au survol
  }
  
  function restoreImage(img) {
    img.src = './assets/img/Dalila.jpeg';  // Restaure l'image d'origine lorsque la souris part
  }


  let images = ['./assets/img/cours-gouter.jpeg', './assets/img/cathedrale.jpeg','./assets/img/cours-petit-dejeuner.jpeg',];  // Liste des images
let currentImageIndex = 0;  // L'index de l'image actuelle

// Fonction pour changer l'image toutes les 1,5 secondes
setInterval(function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;  // Change d'image (cycle)
  document.getElementById('image').src = images[currentImageIndex];  // Met à jour l'image
}, 1500);  // 1500 millisecondes = 1,5 secondes


