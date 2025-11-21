'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  service: string | null
}

export default function PaymentModal({ isOpen, onClose, service }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState<'bkash' | 'nagad' | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [step, setStep] = useState(1)

  const handlePayment = () => {
    // Here you would integrate with your backend
    alert(`Payment initiated for ${service} via ${selectedMethod}`)
    setStep(3)
  }

  const resetForm = () => {
    setSelectedMethod(null)
    setPhoneNumber('')
    setTransactionId('')
    setStep(1)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={resetForm}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-dark rounded-2xl p-6 max-w-md w-full shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">Complete Payment</h3>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Service Info */}
              <div className="mb-6 p-4 bg-white/5 rounded-xl">
                <p className="text-gray-400 text-sm">Service</p>
                <p className="text-white font-semibold">{service}</p>
              </div>

              {/* Step 1: Payment Method Selection */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Choose Payment Method</h4>
                  <div className="space-y-4">
                    {/* bKash Option */}
                    <motion.div
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedMethod === 'bkash' 
                          ? 'border-green-500 bg-green-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setSelectedMethod('bkash')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">📱</div>
                        <div>
                          <div className="text-white font-semibold">bKash</div>
                          <div className="text-gray-400 text-sm">Send money to: +8801887736907</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Nagad Option */}
                    <motion.div
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedMethod === 'nagad' 
                          ? 'border-green-500 bg-green-500/10' 
                          : 'border-white/10 hover:border-white/20'
                      }`}
                      onClick={() => setSelectedMethod('nagad')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">💳</div>
                        <div>
                          <div className="text-white font-semibold">Nagad</div>
                          <div className="text-gray-400 text-sm">Send money to: +8801887736907</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <motion.button
                    onClick={() => setStep(2)}
                    disabled={!selectedMethod}
                    className={`w-full py-4 rounded-xl font-semibold text-white mt-6 transition-all ${
                      selectedMethod 
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600' 
                        : 'bg-gray-600 cursor-not-allowed'
                    }`}
                    whileHover={selectedMethod ? { scale: 1.02 } : {}}
                    whileTap={selectedMethod ? { scale: 0.98 } : {}}
                  >
                    Continue to Payment
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Payment Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Payment Details</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-400 text-sm block mb-2">Your Phone Number</label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="01XXXXXXXXX"
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-gray-400 text-sm block mb-2">Transaction ID</label>
                      <input
                        type="text"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        placeholder="Enter transaction ID"
                        className="w-full p-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Payment Instructions */}
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <h5 className="text-blue-400 font-semibold mb-2">Payment Instructions:</h5>
                      <ol className="text-gray-300 text-sm space-y-1">
                        <li>1. Go to your {selectedMethod?.toUpperCase()} app</li>
                        <li>2. Send money to: <strong>+8801887736907</strong></li>
                        <li>3. Enter the transaction ID above</li>
                        <li>4. Click Confirm Payment</li>
                      </ol>
                    </div>
                  </div>

                  <div className="flex space-x-4 mt-6">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 py-3 border border-white/10 text-white rounded-xl hover:bg-white/5 transition-colors"
                    >
                      Back
                    </button>
                    <motion.button
                      onClick={handlePayment}
                      disabled={!phoneNumber || !transactionId}
                      className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all ${
                        phoneNumber && transactionId
                          ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600' 
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                      whileHover={phoneNumber && transactionId ? { scale: 1.02 } : {}}
                      whileTap={phoneNumber && transactionId ? { scale: 0.98 } : {}}
                    >
                      Confirm Payment
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Success */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="text-6xl mb-4"
                  >
                    🎉
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-2">Payment Successful!</h4>
                  <p className="text-gray-400 mb-6">
                    Thank you for your payment. We'll contact you shortly.
                  </p>
                  <motion.button
                    onClick={resetForm}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-xl font-semibold text-white"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}