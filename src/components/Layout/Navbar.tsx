import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "@/lib/i18n";
import { usePilotModal } from "@/components/PilotModal";

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { open } = usePilotModal();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (p: string) => pathname === p;
  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="toola-nav">
      <div className="ni">
        <Link to="/" className="logo" onClick={closeMobile}>
          <img src="/toola-logo.png" alt="ToolA" />
        </Link>
        <ul className="nav-list">
          <li>
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              {t("nav-tech")}
            </Link>
          </li>
          <li>
            <Link to="/managers" className={`nav-link ${isActive("/managers") ? "active" : ""}`}>
              {t("nav-mgr")}
            </Link>
          </li>
          <li>
            <button className="lang-btn" onClick={toggleLang} aria-label="Toggle language">
              {lang === "tr" ? "EN" : "TR"}
            </button>
          </li>
          <li>
            <button className="ncta" onClick={open}>
              {t("nav-cta")}
            </button>
          </li>
        </ul>
        <button
          className={`hamburger ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobile}>
          {t("nav-tech")}
        </Link>
        <Link to="/managers" className={`nav-link ${isActive("/managers") ? "active" : ""}`} onClick={closeMobile}>
          {t("nav-mgr")}
        </Link>
        <button className="lang-btn" style={{ textAlign: "left" }} onClick={toggleLang}>
          {lang === "tr" ? "EN" : "TR"}
        </button>
        <button
          className="ncta"
          onClick={() => {
            closeMobile();
            open();
          }}
        >
          {t("nav-cta")}
        </button>
      </div>
    </nav>
  );
}
