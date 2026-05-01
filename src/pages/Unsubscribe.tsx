import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

type State = "validating" | "valid" | "already" | "invalid" | "submitting" | "success" | "error";

const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState<State>("validating");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    const validate = async () => {
      if (!token) {
        setState("invalid");
        return;
      }
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        const res = await fetch(
          `${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`,
          { headers: { apikey: supabaseAnonKey } }
        );
        const data = await res.json();
        if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch (e) {
        setState("invalid");
      }
    };
    validate();
  }, [token]);

  const handleConfirm = async () => {
    if (!token) return;
    setState("submitting");
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) setState("success");
      else if (data?.reason === "already_unsubscribed") setState("already");
      else {
        setErrorMsg(data?.error || "Bilinmeyen bir hata oluştu.");
        setState("error");
      }
    } catch (e: any) {
      setErrorMsg(e?.message || "İstek başarısız oldu.");
      setState("error");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#F7F5F0",
        padding: "24px",
        fontFamily: "'DM Sans', system-ui, sans-serif",
        color: "#0F1A2E",
      }}
    >
      <section
        style={{
          background: "#fff",
          maxWidth: 480,
          width: "100%",
          padding: "40px 32px",
          borderRadius: 14,
          boxShadow: "0 6px 30px rgba(15,26,46,0.06)",
        }}
      >
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#E8601C",
            margin: "0 0 12px",
          }}
        >
          — E-posta Tercihleri
        </p>
        <h1
          style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontWeight: 400,
            fontSize: 32,
            lineHeight: 1.15,
            margin: "0 0 16px",
          }}
        >
          {state === "success" || state === "already" ? "Aboneliğiniz iptal edildi" : "Aboneliği iptal et"}
        </h1>

        {state === "validating" && <p>Bağlantı doğrulanıyor…</p>}

        {state === "valid" && (
          <>
            <p style={{ lineHeight: 1.6, margin: "0 0 24px" }}>
              Bu e-posta adresine artık Toola tarafından bildirim gönderilmesini istemiyorsanız aşağıdaki butona tıklayın.
            </p>
            <button
              onClick={handleConfirm}
              style={{
                width: "100%",
                padding: "14px",
                background: "#E8601C",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 15,
                cursor: "pointer",
              }}
            >
              Aboneliği iptal etmeyi onayla
            </button>
          </>
        )}

        {state === "submitting" && <p>İşleniyor…</p>}

        {state === "success" && (
          <p style={{ lineHeight: 1.6 }}>
            Tercihiniz kaydedildi. Bu adrese artık Toola'dan e-posta gönderilmeyecek.
          </p>
        )}

        {state === "already" && (
          <p style={{ lineHeight: 1.6 }}>
            Bu adres zaten abonelikten çıkarılmış. Ek bir işlem yapmanıza gerek yok.
          </p>
        )}

        {state === "invalid" && (
          <p style={{ lineHeight: 1.6, color: "#B91C1C" }}>
            Bağlantı geçersiz veya süresi dolmuş. Lütfen e-postanızdaki en güncel bağlantıyı kullanın.
          </p>
        )}

        {state === "error" && (
          <p style={{ lineHeight: 1.6, color: "#B91C1C" }}>
            Bir hata oluştu: {errorMsg}
          </p>
        )}
      </section>
    </main>
  );
};

export default Unsubscribe;
