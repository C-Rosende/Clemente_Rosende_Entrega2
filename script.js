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
   setInterval(nextSlide, 6000);
    const currentPage = "Inicio";
    const menuItems = document.querySelectorAll('header li');
    menuItems.forEach(item => {
        if (item.innerText === currentPage) {
            item.classList.add('active');
        }
    });
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navMenu = document.querySelector('nav ul');
    
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
        navMenu.style.display = nav.classList.contains('open') ? 'flex' : 'none';
    });
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 764) {
            navMenu.style.display = 'flex';
        } else if (!nav.classList.contains('open')) {
            navMenu.style.display = 'none';
        }
    });
});