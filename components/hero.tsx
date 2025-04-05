"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5

      containerRef.current.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black/50 to-pink-900/30" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center transition-transform duration-200 ease-out sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm"
        >
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="block">Hi, I'm</span>
            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Tarani Venugopal
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-xl text-white/80">
            Web Developer | Problem Solver | Tech Enthusiast
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#about"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:shadow-pink-500/25"
            >
              <span className="relative z-10">Explore My Work</span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-white/70">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}

