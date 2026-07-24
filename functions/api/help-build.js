/**
 * Cloudflare Pages Function — POST /api/help-build
 *
 * Validates the Help Build form payload and delivers it to the configured
 * recipient via the Resend email API.
 *
 * Required environment variable (set in Cloudflare Pages › Settings › Variables):
 *   RESEND_API_KEY  — your Resend API key
 *
 * Optional environment variable:
 *   RESEND_FROM_EMAIL — verified sender address (defaults to onboarding@resend.dev)
 */

const DEST = "vaelorynfuture@gmail.com";

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

  // ── Parse body ──────────────────────────────────────────────────────────
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request body." }, 400);
  }

  const { name, email, expertise, role, profile, helpTypes, message } = body ?? {};

  // ── Validate ────────────────────────────────────────────────────────────
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return json({ error: "Name must be at least 2 characters." }, 400);
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return json({ error: "A valid email address is required." }, 400);
  }
  if (!expertise || typeof expertise !== "string" || expertise.trim().length < 2) {
    return json({ error: "Area of expertise is required." }, 400);
  }
  if (!Array.isArray(helpTypes) || helpTypes.length === 0) {
    return json({ error: "Please select at least one way to help." }, 400);
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return json({ error: "Message must be at least 10 characters." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[help-build] RESEND_API_KEY is not configured");
    return json({ error: "Email service is not configured. Please contact us directly at vaelorynfuture@gmail.com." }, 503);
  }

  // ── Build email ─────────────────────────────────────────────────────────
  const from = env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

  const text = [
    "New Help Build Vaeloryn Submission",
    "───────────────────────────────────",
    `Name:           ${name.trim()}`,
    `Email:          ${email.trim().toLowerCase()}`,
    `Expertise:      ${expertise.trim()}`,
    `Role / Org:     ${role?.trim() || "(not provided)"}`,
    `Profile / URL:  ${profile?.trim() || "(not provided)"}`,
    `How to help:    ${helpTypes.join(", ")}`,
    "",
    "Message:",
    message.trim(),
    "",
    "───────────────────────────────────",
    `Submitted: ${timestamp}`,
  ].join("\n");

  // ── Send via Resend HTTP API ─────────────────────────────────────────────
  let resendRes;
  try {
    resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `Vaeloryn Help Build <${from}>`,
        to: DEST,
        reply_to: email.trim().toLowerCase(),
        subject: `Help Build Vaeloryn — ${name.trim()} (${expertise.trim()})`,
        text,
      }),
    });
  } catch (err) {
    console.error("[help-build] Network error calling Resend:", err);
    return json({ error: "Failed to reach the email service. Please try again later." }, 502);
  }

  if (!resendRes.ok) {
    let detail = "";
    try {
      const errBody = await resendRes.json();
      detail = errBody.message ?? JSON.stringify(errBody);
    } catch { /* ignore */ }
    console.error(`[help-build] Resend error ${resendRes.status}: ${detail}`);
    return json({ error: `Email delivery failed (${resendRes.status}). Please try again or contact us directly.` }, 502);
  }

  console.log(`[help-build] Email sent from ${email}`);
  return json({ ok: true });
}
