'use client'

import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <div className="min-h-screen pt-20 pb-10">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Terms & Conditions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Last updated: December 1, 2024
          </motion.p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-dark rounded-2xl p-8"
        >
          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Welcome to Sadry's Portfolio Website. These Terms and Conditions govern your use of our website 
                and services. By accessing or using our services, you agree to be bound by these terms.
              </p>
            </motion.section>

            {/* Services */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">2. Services Offered</h2>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                <li>Web Development Services</li>
                <li>UI/UX Design Services</li>
                <li>VS Code Configuration Services</li>
                <li>Consultation and Technical Support</li>
              </ul>
            </motion.section>

            {/* Payments */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">3. Payments and Refunds</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Payment Methods:</strong> We accept payments through bKash and Nagad. All payments 
                  must be made in Bangladeshi Taka (BDT).
                </p>
                <p>
                  <strong>Payment Process:</strong> 
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Select your desired service</li>
                  <li>Choose payment method (bKash/Nagad)</li>
                  <li>Send payment to: <strong>+8801887736907</strong></li>
                  <li>Provide transaction ID for verification</li>
                  <li>Payment confirmation within 2-4 hours</li>
                </ol>
                <p>
                  <strong>Refund Policy:</strong> Refunds are available within 7 days of payment if service 
                  hasn't been initiated. Once work has started, refunds are provided on a pro-rata basis.
                </p>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p className="text-gray-300 leading-relaxed">
                All website content, designs, and source code remain the intellectual property of Sadry until 
                full payment is received. Upon complete payment, clients receive full ownership of the delivered work.
              </p>
            </motion.section>

            {/* Limitations */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitations of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                Sadry shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
                resulting from your use of our services. We strive to provide high-quality services but cannot 
                guarantee specific business outcomes.
              </p>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Email:</strong> sadry0349@gmail.com</p>
                <p><strong>Phone:</strong> +8801887736907</p>
                <p><strong>WhatsApp:</strong> +8801887736907</p>
                <p><strong>Business Hours:</strong> 9:00 AM - 6:00 PM (GMT+6)</p>
              </div>
            </motion.section>

            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
              className="mt-8 p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl"
            >
              <p className="text-blue-300 text-center">
                By using our services, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms and Conditions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}