'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Profile() {
  const { data: session, status } = useSession()
  const router = useRouter()
  
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    bio: '',
    joinDate: '',
    profileImage: ''
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(user)
  const [isLoading, setIsLoading] = useState(true)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  // Redirect if not authenticated and set user data
  useEffect(() => {
    if (status === 'loading') return
    
    if (!session) {
      router.push('/login')
    } else {
      const userData = {
        name: session.user?.name || 'User',
        email: session.user?.email || '',
        phone: '+8801887736907',
        location: 'Bangladesh',
        bio: 'Passionate web developer and UI/UX designer with expertise in modern web technologies.',
        joinDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        profileImage: ''
      }
      
      setUser(userData)
      setFormData(userData)
      setIsLoading(false)
    }
  }, [session, status, router])

  const handleSave = () => {
    setUser(formData)
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Handle profile image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, GIF, etc.)!')
        return
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB!')
        return
      }
      
      // Create URL for the image preview
      const imageUrl = URL.createObjectURL(file)
      
      // Update user state with new image
      setUser(prev => ({ ...prev, profileImage: imageUrl }))
      setFormData(prev => ({ ...prev, profileImage: imageUrl }))
      
      alert('Profile picture updated successfully!')
      
      // Here you would typically upload to your server
      console.log('Selected file:', file.name, file.size, file.type)
    }
  }

  // Settings modal handlers
  const handleChangePassword = () => {
    setActiveModal('password')
    alert('Password change feature will be implemented with email verification!')
    setTimeout(() => setActiveModal(null), 2000)
  }

  const handleNotifications = () => {
    setActiveModal('notifications')
    alert('Notification preferences saved!')
    setTimeout(() => setActiveModal(null), 2000)
  }

  const handlePrivacy = () => {
    setActiveModal('privacy')
    alert('Privacy settings updated!')
    setTimeout(() => setActiveModal(null), 2000)
  }

  const handleDeleteAccount = () => {
    const confirmDelete = confirm('Are you sure you want to delete your account? This action cannot be undone!')
    if (confirmDelete) {
      setActiveModal('delete')
      alert('Account deletion feature will be implemented with confirmation email!')
      setTimeout(() => setActiveModal(null), 2000)
    }
  }

  // Show loading while checking authentication
  if (status === 'loading' || isLoading) {
    return (
      <div className="min-h-screen pt-20 pb-10 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your profile...</p>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

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
          className="text-center mb-8"
        >
          <motion.h1 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Profile
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="glass-dark rounded-2xl p-6 text-center">
              {/* Profile Logo/Avatar with Real File Upload */}
              <div className="relative mx-auto mb-4 w-32 h-32">
                <motion.div
                  className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl text-white font-bold relative overflow-hidden"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Show uploaded image or initial */}
                  {user.profileImage ? (
                    <img 
                      src={user.profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    user.name.charAt(0).toUpperCase()
                  )}
                  
                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="profile-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  
                  {/* Camera/Edit Icon Overlay - Now triggers file input */}
                  <motion.label
                    htmlFor="profile-upload"
                    className="absolute bottom-2 right-2 w-8 h-8 bg-black/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-black/90 transition-colors border border-white/20"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-white text-xs">📷</span>
                  </motion.label>
                </motion.div>
              </div>

              {/* User Info */}
              <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
              <p className="text-gray-400 mb-4">{user.bio}</p>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Member since</span>
                  <span className="text-white">{user.joinDate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Email verified</span>
                  <span className="text-green-400">✅ Yes</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Account status</span>
                  <span className="text-green-400">Active</span>
                </div>
              </div>

              {/* Edit Button */}
              <motion.button
                onClick={() => setIsEditing(!isEditing)}
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white transition-all mb-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
              </motion.button>

              {/* Upload Photo Button - Also triggers file input */}
              <motion.label
                htmlFor="profile-upload"
                className="w-full py-3 glass border border-white/10 hover:bg-white/10 rounded-xl font-semibold text-white transition-all cursor-pointer block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Change Profile Photo
              </motion.label>
            </div>
          </motion.div>

          {/* Profile Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Profile Information</h3>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-gray-300 mb-2">Full Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  ) : (
                    <div className="p-4 bg-white/5 rounded-xl text-white border border-white/10">{user.name}</div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 mb-2">Email Address</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  ) : (
                    <div className="p-4 bg-white/5 rounded-xl text-white border border-white/10">{user.email}</div>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 mb-2">Phone Number</label>
                  {isEditing ? (
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  ) : (
                    <div className="p-4 bg-white/5 rounded-xl text-white border border-white/10">{user.phone}</div>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-gray-300 mb-2">Location</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  ) : (
                    <div className="p-4 bg-white/5 rounded-xl text-white border border-white/10">{user.location}</div>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-gray-300 mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows={4}
                      className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  ) : (
                    <div className="p-4 bg-white/5 rounded-xl text-white border border-white/10">{user.bio}</div>
                  )}
                </div>

                {/* Save Button */}
                {isEditing && (
                  <motion.button
                    onClick={handleSave}
                    className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Save Changes
                  </motion.button>
                )}
              </div>
            </div>

            {/* Account Settings */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="glass-dark rounded-2xl p-6 mt-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Account Settings</h3>
              
              <div className="space-y-4">
                {/* Change Password */}
                <motion.button
                  onClick={handleChangePassword}
                  className="w-full p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-blue-500/20 transition-all text-white text-left flex items-center justify-between group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🔒</span>
                    <div>
                      <div className="font-semibold">Change Password</div>
                      <div className="text-gray-400 text-sm">Update your password regularly</div>
                    </div>
                  </div>
                  <span className="group-hover:scale-125 transition-transform">→</span>
                </motion.button>

                {/* Notification Settings */}
                <motion.button
                  onClick={handleNotifications}
                  className="w-full p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-purple-500/20 transition-all text-white text-left flex items-center justify-between group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🔔</span>
                    <div>
                      <div className="font-semibold">Notification Settings</div>
                      <div className="text-gray-400 text-sm">Manage your email and push notifications</div>
                    </div>
                  </div>
                  <span className="group-hover:scale-125 transition-transform">→</span>
                </motion.button>

                {/* Privacy Settings */}
                <motion.button
                  onClick={handlePrivacy}
                  className="w-full p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-green-500/20 transition-all text-white text-left flex items-center justify-between group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">👁️</span>
                    <div>
                      <div className="font-semibold">Privacy Settings</div>
                      <div className="text-gray-400 text-sm">Control your privacy and data</div>
                    </div>
                  </div>
                  <span className="group-hover:scale-125 transition-transform">→</span>
                </motion.button>

                {/* Delete Account */}
                <motion.button
                  onClick={handleDeleteAccount}
                  className="w-full p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-red-500/20 transition-all text-white text-left flex items-center justify-between group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl group-hover:scale-110 transition-transform">🗑️</span>
                    <div>
                      <div className="font-semibold">Delete Account</div>
                      <div className="text-gray-400 text-sm">Permanently delete your account</div>
                    </div>
                  </div>
                  <span className="group-hover:scale-125 transition-transform">→</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Loading Modal */}
      {activeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-dark rounded-2xl p-8 text-center max-w-sm"
          >
            <div className="text-4xl mb-4">⏳</div>
            <h3 className="text-xl font-bold text-white mb-2">Processing...</h3>
            <p className="text-gray-400">
              {activeModal === 'password' && 'Changing password...'}
              {activeModal === 'notifications' && 'Updating notifications...'}
              {activeModal === 'privacy' && 'Updating privacy settings...'}
              {activeModal === 'delete' && 'Processing account deletion...'}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}