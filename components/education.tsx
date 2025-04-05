"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      institution: "Sri Venkateswara College of Engineering",
      degree: "B.Tech",
      location: "Chennai, Tamil Nadu",
      period: "Grad: May 2026",
      gpa: "Cum GPA: 8.449",
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
    },
    {
      institution: "Holy Angel's Anglo Indian Higher Sec School",
      degree: "HSC-2022",
      location: "Chennai, Tamil Nadu",
      period: "2022",
      gpa: "Percentage: 96.5",
      icon: <GraduationCap className="h-8 w-8 text-pink-400" />,
    },
    {
      institution: "Holy Angel's Anglo Indian Higher Sec School",
      degree: "SSLC-2020",
      location: "Chennai, Tamil Nadu",
      period: "2020",
      gpa: "Percentage: 83.5",
      icon: <GraduationCap className="h-8 w-8 text-purple-400" />,
    },
  ]

  return (
    <section id="education" className="relative py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-pink-900/20 to-black" />
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
              Education
            </span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-2xl filter group-hover:from-purple-500/30 group-hover:to-pink-500/30" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-white/5 p-3">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                  <p className="mt-1 text-lg font-medium text-purple-300">{item.degree}</p>
                  <p className="mt-2 text-white/70">{item.location}</p>
                  <div className="mt-4 flex items-center text-white/60">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <p className="mt-2 font-medium text-green-400">{item.gpa}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
          >
            <h3 className="text-xl font-bold text-white">Course Work</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-lg font-medium text-purple-300">Graduate</h4>
                <ul className="mt-2 space-y-2 text-white/80">
                  <li>• Data structures</li>
                  <li>• Object oriented programming</li>
                  <li>• Operating System</li>
                  <li>• Computer Networks</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

