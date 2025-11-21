'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

interface NotificationProps {
  message: string
  type: 'success' | 'error' | 'info'
  isVisible: boolean
  onClose: () => void
  duration?: number
}

export default function Notification({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}: NotificationProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isVisible, duration, onClose])

  const getBackgroundColor = () => {
    switch (type) {
      case 'success': return 'bg-green-500/20 border-green-500/30'
      case 'error': return 'bg-red-500/20 border-red-500/30'
      case 'info': return 'bg-blue-500/20 border-blue-500/30'
      default: return 'bg-gray-500/20 border-gray-500/30'
    }
  }

  const getIcon = () => {
    switch (type) {
      case 'success': return '✅'
      case 'error': return '❌'
      case 'info': return 'ℹ️'
      default: return '💡'
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={`fixed top-4 right-4 z-50 ${getBackgroundColor()} border rounded-xl p-4 backdrop-blur-sm max-w-sm`}
        >
          <div className="flex items-center space-x-3">
            <span className="text-xl">{getIcon()}</span>
            <p className="text-white font-medium flex-1">{message}</p>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white transition-colors p-1 rounded"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}