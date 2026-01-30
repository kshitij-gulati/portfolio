import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const Hero = () => {
  const floatingElements = [
    { icon: '✨', delay: 0, duration: 6 },
    { icon: '💫', delay: 2, duration: 8 },
    { icon: '⭐', delay: 4, duration: 7 },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 dot-pattern opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-accent-50/40"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl"></div>
      
      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-60 z-10 pointer-events-none"
          style={{
            left: `${15 + index * 25}%`,
            top: `${25 + index * 15}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {element.icon}
        </motion.div>
      ))}

      {/* Additional floating elements for more visual interest */}
      <motion.div
        className="absolute top-20 right-20 text-3xl opacity-40 z-10 pointer-events-none"
        animate={{
          y: [-20, 20, -20],
          rotate: [0, -180, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 text-2xl opacity-50 z-10 pointer-events-none"
        animate={{
          y: [-15, 25, -15],
          rotate: [0, 270, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        💻
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-10 text-2xl opacity-30 z-10 pointer-events-none"
        animate={{
          y: [-25, 15, -25],
          rotate: [0, 180, 0],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 12,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        📊
      </motion.div>

      <div className="max-w-7xl mx-auto section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.div
            className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-accent-500" />
            <span className="text-sm font-medium text-neutral-600">Available for opportunities</span>
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-neutral-900 mb-6 leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kshitij Gulati
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-neutral-600 mb-6 font-medium tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Data Analyst & Software Development Engineer
          </motion.p>
          
          <motion.p
            className="text-lg text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Recent graduate passionate about data analysis and software development. 
            Eager to apply my skills in Python, SQL, and modern web technologies to solve real-world problems.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { icon: Github, href: "https://github.com/kshitij-gulati", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/kshitijgulati", label: "LinkedIn" },
              { icon: Mail, href: "mailto:kshitijgulati7@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 glass-card rounded-2xl hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon size={24} className="text-neutral-700 group-hover:text-primary-600 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href="#projects"
              className="glow-button px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 glass-card text-neutral-700 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="group-hover:text-primary-600 transition-colors duration-300">Get In Touch</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-2 glass-card rounded-full"
          >
            <ArrowDown className="text-neutral-400" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero