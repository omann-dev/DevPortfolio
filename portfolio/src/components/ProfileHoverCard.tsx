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

function GitHubIcon() {
    return (
        <svg className="profile-link-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 6.94c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.38-.01 2.49-.01 2.82 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
            />
        </svg>
    );
}

function LinkedInIcon() {
  return (
    <svg className="profile-link-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
      />
    </svg>
  );
}

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
      <a href="#about" className="logo">
        {name}
      </a>

      <div className="profile-popover" role="dialog" aria-label="Profile preview">
        <img src={imageSrc} alt={name} className="profile-popover-image" />

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
              <GitHubIcon />
              GitHub
            </a>

            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileHoverCard;