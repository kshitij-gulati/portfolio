# Contact Form Setup Instructions

Your contact form is ready to receive messages! You just need to set up Formspree (free service) to handle form submissions.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email (it's free!)
3. Verify your email address

### Step 2: Create a New Form
1. Click "New Form" in your Formspree dashboard
2. Form name: "Portfolio Contact Form"
3. Copy your form endpoint (looks like: `https://formspree.io/f/xpznvqko`)

### Step 3: Update Your Code
1. Open `src/components/Contact.jsx`
2. Find line 27: `'https://formspree.io/f/YOUR_FORM_ID'`
3. Replace `YOUR_FORM_ID` with your actual form ID
4. Example: `'https://formspree.io/f/xpznvqko'`

### Step 4: Test Your Form
1. Deploy your site to Vercel
2. Fill out the contact form on your live site
3. Check your email - you should receive the message!
4. Check your Formspree dashboard to see all submissions

## ✅ What You Get:
- **Email notifications** for every form submission
- **Spam protection** built-in
- **Form analytics** in your dashboard
- **Export submissions** as CSV
- **100 submissions/month** on free plan

## 🔧 Alternative Options:

### Option 1: Netlify Forms (if using Netlify)
1. Add `netlify` attribute to your form tag
2. Add a hidden input: `<input type="hidden" name="form-name" value="contact" />`

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install emailjs-com`
3. Replace the fetch call with EmailJS integration

### Option 3: Direct Email Link
Replace the form with a simple mailto link:
```jsx
<a href="mailto:kshitijgulati7@gmail.com?subject=Portfolio Contact&body=Hi Kshitij,">
  Send Email
</a>
```

## 📧 Current Setup:
- Form sends to: **kshitijgulati7@gmail.com**
- Includes: Name, Email, Subject, Message
- Has proper validation and error handling
- Mobile-friendly design

Your form is professional and ready to help you connect with potential employers! 🚀