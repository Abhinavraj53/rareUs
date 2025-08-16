"use client"

import React from "react"
import { gsap } from "gsap"
import Link from "next/link"

interface MenuItem {
  link: string
  text: string
  image: string
}

interface FlowingMenuProps {
  items: MenuItem[]
}

function FlowingMenu({ items = [] }: FlowingMenuProps) {
  return (
    <div className="w-full h-full overflow-hidden bg-stone-100">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  )
}

function MenuItem({ link, text, image }: MenuItem) {
  const itemRef = React.useRef<HTMLDivElement>(null)
  const marqueeRef = React.useRef<HTMLDivElement>(null)
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null)

  const animationDefaults = { duration: 0.6, ease: "expo" }

  const findClosestEdge = (mouseX: number, mouseY: number, width: number, height: number) => {
    const topEdgeDist = (mouseX - width / 2) ** 2 + mouseY ** 2
    const bottomEdgeDist = (mouseX - width / 2) ** 2 + (mouseY - height) ** 2
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom"
  }

  const handleMouseEnter = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" })
  }

  const handleMouseLeave = (ev: React.MouseEvent) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return
    const rect = itemRef.current.getBoundingClientRect()
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height)

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
  }

  const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
    <React.Fragment key={idx}>
      <span className="text-black uppercase font-bold text-[2.5vh] sm:text-[3vh] lg:text-[4vh] leading-[1.2] p-[1vh_1vw_0] font-league-spartan">
        {text}
      </span>
      <div
        className="w-[120px] sm:w-[160px] lg:w-[200px] h-[4vh] sm:h-[5vh] lg:h-[7vh] my-[1em] sm:my-[1.5em] lg:my-[2em] mx-[1vw] sm:mx-[1.5vw] lg:mx-[2vw] p-[0.5em_0] sm:p-[0.75em_0] lg:p-[1em_0] rounded-[15px] sm:rounded-[18px] lg:rounded-[20px] bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${image})` }}
      />
    </React.Fragment>
  ))

  return (
    <div className="flex-1 relative overflow-hidden text-left border-b border-stone-300" ref={itemRef}>
      <Link
        className="flex items-center justify-start h-full relative cursor-pointer uppercase no-underline font-bold text-black text-[2.5vh] sm:text-[3vh] lg:text-[4vh] hover:text-stone-600 focus:text-black focus-visible:text-stone-600 font-league-spartan transition-colors duration-300 px-4 sm:px-6 lg:px-12"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </Link>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%]"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee justify-start px-4 sm:px-6 lg:px-12">
            {repeatedMarqueeContent}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlowingMenu
