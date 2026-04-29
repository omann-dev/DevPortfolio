import "./Footer.css";

type FooterContent = {
    text: string;
    madeWith: string;
    links: {
        github: string;
        linkedin: string;
    };
}

type FooterProps = {
    content: FooterContent;
}

function Footer({ content }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div>
                    <a href="#" className="footer-logo">
                        Oliver Mann
                    </a>

                    <p>{content.text}</p>
                    <span>
                        © {currentYear} Oliver Mann. {content.madeWith}
                    </span>
                </div>

                <div className="footer-links">
                    <a
                        href="https://github.com/omann-dev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {content.links.github}
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {content.links.linkedin}
                    </a>

                </div>
            </div>

        </footer>
    );
}

export default Footer;