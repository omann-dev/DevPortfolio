import type { Language } from "../translations";

type HeaderProps = {
    language: Language;
    setLanguage: (Language: Language) => void;
    nav: {
        about: string;
        projects: string;
        skills: string;
        contact: string;
    };
};

function Header({ language, setLanguage, nav }): HeaderProps{

    return (
        <header>
            <nav>
                <h1>Oliver Mann</h1>

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

                <div className="language-switch">
                    <button
                        className={language === "en" ? "active" : ""}
                        onClick={() => setLanguage("en")}
                    >
                        EN
                    </button>

                    <button
                        className={language === "de" ? "active" : ""}
                        onClick={() => setLanguage("de")}
                    >
                        DE
                    </button>
                </div>
            </nav>

        </header>
    );
}

export default Header;