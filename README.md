# Kshitij Gulati - Portfolio

A modern, responsive portfolio website showcasing my skills as a Data Analyst and Software Development Engineer. Built with React, Vite, and Tailwind CSS with beautiful animations and a clean, professional design.

## 🚀 Live Demo

[View Live Portfolio](https://kshitij-gulati.github.io/portfolio) *(Update this link once deployed)*

## 📸 Preview

![Portfolio Preview](./public/portfolio-preview.png) *(Add a screenshot of your portfolio)*

## ✨ Features

- **Modern Design**: Clean, aesthetic, and minimal design with beautiful animations
- **Responsive**: Optimized for all devices and screen sizes
- **Interactive Animations**: Smooth Framer Motion animations and micro-interactions
- **Glass Morphism**: Modern glass card effects with backdrop blur
- **Gradient Elements**: Beautiful gradient text and backgrounds
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages / Netlify / Vercel

## 📱 Sections

- **Hero**: Professional introduction with animated elements
- **About**: Personal story and key highlights
- **Skills**: Interactive progress bars with shimmer effects
- **Projects**: Filterable showcase with beautiful gradient cards
- **Experience**: Education timeline and online certifications
- **Contact**: Professional contact form and information

## 🎨 Design Features

- **Custom Favicon**: Data-themed icon with gradient background
- **Floating Elements**: Subtle animated decorations
- **Color Scheme**: Modern blue-purple gradient palette
- **Typography**: Inter font family for clean readability
- **Hover Effects**: Engaging micro-interactions throughout

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kshitij-gulati/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Personal Information
Update the following files with your information:

- `src/components/Hero.jsx` - Name, title, social links
- `src/components/About.jsx` - Personal story and highlights
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Projects.jsx` - Your projects with descriptions and links
- `src/components/Experience.jsx` - Education, certifications, and experience
- `src/components/Contact.jsx` - Contact information
- `index.html` - Page title and meta description

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

## 🌐 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Update `vite.config.js` with your repo name:
   ```js
   export default defineConfig({
     base: '/portfolio/', // Replace with your repo name
     // ... other config
   })
   ```
4. Run: `npm run build && npm run deploy`

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

## 📧 Contact Form Setup

The contact form is ready to integrate with:
- **Formspree**: Add your form endpoint
- **Netlify Forms**: Add `netlify` attribute to form
- **EmailJS**: Integrate with EmailJS service

## 🎯 SEO & Performance

- Optimized meta tags for search engines
- Fast loading with code splitting
- Responsive images and lazy loading
- Semantic HTML structure
- Accessibility compliant

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Contact

- **Email**: kshitijgulati7@gmail.com
- **LinkedIn**: [linkedin.com/in/kshitijgulati](https://linkedin.com/in/kshitijgulati)
- **GitHub**: [github.com/kshitij-gulati](https://github.com/kshitij-gulati)

---

**Made with ❤️ by Kshitij Gulati**

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd data-analyst-sde-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **src/components/Hero.jsx** - Name, title, description, social links
2. **src/components/About.jsx** - Personal story, quick facts
3. **src/components/Skills.jsx** - Your skills and proficiency levels
4. **src/components/Projects.jsx** - Your projects with descriptions and links
5. **src/components/Experience.jsx** - Work experience, education, certifications
6. **src/components/Contact.jsx** - Contact information and form
7. **src/components/Footer.jsx** - Footer information and links
8. **index.html** - Page title and meta description

### Styling
- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind classes

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 📱 Sections Overview

### Hero Section
- Professional introduction for fresh graduates
- Social media and GitHub links
- Clear call-to-action for recruiters

### About Section
- Personal story and learning journey
- Academic achievements and goals
- Quick facts about your background

### Skills Section
- Technical skills with realistic progress levels
- Categorized by expertise area (beginner-friendly)
- Currently learning section to show growth mindset

### Projects Section
- Academic and personal projects showcase
- Filterable by project type
- Technology tags and GitHub links
- Focus on learning outcomes

### Education & Experience Section
- Academic background and achievements
- Internship experience (if any)
- Certifications and online courses
- Personal learning journey

### Contact Section
- Professional contact form
- Contact information
- Emphasis on seeking opportunities

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set up form handling for contact form

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy with zero configuration

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## 📧 Contact Form Setup

The contact form is ready to integrate with:
- **Formspree**: Add your form endpoint
- **Netlify Forms**: Add `netlify` attribute to form
- **EmailJS**: Integrate with EmailJS service
- **Custom Backend**: Connect to your own API

## 🎯 SEO Optimization

- Update meta tags in `index.html`
- Add structured data for better search visibility
- Optimize images and add alt texts
- Use semantic HTML elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, pull requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy coding!** 🚀