"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [consentError, setConsentError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    // ✅ Check if consent checkbox is ticked
    if (!formData.get("consent")) {
      setConsentError(true)
      setLoading(false)
      return
    } else {
      setConsentError(false)
    }

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbw8ssWIWVu0G4T64LFsYvrTJW1vQJbLEgsmAQyPmGPAeiBBeMOj93cpSnXgBn3LGFrvBg/exec",
        {
          method: "POST",
          body: formData,
        }
      )

      const result = await res.json()

      if (result.status === "success") {
        alert("✅ Our Team Will Contact you Shortly")
        form.reset()
      } else {
        alert("❌ Failed: " + result.message)
      }
    } catch (err) {
      alert("❌ Error submitting form: " + err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight">GET IN TOUCH</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss your project and explore how we can help you achieve
            your goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-black text-black mb-8">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input id="fullName" name="fullName" placeholder="Write Your Full Name" required className="rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="Write Your Contact Number" required className="rounded-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Write your Email Address" required className="rounded-lg" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input id="company" name="company" placeholder="Your Company" className="rounded-lg" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="Tell us about your project..." rows={6} required className="rounded-lg" />
                </div>

                {/* ✅ Checkbox inside form */}
                <div
                  className={`flex items-start space-x-2 p-2 rounded border ${consentError ? "border-red-500 bg-red-50" : "border-gray-300"
                    }`}
                >
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    onChange={(e) => setConsentError(!e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to the{" "}
                    <a href="/terms-of-service" className="text-blue-600 underline">Terms and Conditions</a> &{" "}
                    <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> of the website
                  </label>
                </div>
                {consentError && (
                  <p className="text-red-500 text-sm">You must agree before submitting.</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-black text-black mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Email</h3>
                    <p className="text-gray-700">hello@rareus.in</p>
                    <p className="text-gray-700">support@rareus.in</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Phone</h3>
                    <p className="text-gray-700">+91 9264247706</p>
                    <p className="text-gray-700">+91 7479482388</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Office</h3>
                    <p className="text-gray-700">
                      T3-A405 NX-ONE near Gaur City Mall, Greater Noida, Uttar Pradesh, 201301
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black mb-1">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.954182250317!2d77.43239299999999!3d28.601151299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee57ca9e1ca5%3A0xdc324bf9fd262212!2sNX-ONE!5e0!3m2!1sen!2sin!4v1757750178926!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  )
}
