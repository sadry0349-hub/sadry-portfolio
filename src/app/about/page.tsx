'use client'

import { motion } from 'framer-motion'

export default function About() {
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
            About Me
          </motion.h1>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Sadry</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate web developer and UI/UX designer from Bangladesh with over 2 years of experience 
                  creating digital experiences that blend cutting-edge technology with stunning design.
                </p>
                <p>
                  My journey in web development started with curiosity about how websites work, and it has evolved 
                  into a passion for building responsive, performant, and user-friendly applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                  or helping other developers improve their skills.
                </p>
              </div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-2 gap-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center p-4 glass rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
              
              {skills.map((skillCategory, index) => (
                <motion.div
                  key={skillCategory.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="glass rounded-xl p-6"
                >
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <span className="text-xl mr-3">{skillCategory.icon}</span>
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillCategory.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 border border-white/10 text-sm"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(59, 130, 246, 0.2)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always interested in new challenges and opportunities. Whether you need a website, 
              web application, or just want to chat about technology, feel free to reach out!
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
    </div>
  )
}

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '100%', label: 'Client Satisfaction' }
]

const skills = [
  {
    category: 'Frontend Development',
    icon: '💻',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Backend & Database',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST APIs']
  },
  {
    category: 'Tools & Technologies',
    icon: '🛠️',
    skills: ['Git', 'VS Code', 'Figma', 'Adobe XD', 'Framer Motion', 'Webpack']
  }
]