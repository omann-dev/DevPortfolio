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
        <div className="about-layout">
          <div className="about-content">
            <p className="section-label">{content.label}</p>

            <h2>{content.headline}</h2>

            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
          </div>

          <div className="about-code-card" aria-label="Developer profile code preview">
            <div className="code-window-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="code-file-name">developer.ts</span>
            </div>

            <pre>
              <code>
                <span className="code-line">
                  <span className="line-number">01</span>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">developer</span>{" "}
                  <span className="code-operator">=</span>{" "}
                  <span className="code-bracket">{"{"}</span>
                </span>

                <span className="code-line">
                  <span className="line-number">02</span>
                  {"  "}
                  <span className="code-property">focus</span>
                  <span className="code-operator">:</span>{" "}
                  <span className="code-string">"{content.highlights.focusText}"</span>
                  <span className="code-operator">,</span>
                </span>

                <span className="code-line">
                  <span className="line-number">03</span>
                  {"  "}
                  <span className="code-property">stack</span>
                  <span className="code-operator">:</span>{" "}
                  <span className="code-bracket">[</span>
                  <span className="code-string">"C#"</span>
                  <span className="code-operator">, </span>
                  <span className="code-string">".NET"</span>
                  <span className="code-operator">, </span>
                  <span className="code-string">"React"</span>
                  <span className="code-operator">, </span>
                  <span className="code-string">"TypeScript"</span>
                  <span className="code-bracket">]</span>
                  <span className="code-operator">,</span>
                </span>

                <span className="code-line">
                  <span className="line-number">04</span>
                  {"  "}
                  <span className="code-property">current</span>
                  <span className="code-operator">:</span>{" "}
                  <span className="code-string">"{content.highlights.currentText}"</span>
                  <span className="code-operator">,</span>
                </span>

                <span className="code-line">
                  <span className="line-number">05</span>
                  {"  "}
                  <span className="code-property">interestedIn</span>
                  <span className="code-operator">:</span>{" "}
                  <span className="code-bracket">[</span>
                  <span className="code-string">"Dashboards"</span>
                  <span className="code-operator">, </span>
                  <span className="code-string">"Data"</span>
                  <span className="code-operator">, </span>
                  <span className="code-string">"UI"</span>
                  <span className="code-bracket">]</span>
                </span>

                <span className="code-line">
                  <span className="line-number">06</span>
                  <span className="code-bracket">{"}"}</span>
                  <span className="code-operator">;</span>
                </span>
              </code>
            </pre>
          </div>
        </div>

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
    </section>
  );
}

export default About;