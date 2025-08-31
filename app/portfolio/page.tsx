"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const portfolioItems = [
  // Website Designs (4)
  {
    id: 1,
    title: "Brand Identity Design for Tech Startup",
    category: "Website Designs",
    image: "/placeholder-01uzt.png",
    completionTime: "3 WEEKS",
    feeCharged: "$3K",
    description: "Complete brand identity package including logo, business cards, and brand guidelines",
  },
  {
    id: 2,
    title: "E-commerce Website Design and Development",
    category: "Website Designs",
    image: "/modern-ecommerce-website.png",
    completionTime: "6 WEEKS",
    feeCharged: "$8K",
    description: "Full-stack e-commerce solution with custom design and payment integration",
  },
  {
    id: 6,
    title: "Corporate Website Redesign",
    category: "Website Designs",
    image: "/corporate-website-design.png",
    completionTime: "8 WEEKS",
    feeCharged: "$12K",
    description: "Modern corporate website with CMS integration and responsive design",
  },
  {
    id: 9,
    title: "Portfolio Website for Freelancer",
    category: "Website Designs",
    image: "/portfolio-website.png",
    completionTime: "2 WEEKS",
    feeCharged: "$1.2K",
    description: "Sleek personal portfolio website with animations and contact integration",
  },

  // Pitch Deck (4)
  {
    id: 3,
    title: "Investment Pitch Deck for SaaS Company",
    category: "Pitch Deck",
    image: "/pitch-deck-slides.png",
    completionTime: "2 WEEKS",
    feeCharged: "$2K",
    description: "20-slide investor pitch deck with compelling visuals and data presentation",
  },
  {
    id: 8,
    title: "Startup Pitch Deck - Series A",
    category: "Pitch Deck",
    image: "/startup-pitch-deck.png",
    completionTime: "3 WEEKS",
    feeCharged: "$3.5K",
    description: "Series A funding pitch deck that helped raise $2M in investment",
  },
  {
    id: 10,
    title: "Marketing Pitch Deck for E-commerce Brand",
    category: "Pitch Deck",
    image: "/marketing-pitch-deck.png",
    completionTime: "2 WEEKS",
    feeCharged: "$2.8K",
    description: "Visually appealing marketing deck to showcase campaign strategy and results",
  },
  {
    id: 11,
    title: "Financial Pitch Deck for Fintech Startup",
    category: "Pitch Deck",
    image: "/fintech-pitch-deck.png",
    completionTime: "3 WEEKS",
    feeCharged: "$3K",
    description: "Data-driven financial pitch deck with growth projections and market analysis",
  },

  // Logo Design (4)
  {
    id: 4,
    title: "Minimalist Logo Design for Restaurant Chain",
    category: "Logo Design",
    image: "/minimalist-restaurant-logo.png",
    completionTime: "1 WEEK",
    feeCharged: "$1.5K",
    description: "Clean, memorable logo design with multiple variations and usage guidelines",
  },
  {
    id: 12,
    title: "Tech Startup Logo Design",
    category: "Logo Design",
    image: "/tech-startup-logo.png",
    completionTime: "1 WEEK",
    feeCharged: "$1.8K",
    description: "Modern logo with futuristic theme for a SaaS product",
  },
  {
    id: 13,
    title: "Luxury Fashion Brand Logo",
    category: "Logo Design",
    image: "/luxury-fashion-logo.png",
    completionTime: "2 WEEKS",
    feeCharged: "$2.2K",
    description: "Elegant logo design with luxury typography and brand guidelines",
  },
  {
    id: 14,
    title: "Sports Club Logo Design",
    category: "Logo Design",
    image: "/sports-club-logo.png",
    completionTime: "1 WEEK",
    feeCharged: "$1.6K",
    description: "Dynamic, energetic logo design for a local sports club",
  },

  // SEO (4)
  {
    id: 5,
    title: "SEO Optimization for Local Business",
    category: "SEO",
    image: "/seo-analytics-dashboard.png",
    completionTime: "4 WEEKS",
    feeCharged: "$2.5K",
    description: "Complete SEO audit and optimization resulting in 300% organic traffic increase",
  },
  {
    id: 15,
    title: "E-commerce SEO Strategy",
    category: "SEO",
    image: "/ecommerce-seo.png",
    completionTime: "5 WEEKS",
    feeCharged: "$3.2K",
    description: "Keyword targeting, backlink building, and on-page optimization for online store",
  },
  {
    id: 16,
    title: "SEO for SaaS Startup",
    category: "SEO",
    image: "/saas-seo.png",
    completionTime: "6 WEEKS",
    feeCharged: "$3.8K",
    description: "Boosted SaaS website ranking with content marketing and SEO strategy",
  },
  {
    id: 17,
    title: "Local SEO for Restaurant Chain",
    category: "SEO",
    image: "/restaurant-seo.png",
    completionTime: "3 WEEKS",
    feeCharged: "$2.1K",
    description: "Improved local Google rankings and visibility for multi-location restaurant chain",
  },

  // Graphic Design (4)
  {
    id: 7,
    title: "Product Packaging Design",
    category: "Graphic Design",
    image: "/modern-product-packaging.png",
    completionTime: "4 WEEKS",
    feeCharged: "$4K",
    description: "Eye-catching packaging design for premium consumer products",
  },
  {
    id: 18,
    title: "Social Media Creatives for Startup",
    category: "Graphic Design",
    image: "/social-media-creatives.png",
    completionTime: "2 WEEKS",
    feeCharged: "$1.2K",
    description: "Custom-designed social media graphics for brand awareness campaigns",
  },
  {
    id: 19,
    title: "Brochure Design for Real Estate Company",
    category: "Graphic Design",
    image: "/real-estate-brochure.png",
    completionTime: "2 WEEKS",
    feeCharged: "$1.5K",
    description: "High-quality brochure design showcasing real estate projects",
  },
  {
    id: 20,
    title: "Event Poster Design",
    category: "Graphic Design",
    image: "/event-poster.png",
    completionTime: "1 WEEK",
    feeCharged: "$800",
    description: "Vibrant poster design for promotional events and concerts",
  },
]


const categories = ["All", "Graphic Design", "Website Designs", "Pitch Deck", "Logo Design", "SEO"]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="bg-stone-50">

      {/* Portfolio Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 lg:mb-24">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="font-league-spartan font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-black mb-6">
              Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-lg">
              I create and maintain modern websites and applications. I solve all your business problems.
            </p>
          </div>

          <div className="lg:w-1/2 lg:pl-12">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2">150+</div>
                <div className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider">
                  SUCCESSFUL
                  <br />
                  PROJECTS
                </div>
              </div>
              <div>
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-2">2+</div>
                <div className="text-sm sm:text-base font-medium text-gray-600 uppercase tracking-wider">
                  YEARS OF
                  <br />
                  EXPERIENCE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-wrap gap-4 lg:gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm sm:text-base font-medium rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 lg:p-8">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
                    Case Study
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 leading-tight">{item.title}</h3>

                <p className="text-gray-600 mb-6">{item.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                      COMPLETION TIME:
                    </div>
                    <div className="font-bold text-black">{item.completionTime}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">FEE CHARGED</div>
                    <div className="font-bold text-black">{item.feeCharged}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">VIEW</div>
                    <Link href="/contact" className="font-bold text-black hover:text-gray-600 transition-colors">
                      FULL DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-32 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">Ready to start your project?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Get in touch to begin your digital
            transformation.
          </p>
          <Link href="/contact">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg rounded-full">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
