// Theme Toggle Logic
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

// Expandable Skill Cards Logic
const expandBtns = document.querySelectorAll('.expand-btn');

expandBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        
        // Instantly toggle visibility
        content.classList.toggle('open');
        
        // Handle bottom border adjustment when open
        if (content.classList.contains('open')) {
            btn.style.borderBottom = '2px solid var(--border-color)';
        }
    });
});

// Carousel Logic
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentSlideIndex = 0;

function showSlide(index) {
    // Instantly cut to the next slide (no transitions)
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentSlideIndex++;
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; 
    }
    showSlide(currentSlideIndex);
});

prevBtn.addEventListener('click', () => {
    currentSlideIndex--;
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    showSlide(currentSlideIndex);
});