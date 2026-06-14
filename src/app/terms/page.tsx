import type { Metadata } from "next";
import { FileText, Scale, Ban, CreditCard, Shield, TriangleAlert } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions - Conciero",
  description:
    "Read Conciero's terms and conditions for using our virtual assistant and concierge services. Understand your rights and responsibilities as a user.",
  path: "/terms",
  keywords: [
    "terms and conditions",
    "terms of service",
    "user agreement",
    "service terms",
  ],
});

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
              <FileText className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Terms & Conditions
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
                1. Agreement to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions (&quot;Terms&quot;) constitute a
                legally binding agreement between you (&quot;User,&quot;
                &quot;you,&quot; or &quot;your&quot;) and Conciero
                (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) governing your use of our virtual assistant and
                concierge services (&quot;Services&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using our Services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms. If you do
                not agree to these Terms, you may not access or use our Services.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Scale className="w-6 h-6 text-accent" />2. Description of Services
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conciero provides virtual assistant and concierge services,
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal and executive assistance</li>
                <li>Travel planning and coordination</li>
                <li>Calendar and schedule management</li>
                <li>Research and information gathering</li>
                <li>Administrative support</li>
                <li>Lifestyle and concierge services</li>
                <li>Business operations support</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The specific services provided will depend on your selected plan
                and individual requirements.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                3. User Responsibilities
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using our Services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information when registering</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>
                  Notify us immediately of any unauthorized access to your account
                </li>
                <li>Use the Services only for lawful purposes</li>
                <li>
                  Not use the Services to harm, harass, or infringe on the rights
                  of others
                </li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Provide clear and reasonable task instructions</li>
                <li>
                  Respond to queries in a timely manner to facilitate service
                  delivery
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Ban className="w-6 h-6 text-accent" />4. Prohibited Uses
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not use our Services for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Any illegal, fraudulent, or unauthorized purpose</li>
                <li>Activities that violate any applicable laws or regulations</li>
                <li>Harassment, abuse, or harm to any person</li>
                <li>Transmitting viruses, malware, or other harmful code</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Interfering with or disrupting the Services</li>
                <li>Collecting or harvesting personal information of others</li>
                <li>Any activity that could damage our reputation or goodwill</li>
                <li>Tasks that involve unlawful discrimination</li>
                <li>
                  Activities related to gambling, adult content, or controlled
                  substances
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-accent" />5. Payment Terms
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Subscription Fees
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  Services are provided on a subscription basis with fees as
                  outlined in your selected plan
                </li>
                <li>All fees are quoted in USD unless otherwise specified</li>
                <li>
                  Payment is due in advance at the beginning of each billing cycle
                </li>
                <li>
                  We accept major credit cards and other payment methods as
                  indicated
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Billing
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>
                  Subscriptions automatically renew unless cancelled before the
                  renewal date
                </li>
                <li>
                  You authorize us to charge your payment method for recurring
                  fees
                </li>
                <li>
                  Invoices will be sent via email to your registered address
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Late Payments
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Late payments may result in suspension or termination of
                  Services
                </li>
                <li>
                  We reserve the right to charge interest on overdue amounts
                </li>
                <li>
                  You are responsible for all collection costs and legal fees
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                6. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content, trademarks, logos, and intellectual property related
                to Conciero and our Services are owned by or licensed to us. You
                may not use, reproduce, or distribute our intellectual property
                without prior written consent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Any work product created by our virtual assistants on your behalf
                during service delivery becomes your property upon full payment.
                However, we retain the right to use general knowledge, skills, and
                experience gained during service delivery.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />7. Confidentiality
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We understand the sensitive nature of the information you share
                with us. We commit to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Treating all client information as confidential</li>
                <li>
                  Using your information only for the purpose of providing Services
                </li>
                <li>
                  Not disclosing your information to third parties except as
                  required by law or with your consent
                </li>
                <li>
                  Implementing appropriate security measures to protect your
                  information
                </li>
                <li>Requiring all personnel to sign confidentiality agreements</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <TriangleAlert className="w-6 h-6 text-accent" />8. Limitation of
                Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Our total liability shall not exceed the fees paid by you in the
                  twelve (12) months preceding the claim
                </li>
                <li>
                  We are not liable for any indirect, incidental, special,
                  consequential, or punitive damages
                </li>
                <li>
                  We are not liable for any loss of profits, data, or business
                  opportunities
                </li>
                <li>
                  We are not responsible for delays or failures caused by
                  circumstances beyond our reasonable control
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                While we strive for excellence in all tasks, we cannot guarantee
                specific outcomes as many factors are outside our control.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                9. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may terminate the service agreement:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  By providing written notice as specified in your service plan
                </li>
                <li>Immediately if the other party breaches these Terms</li>
                <li>
                  If continued service becomes impractical due to legal or
                  regulatory changes
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Upon termination, you remain responsible for any outstanding fees.
                We will provide a reasonable transition period for ongoing tasks.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                10. Dispute Resolution
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event of any dispute arising from these Terms or the
                Services:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  Parties agree to first attempt resolution through good-faith
                  negotiation
                </li>
                <li>
                  If negotiation fails, disputes will be resolved through binding
                  arbitration
                </li>
                <li>
                  Arbitration shall be conducted in Dubai, UAE, under applicable
                  arbitration rules
                </li>
                <li>
                  Each party shall bear their own costs unless otherwise awarded
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                11. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with
                the laws of the United Arab Emirates, without regard to its
                conflict of law provisions. Any legal action arising from these
                Terms shall be brought exclusively in the courts of Dubai, UAE.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                12. Modifications to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated via email or through our platform.
                Continued use of our Services after such modifications constitutes
                acceptance of the updated Terms. We encourage you to review these
                Terms periodically.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                13. Contact Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions or concerns regarding these Terms, please contact
                us:
              </p>
              <div className="text-muted-foreground">
                <p>
                  <strong>Email:</strong> care@conciero.co
                </p>
                <p className="mt-2">
                  <strong>Address:</strong> Madina Towers, Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
