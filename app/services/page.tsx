"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Filter } from "lucide-react"
import Link from "next/link"
import { useState, useMemo } from "react"
import Image from "next/image"

// Services data with categories
const servicesData = {
  Development: [
    {
      id: "website-dev",
      name: "Website Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      price: "Starting from $2,999",
    },
    {
      id: "app-dev",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      price: "Starting from $4,999",
    },
    {
      id: "ai-agent",
      name: "AI Agent Development",
      description: "Intelligent AI agents and chatbots to automate customer service and business processes.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      price: "Starting from $3,999",
    },
    {
      id: "extension",
      name: "Browser Extensions",
      description: "Custom browser extensions for Chrome, Firefox, and other browsers to enhance user productivity.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
      price: "Starting from $1,999",
    },
    {
      id: "api-integration",
      name: "API Integration",
      description: "Seamless integration of third-party APIs and services to enhance your application functionality.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      price: "Starting from $1,499",
    },
    {
      id: "automation",
      name: "Business Automation",
      description: "Automate repetitive tasks and workflows to increase efficiency and reduce operational costs.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
      price: "Starting from $2,499",
    },
    {
      id: "saas",
      name: "SaaS Development",
      description: "Complete Software-as-a-Service platforms with subscription management and scalable architecture.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
      price: "Starting from $9,999",
    },
  ],
  Design: [
    {
      id: "graphic-design",
      name: "Graphic Design",
      description: "Creative graphic design solutions for print and digital media to enhance your brand presence.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      price: "Starting from $499",
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      description: "User-centered design solutions that create intuitive and engaging digital experiences.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      price: "Starting from $1,999",
    },
    {
      id: "packaging",
      name: "Packaging Design",
      description: "Eye-catching packaging designs that make your products stand out on shelves and online.",
      image: "https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg",
      price: "Starting from $799",
    },
    {
      id: "brand-identity",
      name: "Brand Identity",
      description: "Complete brand identity packages including logos, guidelines, and brand assets.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      price: "Starting from $1,499",
    },
    {
      id: "logo-design",
      name: "Logo Design",
      description: "Professional logo design that captures your brand essence and creates lasting impressions.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      price: "Starting from $299",
    },
    {
      id: "motion-graphics",
      name: "Motion Graphics",
      description: "Dynamic motion graphics and animations for videos, presentations, and digital content.",
      image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg",
      price: "Starting from $999",
    },
  ],
  Marketing: [
    {
      id: "seo",
      name: "SEO Optimization",
      description: "Comprehensive SEO strategies to improve search rankings and increase organic traffic.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
      price: "Starting from $899/month",
    },
    {
      id: "geo-targeting",
      name: "Geo-Targeting",
      description: "Location-based marketing campaigns to reach customers in specific geographic areas.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      price: "Starting from $699/month",
    },
    {
      id: "lead-generation",
      name: "Lead Generation",
      description: "Strategic lead generation campaigns to attract and convert qualified prospects.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      price: "Starting from $1,299/month",
    },
    {
      id: "google-ads",
      name: "Google Ads",
      description: "Professional Google Ads management to maximize ROI and drive targeted traffic.",
      image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
      price: "Starting from $999/month",
    },
    {
      id: "meta-ads",
      name: "Meta Ads",
      description: "Facebook and Instagram advertising campaigns to reach your target audience effectively.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      price: "Starting from $799/month",
    },
    {
      id: "social-media",
      name: "Social Media Management",
      description: "Complete social media management including content creation and community engagement.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg",
      price: "Starting from $599/month",
    },
    {
      id: "email-marketing",
      name: "Email Marketing",
      description: "Targeted email campaigns that nurture leads and drive conversions for your business.",
      image: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg",
      price: "Starting from $399/month",
    },
    {
      id: "content-strategy",
      name: "Content Strategy",
      description: "Strategic content planning and creation to engage your audience and build brand authority.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      price: "Starting from $799/month",
    },
  ],
  Technology: [
    {
      id: "ar-vr",
      name: "AR/VR Solutions",
      description: "Immersive augmented and virtual reality experiences for training, marketing, and entertainment.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      price: "Starting from $4,999",
    },
    {
      id: "chatbot",
      name: "Chatbot Development",
      description: "Intelligent chatbots for customer support, lead generation, and automated interactions.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      price: "Starting from $1,999",
    },
    {
      id: "ecommerce",
      name: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment processing, inventory management, and analytics.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      price: "Starting from $3,999",
    },
    {
      id: "maintenance",
      name: "Website Maintenance",
      description: "Ongoing website maintenance, updates, and technical support to keep your site running smoothly.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg",
      price: "Starting from $199/month",
    },
  ],
}

export default function Services() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...Object.keys(servicesData)]

  const filteredServices = useMemo(() => {
    let allServices = []

    // Flatten all services with category info
    Object.entries(servicesData).forEach(([category, services]) => {
      services.forEach((service) => {
        allServices.push({ ...service, category })
      })
    })

    // Filter by category
    if (selectedCategory !== "All") {
      allServices = allServices.filter((service) => service.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      allServices = allServices.filter(
        (service) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    return allServices
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-stone-100">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight">OUR SERVICES</h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
            Comprehensive digital solutions to transform your business and accelerate growth in the digital landscape.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-3 rounded-full border-2 border-gray-200 focus:border-black"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-full border-2 border-gray-200 focus:border-black bg-white"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category ? "bg-black text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No services found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id} // Added anchor ID for hash navigation
                  className="bg-stone-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{service.name}</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-black">{service.price}</span>
                      <Link href="/contact">
                        <Button variant="outline" size="sm" className="rounded-full group bg-transparent">
                          Quote
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
