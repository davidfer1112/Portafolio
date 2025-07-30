"use client"

import { create } from "zustand"

type Language = "es" | "en"

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: "es",
  setLanguage: (lang) => set({ language: lang }),
}))

export const translations = {
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      skills: "Habilidades",
      experience: "Experiencia",
      education: "Formación",
      projects: "Proyectos",
      contact: "Contacto",
    },
    // Hero Section
    hero: {
      title: "Desarrollador",
      subtitle: "Full Stack",
      description: "Creando experiencias digitales únicas con tecnologías modernas",
      viewProjects: "Ver Proyectos",
      contact: "Contactar",
    },
    // About Section
    about: {
      title: "Sobre",
      titleHighlight: "Mí",
      description1:
        "Ingeniero en Sistemas con enfoque en desarrollo web y automatización de procesos. Me apasiona crear aplicaciones con interfaces intuitivas y eficientes, combinando creatividad y lógica.",
      description2:
        "He trabajado con tecnologías como React, Node.js y Spring Boot, impulsando soluciones que optimizan procesos empresariales. Me motiva el trabajo en equipo, los desafíos técnicos y la mejora continua.",
      cleanCode: "Clean Code",
      performance: "Performance",
      uiux: "UI/UX",
    },
    // Skills Section
    skills: {
      title: "Mis",
      titleHighlight: "Habilidades",
    },
    // Experience Section
    experience: {
      title: "Experiencia",
      titleHighlight: "Profesional",
      subtitle: "Mi trayectoria profesional en el desarrollo de software",
      // Davisan Security
      davisanTitle: "Full Stack Developer",
      davisanCompany: "Davisan Security LTDA",
      davisanPeriod: "Enero 2023 - Presente",
      davisanLocation: "Colombia",
      davisanDescription:
        "Desarrollo de soluciones web integrales para mejorar la gestión empresarial y optimizar procesos internos de la empresa de seguridad.",
      davisanAchievements: [
        "Creé un portal empresarial interno facilitando procesos y organización de roles",
        "Desarrollé sistema de gestión completo con autenticación y permisos",
        "Implementé chatbot integrado para atención al cliente automatizada",
      ],
      davisanTech: ["React", "Node.js", "MySQL", "cPanel", "Git", "GitHub"],
      // Globant
      globantTitle: "Frontend Developer",
      globantCompany: "Globant",
      globantPeriod: "Enero 2025 - Julio 2025",
      globantLocation: "Colombia",
      globantDescription:
        "Desarrollo frontend para plataforma bancaria de Banco Davivienda, enfocado en crear interfaces robustas y bien documentadas.",
      globantAchievements: [
        "Logré pruebas con coberturas mayores al 95% usando Jest",
        "Desarrollé componentes guiados por los diseños del equipo UX/UI",
        "Creé documentación técnica completa para mantenibilidad del código",
      ],
      globantTech: ["Angular", "Jest", "TypeScript", "Git"],
      // Electroalarmas
      electroTitle: "Full Stack Developer",
      electroCompany: "Electroalarmas S.A.S",
      electroPeriod: "Enero 2023 - Enero 2024",
      electroLocation: "Colombia",
      electroDescription:
        "Desarrollo de presencia web corporativa y sistema de comercio electrónico para empresa de sistemas de seguridad.",
      electroAchievements: [
        "Desarrollé página web completa con toda la información de la empresa",
        "Implementé lógica para funcionamiento de WooCommerce personalizado",
        "Configuré sistema de correos empresariales para comunicación interna y externa",
      ],
      electroTech: ["WooCommerce", "WordPress", "PHP", "MySQL"],
    },
    // Education Section
    education: {
      title: "Mi Formación Académica",
      systemsEngineering: "Ingeniería en Sistemas",
      mobileApps: "Desarrollo de aplicaciones móviles",
      technician: "Técnico en base de datos y sistemas",
      javeriana: "Pontificia Universidad Javeriana",
      uis: "Universidad Industrial de Santander",
      sena: "SENA",
      undergraduate: "Pregrado",
      course: "Curso",
      technical: "Técnico",
      colombia: "Colombia",
    },
    // Projects Section
    projects: {
      title: "Mis",
      titleHighlight: "Proyectos",
      viewDemo: "Ver Demo",
      code: "Código",
    },
    // Contact Section
    contact: {
      title: "¡Trabajemos",
      titleHighlight: "Juntos!",
      description: "¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.",
      sendEmail: "Enviar Email",
      footer: "© 2024 Mi Portafolio. Hecho con ❤️ y mucho café.",
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      title: "Developer",
      subtitle: "Full Stack",
      description: "Creating unique digital experiences with modern technologies",
      viewProjects: "View Projects",
      contact: "Contact",
    },
    // About Section
    about: {
      title: "About",
      titleHighlight: "Me",
      description1:
        "Systems Engineer focused on web development and process automation. I'm passionate about creating applications with intuitive and efficient interfaces, combining creativity and logic.",
      description2:
        "I have worked with technologies like React, Node.js and Spring Boot, driving solutions that optimize business processes. I'm motivated by teamwork, technical challenges and continuous improvement.",
      cleanCode: "Clean Code",
      performance: "Performance",
      uiux: "UI/UX",
    },
    // Skills Section
    skills: {
      title: "My",
      titleHighlight: "Skills",
    },
    // Experience Section
    experience: {
      title: "Professional",
      titleHighlight: "Experience",
      subtitle: "My professional journey in software development",
      // Davisan Security
      davisanTitle: "Full Stack Developer",
      davisanCompany: "Davisan Security LTDA",
      davisanPeriod: "January 2023 - Present",
      davisanLocation: "Colombia",
      davisanDescription:
        "Development of comprehensive web solutions to improve business management and optimize internal processes for the security company.",
      davisanAchievements: [
        "Created an internal business portal facilitating processes and role organization",
        "Developed complete management system with authentication and permissions",
        "Implemented integrated chatbot for automated customer service",
      ],
      davisanTech: ["React", "Node.js", "MySQL", "cPanel", "Git", "GitHub"],
      // Globant
      globantTitle: "Frontend Developer",
      globantCompany: "Globant",
      globantPeriod: "January 2025 - July 2025",
      globantLocation: "Colombia",
      globantDescription:
        "Frontend development for Banco Davivienda banking platform, focused on creating robust and well-documented interfaces.",
      globantAchievements: [
        "Achieved test coverage greater than 95% using Jest",
        "Developed components guided by UX/UI team designs",
        "Created comprehensive technical documentation for code maintainability",
      ],
      globantTech: ["Angular", "Jest", "TypeScript", "Git"],
      // Electroalarmas
      electroTitle: "Full Stack Developer",
      electroCompany: "Electroalarmas S.A.S",
      electroPeriod: "January 2023 - January 2024",
      electroLocation: "Colombia",
      electroDescription: "Development of corporate web presence and e-commerce system for security systems company.",
      electroAchievements: [
        "Developed complete website with all company information",
        "Implemented custom WooCommerce functionality logic",
        "Configured business email system for internal and external communication",
      ],
      electroTech: ["WooCommerce", "WordPress", "PHP", "MySQL"],
    },
    // Education Section
    education: {
      title: "My Academic Background",
      systemsEngineering: "Systems Engineering",
      mobileApps: "Mobile application development",
      technician: "Database and systems technician",
      javeriana: "Pontificia Universidad Javeriana",
      uis: "Universidad Industrial de Santander",
      sena: "SENA",
      undergraduate: "Undergraduate",
      course: "Course",
      technical: "Technical",
      colombia: "Colombia",
    },
    // Projects Section
    projects: {
      title: "My",
      titleHighlight: "Projects",
      viewDemo: "View Demo",
      code: "Code",
    },
    // Contact Section
    contact: {
      title: "Let's Work",
      titleHighlight: "Together!",
      description: "Do you have a project in mind? I'd love to hear your ideas and help you make them a reality.",
      sendEmail: "Send Email",
      footer: "© 2024 My Portfolio. Made with ❤️ and lots of coffee.",
    },
  },
}
