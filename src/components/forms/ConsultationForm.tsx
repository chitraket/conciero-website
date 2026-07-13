"use client";

import { useFormik } from "formik";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { consultationSchema } from "@/lib/validations";
import { sendForm } from "@/lib/form-delivery";

const FieldError = ({ msg }: { msg?: string }) =>
  msg ? <p className="mt-1 text-xs text-destructive">{msg}</p> : null;

export function ConsultationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      timeline: "",
      website: "",
    },
    validationSchema: consultationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (values.website) {
        resetForm();
        toast.success("Thanks! We'll match you with the right assistant shortly.");
        return;
      }
      const res = await sendForm(
        `New consultation request from ${values.name}`,
        values,
      );
      if (res.ok) {
        resetForm();
        toast.success("Thanks! We'll match you with the right assistant shortly.");
      } else {
        toast.error(res.error);
      }
    },
  });

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

      <form onSubmit={formik.handleSubmit} noValidate className="space-y-3">
        {/* Honeypot — display:none prevents browser autofill */}
        <div style={{ display: "none" }} aria-hidden="true">
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
            className="min-h-15 resize-none"
            {...formik.getFieldProps("message")}
          />
          <FieldError msg={formik.touched.message ? formik.errors.message : undefined} />
        </div>

        <div>
          <select
            id="preferred-timeline"
            aria-label="Preferred start timeline"
            className="flex h-10 w-full rounded-md border border-input bg-background py-2 pl-3 pr-10 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground cursor-pointer appearance-none scheme-light"
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

        <Button
          type="submit"
          variant="accent"
          className="w-full"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Sending…" : "Book a Free Consultation"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-3">
        Includes a 1-week free trial · No credit card required
      </p>
    </div>
  );
}
