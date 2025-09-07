import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-black text-black mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: September 2025</p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Rareus. These Terms of Service (“Terms”) govern your use of our website, products, and
              services. By accessing or using Rareus, you agree to comply with these Terms. If you do not agree, you
              must discontinue using our services.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 18 years old or have the consent of a parent or guardian to use our services. By
              using Rareus, you represent and warrant that you meet these eligibility requirements.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Engage in fraudulent, abusive, or harmful activities.</li>
              <li>Interfere with the security or functionality of our website.</li>
              <li>Use our services to transmit unauthorized advertising or spam.</li>
              <li>Violate any applicable laws or third-party rights.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All content, logos, designs, and materials on Rareus are the property of Rareus or its licensors. You may
              not copy, modify, distribute, or reproduce any material without prior written permission.
            </p>
          </section>

          {/* Purchases & Payments */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Purchases & Payments</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you purchase a product or service from Rareus, you agree to provide accurate billing information. All
              payments must be completed using the accepted payment methods. Refunds, if applicable, will be governed by
              our <Link href="/refund-policy" className="text-blue-600 hover:underline">Refund Policy</Link>.
            </p>
          </section>

          {/* Service Availability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Service Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide uninterrupted access to our services, but we do not guarantee that Rareus will always
              be available, error-free, or secure. We may suspend or modify our services at any time without prior
              notice.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rareus is not liable for any indirect, incidental, or consequential damages arising from the use of our
              services. Your sole remedy for dissatisfaction with our services is to stop using them.
            </p>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to Rareus if you violate these Terms or engage in
              unlawful activities. Upon termination, your right to use our services will immediately cease.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Rareus may update these Terms from time to time. We encourage you to review this page periodically. Your
              continued use of our services after changes means you accept the updated Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <strong>support@rareus.in</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
