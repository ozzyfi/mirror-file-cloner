import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useLang } from "@/lib/i18n";

interface ModalCtx {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const PilotModalContext = createContext<ModalCtx | null>(null);

export function PilotModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ open, close, isOpen }), [open, close, isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <PilotModalContext.Provider value={value}>
      {children}
      {isOpen && <PilotModal onClose={close} />}
    </PilotModalContext.Provider>
  );
}

export function usePilotModal() {
  const ctx = useContext(PilotModalContext);
  if (!ctx) throw new Error("usePilotModal must be used within PilotModalProvider");
  return ctx;
}

function PilotModal({ onClose }: { onClose: () => void }) {
  const { t, lang } = useLang();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const submit = async () => {
    if (!name || !email) {
      alert(lang === "tr" ? "Lütfen ad ve e-posta alanlarını doldurun." : "Please fill in name and email.");
      return;
    }
    setStatus("sending");
    try {
      const r = await fetch("https://formspree.io/f/mykokjya", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          company,
          phone,
          email,
          _subject: "toola.co — Yeni Pilot Talebi: " + company,
        }),
      });
      if (r.ok) {
        setStatus("success");
        setTimeout(() => {
          onClose();
          setName("");
          setCompany("");
          setPhone("");
          setEmail("");
          setStatus("idle");
        }, 6000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const btnLabel =
    status === "sending"
      ? lang === "tr"
        ? "Gönderiliyor..."
        : "Sending..."
      : status === "success"
        ? lang === "tr"
          ? "Gönderildi ✓"
          : "Sent ✓"
        : status === "error"
          ? lang === "tr"
            ? "Hata, tekrar deneyin"
            : "Error, try again"
          : t("modal-btn");

  return createPortal(
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-tag">{t("modal-tag")}</div>
        <h2 className="modal-title">{t("modal-title")}</h2>
        <p className="modal-desc">{t("modal-desc")}</p>
        <div className="modal-field">
          <label>{t("modal-l-1")}</label>
          <input type="text" placeholder={t("ph-name")} value={name} onChange={(e) => setName(e.target.value)} maxLength={100} />
        </div>
        <div className="modal-field">
          <label>{t("modal-l-2")}</label>
          <input type="text" placeholder={t("ph-company")} value={company} onChange={(e) => setCompany(e.target.value)} maxLength={120} />
        </div>
        <div className="modal-field">
          <label>{t("modal-l-3")}</label>
          <input type="tel" placeholder={t("ph-phone")} value={phone} onChange={(e) => setPhone(e.target.value)} maxLength={30} />
        </div>
        <div className="modal-field">
          <label>{t("modal-l-4")}</label>
          <input type="email" placeholder={t("ph-email")} value={email} onChange={(e) => setEmail(e.target.value)} maxLength={150} />
        </div>
        <button
          className="modal-submit"
          onClick={submit}
          disabled={status === "sending" || status === "success"}
          style={status === "success" ? { background: "var(--teal)" } : undefined}
        >
          {btnLabel}
        </button>
        {status === "success" && <p className="modal-success">{t("modal-success")}</p>}
      </div>
    </div>,
    document.body,
  );
}
