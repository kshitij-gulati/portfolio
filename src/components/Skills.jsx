import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      skills: [
        { name: "Python", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Excel", level: 85 },
        { name: "Pandas", level: 70 },
        { name: "Matplotlib", level: 65 },
        { name: "Jupyter", level: 80 }
      ]
    },
    {
      title: "Programming & Development",
      skills: [
        { name: "JavaScript", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "React", level: 65 },
        { name: "Git", level: 75 },
        { name: "Node.js", level: 60 },
        { name: "Java", level: 65 }
      ]
    },
    {
      title: "Data Science & Statistics",
      skills: [
        { name: "Statistics", level: 75 },
        { name: "NumPy", level: 70 },
        { name: "Data Cleaning", level: 80 },
        { name: "Scikit-learn", level: 60 },
        { name: "Data Visualization", level: 75 },
        { name: "Research Methods", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "MySQL", level: 70 },
        { name: "MongoDB", level: 55 },
        { name: "Power BI", level: 60 },
        { name: "Tableau", level: 55 },
        { name: "VS Code", level: 85 },
        { name: "Linux", level: 60 }
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-neutral-50/50 to-white">
      <div className="max-w-7xl mx-auto">
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
            What I work with
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit spanning data analysis, software development, and everything in between
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="minimal-card rounded-3xl p-8 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8 group-hover:text-primary-600 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-neutral-700 font-medium text-lg">
                        {skill.name}
                      </span>
                      <motion.span 
                        className="text-neutral-500 text-sm font-medium px-3 py-1 bg-neutral-100 rounded-full"
                        whileHover={{ scale: 1.1 }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="glass-card rounded-3xl p-10 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full -translate-y-20 -translate-x-20 opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full translate-y-16 translate-x-16 opacity-30"></div>
            
            <motion.h3 
              className="text-2xl font-bold text-neutral-900 mb-6 relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              Always Learning
            </motion.h3>
            <motion.p 
              className="text-neutral-600 mb-8 text-lg leading-relaxed relative z-10"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Currently learning: Machine Learning, Advanced React, Cloud Computing, and Data Engineering
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {['TensorFlow', 'AWS', 'Docker', 'R', 'Apache Spark', 'FastAPI'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills