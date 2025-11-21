'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useNavigation } from '@/hooks/useNavigation'
import { useSession, signOut } from 'next-auth/react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const { navigate } = useNavigation()
  const { data: session, status } = useSession()

  // Fix hydration by only rendering after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    navigate('/')
  }

  return (
    <motion.header 
      className="glass fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Sadry
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <motion.div
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`transition-colors ${
                    pathname === item.href 
                      ? 'text-white font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {pathname === item.href && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            
            {/* Show Profile/Dashboard when logged in, Login when not */}
            {session ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <motion.button 
                    className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Dashboard
                  </motion.button>
                </Link>
                <Link href="/profile">
                  <motion.button 
                    className="px-4 py-2 glass border border-white/10 hover:bg-white/10 rounded-lg font-semibold text-white transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Profile
                  </motion.button>
                </Link>
                <motion.button 
                  onClick={handleSignOut}
                  className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Logout
                </motion.button>
              </div>
            ) : (
              <Link href="/login">
                <motion.button 
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Login
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg glass"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu - Only render after mount to fix hydration */}
        <AnimatePresence>
          {isMounted && isMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden mt-16"
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Menu Panel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute top-full left-4 right-4 mt-2 glass-dark rounded-2xl shadow-2xl border border-white/10 z-50 md:hidden overflow-hidden"
              >
                <div className="p-6">
                  {/* Menu Items */}
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link href={item.href}>
                          <div
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                              pathname === item.href
                                ? 'bg-white/10 text-white'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium">{item.name}</span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    
                    {/* Auth Buttons Mobile */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: navItems.length * 0.1 }}
                      className="pt-4 border-t border-white/10 space-y-3"
                    >
                      {session ? (
                        <>
                          <Link href="/dashboard">
                            <motion.button 
                              className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-700 rounded-lg font-semibold text-white transition-all text-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Dashboard
                            </motion.button>
                          </Link>
                          <Link href="/profile">
                            <motion.button 
                              className="w-full px-4 py-3 glass border border-white/10 hover:bg-white/10 rounded-lg font-semibold text-white transition-all text-center"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              Profile
                            </motion.button>
                          </Link>
                          <motion.button 
                            onClick={() => {
                              handleSignOut()
                              setIsMenuOpen(false)
                            }}
                            className="w-full px-4 py-3 text-gray-300 hover:text-white transition-colors text-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Logout
                          </motion.button>
                        </>
                      ) : (
                        <Link href="/login">
                          <motion.button 
                            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-semibold text-white transition-all text-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Login
                          </motion.button>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

const navItems = [
  { name: 'Home', href: '/', icon: '🏠' },
  { name: 'About', href: '/about', icon: '👨‍💼' },
  { name: 'Services', href: '/services', icon: '🚀' },
  { name: 'Portfolio', href: '/portfolio', icon: '💼' },
  { name: 'Contact', href: '/contact', icon: '📞' },
]