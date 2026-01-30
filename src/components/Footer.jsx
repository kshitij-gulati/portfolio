import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/kshitij-gulati",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/kshitijgulati",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:kshitijgulati7@gmail.com",
      label: "Email"
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand & Description */}
          <div>
            <h3 className="text-xl font-display font-bold gradient-text-light mb-4">
              Kshitij Gulati
            </h3>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              Computer Science student passionate about data analysis and software development. 
              Eager to contribute to innovative projects and grow with a dynamic team.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-neutral-800 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold mb-4 text-white">Let's Connect</h4>
            <div className="space-y-2 text-neutral-400">
              <p>Ambala , Haryana</p>
              <p>kshitijgulati7@gmail.com</p>
              <p>+91-8685035101</p>
            </div>
            <div className="mt-6">
              <p className="text-neutral-500 text-sm">
                Actively seeking entry-level opportunities in data analysis and software development.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © {currentYear} Kshitij Gulati. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 inline" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer