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

      {/* PROBLEM */}
      <section id="problem">
        <div className="w">
          <h2 className="st" dangerouslySetInnerHTML={{ __html: t("prob-title") }} />
          <p className="problem-text">{t("prob-text")}</p>
          <p className="problem-text">{t("prob-text2")}</p>
          <div className="prob-grid">
            {[1, 2, 3, 4].map((i) => (
              <div className="prob-card" key={i}>
                <h3>{t(`prob-c${i}-h`)}</h3>
                <p>{t(`prob-c${i}-p`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION (DARK) */}
      <section className="ins" id="solution">

        <div className="w">
          <div className="expert-grid">
            <div>
              <h2 className="st" dangerouslySetInnerHTML={{ __html: t("sol-title") }} />
              <p className="sd">{t("sol-desc")}</p>
              <p className="sd">{t("sol-desc2")}</p>
              <div className="sol-result">
                <h4>{t("sol-highlight")}</h4>
              </div>
            </div>
            <div className="memory-card">
              <h4>{t("mem-card-title")}</h4>
              {[
                ["mem-l-eq", "mem-v-eq"],
                ["mem-l-sym", "mem-v-sym"],
                ["mem-l-ev", "mem-v-ev"],
                ["mem-l-est", "mem-v-est"],
                ["mem-l-rc", "mem-v-rc"],
                ["mem-l-act", "mem-v-act"],
                ["mem-l-res", "mem-v-res"],
                ["mem-l-mem", "mem-v-mem"],
                ["mem-l-src", "mem-v-src"],
              ].map(([lk, vk]) => (
                <div key={lk} className="memory-row">
                  <span className="memory-label">{t(lk)}</span>
                  <span className={`memory-val ${vk === "mem-v-rc" ? "red" : ""}`}>{t(vk)}</span>
                </div>
              ))}
            </div>
          </div>
          <h3 className="st" style={{ fontSize: "clamp(1.5rem,2.8vw,2.2rem)", marginTop: "3rem", color: "#F7F5F0" }}
            dangerouslySetInnerHTML={{ __html: t("mem-title") }} />
          <p className="sd">{t("mem-sub")}</p>
          <div className="sol-grid-3">
            <div className="sol-card left">
              <h4>{t("sol-h-1")}</h4>
              <ul>
                <li>{t("sol-li-1")}</li><li>{t("sol-li-2")}</li><li>{t("sol-li-3")}</li><li>{t("sol-li-4")}</li>
              </ul>
            </div>
            <div className="sol-card left">
              <h4>{t("sol-h-2")}</h4>
              <ul>
                <li>{t("sol-li-5")}</li><li>{t("sol-li-6")}</li><li>{t("sol-li-7")}</li><li>{t("sol-li-8")}</li>
              </ul>
            </div>
            <div className="sol-card right">
              <h4>{t("sol-h-3")}</h4>
              <ul>
                <li>{t("sol-li-10")}</li><li>{t("sol-li-11")}</li><li>{t("sol-li-13")}</li><li>{t("sol-li-14")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="w">
          <h2 className="st" dangerouslySetInnerHTML={{ __html: t("how-title") }} />
          <div className="how-grid">
            {[1, 2, 3, 4, 5].map((i) => (
              <div className="how-step" key={i}>
                <div className="how-num">0{i}</div>
                <h3>{t(`how-h-${i}`)}</h3>
                <p>{t(`how-p-${i}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities">
        <a id="product" />
        <div className="w">
          <h2 className="st" dangerouslySetInnerHTML={{ __html: t("cap-title") }} />
          <div className="cap-grid-3">
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-1")}</h3><p>{t("cap-p-1")}</p></div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="3"/><path d="M9 3v2h6V3"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-2")}</h3><p>{t("cap-p-2")}</p></div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-3")}</h3><p>{t("cap-p-3")}</p></div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-4")}</h3><p>{t("cap-p-4")}</p></div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1l22 22"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-5")}</h3><p>{t("cap-p-5")}</p></div>
            </div>
            <div className="cap-card">
              <div className="cap-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8601C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/>
                </svg>
              </div>
              <div className="cap-content"><h3>{t("cap-h-6")}</h3><p>{t("cap-p-6")}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <section className="sec-strip" id="security">
        <div className="w">
          <h2 className="st" dangerouslySetInnerHTML={{ __html: t("sec-title") }} />
          <p className="sd">{t("sec-desc")}</p>
          <div className="sec-grid">
            <div className="sec-card">
              <div className="sec-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
              </div>
              <h3>{t("sec-h-1")}</h3><p>{t("sec-p-1")}</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                </svg>
              </div>
              <h3>{t("sec-h-2")}</h3><p>{t("sec-p-2")}</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>{t("sec-h-3")}</h3><p>{t("sec-p-3")}</p>
            </div>
            <div className="sec-card">
              <div className="sec-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F7F5F0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <h3>{t("sec-h-4")}</h3><p>{t("sec-p-4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="w">
          <div className="stag">— PILOT</div>
          <h2 className="st">{t("cta-title")}</h2>
          <p className="sd">{t("cta-desc")}</p>
          <p className="sd">{t("cta-desc2")}</p>
          <div className="cpills">
            {[
              ["5–10", "cta-pl-1"],
              ["2–3", "cta-pl-2"],
              ["200–500", "cta-pl-3"],
              ["6", "cta-pl-4"],
              ["1", "cta-pl-5"],
            ].map(([n, k]) => (
              <div className="cpill" key={k}>
                <div className="pn">{n}</div>
                <div className="pl">{t(k)}</div>
              </div>
            ))}
          </div>
          <button className="bp" onClick={open}>{t("cta-btn")}</button>
        </div>
      </section>

      <Footer />

    </>
  );
}
