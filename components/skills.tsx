"use client"

import { motion } from "framer-motion"
import { Code, Globe, Terminal, GitBranch } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "C", level: "Intermediate" },
        { name: "Java", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "C++", level: "Beginner" },
        { name: "Python", level: "Beginner" },
        { name: "Node.js", level: "Beginner" },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "React.js", level: "Beginner" },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Git", level: "" },
        { name: "Node.js", level: "" },
        { name: "React", level: "" },
        { name: "Next.js", level: "" },
        { name: "Angular", level: "" },
        { name: "MySQL", level: "" },
        { name: "MongoDB", level: "" },
        { name: "PHP", level: "" },
      ],
    },
    {
      title: "Coding",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Solving daily algorithmic challenges on GFG and LeetCode", level: "" },
        { name: "Enhancing problem solving skills through continuous practice", level: "" },
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-20">
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg"
              >
                <div className="flex items-center">
                  <div className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-2 text-white">
                    {category.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="mt-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">{skill.name}</span>
                        {skill.level && <span className="text-sm text-purple-300">{skill.level}</span>}
                      </div>
                      {skill.level && (
                        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{
                              width:
                                skill.level === "Beginner" ? "33%" : skill.level === "Intermediate" ? "66%" : "100%",
                            }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

