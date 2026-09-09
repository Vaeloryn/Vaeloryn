import { Router, type IRouter, type Request, type Response } from "express";
import { Resend } from "resend";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// ── Schemas ────────────────────────────────────────────────────────────────

const trim = (s: string) => s.trim();
const trimLower = (s: string) => s.trim().toLowerCase();
const trimOpt = (s: string | undefined) => s?.trim() ?? "";

const contactSchema = z.object({
  name:    z.string().min(2).max(200).transform(trim),
  email:   z.string().email().max(254).transform(trimLower),
  subject: z.string().max(300).optional().transform(trimOpt),
  message: z.string().min(10).max(10000).transform(trim),
});

const helpBuildSchema = z.object({
  name:      z.string().min(2).max(200).transform(trim),
  email:     z.string().email().max(254).transform(trimLower),
  expertise: z.string().min(2).max(500).transform(trim),
  role:      z.string().max(300).optional().transform(trimOpt),
  profile:   z.string().url().max(500).optional().or(z.literal("")).transform(trimOpt),
  helpTypes: z.array(z.string().max(50)).min(1).max(10),
  message:   z.string().min(10).max(10000).transform(trim),
});

const privateSalesSchema = z.object({
  name:         z.string().min(2).max(200).transform(trim),
  email:        z.string().email().max(254).transform(trimLower),
  organization: z.string().max(300).optional().transform(trimOpt),
  jurisdiction: z.string().max(200).optional().transform(trimOpt),
  interest:     z.enum([
    "initial-private-allocation",
    "institutional-participation",
    "strategic-partnership",
    "other",
  ]),
  message:      z.string().min(10).max(10000).transform(trim),
});

// ── Helpers ────────────────────────────────────────────────────────────────

function getResend(): Resend {
  const apiKey = process.env["RESEND_API_KEY"];
  if (!apiKey) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(apiKey);
}

function fromAddress(): string {
  return process.env["RESEND_FROM_EMAIL"] ?? "onboarding@resend.dev";
}

const DEST = "vaelorynfuture@gmail.com";

function timestamp(): string {
  return new Date().toISOString().replace("T", " ").replace("Z", " UTC").slice(0, 23) + " UTC";
}

// ── POST /api/contact ──────────────────────────────────────────────────────

router.post("/contact", async (req: Request, res: Response) => {
  const parse = contactSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json({ error: "Invalid submission. Please check your details and try again." });
    return;
  }

  const { name, email, subject, message } = parse.data;

  const subjectLine = subject
    ? `Contact: ${subject}`
    : `New Contact Form Submission — Vaeloryn`;

  const text = [
    "New Contact Form Submission",
    "───────────────────────────",
    `Name:      ${name}`,
    `Email:     ${email}`,
    `Subject:   ${subject || "(none)"}`,
    "",
    "Message:",
    message,
    "",
    "───────────────────────────",
    `Submitted: ${timestamp()}`,
  ].join("\n");

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: `Vaeloryn Contact <${fromAddress()}>`,
      to:   DEST,
      replyTo: email,
      subject: subjectLine,
      text,
    });

    if (error) {
      logger.error({ error }, "Resend API error (contact)");
      res.status(502).json({ error: "Failed to send your message. Please try again later." });
      return;
    }

    logger.info({ email, subject }, "Contact form email sent");
    res.status(200).json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Unexpected error sending contact email");
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
});

// ── POST /api/private-sales ────────────────────────────────────────────────

router.post("/private-sales", async (req: Request, res: Response) => {
  const parse = privateSalesSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json({ error: "Invalid submission. Please check your details and try again." });
    return;
  }

  const { name, email, organization, jurisdiction, interest, message } = parse.data;

  const text = [
    "New VAELO Private Sales Inquiry",
    "────────────────────────────────",
    `Name:           ${name}`,
    `Email:          ${email}`,
    `Organisation:   ${organization || "(not provided)"}`,
    `Jurisdiction:   ${jurisdiction || "(not provided)"}`,
    `Interest:       ${interest}`,
    "",
    "Message:",
    message,
    "",
    "This is an expression of interest only. No allocation or terms were promised.",
    "────────────────────────────────",
    `Submitted: ${timestamp()}`,
  ].join("\n");

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: `Vaeloryn Private Sales <${fromAddress()}>`,
      to:   DEST,
      replyTo: email,
      subject: `VAELO Private Sales Inquiry — ${name}`,
      text,
    });

    if (error) {
      logger.error({ error }, "Resend API error (private-sales)");
      res.status(502).json({ error: "Failed to send your inquiry. Please try again later." });
      return;
    }

    logger.info({ email, interest }, "Private-sales inquiry email sent");
    res.status(200).json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Unexpected error sending private-sales inquiry");
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
});

// ── POST /api/help-build ───────────────────────────────────────────────────

router.post("/help-build", async (req: Request, res: Response) => {
  const parse = helpBuildSchema.safeParse(req.body);
  if (!parse.success) {
    res.status(400).json({ error: "Invalid submission. Please check your details and try again." });
    return;
  }

  const { name, email, expertise, role, profile, helpTypes, message } = parse.data;

  const text = [
    "New Help Build Vaeloryn Submission",
    "───────────────────────────────────",
    `Name:           ${name}`,
    `Email:          ${email}`,
    `Expertise:      ${expertise}`,
    `Role / Org:     ${role || "(not provided)"}`,
    `Profile / URL:  ${profile || "(not provided)"}`,
    `How to help:    ${helpTypes.join(", ")}`,
    "",
    "Message:",
    message,
    "",
    "───────────────────────────────────",
    `Submitted: ${timestamp()}`,
  ].join("\n");

  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: `Vaeloryn Help Build <${fromAddress()}>`,
      to:   DEST,
      replyTo: email,
      subject: `Help Build Vaeloryn — ${name} (${expertise})`,
      text,
    });

    if (error) {
      logger.error({ error }, "Resend API error (help-build)");
      res.status(502).json({ error: "Failed to send your information. Please try again later." });
      return;
    }

    logger.info({ email, expertise }, "Help Build form email sent");
    res.status(200).json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Unexpected error sending help-build email");
    res.status(500).json({ error: "An unexpected error occurred. Please try again later." });
  }
});

export default router;
