"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Phone } from "lucide-react"

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-purple-500/50 bg-gradient-to-br from-purple-500 to-pink-500">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Tarani Venugopal"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">Tarani Venugopal</h3>
                <div className="flex flex-col space-y-2 text-white/80">
                  <div className="flex items-center">
                    <Mail className="mr-2 h-4 w-4 text-purple-400" />
                    <span>tarani2k4@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 text-purple-400" />
                    <span>8838977500</span>
                  </div>
                  <div className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4 text-purple-400" />
                    <a
                      href="https://www.linkedin.com/in/tarani-venugopal-a4a122288"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-400"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white/5 p-6 text-left backdrop-blur-lg">
              <p className="text-lg leading-relaxed text-white/80">
                I'm a passionate web developer and problem solver currently pursuing my degree at Sri Venkateswara
                College of Engineering. With a strong foundation in programming languages like C, Java, and JavaScript,
                I'm dedicated to creating innovative web solutions.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                My experience includes working as a Web Development Intern at Conprg Technologies, where I designed and
                tested web applications under the guidance of senior developers. I'm constantly improving my skills
                through daily algorithmic challenges on platforms like GFG and LeetCode.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

