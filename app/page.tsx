"use client"

import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Background } from "@/components/background"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-10">
        <Canvas>
          <ScrollControls pages={6} damping={0.25}>
            <Background />
            <Environment preset="city" />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
            />
          </ScrollControls>
        </Canvas>
      </div>

      <div className="relative z-20 h-full overflow-auto" ref={containerRef}>
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  )
}

