# Deployment Guide

## Quick Start - Running Locally

1. **Install Dependencies**
   ```bash
   cd portfolio-site
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Visit: http://localhost:3000

## Production Deployment

### Option 1: Vercel (Recommended - Free & Easy)

Vercel is made by the creators of Next.js and offers the best experience.

1. **Create a GitHub Repository**
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site will be live at `your-project.vercel.app`

3. **Custom Domain (Optional)**
   - In Vercel Dashboard, go to Settings → Domains
   - Add your custom domain (e.g., ajibolagbengajoseph.site)
   - Follow DNS configuration instructions

### Option 2: Netlify (Free Alternative)

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your `.next` folder
   - Or connect your GitHub repository
   - Done!

### Option 3: Your Own Server

1. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

2. **Use PM2 for Process Management**
   ```bash
   npm install -g pm2
   pm2 start npm --name "portfolio" -- start
   pm2 save
   pm2 startup
   ```

## Environment Variables

If you add email functionality or APIs, create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
EMAIL_SERVICE_API_KEY=your_key_here
```

## Custom Domain Setup

### For ajibolagbengajoseph.site:

1. **On Vercel/Netlify:**
   - Add custom domain in dashboard
   - Get the DNS records

2. **On Your Domain Registrar:**
   - Add A record: `@` → Vercel/Netlify IP
   - Add CNAME: `www` → your-project.vercel.app

3. **Wait for DNS Propagation** (5-48 hours)

## Performance Optimization

The site is already optimized, but you can:

1. **Compress Images**
   - Use WebP format (already done)
   - Run: `npm install sharp` for automatic optimization

2. **Enable Analytics**
   - Add Google Analytics in `app/layout.tsx`
   - Or use Vercel Analytics (free)

3. **Add Sitemap**
   - Already included in `public/sitemap.xml`
   - Update with your actual URLs

## SEO Checklist

✅ Meta tags configured
✅ Open Graph tags added
✅ Twitter Card configured
✅ Sitemap.xml included
✅ robots.txt included
✅ Image alt tags present
✅ Semantic HTML structure
✅ Mobile responsive
✅ Fast loading times

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build failures
```bash
npm run build
# Check the error message and fix accordingly
```

### Images not loading
- Ensure images are in `public/` folder
- Use `/image.jpg` not `./image.jpg` in code
- Check image file names match exactly (case-sensitive)

## Post-Deployment

1. **Test All Pages**
   - Home, About, Services, Case Studies, Contact
   - Test on mobile devices

2. **Submit to Search Engines**
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

3. **Set Up Analytics**
   - Google Analytics
   - Vercel Analytics
   - Facebook Pixel (if needed)

4. **Test Contact Form**
   - Send a test message
   - Verify email notifications work

## Updating Your Site

```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push

# Vercel/Netlify will auto-deploy!
```

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Vercel Support: https://vercel.com/support
- Tailwind CSS: https://tailwindcss.com/docs

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
