"use client"

import { Button } from "@/components/ui/button"
import FlowingMenu from "@/components/FlowingMenu"
import CurvedLoop from "@/components/CurvedLoop"
import Link from "next/link"
import Carousel from "@/components/carousel"



export default function Home() {
  const flowingMenuItems = [
    {
      link: "/services",
      text: (
        <div className="text-left">
          <span className="text-black font-bold">Digital Experiences</span>
          <span className="text-gray-500 ml-2">that connect & convert</span>
        </div>
      ),
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/services",
      text: (
        <div className="text-left">
          <span className="text-black font-bold">Websites & Apps</span>
          <span className="text-gray-500 ml-2">that make your brand shine</span>
        </div>
      ),
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/services",
      text: (
        <div className="text-left">
          <span className="text-black font-bold">Smart AI Tools</span>
          <span className="text-gray-500 ml-2">for smarter workflows</span>
        </div>
      ),
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      link: "/services",
      text: (
        <div className="text-left">
          <span className="text-black font-bold">Browser Extensions</span>
          <span className="text-gray-500 ml-2">customized for productivity</span>
        </div>
      ),
      image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
const bannerImages = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "/4.svg",
  "/5.svg",
]
  return (
    <div>
      <section className="px-4 sm:px-6 py-4 sm:py-6 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
            <div className="text-center sm:text-left">
              <p className="text-base sm:text-base lg:text-lg text-black leading-relaxed">
                At RareUs, we’re all about crafting digital experiences that
                connect and convert. Let’s build something amazing together!
              </p>
            </div>
            <div className="text-center">
              <p className="text-base sm:text-base lg:text-lg text-black leading-relaxed">
                Uncommon Ideas, Unstoppable Growth.
              </p>
            </div>
            <div className="text-center sm:text-right lg:text-right">
              <p className="text-base sm:text-base lg:text-lg text-black leading-relaxed">
                300+
                <br />
                Successful projects
              </p>
            </div>
          </div>

          {/* GROW text */}
          <div className="relative mb-0 sm:mb-0 lg:mb-0 overflow-hidden">
            <div
              className="text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] font-black text-black leading-none tracking-tighter text-center px-2"
              style={{
                fontFamily: '"Bebas Neue", sans-serif',
                transform: 'scaleY(1.2)',
                transformOrigin: 'center',
              }}
            >
              GROW
            </div>

            {/* Floating labels */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[5%] xs:top-[8%] sm:top-[10%] left-[2%] xs:left-[5%] sm:left-[8%] lg:left-[12%] xl:left-[15%] bg-white px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm border border-gray-300 shadow-sm">
                Website Development
              </div>
              <div className="absolute top-[5%] xs:top-[8%] sm:top-[8%] right-[2%] xs:right-[5%] sm:right-[8%] lg:right-[12%] xl:right-[15%] bg-white px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm border border-gray-300 shadow-sm">
                Graphic Design
              </div>
              <div className="absolute bottom-[25%] xs:bottom-[20%] sm:bottom-[20%] left-[1%] xs:left-[2%] sm:left-[3%] lg:left-[5%] xl:left-[8%] bg-white px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm border border-gray-300 shadow-sm">
                <span className="hidden xs:inline">Ai Agents Development</span>
                <span className="xs:hidden"></span>
              </div>
              <div className="absolute bottom-[35%] xs:bottom-[30%] sm:bottom-[30%] left-[20%] xs:left-[25%] sm:left-[30%] lg:left-[35%] xl:left-[38%] bg-white px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm border border-gray-300 shadow-sm">
                <span className="hidden sm:inline">SEO & GEO</span>
                <span className="sm:hidden">SEO & GEO</span>
              </div>
              <div className="absolute bottom-[15%] xs:bottom-[12%] sm:bottom-[12%] right-[1%] xs:right-[2%] sm:right-[3%] lg:right-[5%] xl:right-[8%] bg-white px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs sm:text-sm border border-gray-300 shadow-sm">
                <span className="hidden xs:inline">Digital Presence</span>
                <span className="xs:hidden">Digital Presence</span>
              </div>
            </div>
          </div>

          {/* Image overlapping text */}
          <div className="flex justify-center mb-3 sm:mb-4 lg:mb-6 -mt-12 relative z-10">
            <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzfGVufDB8fDB8fHww"
                alt="Professional working on laptop in modern office"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-black text-black leading-none tracking-tight">
              YOUR BUSINESS WITH US
            </h1>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 lg:gap-6 text-center mb-4 sm:mb-6">
            <div>
              <div className="text-3xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-3">
                500+
              </div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-700 leading-relaxed px-2">
                Early adopters & customers
                <br />
                onboarded in our first year
              </div>
            </div>
            <div>
              <div className="text-3xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-3">
                25K+
              </div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-700 leading-relaxed px-2">
                Monthly reach through
                <br />
                partnerships & campaigns
              </div>
            </div>
            <div>
              <div className="text-3xl xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-3">
                12+
              </div>
              <div className="text-sm sm:text-sm lg:text-base text-gray-700 leading-relaxed px-2">
                Strategic partnerships
                <br />
                established in key markets
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="w-full overflow-hidden mb-8 sm:mb-12 lg:mb-20">
        <CurvedLoop
          marqueeText="Uncommon Ideas ✦ Unstoppable Growth ✦ Digital Experiences ✦ Connect & Convert ✦"
          speed={2}
          curveAmount={200}
          direction="left"
          interactive={true}
          className="font-league-spartan"
        />

      </div>

      <section className="pt-8 sm:pt-12 lg:pt-20 h-[300px] sm:h-[400px] lg:h-[600px] relative">
        <div className="flex justify-start items-start h-full">
          <FlowingMenu items={flowingMenuItems} />
        </div>
      </section>




      {/* rareUs for Creators Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/business-discussion-office.png"
                alt="rareUs team brainstorming ideas"
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-8 sm:space-y-12 order-1 lg:order-2">
              <div>
                <div className="mb-4">
                  <span className="text-xs sm:text-sm text-gray-500 tracking-wide">ABOUT rareUS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-4">
                  Uncommon Ideas, Unstoppable Growth
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg lg:text-xl">
                  At rareUs, we transform ambitious ideas into impactful digital experiences.
                  Our team blends creativity, strategy, and technology to build brands that stand out,
                  connect deeply with their audiences, and convert effortlessly.
                  From cutting-edge websites and apps to AI-powered tools and high-impact marketing,
                  we craft solutions that don’t just keep up with the digital world — they set the pace.
                </p>

                <Link href="/about">
                  <Button variant="outline" className="rounded-full px-6 bg-transparent text-sm">
                    Learn more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="px-6 sm:px-8 py-10 sm:py-14 lg:py-18 bg-stone-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-8 sm:mb-12 lg:mb-16 leading-tight">
            SOLUTIONS THAT HIT DIFFERENT 🚀
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Audience */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-400 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Get Seen</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Go viral vibes only — we help you get noticed, grow your tribe, and keep them hooked for the long run.
              </p>
            </div>

            {/* Revenue */}
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Secure the Bag</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Turn clicks into cash. From brand deals to passive income — rareUs has your money moves covered.
              </p>
            </div>

            {/* Business */}
            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-pink-400 rounded-2xl mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                <div className="flex space-x-1">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                  <div
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3 sm:mb-4">Level Up</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Strategy, design, marketing — we handle the hard stuff so you can flex, grow, and dominate your space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Make Your Business Rare Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute left-1/2 bottom-0 pointer-events-none z-0 transform -translate-x-1/2">
          <div
            className="text-[6rem] sm:text-[8rem] lg:text-[12rem] xl:text-[16rem] font-black leading-none tracking-widest select-none whitespace-nowrap transform translate-y-[20%]"
            style={{
              WebkitTextStroke: "2px rgba(34, 33, 33, 0.15)",
              color: "grey",
              opacity: 0.1,
            }}
          >
            rareUs
          </div>
        </div>


        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black mb-8 sm:mb-12 leading-tight">
            Make Your Brand Rare with Us
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="relative">
              <img
                src="/modern-office-meeting.png"
                alt="Team collaborating on digital strategy in a modern workspace"
                className="rounded-lg w-full"
              />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                At <span className="font-bold">rareUs</span>, we blend innovation, design, and strategy to craft
                digital experiences that don’t just stand out—they set new standards.
                We believe every business has something unique, and our mission is to make that rarity your
                competitive edge.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                From concept to launch, we partner with you to build impactful solutions that drive growth,
                engage audiences, and turn ambitious ideas into market-leading realities.
              </p>
              <Button variant="outline" className="rounded-full px-6 bg-transparent text-sm">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Building Creator-First Future */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 bg-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="mb-4">
                <span className="text-xs sm:text-sm uppercase tracking-wide bg-stone-100 px-2 py-1 rounded">
                  WHY PARTNER WITH US
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight bg-stone-100 inline-block px-2">
                FROM VISION TO REALITY — FASTER THAN YOU THINK
              </h2>
              <div className="mb-4 sm:mb-6 lg:mb-8 lg:hidden">
                <img
                  src="/modern-office-meeting.png"
                  alt="Team meeting"
                  className="rounded-lg w-full max-w-sm mx-auto"
                />
              </div>
              <div className="hidden lg:block mb-6 lg:mb-8">
                <img src="/modern-office-meeting.png" alt="Team meeting" className="rounded-lg w-full max-w-sm" />
              </div>
              <div className="mb-4 sm:mb-6">
                <h3 className="font-bold mb-2 text-sm sm:text-base bg-stone-100 inline-block px-2">
                  We turn bold ideas into measurable success
                </h3>
                <p className="leading-relaxed text-sm sm:text-base bg-stone-100 inline-block px-2">
                  Whether you're launching a product, scaling your brand, or reinventing your digital presence,
                  we combine strategy, creativity, and technology to deliver results that matter.
                </p>
              </div>
              <Link href="/about">
                <Button variant="outline" className="rounded-full px-6 bg-transparent text-sm">
                  See how we do it
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img src="https://images.unsplash.com/photo-1688380692117-63178554d76d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1c2luZXNzJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Professional portrait" className="rounded-lg w-full" />
            </div>
          </div>
        </div>
      </section>
      <Carousel images={bannerImages} interval={4000} />

    </div>
  )
}
