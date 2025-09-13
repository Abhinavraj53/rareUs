"use client"

import type React from "react"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const serviceCategories = [
    {
      title: "DEVELOPMENT",
      services: [
        { name: "Website Development", href: "/services#website-dev" },
        { name: "App Development", href: "/services#app-dev" },
        { name: "AI Agent", href: "/services#ai-agent" },
        { name: "Browser Extension", href: "/services#extension" },
        { name: "API Integration", href: "/services#api-integration" },
      ],
    },
    {
      title: "DESIGN",
      services: [
        { name: "Graphic Design", href: "/services#graphic-design" },
        { name: "UI/UX Design", href: "/services#ui-ux" },
        { name: "Logo Design", href: "/services#logo-design" },
        { name: "Brand Identity", href: "/services#brand-identity" },
        { name: "Motion Graphics", href: "/services#motion-graphics" },
      ],
    },
    {
      title: "MARKETING",
      services: [
        { name: "SEO", href: "/services#seo" },
        { name: "Google Ads", href: "/services#google-ads" },
        { name: "Social Media", href: "/services#social-media" },
        { name: "Email Marketing", href: "/services#email-marketing" },
        { name: "Lead Generation", href: "/services#lead-generation" },
      ],
    },
    {
      title: "TECHNOLOGY",
      services: [
        { name: "AR/VR", href: "/services#ar-vr" },
        { name: "Chatbot", href: "/services#chatbot" },
        { name: "E-commerce", href: "/services#ecommerce" },
        { name: "Maintenance", href: "/services#maintenance" },
        { name: "Automation", href: "/services#automation" },
      ],
    },
  ]

  return (
    <div className="bg-stone-100 min-h-screen">
      {/* Header */}
      <header className="bg-stone-100 px-4 sm:px-6 py-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-league-spartan">
                rare
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-league-spartan">
                U
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black font-league-spartan">
                s
              </span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              href="/"
              className="text-black hover:text-gray-700 cursor-pointer text-base xl:text-lg font-medium transition-colors"
            >
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="text-black hover:text-gray-700 cursor-pointer text-base xl:text-lg font-medium flex items-center space-x-1 transition-colors">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-300 ease-out ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-stone-200 p-6 lg:p-8 w-[700px] xl:w-[800px] z-50">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                          {category.title}
                        </h3>
                        <ul className="space-y-3">
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                href={service.href}
                                className="block text-sm text-gray-700 hover:text-black transition-colors duration-200 py-1"
                              >
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-stone-200 mt-8 pt-6">
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-semibold text-black hover:text-gray-700 transition-colors duration-200"
                    >
                      View All Services
                      <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <Link
              href="/portfolio"
              className="text-black hover:text-gray-700 cursor-pointer text-base xl:text-lg font-medium transition-colors"
            >
              Portfolio
            </Link> */}
            <Link
              href="/about"
              className="text-black hover:text-gray-700 cursor-pointer text-base xl:text-lg font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-gray-700 cursor-pointer text-base xl:text-lg font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          <button
            className="lg:hidden p-2 text-black hover:text-gray-700 transition-colors z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`lg:hidden fixed top-0 left-0 right-0 bg-white shadow-xl border-b border-stone-200 transition-all duration-300 ease-out z-40 ${
            isMobileMenuOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-full"
          }`}
        >
          <nav className="px-4 py-6 pt-20 space-y-4 max-h-screen overflow-y-auto">
            <Link
              href="/"
              className="block text-black hover:text-gray-700 text-xl font-medium py-3 transition-colors border-b border-stone-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            <div className="space-y-2 border-b border-stone-200 pb-4">
              <button
                className="flex items-center justify-between w-full text-black hover:text-gray-700 text-xl font-medium py-3 transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`pl-4 space-y-4 transition-all duration-300 ${isServicesOpen ? "block" : "hidden"}`}>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{category.title}</h4>
                    <ul className="space-y-2 pl-2">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link
                            href={service.href}
                            className="block text-base text-gray-600 hover:text-black py-2 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/services"
                  className="block text-base font-semibold text-black hover:text-gray-700 py-3 transition-colors bg-stone-100 rounded-lg px-4 mt-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services →
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="block text-black hover:text-gray-700 text-xl font-medium py-3 transition-colors border-b border-stone-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block text-black hover:text-gray-700 text-xl font-medium py-3 transition-colors border-b border-stone-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:text-gray-700 text-xl font-medium py-3 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>

        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Top section with navigation arrows */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Social media icons */}
          <div className="py-12 sm:py-16">
            <div className="flex justify-center space-x-8 sm:space-x-12 mb-12">
              <a
                href="https://www.linkedin.com/company/rareus/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              <a
                href="https://www.instagram.com/rareus.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              {/* X (Twitter) new logo */}
              <a
                href="https://x.com/rareus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61564572672647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-8 h-8 sm:w-10 sm:h-10" />
              </a>
              {/* Medium */}
              <a
                href="https://medium.com/@rareus"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <div className="text-center mb-8">
              <p className="text-lg sm:text-xl text-gray-300">Collaboration begins with hello 👋</p>
            </div>

            {/* Main email/contact */}
            <div className="text-center mb-8">
              <a
                href="mailto:hello@rareus.in"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold hover:text-gray-300 transition-colors block"
              >
                hello@rareus.in
              </a>
            </div>

            {/* Time zone info */}
            <div className="text-center mb-12">
              <p className="text-gray-400 text-sm sm:text-base">Worldwide (9:00 AM - 8:00PM EST)</p>
            </div>

            {/* Page links grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12 text-center">
              <div>
                <h4 className="text-white font-semibold mb-3">Main</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Refund Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Work</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-gray-400 hover:text-white text-sm transition-colors">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Development</h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/services#website-dev"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Website Dev
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#app-dev" className="text-gray-400 hover:text-white text-sm transition-colors">
                      App Dev
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#ai-agent"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      AI Agent
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <div>
                <h4 className="text-white font-semibold mb-3">Design</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services#ui-ux" className="text-gray-400 hover:text-white text-sm transition-colors">
                      UI/UX
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#graphic-design"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Graphic Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#logo-design"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Logo Design
                    </Link>
                  </li>
                </ul>
              </div> */}

              <div>
                <h4 className="text-white font-semibold mb-3">Marketing</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services#seo" className="text-gray-400 hover:text-white text-sm transition-colors">
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#google-ads"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Google Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services#social-media"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Social Media
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-gray-400 text-sm">©rareUs 2025.</p>
              <div className="flex items-center space-x-4">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-400 text-sm">T3-A405 NX-ONE near Gaur City Mall, Greater Noida, Uttar Pradesh, 201301</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
