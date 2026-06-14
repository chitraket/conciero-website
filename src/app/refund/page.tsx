import type { Metadata } from "next";
import {
  RefreshCw,
  Clock,
  CircleCheckBig,
  CircleX,
  MessageSquare,
  DollarSign,
} from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy - Conciero",
  description:
    "Learn about Conciero's refund policy for virtual assistant and concierge services. Understand our commitment to customer satisfaction and fair refund practices.",
  path: "/refund",
  keywords: [
    "refund policy",
    "cancellation policy",
    "money back",
    "service guarantee",
  ],
});

export default function RefundPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
              <RefreshCw className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Refund Policy
            </h1>
            <p className="text-base text-muted-foreground">
              Last updated: December 29, 2025
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Our Commitment to Satisfaction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Conciero, we are committed to delivering exceptional virtual
                assistant and concierge services. We understand that
                circumstances may arise where you need to cancel your
                subscription or request a refund. This policy outlines our fair
                and transparent approach to refunds and cancellations.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We believe in building long-term relationships based on trust and
                quality service. If you are not satisfied with our services, we
                want to hear from you and make things right.
              </p>
            </div>
            <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 md:p-6 mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Clock className="w-6 h-6 text-accent" />7-Day Free Trial
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All new clients receive a 7-day free trial to experience our
                services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>No credit card required to start your trial</li>
                <li>Full access to our platform and assistant support</li>
                <li>Cancel anytime during the trial with no obligation</li>
                <li>No charges if you decide not to continue after the trial</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                This allows you to evaluate our services risk-free before making
                any financial commitment.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <CircleCheckBig className="w-6 h-6 text-accent" />
                Eligibility for Refunds
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may be eligible for a refund under the following
                circumstances:
              </p>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Full Refund Eligibility
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  Cancellation within 48 hours of initial subscription payment
                </li>
                <li>
                  Service not delivered due to our inability or technical issues
                  on our end
                </li>
                <li>Significant failure to meet agreed-upon service levels</li>
                <li>Unauthorized charges or billing errors</li>
              </ul>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Partial Refund/Credit Eligibility
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Cancellation within the first 14 days of a billing cycle
                  (pro-rated refund)
                </li>
                <li>
                  Documented service quality issues that were not resolved despite
                  reasonable attempts
                </li>
                <li>
                  Downgrading to a lower-tier plan (credit applied to future
                  billing)
                </li>
                <li>
                  Extended service outages affecting your ability to use the
                  platform
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <CircleX className="w-6 h-6 text-accent" />
                Non-Refundable Situations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Refunds will generally not be provided in the following cases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Cancellation after 14 days of a billing cycle (service already
                  consumed)
                </li>
                <li>
                  Failure to use allocated hours or services during the billing
                  period
                </li>
                <li>
                  Dissatisfaction not related to service quality (e.g., change of
                  business needs)
                </li>
                <li>
                  Violation of our Terms & Conditions leading to account
                  termination
                </li>
                <li>
                  Third-party expenses already incurred on your behalf (travel
                  bookings, purchases, etc.)
                </li>
                <li>Custom or one-time project fees after work has commenced</li>
                <li>
                  Setup fees or onboarding costs after services have been
                  initiated
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-accent" />
                How to Request a Refund
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To request a refund, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>Contact Support:</strong> Email us at care@conciero.co
                  with the subject line &quot;Refund Request&quot;
                </li>
                <li>
                  <strong>Provide Details:</strong> Include your account email,
                  subscription plan, and reason for the refund request
                </li>
                <li>
                  <strong>Documentation:</strong> If applicable, provide any
                  relevant documentation supporting your request
                </li>
                <li>
                  <strong>Review:</strong> Our team will review your request
                  within 3-5 business days
                </li>
                <li>
                  <strong>Resolution:</strong> You will receive a response with
                  our decision and next steps
                </li>
              </ol>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <DollarSign className="w-6 h-6 text-accent" />
                Refund Processing
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Once a refund is approved:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Refunds will be processed to the original payment method</li>
                <li>
                  Credit card refunds typically appear within 5-10 business days
                </li>
                <li>
                  Bank transfers may take 7-14 business days depending on your
                  financial institution
                </li>
                <li>
                  You will receive email confirmation once the refund is initiated
                </li>
                <li>
                  Account credits, if applicable, will be applied immediately to
                  your account
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Subscription Cancellation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may cancel your subscription at any time:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Monthly Plans:</strong> Cancel anytime; service
                  continues until the end of the current billing period
                </li>
                <li>
                  <strong>Annual Plans:</strong> Cancel anytime; no refund for
                  remaining months unless within first 30 days (pro-rated refund
                  may apply)
                </li>
                <li>
                  <strong>Enterprise Plans:</strong> Cancellation terms as
                  specified in your contract
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To cancel, email care@conciero.co or contact your account manager.
                Please provide at least 7 days notice before your next billing
                date to avoid automatic renewal charges.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Service Credits
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In some cases, we may offer service credits instead of monetary
                refunds:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Credits can be applied to future billing cycles</li>
                <li>
                  Credits are non-transferable and cannot be exchanged for cash
                </li>
                <li>Credits expire 12 months from the date of issue</li>
                <li>
                  Credits can be used for plan upgrades or additional services
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Disputes and Chargebacks
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We encourage you to contact us directly before initiating a
                chargeback with your bank or credit card company. Filing a
                chargeback without first contacting us may result in account
                suspension. We are committed to resolving any issues fairly and
                promptly through direct communication.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Special Circumstances
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand that exceptional circumstances may arise. In cases
                such as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Medical emergencies</li>
                <li>Natural disasters affecting your business</li>
                <li>Significant personal hardship</li>
                <li>Force majeure events</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Please reach out to our support team, and we will work with you on
                a case-by-case basis to find a fair resolution.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Refund Policy or need
                assistance with a refund request, please contact us:
              </p>
              <div className="text-muted-foreground">
                <p>
                  <strong>Email:</strong> care@conciero.co
                </p>
                <p className="mt-2">
                  <strong>Response Time:</strong> We aim to respond to all refund
                  inquiries within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
