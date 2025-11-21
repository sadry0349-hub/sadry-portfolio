'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Portfolio() {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
            Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Explore my latest projects showcasing modern web development, stunning designs, and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem}
              onClick={() => setFilter(filterItem)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === filterItem
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'glass text-gray-300 hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filterItem.charAt(0).toUpperCase() + filterItem.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-dark rounded-2xl overflow-hidden group cursor-pointer"
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                <motion.div 
                  className="w-full h-full flex items-center justify-center text-6xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.category === 'web' 
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : project.category === 'design'
                      ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                      : 'bg-green-500/20 text-green-300 border border-green-500/30'
                  }`}>
                    {project.category.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center rounded-lg font-semibold transition-all text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 glass border border-white/10 hover:bg-white/10 text-white text-center rounded-lg font-semibold transition-all text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 glass rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-300 mb-6">
            Let's work together to bring your ideas to life with cutting-edge technology and stunning design.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

const filters = ['all', 'web', 'design', 'other']

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with Next.js, featuring real-time inventory and secure payments.",
    category: "web",
    icon: "🛒",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A stunning portfolio website with glassmorphism design and smooth animations.",
    category: "web",
    icon: "💼",
    technologies: ["React", "Framer Motion", "CSS3"],
    liveUrl: "#",
    githubUrl: "#"
  },
    {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with beautiful data visualizations and forecasts.",
    category: "web",
    icon: "🌤️",
    technologies: ["React", "Chart.js", "API Integration"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "UI Design System",
    description: "Comprehensive design system with reusable components and design guidelines.",
    category: "design",
    icon: "🎨",
    technologies: ["Figma", "Design Tokens", "Components"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 5,
    title: "Mobile App Design",
    description: "Fitness tracking mobile app design with intuitive user interface and experience.",
    category: "design",
    icon: "📱",
    technologies: ["Figma", "UI/UX", "Prototyping"],
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 6,
    title: "VS Code Theme",
    description: "Custom VS Code dark theme optimized for web development with syntax highlighting.",
    category: "other",
    icon: "⚡",
    technologies: ["VS Code", "Theming", "JSON"],
    liveUrl: "#",
    githubUrl: "#"
  }
]