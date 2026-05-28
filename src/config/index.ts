import type { SiteConfig, SiteContent } from "../types";

const mainNavLinks = [
  { text: "Inicio", href: "#inicio" },
  { text: "Sobre mí", href: "#sobre-mi" },
  { text: "Proyectos", href: "#proyectos" },
  { text: "Comunidad e Impacto", href: "#comunidad" },
  { text: "Contacto", href: "#contacto" },
];

export const SITE_CONFIG: SiteConfig = {
  brand: "Jesús Zuña",
  siteUrl: "https://jesuszuna.com",
  title: "Jesús Zuña | Software, proyectos y comunidad",
  author: "Jesús Zuña",
  description:
    "Sitio personal de Jesús Zuña, estudiante de Ingeniería en Software y desarrollador enfocado en crear soluciones digitales, automatizaciones, proyectos de software e iniciativas de Comunidad e Impacto.",
  ogTitle: "Jesús Zuña | Software, proyectos y comunidad",
  ogDescription:
    "Desarrollador de software y estudiante de Ingeniería en Software. Proyectos, automatizaciones e iniciativas de Comunidad e Impacto.",
  ogImage: "/og-image.png",
  language: "es",
  email: "contacto@jesuszuna.com",
  navLinks: mainNavLinks,
  socialLinks: [
    { text: "GitHub", href: "https://github.com/jesuszunap" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/jesús-zuña-pacheco-694146189/",
    },
  ],
  footer: {
    tagline: "Software, comunidad y proyectos con enfoque humano.",
    navLinks: mainNavLinks,
    contactLinks: [
      { text: "contacto@jesuszuna.com", href: "mailto:contacto@jesuszuna.com" },
      { text: "WhatsApp profesional", href: "https://wa.me/593962997060" },
      { text: "GitHub", href: "https://github.com/jesuszunap" },
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/in/jesús-zuña-pacheco-694146189/",
      },
    ],
    legalLinks: [
      { text: "CV", href: "/cv" },
      { text: "Privacidad", href: "/privacidad" },
      { text: "Aviso legal", href: "/aviso-legal" },
    ],
  },
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    id: "inicio",
    name: "Jesús Zuña",
    specialty:
      "Desarrollador de software y estudiante de Ingeniería en Software",
    summary:
      "Creo soluciones digitales y herramientas de software pensadas para simplificar procesos, resolver problemas reales y conectar la tecnología con necesidades profesionales y comunitarias.",
    actions: [
      { text: "Ver perfil", href: "#sobre-mi" },
      { text: "Contacto", href: "#contacto" },
    ],
    technologies: [
      "Python",
      "Astro",
      "JavaScript",
      "Tailwind CSS",
      "Selenium",
      "GitHub",
    ],
  },
  about: {
    id: "sobre-mi",
    title: "Sobre mí",
    description:
      "Soy Jesús Zuña Pacheco, estudiante de Ingeniería en Software en la Universidad de Guayaquil. Desde Guayaquil, Ecuador, desarrollo proyectos digitales, automatizaciones y herramientas pensadas para resolver problemas reales de forma clara, útil y mantenible.\n\nMás allá del código, me interesa construir cosas que tengan sentido para otras personas: soluciones que simplifiquen procesos, proyectos que puedan crecer con orden e iniciativas que conecten información, comunidad y tecnología.",
    facts: [
      { label: "Ubicación", value: "Guayaquil, Ecuador" },
      {
        label: "Formación",
        value:
          "Estudiante de Ingeniería en Software en la Universidad de Guayaquil",
      },
      { label: "Edad", value: "23 años" },
      {
        label: "Intereses",
        value:
          "Software, Automatización, Tecnología útil, Comunidad, Aprendizaje",
      },
    ],
    secondaryLink: { text: "Ver CV", href: "/cv" },
  },
  projects: {
    id: "proyectos",
    title: "Proyectos de software",
    subtitle:
      "Proyectos creados para transformar procesos repetitivos o complejos en herramientas más claras, útiles y fáciles de gestionar.",
    items: [
      {
        name: "QX - Extractor Quipux",
        badge: "Proyecto destacado",
        status: "En desarrollo / versión funcional",
        summary:
          "QX - Extractor Quipux es una aplicación de escritorio diseñada para automatizar la extracción, organización y exportación de información documental desde Quipux, reduciendo tareas repetitivas y facilitando el trabajo con documentos institucionales.",
        cardSummary:
          "Automatiza la extracción y organización de información documental desde Quipux para reducir tareas repetitivas y trabajar con datos más claros y trazables.",
        problem:
          "Ayuda a reducir el tiempo dedicado a tareas repetitivas de revisión, descarga y organización documental, permitiendo trabajar con la información de forma más ordenada, trazable y eficiente.",
        technologies: [
          "Python",
          "Selenium",
          "CustomTkinter",
          "Excel",
          "Automatización documental",
        ],
        action: {
          text: "Ver proyecto",
          href: "/proyectos/qx-extractor-quipux",
        },
        github: null,
        demo: null,
      },
      {
        name: "Cotizador WH",
        status: "En planificación / MVP pendiente",
        summary:
          "Cotizador WH es una herramienta web pensada para calcular cotizaciones de forma rápida, clara y accesible desde el celular, reemplazando un flujo previo basado en AppSheet por una experiencia más ligera, personalizada y fácil de mantener.",
        cardSummary:
          "Herramienta web pensada para calcular cotizaciones desde el celular de forma rápida, clara y fácil de mantener.",
        problem:
          "Busca simplificar el cálculo de comisiones y montos finales en un flujo cotidiano de cotización, mostrando solo la información necesaria y facilitando acciones como copiar el resultado, revisar historial o compartir la cotización.",
        technologies: [
          "Web",
          "PWA",
          "JavaScript",
          "Diseño responsive",
          "Automatización de cálculos",
        ],
        action: { text: "Ver proyecto", href: "/proyectos/cotizador-wh" },
        github: null,
        demo: null,
      },
      {
        name: "Próximamente",
        status: "En preparación",
        summary:
          "Nuevas herramientas y proyectos de software irán apareciendo aquí conforme avancen y estén listos para compartirse.",
        cardSummary:
          "Nuevas herramientas y proyectos de software irán apareciendo aquí conforme avancen y estén listos para compartirse.",
        problem: null,
        technologies: [],
        action: null,
        github: null,
        demo: null,
      },
    ],
  },
  community: {
    id: "comunidad",
    title: "Comunidad e Impacto",
    subtitle:
      "Iniciativas que buscan conectar personas, compartir información útil y apoyar causas con impacto real.",
    items: [
      {
        name: "Donadores de sangre en Guayaquil",
        summary:
          "Donadores de sangre en Guayaquil es una iniciativa comunitaria que ayuda a conectar solicitudes de donación con personas dispuestas a colaborar, facilitando la difusión de información de forma organizada y responsable.",
        cardSummary:
          "Iniciativa comunitaria que ayuda a difundir solicitudes de donación de sangre en Guayaquil de forma organizada y responsable.",
        purpose:
          "Contribuir a que las solicitudes de donación de sangre puedan difundirse mejor, llegando a personas que estén en posibilidad de ayudar y manteniendo la información lo más clara y ordenada posible.",
        role:
          "Apoyo en la administración y organización del espacio comunitario, procurando que las solicitudes se compartan de manera clara, responsable y útil para quienes necesitan ayuda y para quienes desean colaborar.",
        impact:
          "Actualmente, el grupo reúne a cerca de 500 personas interesadas en apoyar o difundir solicitudes de donación de sangre en Guayaquil.",
        shortImpact:
          "Cerca de 500 personas interesadas en apoyar o difundir solicitudes de donación.",
        action: {
          text: "Ver iniciativa",
          href: "/comunidad/donadores-sangre-guayaquil",
        },
      },
      {
        name: "Acceso a la universidad pública en Ecuador",
        status: "2020 - 2024",
        summary:
          "Acceso a la universidad pública en Ecuador fue una iniciativa comunitaria activa entre 2020 y 2024, orientada a compartir información, resolver dudas y acompañar a personas interesadas en ingresar a la educación superior pública.",
        cardSummary:
          "Iniciativa comunitaria activa entre 2020 y 2024 para compartir información útil sobre el acceso a la educación superior pública en Ecuador.",
        purpose:
          "Durante su etapa activa, buscó facilitar el acceso a información clara sobre procesos de admisión, requisitos, oportunidades y dudas frecuentes relacionadas con el ingreso a la universidad pública en Ecuador.",
        role:
          "Administración y organización del espacio comunitario, procurando que la información compartida fuera clara, útil y accesible para aspirantes y personas interesadas en la educación superior pública.",
        impact:
          "En su etapa de mayor alcance, la comunidad llegó a reunir alrededor de 40.000 integrantes, consolidándose como uno de los espacios ecuatorianos más grandes en Telegram relacionados con orientación y acceso a la educación superior pública.",
        shortImpact:
          "Alrededor de 40.000 integrantes en su etapa de mayor alcance.",
        action: {
          text: "Ver iniciativa",
          href: "/comunidad/acceso-universidad-publica-ecuador",
        },
      },
      {
        name: "Próximamente",
        status: "En preparación",
        summary:
          "Nuevas iniciativas comunitarias podrán sumarse aquí conforme avancen y tengan información suficiente para compartirse.",
        cardSummary:
          "Nuevas iniciativas comunitarias podrán sumarse aquí conforme avancen y tengan información suficiente para compartirse.",
        purpose: null,
        role: null,
        impact: null,
        action: null,
      },
    ],
  },
  contact: {
    id: "contacto",
    title: "Contacto",
    text: "Si quieres conversar sobre proyectos, colaboraciones, oportunidades profesionales o iniciativas de comunidad, puedes escribirme por aquí. Leo los mensajes con atención y respondo cuando me sea posible.",
    form: {
      name: "Tu nombre",
      email: "Tu correo electrónico",
      subject: "Motivo del mensaje",
      message: "Escribe tu mensaje",
      button: "Enviar mensaje",
    },
    channels: [
      {
        text: "Correo",
        value: "contacto@jesuszuna.com",
        href: "mailto:contacto@jesuszuna.com",
      },
      {
        text: "WhatsApp",
        value: "Escribirme por WhatsApp",
        href: "https://wa.me/593962997060",
      },
      {
        text: "GitHub",
        value: "github.com/jesuszunap",
        href: "https://github.com/jesuszunap",
      },
      {
        text: "LinkedIn",
        value: "Perfil profesional",
        href: "https://www.linkedin.com/in/jesús-zuña-pacheco-694146189/",
      },
    ],
  },
};
