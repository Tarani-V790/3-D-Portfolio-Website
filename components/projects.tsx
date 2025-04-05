"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, Youtube, Briefcase, MessageCircle, Brain } from "lucide-react"

export function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Ecommerce Website",
      icon: <ShoppingCart className="h-6 w-6" />,
      description:
        "Implemented E-commerce website like Flipkart and Amazon with branded T-Shirts and other electronic appliances, using HTML, CSS, Javascript and React.js.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "YouTube Clone Website",
      icon: <Youtube className="h-6 w-6" />,
      description: "Created a simple YouTube clone using HTML and CSS, focusing on UI design.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML", "CSS"],
    },
    {
      title: "Online Job Portal Application",
      icon: <Briefcase className="h-6 w-6" />,
      description:
        "Created an online job portal Application using MERN (MongoDB, Express, React, Node.js) stack where we can apply for jobs through online, and it also displays the status.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "AI-Chat-Query",
      icon: <MessageCircle className="h-6 w-6" />,
      description:
        "Created an AI-powered chat application using MERN stack with natural language processing capabilities for intelligent responses.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["MongoDB", "Express", "React", "Node.js", "NLP"],
    },
    {
      title: "Multilingual AI-Powered Legal Aid Voice Assistant",
      icon: <Brain className="h-6 w-6" />,
      description:
        "Designed an AI-powered multilingual voice assistant chatbot that provides legal assistance and advice to citizens, especially those in rural or underserved communities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["AI", "Voice Recognition", "NLP", "Legal Database"],
      isHackathon: true,
    },
  ]

  return (
    <section id="projects" className="relative py-20">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/10"
                onClick={() => setActiveProject(activeProject === index ? null : index)}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl filter group-hover:from-purple-500/20 group-hover:to-pink-500/20" />

                {project.isHackathon && (
                  <div className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-medium text-white">
                    Hackathon
                  </div>
                )}

                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white">
                      {project.icon}
                    </div>
                    <h3 className="ml-3 text-xl font-bold text-white">{project.title}</h3>
                  </div>

                  <p className="mt-4 text-white/70">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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
            <h3 className="text-xl font-bold text-white">Other Achievements</h3>
            <div className="mt-4 space-y-4 text-white/80">
              <div>
                <h4 className="text-lg font-medium text-purple-300">Club Participation</h4>
                <p>
                  • Worked as a content team member in C2C (Compete-to-Compute) Club, and gained well knowledge in it.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-medium text-purple-300">Paper Presentation</h4>
                <p>• Presented a paper on "Virtual Reality in Mental Health" in Rajalakshmi Engineering College.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

