import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, BookOpen, Code, Users } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      school: "Chitkara University",
      location: "Rajpura, Punjab",
      period: "2022 - 2026",
      description:
        "Specialized in Data Structures, Algorithms, Database Management, and Software Engineering. Active member of coding club and data science society. Currently pursuing my Bachelor of Engineering in Computer Science and Engineering from Chitkara University.",
      achievements: [
        "Completed capstone project on predictive analytics with 92% accuracy",
        "Top 5 in inter-college hackathon for FullStack Project",
      ],
      coursework: [
        "Data Structures",
        "Machine Learning",
        "Database Systems",
        "Web Development",
        "Statistics",
      ],
    },
  ]

  const personalProjects = [
    {
      title: "Personal Learning Journey",
      period: "2022 - Present",
      description: "Continuous self-learning through online courses, tutorials, and hands-on projects to stay updated with latest technologies.",
      achievements: [
        "Completed 15+ online courses on Coursera, Udemy, and edX",
        "Built 10+ personal projects showcasing different skills",
        "Active contributor to open-source projects on GitHub",
        "Regular participant in coding challenges and hackathons"
      ]
    }
  ]

  const certifications = [
    "Google Data Analytics Professional Certificate",
    "Python for Data Science (Coursera)",
    "Generative AI for Data Analysts (IBM)"
  ]

  const achievements = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Google Data Analytics Certificate",
      description: "Completed comprehensive data analytics program covering data cleaning, analysis, and visualization"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Python for Data Science",
      description: "Mastered Python programming for data analysis through Coursera specialization"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Generative AI for Data Analysts",
      description: "Earned IBM certification in applying AI tools for enhanced data analysis workflows"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "15+ Online Courses Completed",
      description: "Continuously learning through platforms like Coursera, Udemy, and edX"
    }
  ]

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-neutral-50 to-secondary-50/80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
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
            My journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Education & Experience
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            My academic background and continuous learning path in data analysis and software development
          </p>
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8 text-center">
            Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="minimal-card rounded-2xl p-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-display font-bold text-neutral-900 mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-primary-600 font-semibold mb-2">
                    {edu.school}
                  </p>
                  <p className="text-neutral-600 font-medium mb-2">
                    {edu.grade}
                  </p>
                </div>
                <div className="flex flex-col md:items-end text-neutral-500 text-sm">
                  <div className="flex items-center space-x-1 mb-1">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {edu.description}
              </p>
              
              <div className="mb-4">
                <h5 className="font-semibold text-neutral-900 mb-2">
                  Key Achievements
                </h5>
                <ul className="space-y-1">
                  {edu.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-neutral-600 text-sm flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-neutral-900 mb-2">
                  Relevant Coursework
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements & Learning */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
              Online Certifications
            </h3>
            <div className="grid gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="minimal-card rounded-xl p-5 flex items-start space-x-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
              Certifications & Courses
            </h3>
            <div className="minimal-card rounded-xl p-6">
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <p className="text-neutral-600 text-sm">
                  Actively pursuing additional certifications in cloud computing and advanced machine learning.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Personal Learning Journey */}
        <motion.div
          className="glass-card rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 text-center">
            Continuous Learning Mindset
          </h3>
          {personalProjects.map((project, index) => (
            <div key={index} className="text-center">
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                {project.title}
              </h4>
              <p className="text-neutral-500 text-sm mb-4">
                {project.period}
              </p>
              <p className="text-neutral-600 mb-4">
                {project.description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex items-center justify-center space-x-2 text-neutral-700 text-sm">
                    <span className="text-primary-500">✓</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience