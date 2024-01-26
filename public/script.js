document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar-resp');
    const navList = document.querySelector('.nav-list');
  
    navbar.addEventListener('click', function () {
      navList.classList.toggle('show');
    });
  });
var donopacks = document.getElementById("dono");

// Agrega un evento de clic al botón
donopacks.addEventListener("click", function() {
     // Redirige a la URL deseada
    window.location.href = "./donopacks";
 });

 