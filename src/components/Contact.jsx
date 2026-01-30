import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Create form data for submission
    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('email', formData.email)
    formDataToSend.append('subject', formData.subject)
    formDataToSend.append('message', formData.message)
    formDataToSend.append('form-name', 'contact')
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSend).toString()
      })
      
      if (response.ok) {
        alert('Thank you for your message! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback to email if form submission fails
        window.location.href = `mailto:kshitijgulati7@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      }
    } catch (error) {
      console.error('Error:', error)
      // Fallback to email if there's an error
      window.location.href = `mailto:kshitijgulati7@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "kshitijgulati7@gmail.com",
      href: "mailto:kshitijgulati7@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 8685035101",
      href: "tel:+91 8685035101"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Ambala , Haryana",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/kshitij-gulati"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kshitijgulati"
    },

  ]

  return (
    <section id="contact" className="section-padding bg-white">
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
            Get in touch
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            I'm a currently pursing my Bachelors and actively seeking entry-level opportunities in data analysis or software development. 
            Whether you have a job opportunity, internship, or just want to connect, I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="minimal-card rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                Send me a message
              </h3>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 bg-white/80"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 bg-white/80"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 bg-white/80"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-400 transition-all duration-200 resize-none bg-white/80"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-4 px-6 rounded-xl font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </motion.button>
              </form>
              
              {/* Backup Email Button */}
              <div className="mt-6 pt-6 border-t border-neutral-200 text-center">
                <p className="text-sm text-neutral-500 mb-4">
                  Having trouble with the form? Send me an email directly:
                </p>
                <motion.a
                  href="mailto:kshitijgulati7@gmail.com?subject=Portfolio Contact&body=Hi Kshitij,%0D%0A%0D%0A"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-100 text-neutral-700 rounded-xl font-medium hover:bg-neutral-200 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Mail className="w-4 h-4" />
                  <span>kshitijgulati7@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
                  Get in touch
                </h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  I'm a computer science student eager to start my career in data analysis or software development. 
                  I'm actively seeking entry-level positions, internships, or freelance opportunities. 
                  Let's connect and discuss how I can contribute to your team!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 minimal-card rounded-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary-100 text-primary-600 rounded-xl">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium">
                        {info.label}
                      </p>
                      <p className="text-neutral-900 font-semibold">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="text-lg font-display font-bold text-neutral-900 mb-4">
                  Follow me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-neutral-100 text-neutral-600 rounded-xl hover:bg-primary-100 hover:text-primary-600 transition-all duration-300"
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h4 className="text-lg font-display font-bold text-neutral-900 mb-2">
                  Quick Response
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  I typically respond to emails within 24 hours. I'm very responsive and 
                  excited to discuss any opportunities or answer questions about my background!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact