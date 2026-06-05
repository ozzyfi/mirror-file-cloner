import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { useLang } from "@/lib/i18n";
import { usePilotModal } from "@/components/PilotModal";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Index() {
  const { t } = useLang();
  const { open } = usePilotModal();
  const proofRef = useScrollReveal();

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="w">
          <div className="hero-inner">
            <div className="hero-left">
              <h1 dangerouslySetInnerHTML={{ __html: t("hero-title") }} />
              <p className="hero-sub">{t("hero-sub")}</p>
              <div className="hero-actions">
                <button className="bp" onClick={open}>
                  {t("hero-btn")}
                </button>
                <a href="#how" className="bs">
                  {t("hero-btn2")}
                </a>
              </div>
            </div>
            <div className="hero-right">
              <div className="mockup-card">
                <div className="mockup-title">{t("mock-title")}</div>
                <div className="mockup-row">
                  <span className="mockup-label">{t("mock-l-1")}</span>
                  <div className="mockup-val">{t("mock-v-1")}</div>
                </div>
                <div className="mockup-row">
                  <span className="mockup-badge mb-kanit">{t("mock-b-kanit")}</span>
                  <div className="mockup-val">{t("mock-v-kanit")}</div>
                </div>
                <div className="mockup-row">
                  <span className="mockup-badge mb-oneri">{t("mock-b-oneri")}</span>
                  <div className="mockup-val">{t("mock-v-oneri")}</div>
                  <div className="mockup-source">{t("mock-v-source")}</div>
                </div>
                <div className="mockup-row">
                  <span className="mockup-badge mb-kapanis">{t("mock-b-kapanis")}</span>
                  <div className="mockup-val">{t("mock-v-kapanis")}</div>
                </div>
                <div className="mockup-row">
                  <span className="mockup-badge mb-hafiza">{t("mock-b-hafiza")}</span>
                  <div className="mockup-val highlight">{t("mock-v-hafiza")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF METRICS */}
      <div className="proof reveal" ref={proofRef}>
        <div className="w">
          <div className="proof-metrics">
            <div className="pm">
              <div className="n">&lt;60s</div>
              <div className="t">{t("pm-t-1")}</div>
              <div className="d">{t("pm-d-1")}</div>
            </div>
            <div className="pm">
              <div className="n">{t("pm-n-2")}</div>
              <div className="t">{t("pm-t-2")}</div>
              <div className="d">{t("pm-d-2")}</div>
            </div>
            <div className="pm">
              <div className="n">{t("pm-n-3")}</div>
              <div className="t">{t("pm-t-3")}</div>
              <div className="d">{t("pm-d-3")}</div>
            </div>
          </div>
          <div className="ecosystem-title">{t("eco-title")}</div>
          <div className="proof-logos">
            <span>İTÜ Çekirdek</span>
            <span>EIT DIGITAL</span>
            <span>HAVELSAN JetCube</span>
            <span>QSTP INCUBATION</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
