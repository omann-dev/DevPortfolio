import "./Projects.css";

type ProjectLink = {
  label: string;
  href: string;
};

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  tags: readonly string[];
  highlights: readonly string[];
  links: readonly ProjectLink[];
};

type ProjectsContent = {
  label: string;
  title: string;
  intro: string;
  sourceCode: string;
  liveDemo: string;
  items: readonly ProjectItem[];
};

type ProjectsProps = {
  content: ProjectsContent;
};

function Projects({ content }: ProjectsProps) {
  return (
    <section id="projects" className="page-section">
      <div className="section-container">
        <p className="section-label">{content.label}</p>
        <h2>{content.title}</h2>
        <p className="projects-intro">{content.intro}</p>

        <div className="projects-grid">
          {content.items.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-header">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              {project.links.length > 0 && (
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;