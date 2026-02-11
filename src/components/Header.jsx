import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'glass-card' : 'bg-white/30 dark:bg-neutral-900/30 backdrop-blur-sm border-b border-white/10 dark:border-neutral-800/30'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <a href="#" className="block">
            <motion.span 
              className="text-xl font-display font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Kshitij Gulati
            </motion.span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
            
            {/* Dark Mode Toggle Button */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-slate-700" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile menu button and Dark Mode Toggle */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Dark Mode Toggle for Mobile */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300"
              whileTap={{ scale: 0.95 }}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? (
                  <Sun size={20} className="text-yellow-500" />
                ) : (
                  <Moon size={20} className="text-slate-700" />
                )}
              </motion.div>
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              className="p-2 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-4
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            maxHeight: isMenuOpen ? 400 : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="glass-card rounded-2xl mx-4 mb-4">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-neutral-700 dark:text-neutral-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Header