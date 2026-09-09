/**
 * Cloudflare Pages Function — POST /api/private-sales
 *
 * Validates the private-sales expression-of-interest form and delivers it to
 * the configured recipient via the Resend email API.
 *
 * Required environment variable:
 *   RESEND_API_KEY
 *
 * Optional environment variable:
 *   RESEND_FROM_EMAIL
 */

const DEST = "vaelorynfuture@gmail.com";
const ALLOWED_INTERESTS = new Set([
  "initial-private-allocation",
  "institutional-participation",
  "strategic-partnership",
  "other",
]);

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "https://vaeloryn.com",
    },
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "https://vaeloryn.com",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const {
    name,
    email,
    organization = "",
    jurisdiction = "",
    interest,
    message,
  } = body ?? {};

  if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 200) {
    return json({ error: "Name must be between 2 and 200 characters." }, 400);
  }
  if (!email || typeof email !== "string" || !email.includes("@") || email.trim().length > 254) {
    return json({ error: "A valid email address is required." }, 400);
  }
  if (organization != null && (typeof organization !== "string" || organization.trim().length > 300)) {
    return json({ error: "Organisation details are too long." }, 400);
  }
  if (jurisdiction != null && (typeof jurisdiction !== "string" || jurisdiction.trim().length > 200)) {
    return json({ error: "Jurisdiction details are too long." }, 400);
  }
  if (!ALLOWED_INTERESTS.has(interest)) {
    return json({ error: "Please select a valid area of interest." }, 400);
  }
  if (!message || typeof message !== "string" || message.trim().length < 10 || message.trim().length > 10000) {
    return json({ error: "Message must be between 10 and 10,000 characters." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[private-sales] RESEND_API_KEY is not configured");
    return json({ error: "Email service is not configured. Please contact us directly at vaelorynfuture@gmail.com." }, 503);
  }

  const from = env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const normalizedEmail = email.trim().toLowerCase();
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

  const text = [
    "New VAELO Private Sales Inquiry",
    "────────────────────────────────",
    `Name:           ${name.trim()}`,
    `Email:          ${normalizedEmail}`,
    `Organisation:   ${organization?.trim() || "(not provided)"}`,
    `Jurisdiction:   ${jurisdiction?.trim() || "(not provided)"}`,
    `Interest:       ${interest}`,
    "",
    "Message:",
    message.trim(),
    "",
    "This is an expression of interest only. No allocation or terms were promised.",
    "────────────────────────────────",
    `Submitted: ${timestamp}`,
  ].join("\n");

  let resendRes;
  try {
    resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Vaeloryn Private Sales <${from}>`,
        to: DEST,
        reply_to: normalizedEmail,
        subject: `VAELO Private Sales Inquiry — ${name.trim()}`,
        text,
      }),
    });
  } catch (err) {
    console.error("[private-sales] Network error calling Resend:", err);
    return json({ error: "Failed to reach the email service. Please try again later." }, 502);
  }

  if (!resendRes.ok) {
    let detail = "";
    try {
      const errBody = await resendRes.json();
      detail = errBody.message ?? JSON.stringify(errBody);
    } catch { /* ignore */ }
    console.error(`[private-sales] Resend error ${resendRes.status}: ${detail}`);
    return json({ error: `Email delivery failed (${resendRes.status}). Please try again or contact us directly.` }, 502);
  }

  console.log(`[private-sales] Inquiry email sent from ${normalizedEmail}`);
  return json({ ok: true });
}