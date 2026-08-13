// @ts-nocheck
// Supabase Edge Function — runs in Deno runtime on Supabase servers.
// nodemailer is imported via esm.sh CDN (standard URL import, works in Deno).

import nodemailer from "https://esm.sh/nodemailer@6.9.10";

// CORS Headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

/**
 * Sanitize user input to prevent HTML injection in emails
 */
function sanitizeInput(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Basic email format validation
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Deno.serve is the modern built-in Supabase/Deno HTTP handler — no import needed
Deno.serve(async (req) => {
  // Handle CORS preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed. Only POST is supported." }),
      { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    const payload = await req.json();
    const { name, email, company, projectType, budget, timeline, description } = payload;

    // Validation
    if (!name || !email || !description) {
      return new Response(
        JSON.stringify({ error: "Missing required enquiry fields: name, email, or description." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid customer email address format." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize user inputs for safe HTML rendering
    const safeName = sanitizeInput(name);
    const safeEmail = sanitizeInput(email);
    const safeCompany = sanitizeInput(company) || "N/A";
    const safeProjectType = sanitizeInput(projectType) || "Unspecified";
    const safeBudget = sanitizeInput(budget) || "Unspecified";
    const safeTimeline = sanitizeInput(timeline) || "Unspecified";
    const safeDescription = sanitizeInput(description);
    const submissionDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Read SMTP secrets securely from Deno environment (set via `supabase secrets set`)
    const smtpHost = Deno.env.get("SMTP_HOST");
    const smtpPortStr = Deno.env.get("SMTP_PORT");
    const smtpUser = Deno.env.get("SMTP_USER");
    const smtpPass = Deno.env.get("SMTP_PASS");
    const adminEmail = Deno.env.get("ADMIN_EMAIL");

    if (!smtpHost || !smtpUser || !smtpPass || !adminEmail) {
      console.error("[send-enquiry-email] Missing required SMTP secret environment variables.");
      return new Response(
        JSON.stringify({
          error: "Email notification configuration error on server. Check Supabase function secrets.",
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const smtpPort = parseInt(smtpPortStr || "465", 10);
    const isSecure = smtpPort === 465;

    // Configure Nodemailer SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // EKODRIX Dark & Green HTML Email Template
    const htmlBody = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #05070D; color: #E2E8F0; margin: 0; padding: 24px; }
        .card { max-width: 600px; margin: 0 auto; background-color: #0E121F; border: 1px solid #1E293B; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
        .header { background: linear-gradient(135deg, #090C15 0%, #101628 100%); padding: 28px 32px; border-b: 1px solid #1E293B; }
        .brand { font-size: 20px; font-weight: 800; color: #FFFFFF; letter-spacing: -0.5px; }
        .brand span { color: #28B36A; }
        .title { margin-top: 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #28B36A; font-weight: 700; }
        .body { padding: 32px; }
        .field-group { margin-bottom: 20px; }
        .label { font-size: 11px; text-transform: uppercase; tracking: 1px; color: #94A3B8; font-weight: 600; margin-bottom: 6px; }
        .value { font-size: 15px; color: #F8FAFC; font-weight: 500; }
        .value-highlight { font-size: 15px; color: #28B36A; font-weight: 700; }
        .grid { display: table; width: 100%; margin-bottom: 20px; }
        .col { display: table-cell; width: 50%; vertical-align: top; padding-right: 12px; }
        .desc-box { background-color: #05070D; border: 1px solid #1E293B; border-radius: 12px; padding: 18px; font-size: 14px; line-height: 1.6; color: #CBD5E1; white-space: pre-wrap; }
        .footer { background-color: #090C15; padding: 20px 32px; font-size: 12px; color: #64748B; border-t: 1px solid #1E293B; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <div class="brand">EK<span>O</span>DRIX</div>
          <div class="title">New Website Project Enquiry</div>
        </div>
        <div class="body">
          <div class="grid">
            <div class="col">
              <div class="field-group">
                <div class="label">Customer Name</div>
                <div class="value">${safeName}</div>
              </div>
            </div>
            <div class="col">
              <div class="field-group">
                <div class="label">Customer Email</div>
                <div class="value"><a href="mailto:${safeEmail}" style="color: #28B36A; text-decoration: none;">${safeEmail}</a></div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="col">
              <div class="field-group">
                <div class="label">Company</div>
                <div class="value">${safeCompany}</div>
              </div>
            </div>
            <div class="col">
              <div class="field-group">
                <div class="label">Project Type</div>
                <div class="value-highlight">${safeProjectType.toUpperCase()}</div>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="col">
              <div class="field-group">
                <div class="label">Budget Range</div>
                <div class="value-highlight">${safeBudget}</div>
              </div>
            </div>
            <div class="col">
              <div class="field-group">
                <div class="label">Timeline</div>
                <div class="value">${safeTimeline}</div>
              </div>
            </div>
          </div>

          <div class="field-group" style="margin-bottom: 0;">
            <div class="label">Project Details & Description</div>
            <div class="desc-box">${safeDescription}</div>
          </div>
        </div>
        <div class="footer">
          Received via EKODRIX Website Enquiry Form on ${submissionDate} IST.<br>
          Reply directly to this email to contact <strong>${safeName}</strong>.
        </div>
      </div>
    </body>
    </html>
    `;

    // Mail options with safe headers
    const mailOptions = {
      from: `"EKODRIX Website" <${smtpUser}>`,
      to: adminEmail,
      replyTo: `"${safeName}" <${email}>`,
      subject: `New EKODRIX Website Enquiry — ${safeName}`,
      html: htmlBody,
      text: `New EKODRIX Enquiry\n\nName: ${safeName}\nEmail: ${safeEmail}\nCompany: ${safeCompany}\nProject Type: ${safeProjectType}\nBudget: ${safeBudget}\nTimeline: ${safeTimeline}\n\nDescription:\n${safeDescription}\n\nSubmitted at: ${submissionDate}`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log(`[send-enquiry-email] Email sent successfully to ${adminEmail}, MessageId: ${info.messageId}`);

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("[send-enquiry-email] SMTP Error:", err?.message || err);
    return new Response(
      JSON.stringify({
        error: "Failed to send notification email. Please check server SMTP configuration.",
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
