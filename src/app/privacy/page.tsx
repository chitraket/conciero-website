import type { Metadata } from "next";
import { Shield, Eye, Database, Lock, Globe, Mail } from "lucide-react";

import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy - Conciero",
  description:
    "Learn how Conciero protects your personal information and data. Our comprehensive privacy policy outlines our commitment to data security and user privacy.",
  path: "/privacy",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "data security",
    "user privacy",
  ],
});

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 md:pt-32 pb-8 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
              <Shield className="w-7 h-7 text-accent" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Privacy Policy
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
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Eye className="w-6 h-6 text-accent" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Conciero (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;), we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard your
                information when you use our virtual assistant and concierge
                services.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By accessing or using our services, you agree to this Privacy
                Policy. If you do not agree with the terms of this policy, please
                do not access or use our services.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Database className="w-6 h-6 text-accent" />
                Information We Collect
              </h2>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Personal Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Name, email address, and phone number</li>
                <li>Billing and payment information</li>
                <li>Company name and job title</li>
                <li>Communication preferences</li>
                <li>Any information you provide when using our services</li>
              </ul>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Usage Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
                <li>Browser type and version</li>
                <li>Device information and IP address</li>
                <li>Pages visited and time spent on our platform</li>
                <li>Referring website addresses</li>
                <li>Service interaction data</li>
              </ul>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                Task-Related Information
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Task descriptions and requirements</li>
                <li>Documents, files, or media you share with us</li>
                <li>Calendar and scheduling information</li>
                <li>Travel preferences and itineraries</li>
                <li>Communication records related to task completion</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Lock className="w-6 h-6 text-accent" />
                How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>Service Delivery:</strong> To provide, maintain, and
                  improve our virtual assistant and concierge services
                </li>
                <li>
                  <strong>Communication:</strong> To respond to inquiries, send
                  updates, and provide customer support
                </li>
                <li>
                  <strong>Personalization:</strong> To customize our services
                  based on your preferences and usage patterns
                </li>
                <li>
                  <strong>Security:</strong> To protect against unauthorized
                  access and ensure the security of our platform
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with applicable
                  laws, regulations, and legal processes
                </li>
                <li>
                  <strong>Analytics:</strong> To analyze usage trends and improve
                  user experience
                </li>
                <li>
                  <strong>Marketing:</strong> To send promotional communications
                  (with your consent)
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Globe className="w-6 h-6 text-accent" />
                Information Sharing and Disclosure
              </h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information in the following
                circumstances:
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party
                  vendors who assist in operating our services (subject to
                  confidentiality agreements)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court
                  order, or government request
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a
                  merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly
                  authorize us to share your information
                </li>
                <li>
                  <strong>Protection:</strong> To protect the rights, property, or
                  safety of Conciero, our users, or others
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement industry-standard security measures to protect your
                personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>256-bit SSL/TLS encryption for data transmission</li>
                <li>Encrypted storage for sensitive data</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Strict access controls and authentication protocols</li>
                <li>Employee training on data protection practices</li>
                <li>Incident response and breach notification procedures</li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Your Rights and Choices
              </h2>
              <p className="text-muted-foreground mb-4">
                You have the following rights regarding your personal
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Access:</strong> Request a copy of the personal data we
                  hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Request correction of inaccurate or
                  incomplete data
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal
                  data (subject to legal obligations)
                </li>
                <li>
                  <strong>Portability:</strong> Request transfer of your data to
                  another service provider
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing
                  communications at any time
                </li>
                <li>
                  <strong>Restriction:</strong> Request restriction of processing
                  in certain circumstances
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your
                experience on our platform. These technologies help us:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and recommendations</li>
                <li>Improve our services and user experience</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
                However, disabling cookies may affect the functionality of our
                services.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Data Retention
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information for as long as necessary to
                fulfill the purposes outlined in this Privacy Policy, unless a
                longer retention period is required or permitted by law. When your
                information is no longer needed, we securely delete or anonymize
                it.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                International Data Transfers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                As a global service provider, we may transfer your information to
                countries outside your jurisdiction. We ensure appropriate
                safeguards are in place to protect your data during such
                transfers, including standard contractual clauses and compliance
                with applicable data protection regulations.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Children&apos;s Privacy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18.
                We do not knowingly collect personal information from children. If
                we become aware that we have collected personal information from a
                child, we will take steps to delete such information promptly.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                Changes to This Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or applicable laws. We will notify you of
                any material changes by posting the updated policy on our website
                and updating the &quot;Last updated&quot; date. We encourage you
                to review this policy periodically.
              </p>
            </div>
            <div className="bg-card rounded-xl p-5 md:p-6 shadow-card">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-3">
                <Mail className="w-6 h-6 text-accent" />
                Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our data practices, please contact us:
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
