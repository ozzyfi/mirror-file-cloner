import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="toola-footer">
      <div className="fi">
        <div className="frow">
          <div className="fl">
            <img src="/toola-logo.png" alt="ToolA" style={{ height: 24 }} />
            <span style={{ fontStyle: "italic", fontFamily: "var(--fd)" }}>{t("footer-tagline")}</span>
          </div>
          <div className="fr">
            <a href="mailto:hello@toola.co">hello@toola.co</a>
          </div>
        </div>
        <div className="faddr">
          © {year} ToolA<span className="sep">·</span>
          İstanbul, Türkiye<span className="sep">·</span>
          <a href="/site.html">site.html (eski)</a>
          <span className="sep">·</span>
          <a href="/managers.html">managers.html (eski)</a>
        </div>
      </div>
    </footer>
  );
}
