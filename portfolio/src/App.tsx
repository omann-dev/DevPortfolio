import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ThemesPage from "./components/ThemesPage";

import { translations, type Language } from "./translations";

export type ThemeMode = "dark" | "light";
export type ColorTheme = "standard" | "ocean" | "forest" | "rose";

function isTheme(value: string | null): value is ThemeMode {
  return value === "dark" || value === "light";
}

function isColorTheme(value: string | null): value is ColorTheme {
  return (
    value === "standard" ||
    value === "ocean" ||
    value === "forest" ||
    value === "rose"
  );
}

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem("theme");
    return isTheme(savedTheme) ? savedTheme : "dark";
  });

  const [colorTheme, setColorTheme] = useState<ColorTheme>(() => {
    const savedColorTheme = localStorage.getItem("colorTheme");
    return isColorTheme(savedColorTheme) ? savedColorTheme : "standard";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("colorTheme", colorTheme);
  }, [colorTheme]);

  const t = translations[language];

  return (
    <div className={`app ${theme} theme-${colorTheme}`}>
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
            <>
              <main>
                <About content={t.about} />
                <Projects content={t.projects} />
                <Skills content={t.skills} />
                <Contact content={t.contact} />
              </main>

              <Footer content={t.footer} />
            </>
          }
        />

        <Route
          path="/themes"
          element={
            <ThemesPage
              currentTheme={colorTheme}
              currentMode={theme}
              setColorTheme={setColorTheme}
              setThemeMode={setTheme}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;