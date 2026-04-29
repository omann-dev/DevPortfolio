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

    skills: {
      label: "Skills",
      title: "Technologies & Tools",
      intro: "A selection of technologies I have already worked with in practical projects.",
      selectedLabel: "Selected Skill",
      descriptions: {
        typescript:
          "I use TypeScript in this portfolio and in frontend projects to write cleaner, safer and more maintainable code.",
        react:
          "I use React to build modern, component-based user interfaces, including this developer portfolio.",
        javascript:
          "JavaScript is the foundation of my frontend development and helps me build dynamic and interactive web features.",
        html:
          "I use HTML to create semantic, accessible and well-structured web pages.",
        css:
          "I use CSS to create responsive, modern and visually clean user interfaces.",
        csharp:
          "I use C# in my bachelor thesis and .NET projects for backend logic, services and desktop applications.",
        dotnet:
          "I use .NET and ASP.NET Core for REST APIs, Entity Framework Core, backend services and clean software architecture.",
        postgresql:
          "I have used PostgreSQL in fullstack projects to store and manage relational data.",
        git:
          "I use Git regularly for version control, feature branches and structured collaboration.",
        linux:
          "I use Linux as a private and development environment, especially for terminal workflows and system configuration.",
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

    skills: {
      label: "Skills",
      title: "Technologien & Tools",
      intro: "Eine Auswahl an Technologien, mit denen ich bereits praktisch gearbeitet habe.",
      selectedLabel: "Ausgewählter Skill",
      descriptions: {
        typescript:
          "TypeScript nutze ich in diesem Portfolio und in Frontend-Projekten, um saubereren, sichereren und besser wartbaren Code zu schreiben.",
        react:
          "React nutze ich für moderne komponentenbasierte Benutzeroberflächen, unter anderem für dieses Entwicklerportfolio.",
        javascript:
          "JavaScript ist die Grundlage meiner Frontend-Entwicklung und hilft mir bei dynamischen und interaktiven Webfunktionen.",
        html:
          "HTML nutze ich, um semantische, zugängliche und sauber strukturierte Webseiten aufzubauen.",
        css:
          "CSS nutze ich, um responsive, moderne und optisch saubere Benutzeroberflächen umzusetzen.",
        csharp:
          "C# nutze ich in meiner Bachelorarbeit und in .NET-Projekten für Backend-Logik, Services und Desktop-Anwendungen.",
        dotnet:
          ".NET und ASP.NET Core nutze ich für REST APIs, Entity Framework Core, Backend-Services und saubere Softwarearchitektur.",
        postgresql:
          "PostgreSQL habe ich in Fullstack-Projekten genutzt, um relationale Daten strukturiert zu speichern und zu verwalten.",
        git:
          "Git nutze ich regelmäßig für Versionsverwaltung, Feature-Branches und strukturierte Zusammenarbeit.",
        linux:
          "Linux nutze ich privat und als Entwicklungsumgebung, besonders für Terminal-Workflows und Systemkonfiguration.",
      },
    },
  },
} as const;