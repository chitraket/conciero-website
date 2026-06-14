import * as Yup from "yup";

/**
 * Yup validation schemas shared by the Formik-powered forms.
 * Each schema includes a `website` honeypot field (kept empty by humans).
 */

export const consultationSchema = Yup.object({
  name: Yup.string().trim().required("Please enter your name.").max(100),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Email is required.")
    .max(255),
  phone: Yup.string().max(20, "Phone number is too long."),
  message: Yup.string()
    .trim()
    .required("Tell us what you'd like to delegate.")
    .max(2000),
  timeline: Yup.string(),
  website: Yup.string(),
});

export type ConsultationValues = Yup.InferType<typeof consultationSchema>;

export const contactSchema = Yup.object({
  name: Yup.string().trim().required("Please enter your name.").max(100),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Email is required.")
    .max(255),
  phone: Yup.string().max(20, "Phone number is too long."),
  company: Yup.string().max(100),
  serviceType: Yup.string(),
  message: Yup.string().trim().required("Please enter a message.").max(2000),
  website: Yup.string(),
});

export type ContactValues = Yup.InferType<typeof contactSchema>;

export const careersSchema = Yup.object({
  name: Yup.string().trim().required("Full name is required.").max(100),
  email: Yup.string()
    .trim()
    .email("Please enter a valid email.")
    .required("Email is required.")
    .max(255),
  phone: Yup.string().trim().required("Phone number is required.").max(20),
  location: Yup.string().trim().required("Current location is required."),
  experience: Yup.string().trim().required("Years of experience is required."),
  expertise: Yup.string().required("Please select your area of expertise."),
  message: Yup.string()
    .trim()
    .required("Please tell us why you want to work at Conciero.")
    .max(2000),
  website: Yup.string(),
});

export type CareersValues = Yup.InferType<typeof careersSchema>;
