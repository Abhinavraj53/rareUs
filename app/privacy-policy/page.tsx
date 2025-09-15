import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-black text-black mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: September 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At RAREUS PRIVATE LIMITED, we respect your privacy and are committed to protecting the personal information you share with
              us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
              our software solutions, mobile applications, websites, and marketing services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2.Information We Collect</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, billing details, and any other
                details you provide when signing up, contacting us, or using our services.
              </li>
              <li>
                <strong>Account & Service Data:</strong> Login credentials, preferences, and usage patterns across our
                software, apps, and websites.
              </li>
              <li>
                <strong>Marketing Data:</strong> Data related to campaigns, communications, and engagement with our ads
                or content.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> Device type, IP address, browser type, operating system,
                pages visited, and usage analytics.
              </li>
              <li>
                <strong>Cookies & Tracking:</strong> We use cookies, pixels, and similar technologies to improve user
                experience, track activity, and analyze performance.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>To provide, operate, and maintain our software, apps, and services.</li>
              <li>To process payments and deliver requested services.</li>
              <li>To improve user experience, functionality, and performance.</li>
              <li>To personalize marketing campaigns and deliver targeted content.</li>
              <li>To comply with legal obligations and enforce our Terms of Service.</li>
              <li>To communicate with you about updates, offers, and promotions (with your consent).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Information Sharing & Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. However, we may share data with:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>
                <strong>Service Providers:</strong> Third-party vendors for hosting, analytics, payment processing,
                marketing, and customer support.
              </li>
              <li>
                <strong>Legal & Compliance:</strong> If required by law, regulation, or to protect our rights and
                security.
              </li>
              <li>
                <strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your
                information may be transferred.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Data Retention & Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain personal information only as long as necessary for the purposes outlined in this policy or as
              required by law. We implement technical, administrative, and physical security measures to protect your
              information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Your Rights</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Access, update, or correct your personal data.</li>
              <li>Request deletion of your personal information (subject to legal obligations).</li>
              <li>Opt-out of marketing emails and promotional communications.</li>
              <li>Restrict or object to certain processing activities.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Cookies & Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies, web beacons, and similar tracking tools to analyze trends, administer our websites,
              personalize content, and track user activity. You can control cookies through your browser settings, but
              disabling them may affect functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">8. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you access our services from outside India, please note that your information may be transferred,
              stored, and processed in countries where our servers or service providers are located. We ensure adequate
              safeguards are in place for such transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the
              updated date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us at:{" "}
              <strong>support@rareus.in</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
