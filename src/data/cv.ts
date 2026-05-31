export type CvLanguage = "es" | "en";
export type CvRenderMode = "web" | "pdf";

export type LocalizedText = Record<CvLanguage, string>;

export type LocalizedModeText = Record<
  CvLanguage,
  {
    web: string;
    pdf: string;
  }
>;

export type LocalizedModeList = Record<
  CvLanguage,
  {
    web: string[];
    pdf: string[];
  }
>;

export interface CvContact {
  email: string;
  website: {
    label: LocalizedText;
    href: string;
    visible: string;
  };
  whatsapp: {
    label: LocalizedText;
    href: string;
    visible: string;
  };
  linkedin: {
    label: string;
    href: string;
    visible: string;
  };
  github: {
    label: string;
    href: string;
    visible: string;
  };
}

export interface CvExperienceItem {
  organization: string;
  role: LocalizedText;
  location: LocalizedText;
  period: LocalizedText;
  description: LocalizedModeText;
  bullets: LocalizedModeList;
}

export interface CvProjectItem {
  name: LocalizedText;
  href: string;
  description: LocalizedModeText;
  highlights: Record<CvLanguage, string[]>;
  technologies: string[];
}

export interface CvSkillGroup {
  category: LocalizedText;
  items: Record<CvLanguage, string[]>;
}

export interface CvEducationItem {
  institution: string;
  degree: LocalizedText;
  period: LocalizedText;
  location: LocalizedText;
}

export interface CvLanguageItem {
  name: LocalizedText;
  level: LocalizedText;
}

export interface CvData {
  person: {
    name: string;
    location: LocalizedText;
    status: LocalizedText;
    title: LocalizedModeText;
    summary: LocalizedModeText;
    profile: LocalizedText;
    contact: CvContact;
  };
  ui: {
    languageToggle: Record<
      CvLanguage,
      {
        label: string;
        shortLabel: string;
      }
    >;
    actions: Record<
      CvLanguage,
      {
        downloadPdf: string;
        printVersion: string;
        backToCv: string;
        printOrSave: string;
      }
    >;
    sections: Record<
      CvLanguage,
      {
        profile: string;
        experience: string;
        projects: string;
        skills: string;
        education: string;
        languages: string;
        contact: string;
      }
    >;
  };
  experience: CvExperienceItem[];
  projects: CvProjectItem[];
  skills: CvSkillGroup[];
  education: CvEducationItem[];
  languages: CvLanguageItem[];
  pdf: {
    routes: Record<CvLanguage, string>;
    filenames: Record<CvLanguage, string>;
  };
}

