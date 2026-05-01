import { createClient, corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0";

interface PilotRequest {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  language?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as PilotRequest;

    // Basic validation
    const name = (body.name || "").toString().trim().slice(0, 200);
    const email = (body.email || "").toString().trim().slice(0, 320);
    const company = (body.company || "").toString().trim().slice(0, 200);
    const phone = (body.phone || "").toString().trim().slice(0, 50);
    const language = body.language === "en" ? "en" : "tr";

    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "name and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return new Response(
        JSON.stringify({ error: "invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data, error } = await supabase
      .from("pilot_requests")
      .insert({ name, company, phone, email, language })
      .select("id")
      .single();

    if (error) {
      console.error("DB insert error:", error);
      return new Response(
        JSON.stringify({ error: "database error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    // Try to send notification email to info@toola.net (best-effort)
    try {
      await supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "pilot-request-notification",
          recipientEmail: "info@toola.net",
          idempotencyKey: `pilot-notify-${data.id}`,
          templateData: { name, company, phone, email, language },
        },
      });
      await supabase
        .from("pilot_requests")
        .update({ email_sent: true })
        .eq("id", data.id);
    } catch (e) {
      // Email infra may not be set up yet — request is still saved in DB
      console.warn("Email notify skipped:", e);
    }

    return new Response(
      JSON.stringify({ success: true, id: data.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    console.error("submit-pilot-request error:", e);
    return new Response(
      JSON.stringify({ error: "unexpected error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
