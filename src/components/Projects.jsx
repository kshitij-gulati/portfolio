import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, BarChart3, Code, Database, Brain, Sparkles } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Student Performance Analysis",
      description: "Analyzed student performance data to identify factors affecting academic success using Python and statistical methods.",
      category: "data-analysis",
      technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
      github: "https://github.com/kshitij-gulati/student-performance",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-100 via-indigo-50 to-purple-100",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Personal Finance Tracker",
      description: "Built a web application to track personal expenses with interactive charts and budget management features.",
      category: "software-engineering",
      technologies: ["React", "JavaScript", "Chart.js", "LocalStorage"],
      github: "https://github.com/kshitij-gulati/finance-tracker",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-green-100 via-emerald-50 to-teal-100",
      iconColor: "text-green-500"
    },
    {
      id: 3,
      title: "Movie Recommendation System",
      description: "Created a basic recommendation system using collaborative filtering to suggest movies based on user preferences.",
      category: "machine-learning",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
      github: "https://github.com/kshitij-gulati/movie-recommender",
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-purple-100 via-pink-50 to-rose-100",
      iconColor: "text-purple-500"
    },
    {
      id: 4,
      title: "COVID-19 Data Dashboard",
      description: "Interactive dashboard displaying COVID-19 statistics with real-time data updates and visualizations.",
      category: "data-analysis",
      technologies: ["Python", "Streamlit", "Plotly", "APIs"],
      github: "https://github.com/kshitij-gulati/covid-dashboard",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-100 via-amber-50 to-yellow-100",
      iconColor: "text-orange-500"
    },
    {
      id: 5,
      title: "Weather App",
      description: "Responsive weather application with location-based forecasts and clean user interface design.",
      category: "software-engineering",
      technologies: ["JavaScript", "HTML/CSS", "Weather API", "Bootstrap"],
      github: "https://github.com/kshitij-gulati/weather-app",
      icon: <Code className="w-8 h-8" />,
      gradient: "from-sky-100 via-cyan-50 to-blue-100",
      iconColor: "text-sky-500"
    },
    {
      id: 6,
      title: "Sales Data ETL Pipeline",
      description: "Simple ETL pipeline to extract, transform, and load sales data from CSV files into a database.",
      category: "data-engineering",
      technologies: ["Python", "SQLite", "Pandas", "Automation"],
      github: "https://github.com/kshitij-gulati/sales-etl",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-violet-100 via-indigo-50 to-blue-100",
      iconColor: "text-violet-500"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'data-analysis', label: 'Data Analysis', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'software-engineering', label: 'Software Engineering', icon: <Code className="w-4 h-4" /> },
    { id: 'machine-learning', label: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { id: 'data-engineering', label: 'Data Engineering', icon: <Database className="w-4 h-4" /> }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white via-[#fafbff] to-[#f5f8ff] dark:from-[#1a1a1a] dark:via-[#0f0f0f] dark:to-[#0a0a0a] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-gradient-to-br from-secondary-400/15 to-secondary-200/5 rounded-full blur-3xl dark:from-secondary-600/10 dark:to-secondary-400/5"></div>
      <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-primary-200/5 rounded-full blur-3xl dark:from-primary-600/5 dark:to-primary-400/5"></div>
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
            Selected work
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my academic projects, personal learning, and hands-on experience with data analysis and software development
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg scale-105'
                  : 'glass-card text-neutral-700 dark:text-neutral-300 hover:shadow-lg hover:scale-105'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon}
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="minimal-card rounded-3xl overflow-hidden group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                {/* Project Visual */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/15 rounded-full"></div>
                  
                  {/* Main Icon */}
                  <motion.div 
                    className={`${project.iconColor} relative z-10 drop-shadow-sm`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Hover Indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Subtle Pattern Overlay */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                                     radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)`
                  }}></div>
                </div>
                
                <div className="p-8">
                  <motion.h3 
                    className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-700"
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform duration-200" />
                      <span className="text-sm font-medium">View Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://github.com/kshitij-gulati"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 glass-card text-neutral-700 dark:text-neutral-300 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 group"
            whileHover={{ y: -5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
            <span className="group-hover:text-primary-600 transition-colors duration-300">View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects