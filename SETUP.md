# Portfolio Website Setup Guide

Welcome! This guide will help you get your portfolio website up and running.

## 🚀 Quick Start (3 Steps)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from: https://nodejs.org/ (get LTS version)
- Install and restart your terminal

### Step 2: Install Dependencies
Open terminal in the `portfolio-site` folder and run:
```bash
npm install
```

### Step 3: Start Development Server
```bash
npm run dev
```

Visit http://localhost:3000 - Your site is live! 🎉

## 📁 What's Included

```
portfolio-site/
├── 🏠 Home Page - Hero with services preview
├── 👤 About Page - Your story and skills  
├── 💼 Services Page - What you offer
├── 📊 Case Studies - Portfolio projects
├── 📮 Contact Page - Contact form
└── 🎨 Fully responsive design
```

## 🎨 Customization Guide

### 1. Update Your Information

**Personal Details** - Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name",
  description: "Your description",
  // ... update other fields
}
```

**Contact Info** - Edit `components/Footer.tsx`:
- Email address
- Location
- Social links

### 2. Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: '#0284c7', // Your brand color
    // ...
  }
}
```

### 3. Update Images

Place your images in `public/` folder:
- `me.webp` - Your photo
- `portfolio1.png` to `portfolio9.png` - Project screenshots

### 4. Modify Services

Edit `app/services/page.tsx` - Update the `services` array with your offerings.

### 5. Add Case Studies

Edit `app/case-studies/page.tsx` - Update the `caseStudies` array with your projects.

## 📝 Content Structure

### Home Page (`app/page.tsx`)
- Hero section
- Stats showcase
- Services preview
- Technologies
- CTA section

### About Page (`app/about/page.tsx`)
- Header with your photo
- Introduction
- Skills and approach
- Technologies

### Services Page (`app/services/page.tsx`)
- Service cards with features
- Detailed descriptions

### Case Studies Page (`app/case-studies/page.tsx`)
- Project showcases
- Client testimonials
- Project tags

### Contact Page (`app/contact/page.tsx`)
- Contact form
- Email and location
- Additional information

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
```

## 🎯 Next Steps

1. **Customize Content**
   - Update all text with your information
   - Replace placeholder images
   - Add your actual projects

2. **Test Everything**
   - Check all pages
   - Test on mobile devices
   - Verify all links work

3. **Deploy to Internet**
   - See `DEPLOYMENT_GUIDE.md` for details
   - Recommended: Vercel (free & easy)

4. **Connect Your Domain**
   - Point ajibolagbengajoseph.site to your deployment
   - Configure DNS settings

5. **Add Email Functionality** (Optional)
   - Integrate EmailJS or similar service
   - Update contact form in `app/contact/page.tsx`

## ⚡ Performance Features

✅ Next.js 14 App Router
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Image optimization
✅ SEO optimized
✅ Mobile responsive
✅ Fast loading times
✅ Smooth animations

## 🐛 Common Issues

### "npm: command not found"
- Install Node.js from nodejs.org

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Images not showing
- Check file names match exactly (case-sensitive)
- Ensure images are in `public/` folder
- Use `/image.jpg` format in code

### Build errors
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

## 💡 Tips

1. **Save Often** - Changes auto-reload in dev mode
2. **Use Components** - Reusable components in `components/` folder
3. **Mobile First** - Always test on mobile devices
4. **SEO Matters** - Update meta tags for each page
5. **Performance** - Keep images optimized and code clean

## 🎨 Design Tokens

**Colors:**
- Primary: Blue (#0284c7)
- Dark: Slate gray
- Gradients: Blue to light blue

**Typography:**
- Font: Inter (Google Fonts)
- Headings: Bold, large
- Body: Regular, readable

**Spacing:**
- Container: max-width 1280px
- Padding: Responsive (4-8)
- Sections: 80px vertical

## 🔐 Security Best Practices

- Never commit `.env.local` (use `.env.local.example`)
- Keep dependencies updated: `npm update`
- Use environment variables for sensitive data
- Enable HTTPS in production

## 📱 Contact Form Setup

The contact form is currently front-end only. To make it functional:

**Option 1: EmailJS (Easiest)**
1. Sign up at emailjs.com
2. Create email template
3. Add to `app/contact/page.tsx`

**Option 2: API Route**
1. Create `app/api/contact/route.ts`
2. Use Nodemailer or SendGrid
3. Update form to POST to API

**Option 3: Form Service**
- Formspree
- Getform
- Form backend service

## 🚀 Ready to Launch?

1. ✅ Content updated
2. ✅ Images replaced
3. ✅ Colors customized
4. ✅ Contact info correct
5. ✅ Everything tested
6. ✅ Ready to deploy!

See `DEPLOYMENT_GUIDE.md` for deployment instructions.

---

**Need help?** Check the documentation or create an issue on GitHub.

**Happy coding!** 🎉
