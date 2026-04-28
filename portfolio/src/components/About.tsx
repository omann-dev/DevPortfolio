type AboutProps = {
  content: {
    label: string;
    headline: string;
    paragraph1: string;
    paragraph2: string;
    highlights: {
      focusTitle: string;
      focusText: string;
      stackTitle: string;
      stackText: string;
      currentTitle: string;
      currentText: string;
    };
  };
};

function About({ content }: AboutProps) {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <p className="section-label">{content.label}</p>

          <h2>{content.headline}</h2>

          <p>{content.paragraph1}</p>

          <p>{content.paragraph2}</p>

          <div className="about-highlights">
            <div>
              <strong>{content.highlights.focusTitle}</strong>
              <span>{content.highlights.focusText}</span>
            </div>

            <div>
              <strong>{content.highlights.stackTitle}</strong>
              <span>{content.highlights.stackText}</span>
            </div>

            <div>
              <strong>{content.highlights.currentTitle}</strong>
              <span>{content.highlights.currentText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;