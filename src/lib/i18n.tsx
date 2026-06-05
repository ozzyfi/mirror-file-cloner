import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";

export type Lang = "tr" | "en";

type Dict = Record<string, { tr: string; en: string }>;

export const T: Dict = {
  "nav-tech": { tr: "Teknisyenler için", en: "For Technicians" },
  "nav-mgr": { tr: "Yöneticiler için", en: "For Managers" },
  "nav-cta": { tr: "Pilot Başlat", en: "Start Pilot" },

  "hero-title": {
    tr: "Sahanın hafızası. <em>Arızadan kanıtlı kapanışa.</em>",
    en: "The memory of the field. <em>From fault to verified close.</em>",
  },
  "hero-sub": {
    tr: "ToolA, saha ekiplerine arızaları daha hızlı teşhis etme, müdahaleleri kanıtlı kapama ve sahadaki bilgiyi kurumsal hafızaya dönüştürme imkânı verir.",
    en: "ToolA gives field teams the ability to diagnose faults faster, close interventions with evidence, and turn field knowledge into institutional memory.",
  },
  "hero-btn": { tr: "6 Haftalık Pilot Başlat →", en: "Start 6-Week Pilot →" },
  "hero-btn2": { tr: "Pilot Akışını Gör", en: "See Pilot Flow" },

  "mock-title": { tr: "Canlı İş Akışı", en: "Live Work Flow" },
  "mock-l-1": { tr: "İş emri", en: "Work order" },
  "mock-v-1": { tr: "Pompa P-204 yüksek ses yapıyor.", en: "Pump P-204 making excessive noise." },
  "mock-b-kanit": { tr: "Kanıt", en: "Evidence" },
  "mock-v-kanit": { tr: "Ses kaydı · Fotoğraf · Ölçüm", en: "Audio · Photo · Measurement" },
  "mock-b-oneri": { tr: "ToolA önerisi", en: "ToolA suggestion" },
  "mock-v-oneri": { tr: "Önce kaplin hizasını kontrol edin.", en: "Check coupling alignment first." },
  "mock-v-source": { tr: "Bakım kılavuzu s.42 · İş emri #1842", en: "Maintenance manual p.42 · Work order #1842" },
  "mock-b-kapanis": { tr: "Kapanış", en: "Closure" },
  "mock-v-kapanis": { tr: "Kaplin hizalandı. Ses kesildi.", en: "Coupling aligned. Noise stopped." },
  "mock-b-hafiza": { tr: "Hafıza", en: "Memory" },
  "mock-v-hafiza": {
    tr: "P-204'te yüksek ses varsa önce kaplin hizası kontrol edilmeli.",
    en: "If P-204 makes noise, check coupling alignment first.",
  },

  "pm-t-1": { tr: "Kaynak Referanslı Cevap", en: "Source-Referenced Answer" },
  "pm-d-1": { tr: "Eskiden 15–20 dakika doküman arama", en: "Down from 15–20 min document search" },
  "pm-n-2": { tr: "%30–50", en: "30–50%" },
  "pm-t-2": { tr: "Duruş Süresi Azalması", en: "Downtime Reduction" },
  "pm-d-2": { tr: "Daha hızlı teşhis, daha az tekrar", en: "Faster diagnosis, fewer repeat calls" },
  "pm-n-3": { tr: "−%40", en: "−40%" },
  "pm-t-3": { tr: "Gereksiz Parça Değişimi", en: "Unnecessary Part Replacements" },
  "pm-d-3": { tr: "Kanıta dayalı teşhis, doğru müdahale", en: "Evidence-based diagnosis, right intervention" },
  "eco-title": { tr: "Ekosistem ve programlar", en: "Ecosystem & programs" },

  "footer-tagline": { tr: "Sahanın hafızası.", en: "The memory of the field." },

  // Modal
  "modal-tag": { tr: "— 6 HAFTALIK PİLOT", en: "— 6-WEEK PILOT" },
  "modal-title": { tr: "Pilotunuzu Başlatın", en: "Start Your Pilot" },
  "modal-desc": { tr: "24 saat içinde size dönüş yapacağız.", en: "We'll get back to you within 24 hours." },
  "modal-l-1": { tr: "Ad Soyad", en: "Full Name" },
  "modal-l-2": { tr: "Şirket", en: "Company" },
  "modal-l-3": { tr: "Telefon", en: "Phone" },
  "modal-l-4": { tr: "E-posta", en: "Email" },
  "modal-btn": { tr: "Pilot Talebi Gönder →", en: "Send Pilot Request →" },
  "modal-success": { tr: "Talebiniz alındı. En kısa sürede dönüş yapacağız.", en: "Request received. We'll get back to you shortly." },
  "ph-name": { tr: "Ahmet Yılmaz", en: "John Smith" },
  "ph-company": { tr: "Şirket adı", en: "Company name" },
  "ph-phone": { tr: "+90 5xx xxx xx xx", en: "+1 555 000 0000" },
  "ph-email": { tr: "email@sirket.com", en: "email@company.com" },
};

interface LangCtx {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("tr");
  const toggleLang = useCallback(() => setLang((l) => (l === "tr" ? "en" : "tr")), []);
  const t = useCallback((key: string) => T[key]?.[lang] ?? key, [lang]);
  const value = useMemo(() => ({ lang, toggleLang, t }), [lang, toggleLang, t]);
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
