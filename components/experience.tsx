"use client"

import { motion } from "framer-motion"
import { Briefcase, Award } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "CONPRG TECHNOLOGIES PVT.LTD",
      position: "Web Development Intern",
      period: "July 2024",
      location: "SAIDAPET, CHENNAI",
      responsibilities: [
        "Designed and tested basic web application under the guidelines of Senior developers",
        "Assisted in designing user interfaces and implementing UX enhancements to improve app usability",
        "Identified and resolved bugs through testing and debugging processes, ensuring app stability and performance",
      ],
    },
  ]

  const certifications = [
    "Java For Beginners (Hackerrank)",
    "Java for Beginners from (Infosys Spring Boards)",
    "SQL and databases (IBM)",
    "Machine Learning (MathLAB)",
    "Blockchain Foundation Course (Infosys SpringBoards)",
  ]

  return (
    <section id="experience" className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="mt-12">
            <div className="relative border-l-2 border-purple-500/50 pl-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  <div className="absolute -left-10 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Briefcase className="h-3 w-3" />
                  </div>

                  <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                        <p className="text-lg font-medium text-purple-300">{exp.company}</p>
                      </div>
                      <div className="rounded-full bg-white/10 px-4 py-1 text-sm text-white">
                        {exp.period} | {exp.location}
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-lg font-medium text-white/90">Responsibilities:</h4>
                      <ul className="mt-2 space-y-2 text-white/70">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span className="mr-2 text-purple-400">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="flex items-center">
              <Award className="h-6 w-6 text-purple-400" />
              <h3 className="ml-2 text-xl font-bold text-white">Courses & Certifications</h3>
            </div>

            <ul className="mt-4 grid gap-3 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-center rounded-lg bg-white/5 p-3 transition-colors hover:bg-white/10"
                >
                  <span className="mr-2 text-purple-400">•</span>
                  <span className="text-white/80">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

