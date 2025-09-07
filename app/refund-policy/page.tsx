import Link from "next/link"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-black text-black mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: September 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">1. Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At RareUs, we strive to deliver high-quality software, applications, websites, and marketing services to
              our clients. Since our services involve digital products, customized development, and marketing campaigns,
              refunds are handled on a case-by-case basis under the terms outlined below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">2. Refund Eligibility</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>
                Refund requests must be made within <strong>7 days</strong> of purchase or project initiation, whichever
                is earlier.
              </li>
              <li>
                Refunds are only applicable if the service has not been started or if significant issues were identified
                that RareUs could not reasonably resolve.
              </li>
              <li>
                For marketing campaigns (Google Ads, SEO, Social Media), refunds are not possible once campaigns are
                launched, as third-party costs are non-recoverable.
              </li>
              <li>
                Consultation fees, setup charges, and partially delivered services are <strong>non-refundable</strong>.
              </li>
              <li>
                Custom development, design, or strategy work that has been initiated is <strong>non-refundable</strong>.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">3. Refund Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund, please email our support team at <strong>support@rareus.in</strong> with the following
              details:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Order ID or invoice number</li>
              <li>Service purchased</li>
              <li>Reason for the refund request</li>
              <li>Supporting documents or screenshots (if applicable)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Our team will review your request and respond within <strong>5 business days</strong>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">4. Processing Time</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If your refund is approved, it will be processed within <strong>7-14 business days</strong>. Refunds will
              be credited to your original method of payment. Please note that bank processing times may vary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">5. Non-Refundable Services</h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4">
              <li>Domain name registration & hosting services</li>
              <li>Third-party software, plugins, or tools purchased on your behalf</li>
              <li>Completed or partially completed projects</li>
              <li>Digital marketing campaign costs once launched</li>
              <li>Custom design, development, or consulting fees once initiated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund-related questions or concerns, please contact our support team at:{" "}
              <strong>support@rareus.in</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
