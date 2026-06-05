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

  // Solution (dark)
  "sol-title": { tr: "Teknisyen çözer. <em>ToolA öğrenir.</em>", en: "Expert fixes it. <em>ToolA learns.</em>" },
  "sol-desc": { tr: "Tecrübeli teknisyen arızayı dokümana bakmadan çözebilir. ToolA; sesli not, fotoğraf, ölçüm ve kapanış kayıtlarından bu çözümü yakalar.", en: "An experienced technician can fix the fault without a manual. ToolA captures the fix from voice notes, photos, measurements, and closure records." },
  "sol-desc2": { tr: "Belirtiyi, kök nedeni, müdahaleyi ve sonucu yapılandırarak kurumsal hafızaya dönüştürür.", en: "It structures symptom, root cause, intervention, and outcome into company memory." },
  "sol-highlight": { tr: "Bugün en deneyimli teknisyeninizin bildiği şey, yarın tüm ekibin kullanımında olur.", en: "What your best technician knows today is in every technician's pocket tomorrow." },
  "mem-card-title": { tr: "Örnek saha hafızası", en: "Field memory example" },
  "mem-l-eq": { tr: "Ekipman", en: "Equipment" },
  "mem-v-eq": { tr: "Pompa P-204", en: "Pump P-204" },
  "mem-l-sym": { tr: "Belirti", en: "Symptom" },
  "mem-v-sym": { tr: "Yüksek ses / titreşim", en: "Excessive noise / vibration" },
  "mem-l-ev": { tr: "Kanıt", en: "Evidence" },
  "mem-v-ev": { tr: "Ses kaydı + fotoğraf", en: "Audio recording + photo" },
  "mem-l-est": { tr: "İlk tahmin", en: "Initial guess" },
  "mem-v-est": { tr: "Rulman arızası", en: "Bearing failure" },
  "mem-l-rc": { tr: "Gerçek neden", en: "Root cause" },
  "mem-v-rc": { tr: "Kaplin hizasızlığı", en: "Coupling misalignment" },
  "mem-l-act": { tr: "Müdahale", en: "Action" },
  "mem-v-act": { tr: "Kaplin hizalandı", en: "Coupling aligned" },
  "mem-l-res": { tr: "Sonuç", en: "Result" },
  "mem-v-res": { tr: "Ses kesildi", en: "Noise stopped" },
  "mem-l-mem": { tr: "Hafıza", en: "Memory" },
  "mem-v-mem": { tr: "Bu ekipmanda yüksek ses varsa önce kaplin hizası kontrol edilmeli.", en: "If this equipment makes noise, check coupling alignment first." },
  "mem-l-src": { tr: "Kaynak", en: "Source" },
  "mem-v-src": { tr: "İş emri #1842 · Bakım kılavuzu s.42", en: "Work order #1842 · Maintenance manual p.42" },
  "mem-title": { tr: "Doküman, saha kanıtı ve teknisyen deneyimi <em>tek hafızada</em> birleşir.", en: "Documents, field evidence, and expert experience in <em>one memory.</em>" },
  "mem-sub": { tr: "ToolA; dokümanları, saha kanıtlarını ve uzman teknisyen bilgisini aynı operasyon hafızasında birleştirir.", en: "ToolA combines field evidence, job closures, and expert technician knowledge in one operational memory." },
  "sol-h-1": { tr: "Teknik Dokümanlar", en: "Technical Documents" },
  "sol-li-1": { tr: "OEM kılavuzları", en: "OEM manuals" },
  "sol-li-2": { tr: "Servis prosedürleri", en: "Service procedures" },
  "sol-li-3": { tr: "Parça katalogları", en: "Parts catalogs" },
  "sol-li-4": { tr: "HSE dokümanları", en: "HSE documents" },
  "sol-h-2": { tr: "Saha Kanıtı", en: "Field Evidence" },
  "sol-li-5": { tr: "Fotoğraf / video", en: "Photo / video" },
  "sol-li-6": { tr: "Ses kaydı", en: "Audio recording" },
  "sol-li-7": { tr: "Hata kodu", en: "Error code" },
  "sol-li-8": { tr: "Ölçüm / sensör verisi", en: "Measurement / sensor data" },
  "sol-h-3": { tr: "Teknisyen Deneyimi", en: "Expert Experience" },
  "sol-li-10": { tr: "Geçmiş çözümler", en: "Past solutions" },
  "sol-li-11": { tr: "Kapanış notları", en: "Closure notes" },
  "sol-li-13": { tr: "Kök nedenler", en: "Root causes" },
  "sol-li-14": { tr: "Tekrar eden arıza örüntüleri", en: "Recurring fault patterns" },

  // How it works
  "how-title": { tr: "Arızadan kanıtlı kapanışa, <em>tek akış.</em>", en: "From fault to verified close, <em>one flow.</em>" },
  "how-h-1": { tr: "Arıza gelir", en: "Fault arrives" },
  "how-p-1": { tr: "İş emri, WhatsApp mesajı, mobil uygulama veya ERP üzerinden görev düşer.", en: "Job comes in via work order, WhatsApp, or mobile app." },
  "how-h-2": { tr: "Kanıt toplanır", en: "Evidence captured" },
  "how-p-2": { tr: "Teknisyen fotoğraf, sesli not, hata kodu, ölçüm veya kısa gözlem ekler.", en: "Technician adds photo, voice note, error code, or measurement." },
  "how-h-3": { tr: "ToolA teşhis önerir", en: "ToolA suggests diagnosis" },
  "how-p-3": { tr: "Dokümanlar, geçmiş iş emirleri ve benzer saha vakalarından kaynaklı cevap verir.", en: "Source-referenced answer from documents, past jobs, and similar cases." },
  "how-h-4": { tr: "Teknisyen müdahale eder", en: "Technician intervenes" },
  "how-p-4": { tr: "Yapılan işlem, kullanılan parça ve sonuç kayıt altına alınır.", en: "Action, parts used, and outcome are recorded." },
  "how-h-5": { tr: "Kapanış hafızaya dönüşür", en: "Closure becomes memory" },
  "how-p-5": { tr: "Belirti, kök neden, çözüm ve kanıtlar bir sonraki vaka için kullanılabilir hale gelir.", en: "Symptom, root cause, fix, and evidence become available for the next case." },

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

  // Problem
  "prob-title": { tr: "Tecrübeli teknisyen gider, <em>bilgi de gider.</em>", en: "Experts leave. <em>Knowledge leaves too.</em>" },
  "prob-text": { tr: "Tecrübeli teknisyenler cevabı çoğu zaman dokümanda aramaz. Sesi, titreşimi, hata kodunu, ekipmanın geçmişini ve daha önce neyin işe yaradığını bilir.", en: "The best technicians rarely search the manual. They know the sound, vibration, smell, equipment history, and what worked before." },
  "prob-text2": { tr: "Ama bu bilgi genellikle ERP'de, iş emrinde veya dokümanda yaşamaz. Teknisyen ekipten ayrıldığında kurum aynı arızayı yeniden öğrenmek zorunda kalır.", en: "But this knowledge rarely lives in the ERP or manual. When the expert retires, the company relearns the same fault from scratch." },
  "prob-c1-h": { tr: "Bilgi dağınık", en: "Knowledge is scattered" },
  "prob-c1-p": { tr: "Dokümanlar, iş emirleri, WhatsApp mesajları ve teknisyen notları farklı yerlerde kalır.", en: "Documents, work orders, WhatsApp messages, and technician notes live in different places." },
  "prob-c2-h": { tr: "Kapanışlar eksik", en: "Closures are incomplete" },
  "prob-c2-p": { tr: "Kök neden, kanıt, yapılan işlem ve sonuç çoğu zaman net kaydedilmez.", en: "Root cause, evidence, action, and outcome are rarely clearly recorded." },
  "prob-c3-h": { tr: "Teknisyen bilgisi kaybolur", en: "Expert knowledge is lost" },
  "prob-c3-p": { tr: "Tecrübeli teknisyenin pratik çözümü kurumsal hafızaya dönüşmez.", en: "The experienced technician's practical fix never becomes company memory." },
  "prob-c4-h": { tr: "Aynı arıza tekrar öğrenilir", en: "Same fault relearned" },
  "prob-c4-p": { tr: "Benzer arızalar her seferinde sıfırdan araştırılır.", en: "Similar faults are researched from scratch every time." },

  // Capabilities
  "cap-title": { tr: "Sahada işi bitiren <em>AI akışı.</em>", en: "The AI flow that <em>gets field work done.</em>" },
  "cap-h-1": { tr: "Kaynak Referanslı Teşhis", en: "Sourced Diagnosis" },
  "cap-p-1": { tr: "Dokümanlar, geçmiş vakalar ve saha kanıtlarından kaynak referanslı öneriler.", en: "Source-referenced suggestions from documents, past cases, and field evidence." },
  "cap-h-2": { tr: "Kanıt Yakalama", en: "Evidence Capture" },
  "cap-p-2": { tr: "Fotoğraf, ses, hata kodu ve ölçümler iş kaydına bağlanır.", en: "Photos, audio, error codes, and measurements linked to the job record." },
  "cap-h-3": { tr: "Akıllı Kapanış", en: "Smart Closure" },
  "cap-p-3": { tr: "Teknisyen konuşur; ToolA kapanış kaydını yapılandırır.", en: "Technician speaks; ToolA structures the closure record." },
  "cap-h-4": { tr: "Teknisyen Hafızası", en: "Expert Memory" },
  "cap-p-4": { tr: "Onaylanan çözümler kurumsal hafızaya eklenir.", en: "Approved solutions added to company memory." },
  "cap-h-5": { tr: "Offline Çalışma", en: "Offline Operation" },
  "cap-p-5": { tr: "Saha ve yüksek güvenlikli ortamlarda internet olmadan çalışabilir.", en: "Works without internet in field and high-security environments." },
  "cap-h-6": { tr: "ERP Entegrasyonu", en: "ERP Integration" },
  "cap-p-6": { tr: "SAP, Maximo veya mevcut iş emri sistemlerine entegre edilebilir.", en: "Integrates with SAP, Maximo, or existing work order systems." },

  // Security
  "sec-title": { tr: "Veriniz altyapınızdan <em>asla çıkmaz.</em>", en: "Your data <em>never leaves</em> your infrastructure." },
  "sec-desc": { tr: "ToolA; veri güvenliği, denetlenebilirlik ve offline çalışma gerektiren saha operasyonları için tasarlanır.", en: "ToolA is built for national grids, government institutions, industrial facilities, and high-security field operations." },
  "sec-h-1": { tr: "Tam İzole Mimari", en: "Fully Isolated Architecture" },
  "sec-p-1": { tr: "Air-gapped ağlarda çalışır. Sıfır dış veri iletimi.", en: "Runs on air-gapped networks. Zero external data transmission." },
  "sec-h-2": { tr: "Kurumsal Güvenlik", en: "Enterprise Security" },
  "sec-p-2": { tr: "Şifreleme, rol bazlı erişim ve müşteri kontrollü güvenlik seçenekleriyle tasarlanır.", en: "Designed with encryption, role-based access, and customer-controlled security options." },
  "sec-h-3": { tr: "Kaynak Gösterimi", en: "Source Citations" },
  "sec-p-3": { tr: "Her yanıt kaynak sayfa, doküman, geçmiş iş veya saha kanıtını referans gösterir.", en: "Every answer references the source page, document, past job, or field evidence." },
  "sec-h-4": { tr: "Denetlenebilir Hafıza", en: "Auditable Memory" },
  "sec-p-4": { tr: "Hangi veriden hangi cevap üretildiği ve kimin onayladığı kayıt altında kalır.", en: "Which data produced which answer, and who approved it — all on record." },

  // CTA
  "cta-title": { tr: "6 haftada gerçek sahada kanıtlayın.", en: "Prove it in the real field in 6 weeks." },
  "cta-desc": { tr: "Bir ekip, birkaç bakım senaryosu ve kendi dokümanlarınızla ToolA'yı sahada test edin.", en: "Test ToolA in the field with one team, a few maintenance scenarios, and your own documents." },
  "cta-desc2": { tr: "Pilot sonunda kaynaklı cevap süresi, kapanış kalitesi, tekrar eden arızalar ve gereksiz müdahale riskini birlikte ölçelim.", en: "At pilot's end, let's measure sourced answer time, closure quality, recurring faults, and unnecessary intervention risk together." },
  "cta-pl-1": { tr: "Teknisyen", en: "Technicians" },
  "cta-pl-2": { tr: "Bakım Senaryosu", en: "Scenarios" },
  "cta-pl-3": { tr: "Sayfa Doküman", en: "Pages of Docs" },
  "cta-pl-4": { tr: "Hafta", en: "Weeks" },
  "cta-pl-5": { tr: "Pilot Etki Raporu", en: "Pilot Impact Report" },
  "cta-btn": { tr: "6 Haftalık Pilot Başlat →", en: "Start 6-Week Pilot →" },
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
