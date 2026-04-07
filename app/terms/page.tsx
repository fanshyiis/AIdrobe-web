import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Awardrobe",
  description: "Terms and conditions for using Awardrobe app and services.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-10">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: April 7, 2026
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By downloading, installing, or using the Awardrobe mobile application (&quot;App&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our App.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. Your continued use of the App following any changes constitutes your acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Description of Service
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Awardrobe is a smart wardrobe management application that allows users to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Digitize and organize their clothing items</li>
                <li>Create and save outfit combinations</li>
                <li>Use AI-powered virtual try-on features</li>
                <li>Discover and share styles with other users</li>
                <li>Access premium features through subscription plans</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. User Accounts
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To use certain features of the App, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You must be at least 13 years old to create an account and use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. User Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You retain ownership of all content you upload to the App, including photos of clothing items, outfit combinations, and profile information (&quot;User Content&quot;).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By uploading User Content, you grant Awardrobe a non-exclusive, worldwide, royalty-free license to use, store, and process your content solely for the purpose of providing and improving our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You represent that you have all necessary rights to upload your User Content and that it does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. AI Features and Virtual Try-On
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our AI-powered features, including virtual try-on, are provided for entertainment and reference purposes only. The generated images:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>May not accurately represent actual fit or appearance</li>
                <li>Should not be used as the sole basis for purchasing decisions</li>
                <li>Are generated using your provided photos and AI models</li>
                <li>May be stored temporarily for processing purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Subscription and Payments
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Awardrobe offers both free and premium subscription plans (&quot;Awardrobe Pro&quot;). For paid subscriptions:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Payments are processed through Apple App Store or Google Play Store</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>Prices may vary by region and are subject to change</li>
                <li>Refunds are handled according to the respective app store policies</li>
              </ul>
              <div className="bg-secondary/50 rounded-xl p-4 mt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Current Pricing:</strong> Annual plan at $99.99/year ($8.33/month) or Monthly plan at $9.99/month.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. Prohibited Conduct
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Upload inappropriate, offensive, or illegal content</li>
                <li>Use the App for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the App&apos;s functionality</li>
                <li>Scrape, copy, or redistribute content without permission</li>
                <li>Impersonate others or create fake accounts</li>
                <li>Upload content that infringes intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Awardrobe name, logo, and all related graphics, designs, and software are the property of Awardrobe and are protected by intellectual property laws. You may not use our trademarks without prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                9. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF THE APP IS AT YOUR OWN RISK.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                10. Limitation of Liability
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AWARDROBE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO LOSS OF DATA, PROFITS, OR GOODWILL.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                11. Termination
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may suspend or terminate your account at any time for violation of these Terms or for any other reason at our discretion. Upon termination, your right to use the App will immediately cease, and we may delete your User Content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                12. Governing Law
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Awardrobe operates, without regard to conflict of law principles.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                13. Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="bg-secondary/50 rounded-xl p-4">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> awardrobe@163.com
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong className="text-foreground">Address:</strong> Awardrobe Inc., 123 Fashion Avenue, San Francisco, CA 94102
                </p>
              </div>
            </section>
          </div>

          {/* Footer Links */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4 text-sm">
            <Link href="/privacy" className="text-accent hover:underline">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link href="/" className="text-accent hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
