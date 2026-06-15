"use client";

import { useState } from "react";
import { useFormik } from "formik";

import { careersSchema } from "@/lib/validations";
import { submitConsultation, initialContactState } from "@/app/actions/contact";

const inputClass =
  "flex h-10 w-full rounded-md border border-input px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-background";

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-1 text-xs text-destructive">{msg}</p> : null;

/**
 * Careers application form - validation + submission handled by Formik + Yup,
 * with delivery via the `submitConsultation` Server Action.
 */
export function CareersForm() {
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      experience: "",
      expertise: "",
      message: "",
      website: "",
    },
    validationSchema: careersSchema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setSubmitError("");
      if (values.website) {
        setStatus("success");
        return;
      }
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => fd.append(k, String(v ?? "")));
      const res = await submitConsultation(initialContactState, fd);
      if (res.status === "success") {
        setStatus("success");
        resetForm();
      } else {
        setSubmitError(
          res.message || "Something went wrong. Please try again.",
        );
      }
    },
  });

  if (formik.status === "success") {
    return (
      <div
        role="status"
        className="rounded-md border border-border bg-secondary p-4 text-sm text-foreground"
      >
        Thanks for applying! We&apos;ll review your application and be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate className="space-y-4">
      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...formik.getFieldProps("website")}
        />
      </div>

      <div>
        <input
          className={inputClass}
          placeholder="Full Name *"
          {...formik.getFieldProps("name")}
        />
        <FieldError
          msg={formik.touched.name ? formik.errors.name : undefined}
        />
      </div>
      <div>
        <input
          type="email"
          className={inputClass}
          placeholder="Email Address *"
          {...formik.getFieldProps("email")}
        />
        <FieldError
          msg={formik.touched.email ? formik.errors.email : undefined}
        />
      </div>
      <div>
        <input
          type="tel"
          className={inputClass}
          placeholder="Phone Number *"
          {...formik.getFieldProps("phone")}
        />
        <FieldError
          msg={formik.touched.phone ? formik.errors.phone : undefined}
        />
      </div>
      <div>
        <input
          className={inputClass}
          placeholder="Current Location *"
          {...formik.getFieldProps("location")}
        />
        <FieldError
          msg={formik.touched.location ? formik.errors.location : undefined}
        />
      </div>
      <div>
        <input
          className={inputClass}
          placeholder="Years of Experience *"
          {...formik.getFieldProps("experience")}
        />
        <FieldError
          msg={formik.touched.experience ? formik.errors.experience : undefined}
        />
      </div>
      <div>
        <select
          aria-label="Area of Expertise"
          className="flex h-10 w-full items-center justify-between rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-background"
          {...formik.getFieldProps("expertise")}
        >
          <option value="" disabled>
            Area of Expertise *
          </option>
          <option value="virtual-assistant">Virtual Assistant</option>
          <option value="executive-support">Executive / Founder Support</option>
          <option value="concierge">Concierge</option>
          <option value="marketing-sales">
            Marketing / Sales / Operations
          </option>
          <option value="other">Other</option>
        </select>
        <FieldError
          msg={formik.touched.expertise ? formik.errors.expertise : undefined}
        />
      </div>
      <div>
        <textarea
          className="flex w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-background min-h-[120px] resize-none"
          placeholder="Why Do You Want to Work at Conciero? *"
          {...formik.getFieldProps("message")}
        />
        <FieldError
          msg={formik.touched.message ? formik.errors.message : undefined}
        />
      </div>

      {submitError && <p className="text-xs text-destructive">{submitError}</p>}

      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 px-4 w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-6"
        type="submit"
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? "Submitting…" : "Submit Application"}
      </button>
    </form>
  );
}
