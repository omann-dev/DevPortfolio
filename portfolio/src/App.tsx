import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import { translations, type Language } from "./translations";

export type Theme = "dark" | "light";

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [theme, setTheme] = useState<Theme>("dark");

  const t = translations[language];

  return (
    <div className={`app ${theme}`}>
      <Header
        language={language}
        setLanguage={setLanguage}
        nav={t.nav}
        theme={theme}
        setTheme={setTheme}
      />

      <main>
        <About content={t.about} />

        <section id="projects" className="page-section">
          <div className="section-container">
            <p className="section-label">{t.nav.projects}</p>
            <h2>Projects</h2>
          </div>
        </section>

        <section id="skills" className="page-section">
          <div className="section-container">
            <p className="section-label">{t.nav.skills}</p>
            <h2>Skills</h2>
          </div>
        </section>

        <section id="contact" className="page-section">
          <div className="section-container">
            <p className="section-label">{t.nav.contact}</p>
            <h2>Contact</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;