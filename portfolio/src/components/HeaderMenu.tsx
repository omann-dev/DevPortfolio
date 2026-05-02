import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./headermenu.css";



const handleDownloadCv = () => {
  const link = document.createElement("a");
  link.href = "/CVDevPortfolio.pdf";
  link.download = "CVDevPortfolio.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleOpenThemes = () => {
    setIsOpen(false);
    navigate("/themes");
  }


  return (
    <div className="header-menu">
      <button
        className="header-menu-toggle"
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`header-menu-backdrop ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`header-menu-drawer ${isOpen ? "open" : ""}`}>
        <div className="header-menu-top">
          <span className="header-menu-title">Menu</span>

          <button
            className="header-menu-close"
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="header-menu-list">
          <button className="header-menu-entry" type="button" onClick={handleDownloadCv}>
            <span>Download my CV</span>
            <span className="header-menu-arrow">›</span>
          </button>

          <button className="header-menu-entry" type="button" onClick={handleOpenThemes}>
            <span>Themes</span>
            <span className="header-menu-arrow">›</span>
          </button>
        </div>
      </aside>
    </div>
  );
}

export default HeaderMenu;