export type Language = "en" | "de";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    about: {
      label: "About me",
      headline:
        "I build clean applications with a focus on data, dashboards and modern user interfaces.",
      paragraph1:
        "I'm a computer science student and aspiring fullstack developer focused on .NET, TypeScript and modern UI development.",
      paragraph2:
        "I enjoy building clean, practical applications — from APIs and databases to responsive frontends. My current work focuses on production data dashboards using ASP.NET Core, Entity Framework Core, SignalR and Avalonia.",
      highlights: {
        focusTitle: "Focus",
        focusText: "Fullstack Development",
        stackTitle: "Stack",
        stackText: ".NET · React · TypeScript",
        currentTitle: "Currently",
        currentText: "Bachelor Thesis & Portfolio Projects",
      },
    },
  },

  de: {
    nav: {
      about: "Über mich",
      projects: "Projekte",
      skills: "Skills",
      contact: "Kontakt",
    },
    about: {
      label: "Über mich",
      headline:
        "Ich entwickle saubere Anwendungen mit Fokus auf Daten, Dashboards und moderne Benutzeroberflächen.",
      paragraph1:
        "Ich bin Informatikstudent und angehender Fullstack-Entwickler mit Fokus auf .NET, TypeScript und moderne UI-Entwicklung.",
      paragraph2:
        "Ich entwickle gerne praktische Anwendungen — von APIs und Datenbanken bis hin zu responsiven Frontends. Aktuell beschäftige ich mich mit Produktionsdaten-Dashboards auf Basis von ASP.NET Core, Entity Framework Core, SignalR und Avalonia.",
      highlights: {
        focusTitle: "Fokus",
        focusText: "Fullstack-Entwicklung",
        stackTitle: "Stack",
        stackText: ".NET · React · TypeScript",
        currentTitle: "Aktuell",
        currentText: "Bachelorarbeit & Portfolio-Projekte",
      },
    },
  },
} as const;