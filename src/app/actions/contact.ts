"use server";

/**
 * Server Action stub for the consultation / contact forms.
 *
 * It validates input server-side and returns a typed result the client can
 * render. The actual delivery (email / CRM / webhook) is intentionally left as
 * a single TODO so you can plug in your provider (Resend, SendGrid, HubSpot,
 * a custom API, …) without touching the UI.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<"name" | "email" | "message", string>>;
};

export const initialContactState: ContactState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitConsultation(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  // Honeypot: bots fill this hidden field. Silently succeed to waste their time.
  if (formData.get("website")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const timeline = String(formData.get("timeline") ?? "").trim();

  const errors: ContactState["errors"] = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email || !EMAIL_RE.test(email)) errors.email = "Please enter a valid email.";
  if (!message) errors.message = "Tell us what you'd like to delegate.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  // TODO: deliver the lead. Example with Resend:
  //   await resend.emails.send({
  //     from: "leads@conciero.co",
  //     to: "sales@conciero.co",
  //     subject: `New consultation request from ${name}`,
  //     text: `Email: ${email}\nPhone: ${phone}\nTimeline: ${timeline}\n\n${message}`,
  //   });
  void phone;
  void timeline;

  return {
    status: "success",
    message: "Thanks! We'll match you with the right assistant shortly.",
  };
}
