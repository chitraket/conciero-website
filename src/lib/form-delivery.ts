/**
 * Form delivery via FormSubmit (https://formsubmit.co).
 *
 * The site is a static export (no backend), so leads are sent straight from the
 * browser. FormSubmit is free, requires no account and no API key — every
 * submission is emailed to RECIPIENT below.
 *
 * One-time activation: the first time any form is submitted, FormSubmit emails
 * RECIPIENT a confirmation link. Click it once; after that, all submissions
 * (from every form) are delivered automatically.
 */

/** Inbox that receives every form submission. */
export const RECIPIENT = "care@conciero.co";

// AJAX endpoint returns JSON instead of redirecting, so we can show inline
// success/error without leaving the page.
const ENDPOINT = `https://formsubmit.co/ajax/${RECIPIENT}`;

export type SubmitResult = { ok: true } | { ok: false; error: string };

/**
 * Send a form submission by email.
 *
 * @param subject  Email subject line (so leads are easy to triage).
 * @param values   The form fields. `website` is the honeypot and is stripped.
 */
export async function sendForm(
  subject: string,
  values: Record<string, unknown>,
): Promise<SubmitResult> {
  // Drop our client-side honeypot before sending.
  const { website: _honeypot, ...fields } = values;
  void _honeypot;

  const payload: Record<string, unknown> = {
    ...fields,
    _subject: subject,
    _template: "table", // readable, tabular email layout
    _captcha: "false", // AJAX submissions don't use the captcha page
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as
      | { success?: boolean | string; message?: string }
      | null;

    // FormSubmit returns success as the string "true" or boolean true.
    const success = data?.success === true || data?.success === "true";
    if (res.ok && success) return { ok: true };
    return {
      ok: false,
      error: data?.message || "Something went wrong. Please try again.",
    };
  } catch {
    return {
      ok: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
}
