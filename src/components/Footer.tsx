'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <motion.footer 
      className="glass-dark mt-20 border-t border-white/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Sadry
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Creating digital experiences that blend cutting-edge technology with stunning design. 
              Let's build something amazing together.
            </p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-3 rounded-xl text-gray-400 hover:text-white transition-all duration-300 hover:bg-white/10"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    backgroundColor: "rgba(255,255,255,0.15)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href}>
                    <motion.span 
                      className="text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
                      <span>{link.name}</span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <div className="space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                  <span className="text-gray-400">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            
            {/* Phone */}
            <motion.a
              href="tel:+8801887736907"
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass p-2 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <span className="text-lg">📞</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p>+8801887736907</p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="mailto:sadry0349@gmail.com"
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="glass p-2 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                <span className="text-lg">📧</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p>sadry0349@gmail.com</p>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801887736907"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
              whileHover={{ x: 5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="glass p-2 rounded-lg group-hover:bg-green-500/20 transition-colors">
                <span className="text-lg">💬</span>
              </div>
              <div>
                <p className="text-sm text-gray-500">WhatsApp</p>
                <p>+8801887736907</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-center md:text-left">
            &copy; 2024 Sadry. All rights reserved. Crafted with ❤️ and ☕
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <Link href="/privacy">
              <motion.span 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.span>
            </Link>
            <Link href="/terms">
              <motion.span 
                className="hover:text-white transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms & Conditions
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
  { name: 'Login', href: '/login' },
]

const services = [
  'Web Development',
  'UI/UX Design',
  'VS Code Mastering',
  'Responsive Design',
  'Performance Optimization'
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
  },
  { 
    name: 'WhatsApp', 
    url: 'https://wa.me/8801887736907', 
    icon: '💬' 
  }
]