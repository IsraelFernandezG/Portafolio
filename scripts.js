  // Cambiar color de navbar al hacer scroll
  const navbar = document.getElementById('main-navbar');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = 'rgba(0, 1, 8, 0.5)'; // Cambia el color al hacer scroll
      } else {
          navbar.style.backgroundColor = 'transparent'; // Restaura el color transparente al volver arriba
      }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const flipCards = document.querySelectorAll(".flip-card");
  
    flipCards.forEach(function (card) {
      card.addEventListener("click", function () {
        this.classList.toggle("flipped");
      });
    });
  });



const videoElement = document.getElementById('myVideo');

// Agregar el evento "ended" al video para reiniciar automáticamente con el efecto de desvanecimiento
videoElement.addEventListener('ended', () => {
    videoElement.currentTime = 0; // Reiniciar el tiempo de reproducción del video
    videoElement.parentElement.classList.add('restart'); // Añadir la clase para activar la animación
    // Cuando finalice la animación, quitar la clase para futuros reinicios
    videoElement.parentElement.addEventListener('animationend', () => {
        videoElement.parentElement.classList.remove('restart');
    }, { once: true });
});

// Función para mostrar/ocultar la lista de navegación
function toggleNav() {
  const navigate = document.getElementById('navigate');
  
  // Obtener el ancho actual de la ventana
  const windowWidth = window.innerWidth;
  
  if (windowWidth <= 768) {
    navigate.style.transform = navigate.style.transform === 'translateY(0%)' ? 'translateY(-150%)' : 'translateY(0%)';
  }
  // Si estás en versión de escritorio, no hagas nada
}


 
  // Función para cerrar el menú desplegable cuando se hace clic fuera de él
  function closeNavIfClickedOutside(event) {
    const navigate = document.getElementById('navigate');
    const hamburger = document.querySelector('.hamburger');

    if (!navigate.contains(event.target) && !hamburger.contains(event.target)) {
      navigate.style.transform = 'translateY(-150%)';
    }
  }

  // Agregar un event listener al documento para detectar los clics fuera del menú desplegable
  // document.addEventListener('click', closeNavIfClickedOutside);




const cards = document.getElementById('tarjeta1');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    if (window.scrollY > 1200) {
      card.classList.add('flip-in-ver-right');
    }
  });
});



const targetElement = document.getElementById('tarjeta1');
const cardsToAnimate = document.querySelectorAll('.skills-cont'); // Cambia esto para seleccionar tus elementos

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Porcentaje de visibilidad requerido para activar la animación
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      cardsToAnimate.forEach(card => {
        card.classList.add('flip-in-ver-right');
      });
      observer.unobserve(entry.target); // Dejar de observar una vez que se activa
    }
  });
}, options);

observer.observe(targetElement);




//carrusel imagenes en portafolio
const images = document.querySelectorAll('.port-img');
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].style.opacity = 0;
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.opacity = 1;
}

setInterval(showNextImage, 3000);




