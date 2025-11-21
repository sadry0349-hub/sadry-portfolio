'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Dashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [user, setUser] = useState({
    name: 'Guest',
    email: '',
    joinDate: new Date().toISOString().split('T')[0]
  })

  const [stats, setStats] = useState([
    { label: 'Projects Completed', value: 0, icon: '📁', color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Projects', value: 0, icon: '🚀', color: 'from-green-500 to-emerald-500' },
    { label: 'Pending Payments', value: 0, icon: '💰', color: 'from-yellow-500 to-orange-500' },
    { label: 'Messages', value: 0, icon: '💬', color: 'from-purple-500 to-pink-500' }
  ])

  const [recentProjects, setRecentProjects] = useState([])
  const [recentPayments, setRecentPayments] = useState([])

  // Redirect if not authenticated
  useEffect(() => {
    if (status === 'loading') return // Still loading
    if (!session) {
      router.push('/login')
    } else {
      // Set user data from session
      setUser({
        name: session.user?.name || 'User',
        email: session.user?.email || '',
        joinDate: new Date().toISOString().split('T')[0] // Today's date for new users
      })
    }
  }, [session, status, router])

  // Show loading while checking authentication
  if (status === 'loading') {
    return (
      <div className="min-h-screen pt-20 pb-10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // Show nothing if not authenticated (will redirect)
  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen pt-20 pb-10">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome, <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{user.name}</span>!
          </h1>
          <p className="text-gray-400">This is your personal dashboard. Get started with your first project!</p>
          
          {/* New User Welcome Message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 glass rounded-2xl p-6 border border-green-500/20"
          >
            <div className="flex items-center space-x-4">
              <div className="text-4xl">🎉</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Welcome to Your Dashboard!</h3>
                <p className="text-gray-300">
                  Get started by exploring our services or creating your first project. 
                  Your journey to amazing digital experiences starts here!
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-dark rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
                </div>
                <motion.div 
                  className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${stat.color}`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {stat.icon}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Get Started Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Empty State - Projects */}
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-6xl mb-4">📂</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Projects Yet</h3>
            <p className="text-gray-400 mb-6">
              You haven't started any projects yet. Let's create something amazing together!
            </p>
            <Link href="/services">
              <motion.button 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your First Project
              </motion.button>
            </Link>
          </div>

          {/* Empty State - Payments */}
          <div className="glass-dark rounded-2xl p-6 text-center">
            <div className="text-6xl mb-4">💳</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Payments Yet</h3>
            <p className="text-gray-400 mb-6">
              When you start a project, your payment history will appear here.
            </p>
            <Link href="/services">
              <motion.button 
                className="px-6 py-3 glass border border-white/10 hover:bg-white/10 rounded-xl font-semibold text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services & Pricing
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={action.label} href={action.href}>
                <motion.div
                  className="p-4 glass-dark rounded-xl border border-white/10 hover:bg-white/10 transition-all text-white text-center cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    backgroundColor: "rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="font-semibold">{action.label}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

const quickActions = [
  { label: 'Browse Services', icon: '🛠️', href: '/services' },
  { label: 'View Portfolio', icon: '💼', href: '/portfolio' },
  { label: 'Contact Support', icon: '💬', href: '/contact' },
  { label: 'My Profile', icon: '👤', href: '/profile' }
]