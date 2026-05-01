import "./ProfileHoverCard.css";

type ProfileHoverCardProps = {
  name: string;
  role: string;
  imageSrc: string;
  studiesLabel: string;
  studies: string;
  graduationLabel: string;
  graduation: string;
  links: {
    github: string;
    linkedin: string;
  };
};

function ProfileHoverCard({
  name,
  role,
  imageSrc,
  studiesLabel,
  studies,
  graduationLabel,
  graduation,
  links,
}: ProfileHoverCardProps) {
  return (
    <div className="profile-hover-card">
      <button className="profile-trigger" type="button" aria-label="Open profile card">
        <div className="profile-name-row">
          <span className="profile-name">{name}</span>

          <span
            className="profile-availability-icon"
            aria-label="Profile available"
            title="Profile available"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
        </div>

        <span className="profile-trigger-role">{role}</span>
      </button>

      <div className="profile-popover">
        <img className="profile-popover-image" src={imageSrc} alt={name} />

        <div className="profile-popover-content">
          <strong>{name}</strong>
          <span className="profile-role">{role}</span>

          <div className="profile-meta">
            <p>
              <span>{studiesLabel}</span>
              {studies}
            </p>

            <p>
              <span>{graduationLabel}</span>
              {graduation}
            </p>
          </div>

          <div className="profile-socials">
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHoverCard;