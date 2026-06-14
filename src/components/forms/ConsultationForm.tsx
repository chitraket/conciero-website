"use client";

import { useState } from "react";
import { useFormik } from "formik";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { consultationSchema } from "@/lib/validations";
import { submitConsultation, initialContactState } from "@/app/actions/contact";

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-1 text-xs text-destructive">{msg}</p> : null;

/**
 * Hero consultation form — validation + submit handled by Formik + Yup.
 * On submit it still calls the `submitConsultation` Server Action (server-side
 * validation + future email/CRM delivery).
 */
export function ConsultationForm() {
  const [submitError, setSubmitError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      timeline: "",
      website: "", // honeypot
    },
    validationSchema: consultationSchema,
    onSubmit: async (values, { resetForm, setStatus }) => {
      setSubmitError("");
      // Honeypot: silently succeed for bots.
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
        setSubmitError(res.message || "Something went wrong. Please try again.");
      }
    },
  });

  const succeeded = formik.status === "success";

  return (
    <div
      id="consultation-form"
      className="bg-card rounded-2xl p-4 sm:p-5 lg:p-6 shadow-luxury border border-border scroll-mt-24 max-w-xl mx-auto lg:mx-0"
    >
      <h2 className="text-lg font-semibold mb-1 text-foreground">
        Tell Us What You&apos;d Like to Delegate
      </h2>
      <p className="text-sm text-muted-foreground mb-4">
        Share a few details and we&apos;ll match you with the right assistant.
      </p>

      {succeeded ? (
        <div
          role="status"
          className="rounded-md border border-border bg-secondary p-4 text-sm text-foreground"
        >
          Thanks! We&apos;ll match you with the right assistant shortly.
        </div>
      ) : (
        <form onSubmit={formik.handleSubmit} noValidate className="space-y-3">
          {/* Honeypot */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <Input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...formik.getFieldProps("website")}
            />
          </div>

          <div>
            <Input
              placeholder="Full Name"
              maxLength={100}
              {...formik.getFieldProps("name")}
            />
            <FieldError msg={formik.touched.name ? formik.errors.name : undefined} />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Work Email"
              maxLength={255}
              {...formik.getFieldProps("email")}
            />
            <FieldError msg={formik.touched.email ? formik.errors.email : undefined} />
          </div>
          <div>
            <Input
              type="tel"
              placeholder="Contact Number"
              maxLength={20}
              {...formik.getFieldProps("phone")}
            />
            <FieldError msg={formik.touched.phone ? formik.errors.phone : undefined} />
          </div>
          <div>
            <Textarea
              placeholder="What tasks would you like to delegate?"
              maxLength={2000}
              className="min-h-[60px] resize-none"
              {...formik.getFieldProps("message")}
            />
            <FieldError msg={formik.touched.message ? formik.errors.message : undefined} />
          </div>
          <div>
            <select
              id="preferred-timeline"
              aria-label="Preferred start timeline"
              className="flex h-10 w-full rounded-md border border-input bg-background py-2 pl-3 pr-10 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground cursor-pointer appearance-none [color-scheme:light]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem 1rem",
                backgroundRepeat: "no-repeat",
              }}
              {...formik.getFieldProps("timeline")}
            >
              <option value="">Preferred Start Timeline</option>
              <option value="immediately">Immediately</option>
              <option value="within-a-week">Within a week</option>
              <option value="just-exploring">Just exploring</option>
            </select>
          </div>

          {submitError && <p className="text-xs text-destructive">{submitError}</p>}

          <Button
            type="submit"
            variant="accent"
            className="w-full"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Sending…" : "Book a Free Consultation"}
          </Button>
        </form>
      )}

      <p className="text-xs text-muted-foreground text-center mt-3">
        Includes a 7-day free trial · No credit card required
      </p>
    </div>
  );
}
