// script.js
document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.slider-arrow.left');
    const rightArrow = document.querySelector('.slider-arrow.right');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

   leftArrow.addEventListener('click', prevSlide);
   rightArrow.addEventListener('click', nextSlide);

   setInterval(nextSlide, 6000); // Cambia la imagen cada 6 segundos
 
    // Obtener el nombre de la página actual (por ejemplo, "Inicio")
    const currentPage = "Inicio"; // Reemplaza esto con el nombre real de tu página actual
 
    // Marcar el elemento de menú correspondiente como activo
    const menuItems = document.querySelectorAll('header li');
    menuItems.forEach(item => {
        if (item.innerText === currentPage) {
            item.classList.add('active');
        }
    });
 
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
 
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('show');
    });
 });