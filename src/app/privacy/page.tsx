'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
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
            Privacy Policy
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How we protect and use your information
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We collect information that you provide directly to us when you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Create an account on our website</li>
                  <li>Fill out contact forms or service requests</li>
                  <li>Make payments for our services</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, payment information, 
                  and any other information you choose to provide.
                </p>
              </div>
            </motion.section>

            {/* Payment Information */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">2. Payment Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  For payment processing through bKash and Nagad, we collect:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Your phone number associated with the payment</li>
                  <li>Transaction IDs for verification</li>
                  <li>Payment amounts and dates</li>
                </ul>
                <p>
                  <strong>Important:</strong> We do not store your bKash or Nagad account passwords or PINs. 
                  All payment verifications are done through official payment gateway APIs.
                </p>
              </div>
            </motion.section>

            {/* Data Usage */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <div className="text-gray-300 space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Communicate with you about products, services, and promotions</li>
                  <li>Monitor and analyze trends and usage</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Sharing */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We do not sell, trade, or rent your personal identification information to others. 
                  We may share generic aggregated demographic information not linked to any personal 
                  identification information regarding visitors and users with our business partners.
                </p>
                <p>
                  We may use third-party service providers to help us operate our business and the 
                  website or administer activities on our behalf, such as sending out newsletters 
                  or surveys.
                </p>
              </div>
            </motion.section>

            {/* Data Security */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  We implement appropriate security measures to protect against unauthorized access, 
                  alteration, disclosure, or destruction of your personal information.
                </p>
                <p>
                  Security measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>SSL encryption for data transmission</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Secure payment processing through trusted providers</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <div className="text-gray-300 space-y-4">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate personal information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to processing of your personal information</li>
                  <li>Request transfer of your personal information</li>
                  <li>Withdraw consent at any time</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact */}
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <div className="text-gray-300 space-y-2">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-white/5 p-4 rounded-xl mt-4">
                  <p><strong>Email:</strong> sadry0349@gmail.com</p>
                  <p><strong>Phone:</strong> +8801887736907</p>
                  <p><strong>Address:</strong> Bangladesh</p>
                  <p><strong>Response Time:</strong> Within 24-48 hours</p>
                </div>
              </div>
            </motion.section>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="mt-8 p-6 bg-purple-500/10 border border-purple-500/20 rounded-xl"
            >
              <p className="text-purple-300 text-center">
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "Last Updated" date.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}