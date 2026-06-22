"use client";

import { useState } from "react";
import { useFormik } from "formik";

import { contactSchema } from "@/lib/validations";
import { sendForm } from "@/lib/form-delivery";

const inputClass =
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm";

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-1 text-xs text-destructive">{msg}</p> : null;

/**
 * Contact-page form - validation by Formik + Yup, delivery via FormSubmit
 * (static export, browser-side). Submissions email care@conciero.co.
 */
export function ContactForm() {
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      message: "",
      website: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setSubmitError("");
      if (values.website) {
        setStatus("success");
        return;
      }
      const res = await sendForm(
        `New contact enquiry from ${values.name}`,
        values,
      );
      if (res.ok) {
        setStatus("success");
        resetForm();
      } else {
        setSubmitError(res.error);
      }
    },
  });

  if (formik.status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-border bg-secondary p-4 text-sm text-foreground"
      >
        Thanks! We&apos;ll be in touch shortly.
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="space-y-6">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          className={inputClass}
          tabIndex={-1}
          autoComplete="off"
          {...formik.getFieldProps("website")}
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          id="name"
          className={inputClass}
          placeholder="Your name"
          maxLength={100}
          {...formik.getFieldProps("name")}
        />
        <FieldError
          msg={formik.touched.name ? formik.errors.name : undefined}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email Address *
        </label>
        <input
          id="email"
          type="email"
          className={inputClass}
          placeholder="your.email@example.com"
          maxLength={255}
          {...formik.getFieldProps("email")}
        />
        <FieldError
          msg={formik.touched.email ? formik.errors.email : undefined}
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          className={inputClass}
          placeholder="+91 1234567890"
          maxLength={20}
          {...formik.getFieldProps("phone")}
        />
        <FieldError
          msg={formik.touched.phone ? formik.errors.phone : undefined}
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company (Optional)
        </label>
        <input
          id="company"
          className={inputClass}
          placeholder="Your company name"
          maxLength={100}
          {...formik.getFieldProps("company")}
        />
      </div>
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
          Interested In
        </label>
        <select
          id="serviceType"
          className="w-full px-3 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          {...formik.getFieldProps("serviceType")}
        >
          <option value="">Select a service</option>
          <option value="b2b">B2B Services</option>
          <option value="virtual-assistant">Virtual Assistant</option>
          <option value="b2c">B2C Concierge (India)</option>
          <option value="enterprise">Enterprise Solutions</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Tell us about your needs..."
          rows={5}
          maxLength={2000}
          {...formik.getFieldProps("message")}
        />
        <FieldError
          msg={formik.touched.message ? formik.errors.message : undefined}
        />
      </div>

      {submitError && <p className="text-xs text-destructive">{submitError}</p>}

      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 w-full bg-accent text-accent-foreground hover:bg-accent/90"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
