import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ThemesPage from "./components/ThemesPage";

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
      <Routes>
        <Route
          path="/"
          element={
            <main>

                <main>
                  <About content={t.about} />

                  <Projects content={t.projects} />

                  <Skills content={t.skills} />

                  <Contact content={t.contact} />

                </main>
                <Footer content={t.footer} />
            </main>
          }
        />

        <Route path="/themes" element={<ThemesPage />} />
      </Routes>
    </div>
  );
}

export default App;