import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen bg-stone-100">

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-black mb-6 leading-tight">
                ABOUT rareUs
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
                We're a digital services company dedicated to transforming businesses through innovative technology
                solutions and strategic partnerships.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8">
                  Work With Us
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="/modern-office-collaboration.png"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black text-black mb-6">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Innovation</h3>
              <p className="text-gray-700 leading-relaxed">
                We embrace cutting-edge technologies and creative solutions to solve complex challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Collaboration</h3>
              <p className="text-gray-700 leading-relaxed">
                We work hand-in-hand with our clients as true partners in their success journey.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Results</h3>
              <p className="text-gray-700 leading-relaxed">
                We're committed to delivering measurable outcomes that drive real business growth.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Excellence</h3>
              <p className="text-gray-700 leading-relaxed">
                We maintain the highest standards in everything we do, from strategy to execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/modern-office-team.png" alt="Our workspace" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-black mb-6 leading-tight">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between traditional business and digital innovation, rareUs
                  has grown from a small team of passionate technologists to a comprehensive digital services company.
                </p>
                <p>
                  We believe that every business, regardless of size, deserves access to world-class digital solutions.
                  Our journey began with a simple mission: to make advanced technology accessible and effective for
                  businesses ready to embrace digital transformation.
                </p>
                <p>
                  Today, we're proud to partner with companies across industries, helping them navigate the digital
                  landscape and achieve sustainable growth through strategic technology implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-6xl font-black mb-2">150+</div>
              <div className="text-gray-300">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl sm:text-6xl font-black mb-2">50+</div>
              <div className="text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl sm:text-6xl font-black mb-2">5+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
