type Theme = "dark" | "light";

type ThemeSwitchProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function ThemeSwitch({ theme, setTheme }: ThemeSwitchProps) {
  const isDark = theme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      className="theme-switch"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      type="button"
    >
      <span className="theme-switch-thumb">{isDark ? "🌙" : "☀️"}</span>
    </button>
  );
}

export default ThemeSwitch;