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
      headline: "Building practical software with clean interfaces and meaningful data.",
      paragraph1:
        "I'm a computer science student and aspiring fullstack developer focused on .NET, TypeScript and modern UI development.",
      paragraph2:
        "I enjoy building clean, practical applications",
      highlights: {
        focusTitle: "Focus",
        focusText: "Fullstack Development",
        stackTitle: "Stack",
        stackText: ".NET · React · TypeScript",
        currentTitle: "Currently",
        currentText: "Bachelor Thesis & Portfolio Projects",
      },
    },

    projects: {
      label: "Projects",
      title: "Selected Projects",
      intro:
        "A selection of projects where I worked with modern frontend technologies, backend development and practical software architecture.",
      sourceCode: "Source Code",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Developer Portfolio",
          category: "Frontend",
          description:
            "A personal portfolio built with React and TypeScript, including theme switching, multilingual content and reusable components.",
          tags: ["React", "TypeScript", "CSS", "Responsive UI"],
          highlights: [
            "Dark and light theme support",
            "German and English translations",
            "Reusable component structure",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/omann-dev",
            },
          ],
        },
        {
          title: "LearnDartsMath",
          category: "Fullstack",
          description:
            "A darts training application focused on x01 score calculation, game flow and saving training sessions.",
          tags: ["Vue", "TypeScript", "ASP.NET Core", "PostgreSQL"],
          highlights: [
            "Interactive score selection",
            "JWT-based authentication concept",
            "Backend API for training sessions",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/OliverIsBad/LearnDartsMath",
            },
          ],
        },
      ],
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

    contact: {
      label: "Contact",
      title: "Let’s connect.",
      text: "You can find my work on GitHub or connect with me on LinkedIn.",
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/omann-dev",
        },
        linkedin: {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/oliver-mann-12b465405/",
        },
      },
    },

    footer: {
      text: "Developer portfolio focused on clean UI, modern web technologies and practical software projects.",
      madeWith: "Built with React and TypeScript.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "Email",
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
      headline: "Ich entwickle praxisnahe Software mit klaren Oberflächen und sinnvollen Daten.",
      paragraph1:
        "Ich bin Informatikstudent und angehender Fullstack-Entwickler mit Fokus auf .NET, TypeScript und moderne UI-Entwicklung.",
      paragraph2:
        "Ich entwickle gerne praktische Anwendungen",
      highlights: {
        focusTitle: "Fokus",
        focusText: "Fullstack-Entwicklung",
        stackTitle: "Stack",
        stackText: ".NET · React · TypeScript",
        currentTitle: "Aktuell",
        currentText: "Bachelorarbeit & Portfolio-Projekte",
      },
    },

    projects: {
      label: "Projekte",
      title: "Ausgewählte Projekte",
      intro:
        "Eine Auswahl an Projekten, in denen ich mit modernen Frontend-Technologien, Backend-Entwicklung und praxisnaher Softwarearchitektur gearbeitet habe.",
      sourceCode: "Quellcode",
      liveDemo: "Live Demo",
      items: [
        {
          title: "Developer Portfolio",
          category: "Frontend",
          description:
            "Ein persönliches Portfolio mit React und TypeScript, inklusive Theme-Switch, mehrsprachigen Inhalten und wiederverwendbaren Komponenten.",
          tags: ["React", "TypeScript", "CSS", "Responsive UI"],
          highlights: [
            "Dark- und Light-Theme",
            "Deutsche und englische Übersetzungen",
            "Wiederverwendbare Komponentenstruktur",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/omann-dev",
            },
          ],
        },
        {
          title: "LearnDartsMath",
          category: "Fullstack",
          description:
            "Eine Darts-Trainingsanwendung mit Fokus auf x01-Score-Berechnung, Spiellogik und Speichern von Trainingseinheiten.",
          tags: ["Vue", "TypeScript", "ASP.NET Core", "PostgreSQL"],
          highlights: [
            "Interaktive Score-Auswahl",
            "JWT-basiertes Authentifizierungskonzept",
            "Backend-API für Trainingseinheiten",
          ],
          links: [
            {
              label: "GitHub",
              href: "https://github.com/OliverIsBad/LearnDartsMath",
            },
          ],
        },
      ],
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

    contact: {
      label: "Kontakt",
      title: "Lass uns vernetzen.",
      text: "Meine Projekte findest du auf GitHub. Auf LinkedIn kannst du dich gerne mit mir vernetzen.",
      links: {
        github: {
          label: "GitHub",
          href: "https://github.com/omann-dev",
        },
        linkedin: {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/oliver-mann-12b465405/",
        },
      },
    },

    footer: {
      text: "Entwicklerportfolio mit Fokus auf saubere Benutzeroberflächen, moderne Webtechnologien und praxisnahe Softwareprojekte.",
      madeWith: "Erstellt mit React und TypeScript.",
      links: {
        github: "GitHub",
        linkedin: "LinkedIn",
        email: "E-Mail",
      },
    },
  },
} as const;