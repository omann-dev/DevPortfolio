import "./ThemesPage.css";

import type { ColorTheme, ThemeMode } from "../App";


type ThemesPageProps = {
  currentTheme: ColorTheme;
  currentMode: ThemeMode;
  setColorTheme: (theme: ColorTheme) => void;
  setThemeMode: (mode: ThemeMode) => void;
};

const themes: { id: ColorTheme; name: string; description: string }[] = [
  {
    id: "standard",
    name: "Standard",
    description: "Clean blue developer theme",
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Cyan and teal colors",
  },
  {
    id: "forest",
    name: "Forest",
    description: "Green terminal vibe",
  },
  {
    id: "rose",
    name: "Rose",
    description: "Warm pink accent colors",
  },
];

function ThemesPage({
  currentTheme,
  currentMode,
  setColorTheme,
  setThemeMode,
}: ThemesPageProps) {
  const selectTheme = (theme: ColorTheme, mode: ThemeMode) => {
    setColorTheme(theme);
    setThemeMode(mode);
  };

  return (
    <main className="page-section">
      <div className="section-container">
        <h2>Themes</h2>

        <div className="themes-grid">
          {themes.map((theme) => (
            <article
              key={theme.id}
              className={`theme-card ${
                currentTheme === theme.id ? "active" : ""
              }`}
            >
              <div>
                <h3>{theme.name}</h3>
                <p>{theme.description}</p>
              </div>

              <div className="theme-card-actions">
                <button
                  type="button"
                  className={
                    currentTheme === theme.id && currentMode === "dark"
                      ? "active"
                      : ""
                  }
                  onClick={() => selectTheme(theme.id, "dark")}
                >
                  Dark
                </button>

                <button
                  type="button"
                  className={
                    currentTheme === theme.id && currentMode === "light"
                      ? "active"
                      : ""
                  }
                  onClick={() => selectTheme(theme.id, "light")}
                >
                  Light
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ThemesPage;