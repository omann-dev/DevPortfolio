import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import { translations, type Language } from "./translations";

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const t = translations[language];

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
        nav={t.nav}
      />

      <main>
        <About content={t.about} />

        <section id="projects">
          <h2>{t.nav.projects}</h2>
        </section>

        <section id="skills">
          <h2>{t.nav.skills}</h2>
        </section>

        <section id="contact">
          <h2>{t.nav.contact}</h2>
        </section>
      </main>
    </>
  );
}

export default App;