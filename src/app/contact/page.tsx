'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Message sent successfully! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Let's discuss your project and bring your ideas to life. I'm always excited to work on new challenges.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
            
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.target}
                className="flex items-center space-x-4 p-4 glass rounded-xl hover:bg-white/5 transition-all group"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div 
                  className="text-2xl p-3 rounded-lg bg-white/10 group-hover:bg-blue-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {method.icon}
                </motion.div>
                <div>
                  <div className="text-white font-semibold">{method.label}</div>
                  <div className="text-gray-400 text-sm">{method.value}</div>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="pt-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 glass rounded-xl text-gray-400 hover:text-white transition-all"
                    whileHover={{ 
                      scale: 1.2, 
                      y: -5,
                      backgroundColor: "rgba(255,255,255,0.15)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <label className="block text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <label className="block text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <label className="block text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Response Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Quick Response Guaranteed</h3>
          <p className="text-gray-300 mb-4">
            I typically respond to all messages within 2-4 hours during business days. 
            For urgent matters, feel free to call or WhatsApp me directly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="tel:+8801887736907"
              className="flex items-center space-x-3 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>📞</span>
              <span>Call Now</span>
            </motion.a>
            <motion.a
              href="https://wa.me/8801887736907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 px-6 py-3 glass border border-white/10 hover:bg-white/10 rounded-xl font-semibold text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const contactMethods = [
  {
    icon: '📧',
    label: 'Email',
    value: 'sadry0349@gmail.com',
    href: 'mailto:sadry0349@gmail.com',
    target: '_self'
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+8801887736907',
    href: 'tel:+8801887736907',
    target: '_self'
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+8801887736907',
    href: 'https://wa.me/8801887736907',
    target: '_blank'
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bangladesh',
    href: '#',
    target: '_self'
  }
]

const socialLinks = [
  { 
    name: 'Facebook', 
    url: 'https://www.facebook.com/sa.sadri.94', 
    icon: '📘' 
  },
  { 
    name: 'Instagram', 
    url: 'https://www.instagram.com/sadri______10/', 
    icon: '📷' 
  },
  { 
    name: 'Gmail', 
    url: 'mailto:sadry0349@gmail.com', 
    icon: '📧' 
  }
]