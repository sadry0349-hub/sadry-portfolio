'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import PaymentModal from '@/components/PaymentModal'

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  const handleBuyNow = (service: string) => {
    setSelectedService(service)
    setIsPaymentModalOpen(true)
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
            Services
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Professional services tailored to bring your digital vision to life with cutting-edge technology and stunning design.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass-dark rounded-2xl p-8 hover:bg-white/5 transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Service Icon */}
              <motion.div 
                className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-400 mb-6 text-center leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature}
                    className="flex items-center space-x-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1 + featureIndex * 0.1 }}
                  >
                    <span className="text-green-400 text-lg">✓</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  ৳{service.price}
                  <span className="text-sm text-gray-400 font-normal"> BDT</span>
                </motion.div>
                <motion.button
                  onClick={() => handleBuyNow(service.title)}
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Methods Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass rounded-2xl p-8 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Supported Payment Methods</h2>
          <div className="flex justify-center space-x-12 mb-6">
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl mb-2">📱</div>
              <div className="text-white font-semibold">bKash</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-4xl mb-2">💳</div>
              <div className="text-white font-semibold">Nagad</div>
            </motion.div>
          </div>
          <p className="text-gray-300">
            Instant payment confirmation • 24/7 Support • Secure transactions
          </p>
        </motion.div>
      </div>

      {/* Payment Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        service={selectedService}
      />
    </div>
  )
}

const services = [
  {
    title: 'Web Development',
    icon: '💻',
    description: 'Complete website development with modern technologies and responsive design.',
    price: '15,000',
    features: [
      'Responsive Design',
      'Modern Framework (Next.js)',
      'SEO Optimization',
      'Fast Loading Speed',
      '1 Year Support'
    ]
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Beautiful and user-friendly interface designs that enhance user experience.',
    price: '8,000',
    features: [
      'Figma/Adobe XD Design',
      'User Research',
      'Prototype Creation',
      'Design System',
      '2 Revisions'
    ]
  },
  {
    title: 'VS Code Mastering',
    icon: '⚡',
    description: 'Boost your coding productivity with VS Code optimization and workflow setup.',
    price: '3,000',
    features: [
      'VS Code Setup',
      'Extensions Configuration',
      'Keyboard Shortcuts',
      'Snippets Creation',
      'Productivity Tips'
    ]
  }
]