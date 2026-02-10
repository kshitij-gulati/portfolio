import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Code, Database, TrendingUp, Zap, Target } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Analysis",
      description: "Transforming raw data into meaningful insights using Python, SQL, and visualization tools"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineering",
      description: "Building responsive web applications with modern frameworks and clean code practices"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Analytical mindset with a passion for solving complex challenges through technology"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and methodologies to stay current in the field"
    }
  ]

  const stats = [
    { label: "Education", value: "Final Year Student", icon: <Target className="w-5 h-5" /> },
    { label: "Projects Completed", value: "10+", icon: <Zap className="w-5 h-5" /> },
    { label: "Programming Languages", value: "5+", icon: <Code className="w-5 h-5" /> },
    { label: "Ready to Learn", value: "Always!", icon: <TrendingUp className="w-5 h-5" /> },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white via-[#fafbff] to-[#f5f8ff] dark:from-[#1a1a1a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-400/15 to-primary-200/5 rounded-full blur-3xl dark:from-primary-600/10 dark:to-primary-400/5"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-accent-400/10 to-accent-200/5 rounded-full blur-3xl dark:from-accent-600/5 dark:to-accent-400/5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-primary-600 font-medium text-sm uppercase tracking-widest mb-4"
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
          >
            Get to know me
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm a passionate professional who bridges the gap between data science and software engineering, 
            creating solutions that are both analytically sound and technically robust.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
              My Journey
            </h3>
            <div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Final Year CSE student with a strong foundation in both data analysis and software development, 
                I'm excited to begin my career in tech. Through my academic projects and self-learning, 
                I've developed skills in Python, SQL, web development, and data visualization.
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm passionate about using technology to solve problems and make data-driven decisions. 
                My projects range from analyzing datasets to find meaningful insights to building 
                web applications that provide real value to users.
              </motion.p>
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm eager to contribute to a team where I can apply my technical skills, continue learning, 
                and grow as a professional. I believe in continuous improvement and staying updated 
                with the latest technologies and best practices.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 relative z-10">
                Quick Facts
              </h3>
              <div className="space-y-6 relative z-10">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center justify-between group"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary-600 dark:text-primary-400">
                          {stat.icon}
                        </div>
                      </div>
                      <span className="text-neutral-600 dark:text-neutral-400 font-medium">{stat.label}</span>
                    </div>
                    <span className="font-bold text-neutral-900 dark:text-white text-lg">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="minimal-card text-center p-8 rounded-3xl group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/30 dark:to-accent-900/30 text-primary-600 dark:text-primary-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                {item.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About