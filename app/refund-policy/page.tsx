import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="text-4xl font-black text-black mb-8">Refund Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last updated: January 2024</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer refunds for our services under specific circumstances. Refund requests must be submitted within
              30 days of service delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Refund Process</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To request a refund, please contact our support team with your order details and reason for the refund
              request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Processing Time</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Approved refunds will be processed within 5-10 business days and credited back to your original payment
              method.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-black mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For refund requests or questions about this policy, please contact us at refunds@rareus.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
