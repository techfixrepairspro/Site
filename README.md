# TechFix Pro Website Setup

## Contact Form Setup

Your website is now configured to send form submissions to: **techfixrepairspro@gmail.com**

The contact form uses Formspree, a free service that handles form submissions for static websites.

### How to activate the form:

1. **First Time Setup:**
   - Open your website in a browser
   - Go to the Contact section
   - Fill out and submit the form with test information
   - Formspree will send you an email asking you to confirm your email address
   - Click the confirmation link in that email

2. **After Confirmation:**
   - All form submissions will automatically be sent to techfixrepairspro@gmail.com
   - You'll receive an email notification for each submission
   - Formspree's free plan allows up to 50 submissions per month

### Alternative: Create a Formspree Account (Optional)

For better control and more features:

1. Go to https://formspree.io
2. Sign up for a free account using techfixrepairspro@gmail.com
3. Create a new form
4. Copy your form's endpoint URL (it will look like: https://formspree.io/f/xxxxx)
5. Update the form action in index.html:
   - Find: `action="https://formspree.io/f/techfixrepairspro@gmail.com"`
   - Replace with: `action="https://formspree.io/f/YOUR_FORM_ID"`

## Files Included

- **index.html** - Main website file
- **styles.css** - All styling and design
- **script.js** - Interactive features and animations

## How to Use

1. Download all three files (index.html, styles.css, script.js)
2. Keep them in the same folder
3. Double-click index.html to open in your browser
4. To publish online, upload all three files to your web hosting service

## Contact Information

All contact details have been updated to:
- **Email:** techfixrepairspro@gmail.com
- **Location:** Frisco, TX
- **Hours:** Mon-Fri: 9AM-7PM, Sat: 10AM-5PM, Sun: Closed
