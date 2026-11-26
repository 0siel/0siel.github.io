// ======================
// i18n Translations
// ======================
const translations = {
    en: {
        // Nav
        nav_home: "About",
        nav_experience: "Experience",
        nav_certifications: "Certifications",
        nav_projects: "Projects",
        nav_knowledge: "Knowledge",
        nav_contact: "Contact",
        btn_theme: "Toggle Theme",

        // About
        about_title: "About",
        about_intro: "Full Stack Software Engineer specializing in microservices architecture and RESTful APIs with Python, FastAPI, NestJS and Angular.",

        // Experience
        experience_title: "Experience",
        exp1_dates: "Apr 2026 - Present",
        exp2_dates: "Mar 2024 - Jan 2026",

        // Certifications
        cert_title: "Certifications",
        cert_validate: "Validate credential",

        // Projects
        projects_title: "Projects",
        btn_prev: "<",
        btn_next: ">",

        proj1_img: "Incredible Project",
        proj1_title: "Incredible Project",
        proj1_desc: "Construction in progress...",

        proj2_img: "Fabulous Project",
        proj2_title: "Fabulous Project",
        proj2_desc: "Strarting on port 8080...",

        proj3_img: "Amazing Project",
        proj3_title: "Amazing Project",
        proj3_desc: "Loading dependencies...",

        tag_microservices: "Microservices",
        tag_architecture: "Architecture",
        tag_db_design: "Database Design",
        tag_sys_strategy: "System Strategy",

        // Knowledge
        knowledge_title: "Knowledge",
        skill_backend: "Backend Dev",
        skill_rdb: "Relational DBs",
        skill_frontend: "Frontend Dev",
        skill_cloud: "Cloud & DevOps",
        skill_arch: "Architecture",
        skill_arch_content: "Microservices, gRPC, Apache Kafka, SOLID, design patterns.",
        skill_nosql_content: "MongoDB, Redis.",
        skill_programming: "Programming",
        skill_testing: "Testing & Data",
        skill_testing_content: "pytest, Pandas, NumPy.",
        skill_ai: "AI",
        skill_ai_content: "Claude, MCP, RAG, AWS Certified AI Practitioner.",

        // Education
        edu_title: "Education",
        edu_degree: "Software Engineering (2021 - 2025)",

        // Contact
        contact_title: "Contact",
        contact_cv: "Download CV",
        contact_wa: "Whatsapp",
        contact_email: "Email",

        // Footer
        footer_text: "Made with 💙 by Osiel © 2026"
    },
    es: {
        // Nav
        nav_home: "Sobre Mí",
        nav_experience: "Experiencia",
        nav_certifications: "Certificaciones",
        nav_projects: "Proyectos",
        nav_knowledge: "Conocimientos",
        nav_contact: "Contacto",
        btn_theme: "Cambiar Tema",

        // About
        about_title: "Sobre Mí",
        about_intro: "Ingeniero de Software Full Stack especializado en arquitectura de microservicios y APIs RESTful con Python, FastAPI, NestJS y Angular.",

        // Experience
        experience_title: "Experiencia",
        exp1_dates: "Abr 2026 - Actualidad",
        exp2_dates: "Mar 2024 - Ene 2026",

        // Certifications
        cert_title: "Certificaciones",
        cert_validate: "Validar credencial",

        // Projects
        projects_title: "Proyectos",
        btn_prev: "<",
        btn_next: ">",

        proj1_img: "Proyecto Increible",
        proj1_title: "Proyecto Increible",
        proj1_desc: "En construccion...",

        proj2_img: "Proyecto Espectacular",
        proj2_title: "Proyecto Espectacular",
        proj2_desc: "Compilando...",

        proj3_img: "Proyecto Asombroso",
        proj3_title: "Proyecto Asombroso",
        proj3_desc: "Cargando dependencias...",

        tag_microservices: "Microservicios",
        tag_architecture: "Arquitectura",
        tag_db_design: "Diseño de BD",
        tag_sys_strategy: "Estrategia de Sistema",

        // Knowledge
        knowledge_title: "Conocimientos",
        skill_backend: "Desarrollo Backend",
        skill_rdb: "BDs Relacionales",
        skill_frontend: "Desarrollo Frontend",
        skill_cloud: "Cloud y DevOps",
        skill_arch: "Arquitectura",
        skill_arch_content: "Microservicios, gRPC, Apache Kafka, SOLID, patrones de diseño.",
        skill_nosql_content: "MongoDB, Redis.",
        skill_programming: "Programación",
        skill_testing: "Pruebas y Datos",
        skill_testing_content: "pytest, Pandas, NumPy.",
        skill_ai: "IA",
        skill_ai_content: "Claude, MCP, RAG, AWS Certified AI Practitioner.",

        // Education
        edu_title: "Educación",
        edu_degree: "Ingeniería de Software (2021 - 2025)",

        // Contact
        contact_title: "Contacto",
        contact_cv: "Descargar CV",
        contact_wa: "Whatsapp",
        contact_email: "Email",

        // Footer
        footer_text: "Hecho con 💙 por Osiel © 2026"
    }
};

// ======================
// Language Toggle Logic
// ======================
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
}

// Apply saved language on load
applyLanguage(currentLang);

const langBtn = document.getElementById('lang-toggle');
langBtn.addEventListener('click', () => {
    applyLanguage(currentLang === 'en' ? 'es' : 'en');
});

// ======================
// Theme Toggle Logic
// ======================
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

// ======================
// Expandable Skill Cards
// ======================
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

// ======================
// Carousel Logic
// ======================
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

// ======================
// Certifications Carousel (2 per view on desktop, 1 on mobile)
// ======================
const certCards = document.querySelectorAll('.cert-card');
let certStart = 0;

function certPerView() {
    return window.innerWidth > 768 ? 2 : 1;
}

function renderCerts() {
    const n = certCards.length;
    const visible = Math.min(certPerView(), n);
    certCards.forEach(card => card.classList.remove('visible'));
    for (let k = 0; k < visible; k++) {
        certCards[(certStart + k) % n].classList.add('visible');
    }
}

document.getElementById('cert-next-btn').addEventListener('click', () => {
    certStart = (certStart + 1) % certCards.length;
    renderCerts();
});

document.getElementById('cert-prev-btn').addEventListener('click', () => {
    certStart = (certStart - 1 + certCards.length) % certCards.length;
    renderCerts();
});

window.addEventListener('resize', renderCerts);
renderCerts();

// ======================
// Hamburger Menu (Mobile)
// ======================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// Close menu when a nav link is clicked
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
    });
});