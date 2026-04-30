import type { Theme } from "../App";
import type { Language } from "../translations";
import ThemeSwitch from "./ThemeSwitch";
import ProfileHoverCard from "./ProfileHoverCard";

type HeaderProps = {
  language: Language;
  setLanguage: (language: Language) => void;
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

function Header({
  language,
  setLanguage,
  nav,
  theme,
  setTheme,
}: HeaderProps) {
  return (
    <header>
      <nav>
        <ProfileHoverCard
          name="Oliver Mann"
          role="Software Developer"
          imageSrc="./ProfilePicture.png"
          studiesLabel="Studies"
          studies="Computer Science at HSBI"
          graduationLabel="Graduation"
          graduation="Expected June 2026"
          links={{
            github: "https://github.com/omann-dev",
            linkedin: "https://www.linkedin.com/in/oliver-mann-12b465405/",
          }}
        />

        <ul>
          <li>
            <a href="#about">{nav.about}</a>
          </li>
          <li>
            <a href="#projects">{nav.projects}</a>
          </li>
          <li>
            <a href="#skills">{nav.skills}</a>
          </li>
          <li>
            <a href="#contact">{nav.contact}</a>
          </li>
        </ul>

        <div className="header-actions">
          <div className="language-switch">
            <button
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              type="button"
            >
              EN
            </button>

            <button
              className={language === "de" ? "active" : ""}
              onClick={() => setLanguage("de")}
              type="button"
            >
              DE
            </button>
          </div>

          <ThemeSwitch theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
}

export default Header;