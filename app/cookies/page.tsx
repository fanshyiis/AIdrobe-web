import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-background">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="rounded-2xl bg-card p-8 shadow-sm sm:p-12">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold text-foreground mb-2">
            Cookie Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last updated: April 7, 2026
          </p>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">1. What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are placed on your device when you visit a website. They are widely 
                used to make websites work more efficiently and provide information to website owners. Cookies help 
                us remember your preferences, understand how you use our app, and improve your overall experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Awardrobe uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Essential Cookies:</strong> Required for the app to function properly, including authentication and security</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings to personalize your experience</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our app to improve our services</li>
                <li><strong>Performance Cookies:</strong> Monitor and improve app performance and loading times</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              
              <div className="bg-secondary/50 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-foreground mb-2">Strictly Necessary Cookies</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  These cookies are essential for you to use the app and its features.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Cookie Name</th>
                        <th className="text-left py-2 text-foreground">Purpose</th>
                        <th className="text-left py-2 text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">session_id</td>
                        <td className="py-2">User authentication</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">csrf_token</td>
                        <td className="py-2">Security protection</td>
                        <td className="py-2">Session</td>
                      </tr>
                      <tr>
                        <td className="py-2">auth_token</td>
                        <td className="py-2">Keep you logged in</td>
                        <td className="py-2">30 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 mb-4">
                <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  These cookies allow us to remember choices you make and provide enhanced features.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Cookie Name</th>
                        <th className="text-left py-2 text-foreground">Purpose</th>
                        <th className="text-left py-2 text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">user_preferences</td>
                        <td className="py-2">Store your app settings</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">theme</td>
                        <td className="py-2">Remember theme preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                      <tr>
                        <td className="py-2">language</td>
                        <td className="py-2">Language preference</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2">Analytics Cookies</h3>
                <p className="text-muted-foreground text-sm mb-2">
                  These cookies help us understand how visitors interact with our app.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-foreground">Cookie Name</th>
                        <th className="text-left py-2 text-foreground">Purpose</th>
                        <th className="text-left py-2 text-foreground">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="py-2">_ga</td>
                        <td className="py-2">Google Analytics tracking</td>
                        <td className="py-2">2 years</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2">_gid</td>
                        <td className="py-2">Google Analytics session</td>
                        <td className="py-2">24 hours</td>
                      </tr>
                      <tr>
                        <td className="py-2">analytics_id</td>
                        <td className="py-2">Internal analytics</td>
                        <td className="py-2">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may also use third-party cookies from trusted partners to help us analyze usage, 
                process payments, and improve our services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Google Analytics:</strong> For understanding app usage patterns and improving user experience</li>
                <li><strong>Stripe:</strong> For secure payment processing (if you subscribe to Pro)</li>
                <li><strong>Apple/Google:</strong> For App Store and Play Store integration</li>
                <li><strong>Firebase:</strong> For crash reporting and performance monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Managing Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have control over how cookies are used. You can manage your cookie preferences in several ways:
              </p>
              <div className="bg-secondary/50 rounded-xl p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Browser Settings</h3>
                  <p className="text-muted-foreground text-sm">
                    Most browsers allow you to block or delete cookies through their settings. However, 
                    blocking essential cookies may prevent you from using certain features of Awardrobe.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">In-App Settings</h3>
                  <p className="text-muted-foreground text-sm">
                    You can manage your privacy preferences within the Awardrobe app under Settings &gt; Privacy.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Opt-Out Links</h3>
                  <p className="text-muted-foreground text-sm">
                    For Google Analytics, you can opt out by installing the{" "}
                    <a href="https://tools.google.com/dlpage/gaoptout" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      Google Analytics Opt-out Browser Add-on
                    </a>.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Local Storage and Similar Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                In addition to cookies, we may use local storage and similar technologies to store information 
                on your device. This includes caching your wardrobe data for offline access and storing 
                temporary data during outfit creation. These technologies work similarly to cookies but 
                can store larger amounts of data locally on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Mobile App Identifiers</h2>
              <p className="text-muted-foreground leading-relaxed">
                When you use our mobile app, we may collect device identifiers (such as IDFA on iOS or 
                Advertising ID on Android) for analytics and to improve our services. You can reset or 
                limit these identifiers through your device settings under Privacy or Advertising options.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Do Not Track Signals</h2>
              <p className="text-muted-foreground leading-relaxed">
                Some browsers have a &quot;Do Not Track&quot; feature that signals to websites that you do not want 
                to have your online activity tracked. Our app currently does not respond to Do Not Track 
                signals, but you can manage your tracking preferences through the cookie settings described above.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes in technology, 
                legislation, or our data practices. When we make significant changes, we will notify 
                you through the app or by email. We encourage you to review this policy periodically 
                to stay informed about our use of cookies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-secondary/50 rounded-xl p-6">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Email:</strong> awardrobe@163.com
                </p>
                <p className="text-muted-foreground mt-2">
                  <strong className="text-foreground">Address:</strong> Awardrobe Inc., 123 Fashion Street, San Francisco, CA 94102
                </p>
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <p className="text-muted-foreground text-sm">
                For more information about how we handle your personal data, please read our{" "}
                <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>.
                For the terms governing your use of Awardrobe, please see our{" "}
                <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
