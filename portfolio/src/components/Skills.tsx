import { useState } from "react";
import "./Skills.css";

type SkillId =
  | "typescript"
  | "react"
  | "javascript"
  | "html"
  | "css"
  | "csharp"
  | "dotnet"
  | "postgresql"
  | "git"
  | "linux";

type Skill = {
  id: SkillId;
  title: string;
  icon: string;
};

type SkillsContent = {
  label: string;
  title: string;
  intro: string;
  selectedLabel: string;
  descriptions: Record<SkillId, string>;
};

type SkillsProps = {
  content: SkillsContent;
};

const skills: Skill[] = [
  {
    id: "typescript",
    title: "TypeScript",
    icon: "devicon-typescript-plain colored",
  },
  {
    id: "react",
    title: "React",
    icon: "devicon-react-original colored",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: "devicon-javascript-plain colored",
  },
  {
    id: "html",
    title: "HTML",
    icon: "devicon-html5-plain colored",
  },
  {
    id: "css",
    title: "CSS",
    icon: "devicon-css3-plain colored",
  },
  {
    id: "csharp",
    title: "C#",
    icon: "devicon-csharp-plain colored",
  },
  {
    id: "dotnet",
    title: ".NET / ASP.NET Core",
    icon: "devicon-dotnetcore-plain colored",
  },
  {
    id: "postgresql",
    title: "PostgreSQL",
    icon: "devicon-postgresql-plain colored",
  },
  {
    id: "git",
    title: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    id: "linux",
    title: "Linux",
    icon: "devicon-linux-plain colored",
  },
];

function Skills({ content }: SkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill>(skills[0]);

  return (
    <section id="skills" className="page-section">
      <div className="section-container">
        <p className="section-label">{content.label}</p>
        <h2>{content.title}</h2>
        <p className="skills-intro">{content.intro}</p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <button
              key={skill.id}
              type="button"
              className={`skill-card ${
                selectedSkill.id === skill.id ? "active" : ""
              }`}
              onClick={() => setSelectedSkill(skill)}
              aria-label={skill.title}
              aria-pressed={selectedSkill.id === skill.id}
            >
              <i className={skill.icon}></i>
              <span>{skill.title}</span>
            </button>
          ))}
        </div>

        <article className="selected-skill-card">
          <div className="selected-skill-header">
            <div className="selected-skill-icon">
              <i className={selectedSkill.icon}></i>
            </div>

            <div>
              <span>{content.selectedLabel}</span>
              <h3>{selectedSkill.title}</h3>
            </div>
          </div>

          <p>{content.descriptions[selectedSkill.id]}</p>
        </article>
      </div>
    </section>
  );
}

export default Skills;