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

        proj1_img: "Hotel Booking Web App",
        proj1_title: "Hotel Booking Web App",
        proj1_desc: "Demo hotel website where visitors browse rooms and events, sign up and book online (1 to 3 nights, with availability check and total calculation) and download a PDF receipt with a QR code. A REST API with JWT roles (customer, staff, admin) lets staff manage rooms, events and tasks. Deployed on AWS: React on S3 and CloudFront, Flask API on EC2 behind the same domain.",
        proj_demo: "Live demo",
        proj_repo_web: "Frontend repo",
        proj_repo_api: "API repo",

        proj2_img: "Bus Ticket Booking",
        proj2_title: "Bus Ticket Booking",
        proj2_desc: "Web platform to book bus tickets: passengers browse trips, pick up to 3 seats on an interactive 30-seat map and place their order online. Seats are held temporarily with Redis and released automatically after 5 minutes, so two people can never book the same seat. NestJS REST API with JWT sessions in httpOnly cookies, PostgreSQL, and a Docker Compose deployment on EC2 behind Caddy with HTTPS. Demo project: no real payments, and the ID upload is not validated, so please don't upload real documents.",

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

        proj1_img: "Web de Reservas de Hotel",
        proj1_title: "Web de Reservas de Hotel",
        proj1_desc: "Sitio demo de un hotel donde los visitantes conocen habitaciones y eventos, se registran y reservan en línea (de 1 a 3 noches, con validación de disponibilidad y cálculo del total) y descargan un comprobante en PDF con código QR. Una API REST con roles JWT (cliente, staff, administrador) permite al personal gestionar habitaciones, eventos y tareas. Desplegado en AWS: React en S3 y CloudFront, API Flask en EC2 bajo el mismo dominio.",
        proj_demo: "Ver demo",
        proj_repo_web: "Repo frontend",
        proj_repo_api: "Repo API",

        proj2_img: "Reserva de Boletos de Autobús",
        proj2_title: "Reserva de Boletos de Autobús",
        proj2_desc: "Plataforma web para reservar boletos de autobús: el pasajero consulta viajes, elige hasta 3 asientos en un mapa interactivo de 30 lugares y registra su compra en línea. Los asientos se bloquean temporalmente con Redis y se liberan solos a los 5 minutos, evitando que dos personas reserven el mismo. API REST en NestJS con sesión JWT en cookie httpOnly, PostgreSQL y despliegue con Docker Compose en EC2 detrás de Caddy con HTTPS. Proyecto de demostración: no procesa pagos reales y la verificación de identidad no valida el documento, así que no subas documentos reales.",

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
    if (typeof scalePreviews === 'function') scalePreviews();
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
// Live Project Previews (scaled iframes)
// ======================
function scalePreviews() {
    document.querySelectorAll('.project-preview').forEach(box => {
        const w = Number(box.dataset.w);
        const h = Number(box.dataset.h);
        const screen = box.querySelector('.project-screen');
        const scale = screen.clientWidth / w;
        if (!scale) return;
        screen.style.height = (h * scale) + 'px';
        screen.querySelector('iframe').style.transform = 'scale(' + scale + ')';
    });
}

window.addEventListener('resize', scalePreviews);
window.addEventListener('load', scalePreviews);
scalePreviews();

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