export const CV_DATA: CvData = {
  person: {
    name: "Jesús Zuña Pacheco",
    location: {
      es: "Guayaquil, Ecuador",
      en: "Guayaquil, Ecuador",
    },
    status: {
      es: "Abierto a oportunidades",
      en: "Open to opportunities",
    },
    title: {
      es: {
        web: "Desarrollador de software y estudiante de Ingeniería de Software",
        pdf: "Desarrollador de software y estudiante de Ingeniería de Software",
      },
      en: {
        web: "Software Developer & Software Engineering Student",
        pdf: "Software Developer & Software Engineering Student",
      },
    },
    summary: {
      es: {
        web: "Desarrollo soluciones digitales, automatizaciones y herramientas de software orientadas a resolver problemas reales con claridad, orden y sentido práctico.",
        pdf: "Estudiante de Ingeniería de Software con experiencia en desarrollo de herramientas de escritorio, automatización de procesos y soporte TIC. He construido soluciones funcionales para organizar información, reducir tareas repetitivas y apoyar procesos documentales en entornos institucionales.",
      },
      en: {
        web: "I build digital solutions, automations and software tools focused on solving real problems with clarity, structure and practical value.",
        pdf: "Software Engineering student with experience in desktop application development, process automation, and IT support. I have built functional tools to organize information, reduce repetitive tasks, and support document-related processes in institutional environments.",
      },
    },
    profile: {
      es: "Soy estudiante de Ingeniería de Software en la Universidad de Guayaquil, con experiencia en desarrollo de herramientas de escritorio, automatización de procesos y soporte TIC. He construido soluciones funcionales para organizar información, reducir tareas repetitivas y apoyar procesos documentales en entornos institucionales. Me interesa desarrollar software claro, mantenible y orientado a resolver necesidades reales, combinando criterio técnico, orden y aprendizaje constante.",
      en: "I am a Software Engineering student at the University of Guayaquil, with experience in desktop application development, process automation, and IT support. I have built functional tools to organize information, reduce repetitive tasks, and support document-related processes in institutional environments. I am interested in developing clear, maintainable software focused on real needs, combining technical judgment, organization, and continuous learning.",
    },
    contact: {
      email: "contacto@jesuszuna.com",
      website: {
        label: {
          es: "Sitio web",
          en: "Website",
        },
        href: "https://jesuszuna.com",
        visible: "jesuszuna.com",
      },
      whatsapp: {
        label: {
          es: "WhatsApp profesional",
          en: "Professional WhatsApp",
        },
        href: "https://wa.me/593962997060",
        visible: "+593 96 299 7060",
      },
      linkedin: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jesús-zuña/",
        visible: "linkedin.com/in/jesús-zuña",
      },
      github: {
        label: "GitHub",
        href: "https://github.com/jesuszunap",
        visible: "github.com/jesuszunap",
      },
    },
  },

  ui: {
    languageToggle: {
      es: {
        label: "Español",
        shortLabel: "ES",
      },
      en: {
        label: "English",
        shortLabel: "EN",
      },
    },
    actions: {
      es: {
        downloadPdf: "Descargar PDF",
        printVersion: "Ver versión imprimible",
        backToCv: "Volver al CV",
        printOrSave: "Imprimir o guardar como PDF",
      },
      en: {
        downloadPdf: "Download PDF",
        printVersion: "View printable version",
        backToCv: "Back to CV",
        printOrSave: "Print or save as PDF",
      },
    },
    sections: {
      es: {
        profile: "Perfil",
        experience: "Experiencia",
        projects: "Proyectos destacados",
        skills: "Habilidades",
        education: "Educación",
        languages: "Idiomas",
        contact: "Contacto",
      },
      en: {
        profile: "Profile",
        experience: "Experience",
        projects: "Featured Projects",
        skills: "Skills",
        education: "Education",
        languages: "Languages",
        contact: "Contact",
      },
    },
  },

  experience: [
    {
      organization: "Universidad de Guayaquil",
      role: {
        es: "Programador de software y apoyo en procesos documentales",
        en: "Software Developer and Document Process Support",
      },
      location: {
        es: "Guayaquil, Ecuador",
        en: "Guayaquil, Ecuador",
      },
      period: {
        es: "Septiembre 2025 – mayo 2026",
        en: "September 2025 – May 2026",
      },
      description: {
        es: {
          web: "Desarrollo de software, automatización y apoyo en procesos documentales, con enfoque en organizar información y reducir tareas repetitivas.",
          pdf: "Desarrollo de software, automatización y apoyo en procesos documentales.",
        },
        en: {
          web: "Software development, automation and document process support, focused on organizing information and reducing repetitive tasks.",
          pdf: "Software development, automation and document process support.",
        },
      },
      bullets: {
        es: {
          web: [
            "Desarrollo de herramientas para apoyar procesos documentales relacionados con Quipux y correo institucional.",
            "Automatización de tareas de revisión y organización de documentos, correos, anexos y reportes estructurados.",
            "Creación de una herramienta interna para exportar correos de Outlook clásico a carpetas organizadas, incluyendo PDF del correo, anexos y resumen estructurado.",
            "Uso de Python, Selenium, Outlook/COM, procesamiento de archivos y documentación técnica para construir soluciones mantenibles.",
          ],
          pdf: [
            "Desarrollé herramientas para procesos documentales con Quipux y correo institucional.",
            "Automaticé la organización de documentos, correos, anexos y reportes estructurados.",
            "Construí una herramienta interna para exportar correos de Outlook clásico con PDF, anexos y resumen estructurado.",
            "Apliqué Python, Selenium, Outlook/COM, procesamiento de archivos y documentación técnica.",
          ],
        },
        en: {
          web: [
            "Developed tools to support document-related processes involving Quipux and institutional email.",
            "Automated review and organization tasks for documents, emails, attachments, and structured reports.",
            "Built an internal tool to export classic Outlook emails into organized folders, including email PDF, attachments, and a structured summary.",
            "Used Python, Selenium, Outlook/COM, file processing, and technical documentation to build maintainable solutions.",
          ],
          pdf: [
            "Developed tools for document processes involving Quipux and institutional email.",
            "Automated organization of documents, emails, attachments, and structured reports.",
            "Built an internal Outlook export tool with email PDF, attachments, and structured summary.",
            "Applied Python, Selenium, Outlook/COM, file processing, and technical documentation.",
          ],
        },
      },
    },
    {
      organization: "AKROS",
      role: {
        es: "Técnico de TIC",
        en: "IT Technician",
      },
      location: {
        es: "Guayaquil, Ecuador",
        en: "Guayaquil, Ecuador",
      },
      period: {
        es: "Octubre 2024 – septiembre 2025",
        en: "October 2024 – September 2025",
      },
      description: {
        es: {
          web: "Soporte técnico y apoyo en tareas relacionadas con tecnologías de la información, atención a usuarios y seguimiento de recursos tecnológicos.",
          pdf: "Soporte técnico, atención a usuarios y seguimiento de recursos tecnológicos.",
        },
        en: {
          web: "Technical support and assistance in information technology tasks, user support and follow-up of technology resources.",
          pdf: "Technical support, user assistance and follow-up of technology resources.",
        },
      },
      bullets: {
        es: {
          web: [
            "Atención y soporte técnico a usuarios.",
            "Apoyo en revisión, configuración y seguimiento de equipos y recursos tecnológicos.",
            "Registro y comunicación de incidencias técnicas para su atención.",
          ],
          pdf: [
            "Brindé soporte técnico a usuarios.",
            "Apoyé la revisión, configuración y seguimiento de equipos y recursos tecnológicos.",
            "Registré y comuniqué incidencias técnicas para su atención.",
          ],
        },
        en: {
          web: [
            "Provided technical support to users.",
            "Assisted with review, configuration and follow-up of devices and technology resources.",
            "Recorded and communicated technical incidents for follow-up.",
          ],
          pdf: [
            "Provided technical support to users.",
            "Assisted with device and technology resource review, configuration and follow-up.",
            "Recorded and communicated technical incidents for follow-up.",
          ],
        },
      },
    },
  ],

  projects: [
    {
      name: {
        es: "QX - Extractor Quipux",
        en: "QX - Extractor Quipux",
      },
      href: "/proyectos/qx-extractor-quipux",
      description: {
        es: {
          web: "Aplicación de escritorio para Windows que ayuda a extraer, organizar y exportar información documental desde Quipux, reduciendo tareas repetitivas y facilitando la revisión en reportes estructurados.",
          pdf: "Aplicación de escritorio para extraer, organizar y exportar información documental desde Quipux, con generación de reportes estructurados en Excel.",
        },
        en: {
          web: "Windows desktop application that helps extract, organize and export document information from Quipux, reducing repetitive tasks and supporting review through structured reports.",
          pdf: "Desktop application for extracting, organizing and exporting Quipux document information, with structured Excel report generation.",
        },
      },
      highlights: {
        es: [
          "Automatización documental con Python y Selenium.",
          "Generación/exportación de reportes estructurados.",
          "Inteligencia Documental local opcional para sugerir relaciones revisables.",
        ],
        en: [
          "Document automation with Python and Selenium.",
          "Structured report generation and export.",
          "Optional local Document Intelligence for reviewable relationship suggestions.",
        ],
      },
      technologies: ["Python", "Selenium", "CustomTkinter", "PyInstaller"],
    },
    {
      name: {
        es: "Sitio web personal",
        en: "Personal Website",
      },
      href: "https://jesuszuna.com",
      description: {
        es: {
          web: "Proyecto personal técnico desarrollado para presentar perfil profesional, proyectos, blog, páginas internas y canales de contacto en una experiencia responsive, accesible y optimizada para SEO.",
          pdf: "Sitio personal desarrollado con Astro, Tailwind CSS y JavaScript, con diseño responsive, SEO, accesibilidad, páginas internas, blog, proyectos y despliegue web.",
        },
        en: {
          web: "Technical personal project built to present professional profile, projects, blog, internal pages and contact channels through a responsive, accessible and SEO-oriented experience.",
          pdf: "Personal website built with Astro, Tailwind CSS and JavaScript, including responsive design, SEO, accessibility, internal pages, blog, projects and web deployment.",
        },
      },
      highlights: {
        es: [
          "Arquitectura estática con Astro.",
          "Diseño responsive con modo claro/oscuro.",
          "Páginas internas para proyectos, blog y contenido profesional.",
        ],
        en: [
          "Static architecture with Astro.",
          "Responsive design with light/dark mode.",
          "Internal pages for projects, blog and professional content.",
        ],
      },
      technologies: ["Astro", "Tailwind CSS", "JavaScript", "Vercel"],
    },
    {
      name: {
        es: "Cotizador WH",
        en: "Cotizador WH",
      },
      href: "/proyectos/cotizador-wh",
      description: {
        es: {
          web: "Webapp/PWA ligera para calcular cotizaciones desde el celular, copiar resultados, compartir por WhatsApp y mantener historial local.",
          pdf: "PWA ligera para calcular cotizaciones, comisiones y montos finales desde el celular, con historial local e integración con WhatsApp.",
        },
        en: {
          web: "Lightweight webapp/PWA for calculating quotes from mobile, copying results, sharing through WhatsApp and keeping local history.",
          pdf: "Lightweight PWA for calculating quotes, commissions and final amounts from mobile, with local history and WhatsApp integration.",
        },
      },
      highlights: {
        es: [
          "Cálculo local en el navegador.",
          "Historial con almacenamiento local.",
          "Enlaces con monto prellenado para WhatsApp.",
        ],
        en: [
          "Local calculation in the browser.",
          "History with local storage.",
          "Prefilled amount links for WhatsApp.",
        ],
      },
      technologies: ["React", "Vite", "JavaScript", "PWA"],
    },
  ],

  skills: [
    {
      category: {
        es: "Desarrollo de software",
        en: "Software Development",
      },
      items: {
        es: ["Python", "JavaScript", "React", "CustomTkinter"],
        en: ["Python", "JavaScript", "React", "CustomTkinter"],
      },
    },
    {
      category: {
        es: "Automatización y scraping",
        en: "Automation & Scraping",
      },
      items: {
        es: [
          "Selenium",
          "Automatización de escritorio",
          "Procesamiento de archivos",
          "Extracción y organización de información",
        ],
        en: [
          "Selenium",
          "Desktop automation",
          "File processing",
          "Information extraction and organization",
        ],
      },
    },
    {
      category: {
        es: "Web / frontend",
        en: "Web / Frontend",
      },
      items: {
        es: [
          "Astro",
          "Tailwind CSS",
          "Vite",
          "PWA",
          "Responsive design",
          "Accesibilidad web",
        ],
        en: [
          "Astro",
          "Tailwind CSS",
          "Vite",
          "PWA",
          "Responsive design",
          "Web accessibility",
        ],
      },
    },
    {
      category: {
        es: "Herramientas y despliegue",
        en: "Tools & Deployment",
      },
      items: {
        es: [
          "Git",
          "GitHub",
          "GitHub Pages",
          "Vercel",
          "PyInstaller",
          "Inno Setup",
        ],
        en: [
          "Git",
          "GitHub",
          "GitHub Pages",
          "Vercel",
          "PyInstaller",
          "Inno Setup",
        ],
      },
    },
    {
      category: {
        es: "Soporte TIC",
        en: "IT Support",
      },
      items: {
        es: [
          "Soporte a usuarios",
          "Hardware",
          "Software",
          "Impresoras",
          "Tickets",
          "Mantenimiento técnico",
        ],
        en: [
          "User support",
          "Hardware",
          "Software",
          "Printers",
          "Tickets",
          "Technical maintenance",
        ],
      },
    },
    {
      category: {
        es: "Procesos y documentación",
        en: "Processes & Documentation",
      },
      items: {
        es: [
          "Organización documental",
          "Generación de reportes estructurados",
          "Documentación técnica",
          "Mejora de procesos",
        ],
        en: [
          "Document organization",
          "Structured report generation",
          "Technical documentation",
          "Process improvement",
        ],
      },
    },
  ],

  education: [
    {
      institution: "Universidad de Guayaquil",
      degree: {
        es: "Ingeniería de Software",
        en: "Software Engineering",
      },
      period: {
        es: "2021 – presente",
        en: "2021 – Present",
      },
      location: {
        es: "Guayaquil, Ecuador",
        en: "Guayaquil, Ecuador",
      },
    },
  ],

  languages: [
    {
      name: {
        es: "Español",
        en: "Spanish",
      },
      level: {
        es: "Nativo",
        en: "Native",
      },
    },
    {
      name: {
        es: "Inglés",
        en: "English",
      },
      level: {
        es: "Básico",
        en: "Basic",
      },
    },
  ],

  pdf: {
    routes: {
      es: "/cv/print/es",
      en: "/cv/print/en",
    },
    filenames: {
      es: "CV-Jesus-Zuna-Pacheco-ES.pdf",
      en: "CV-Jesus-Zuna-Pacheco-EN.pdf",
    },
  },
} as const;
