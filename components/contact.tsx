"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Thank you for your message! I will get back to you soon.")
  }

  return (
    <section id="contact" className="relative py-20">
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
              Contact Me
            </span>
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white">Get In Touch</h3>
              <p className="mt-2 text-white/70">
                Feel free to reach out to me for any questions or opportunities. I'm always open to discussing new
                projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">Email</h4>
                    <a href="mailto:tarani2k4@gmail.com" className="text-white hover:text-purple-300">
                      tarani2k4@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">Phone</h4>
                    <a href="tel:8838977500" className="text-white hover:text-purple-300">
                      8838977500
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-medium text-white/60">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/tarani-venugopal-a4a122288"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300"
                    >
                      Tarani Venugopal
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 backdrop-blur-lg">
              <h3 className="text-xl font-bold text-white">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/50 backdrop-blur-sm focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-white transition-all duration-300 hover:from-purple-600 hover:to-pink-600"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

