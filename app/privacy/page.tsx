import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Awardrobe",
  description: "Learn how Awardrobe collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="rounded-2xl bg-card p-8 shadow-sm sm:p-12">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Last updated: April 7, 2026
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Awardrobe (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services (collectively, the &quot;Service&quot;). Please read this policy carefully. By using the Service, you consent to the practices described herein.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium text-foreground">2.1 Information You Provide</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li><strong>Account Information:</strong> Name, email address, password, and profile picture when you create an account.</li>
                    <li><strong>Body Measurements:</strong> Height, weight, and body type information you provide for AI model creation.</li>
                    <li><strong>Photos:</strong> Images of your clothing items, reference photos for AI models, and any other photos you upload.</li>
                    <li><strong>Wardrobe Data:</strong> Information about your clothing items including categories, tags, brands, and style preferences.</li>
                    <li><strong>Payment Information:</strong> Billing details processed securely through our payment providers (we do not store full payment card numbers).</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground">2.2 Automatically Collected Information</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
                    <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
                    <li><strong>Usage Data:</strong> Features used, time spent in app, interaction patterns, and crash reports.</li>
                    <li><strong>Log Data:</strong> IP address, browser type, access times, and referring URLs.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We use the collected information for the following purposes:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Service Delivery:</strong> To provide, maintain, and improve our wardrobe management and AI try-on features.</li>
                <li><strong>AI Processing:</strong> To generate AI models and virtual try-on results based on your photos and measurements.</li>
                <li><strong>Personalization:</strong> To customize your experience, including outfit recommendations and style suggestions.</li>
                <li><strong>Communication:</strong> To send service updates, security alerts, and promotional content (with your consent).</li>
                <li><strong>Analytics:</strong> To understand usage patterns and improve our Service.</li>
                <li><strong>Safety &amp; Security:</strong> To detect, prevent, and address fraud, abuse, and technical issues.</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and respond to legal requests.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">4. AI Features and Photo Processing</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our AI try-on feature processes your photos to create virtual representations. Here&apos;s what you should know:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Photos are processed using secure AI models to generate try-on results.</li>
                <li>Your reference photos are stored securely and used only for your personal AI model.</li>
                <li>AI-generated images are stored in your account and are not shared publicly without your consent.</li>
                <li>You can delete your AI model and associated photos at any time from your account settings.</li>
                <li>We do not use your personal photos to train our general AI models without explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">5. Information Sharing and Disclosure</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Service Providers:</strong> With third-party vendors who assist in operating our Service (cloud hosting, payment processing, analytics).</li>
                <li><strong>Social Features:</strong> When you publish styles or follow other users, your public profile and shared content are visible to others.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>With Your Consent:</strong> For any other purpose disclosed to you with your explicit consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">6. Data Storage and Security</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Data encryption in transit (TLS/SSL) and at rest.</li>
                <li>Secure cloud infrastructure with regular security audits.</li>
                <li>Access controls limiting employee access to personal data.</li>
                <li>Regular security assessments and vulnerability testing.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">7. Data Retention</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We retain your information for as long as your account is active or as needed to provide services. Specifically:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Account data is retained until you delete your account.</li>
                <li>Wardrobe and style data is retained for the duration of your account.</li>
                <li>AI models and try-on results can be deleted at any time; deletion is permanent.</li>
                <li>Usage analytics may be retained in anonymized form for longer periods.</li>
                <li>Some data may be retained as required by law or for legitimate business purposes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">8. Your Rights and Choices</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations).</li>
                <li><strong>Portability:</strong> Request your data in a portable format.</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                To exercise these rights, please contact us at awardrobe@163.com or through your account settings.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">9. Children&apos;s Privacy</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we discover that we have collected information from a child under 13, we will delete it promptly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">10. International Data Transfers</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. When we transfer data internationally, we implement appropriate safeguards such as standard contractual clauses to protect your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">11. Third-Party Services</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our Service may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">12. Cookies and Tracking Technologies</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We use cookies and similar tracking technologies to enhance your experience:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li><strong>Essential Cookies:</strong> Required for basic functionality and security.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our Service.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You can manage cookie preferences through your browser settings, though disabling certain cookies may affect functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">13. Changes to This Policy</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date. For significant changes, we may also send you a notification through the app or via email. Your continued use of the Service after changes become effective constitutes acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground">14. Contact Us</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 rounded-xl bg-secondary p-6">
                <p className="text-foreground"><strong>Awardrobe Privacy Team</strong></p>
                <p className="mt-2 text-muted-foreground">Email: awardrobe@163.com</p>
                <p className="text-muted-foreground">Address: 123 Fashion Street, Suite 100, San Francisco, CA 94102</p>
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                For EU residents, you also have the right to lodge a complaint with your local data protection authority.
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              By using Awardrobe, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
