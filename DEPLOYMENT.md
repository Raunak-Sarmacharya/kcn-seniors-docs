# Deployment Guide - Documentation Portal

## 🚀 Quick Deployment to Vercel

This guide will walk you through deploying the Documentation Portal to Vercel via GitHub.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed on your machine

## 🔧 Step 1: Create GitHub Repository

### Option A: Using GitHub Web Interface (Recommended)

1. **Go to GitHub.com** and sign in to your account
2. **Click the "+" icon** in the top right corner and select "New repository"
3. **Repository settings:**
   - **Repository name:** `documentation-portal` (or your preferred name)
   - **Description:** `Modern documentation portal built with Next.js 14+ - Features markdown support, search, and responsive design`
   - **Visibility:** Choose Public or Private (Private recommended for security)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. **Click "Create repository"**

### Option B: Using GitHub CLI (if installed)

```bash
# Install GitHub CLI first if not installed
# Windows: winget install GitHub.cli
# macOS: brew install gh
# Linux: sudo apt install gh

# Login to GitHub
gh auth login

# Create repository
gh repo create documentation-portal --description "Modern documentation portal built with Next.js 14+" --private --source=. --remote=origin --push
```

## 🔗 Step 2: Connect Local Repository to GitHub

After creating the GitHub repository, run these commands in your project directory:

```bash
# Add the remote origin (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/documentation-portal.git

# Push the code to GitHub
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign in
2. **Click "New Project"**
3. **Import your GitHub repository:**
   - Select your GitHub account
   - Find and select the `documentation-portal` repository
   - Click "Import"
4. **Configure project settings:**
   - **Project Name:** `documentation-portal` (or your preferred name)
   - **Framework Preset:** Next.js (should auto-detect)
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (should auto-detect)
   - **Output Directory:** `.next` (should auto-detect)
   - **Install Command:** `npm install` (should auto-detect)
5. **Click "Deploy"**

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts to link to your GitHub repository
```

## ⚙️ Step 4: Environment Configuration

The application is configured to work out of the box, but you can customize these settings in Vercel:

### Environment Variables (Optional)

In your Vercel project dashboard, go to Settings → Environment Variables:

```bash
# Optional: Customize application settings
NEXT_PUBLIC_APP_NAME=Documentation Portal
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app

# Optional: Customize performance settings
CACHE_DURATION=600000
```

### Custom Domain (Optional)

1. In Vercel dashboard, go to Settings → Domains
2. Add your custom domain (e.g., `docs.yourcompany.com`)
3. Follow the DNS configuration instructions

## 🔐 Step 5: Security Configuration

### Security Headers

The application includes comprehensive security headers configured in `vercel.json`:

- **X-Content-Type-Options:** Prevents MIME type sniffing
- **X-Frame-Options:** Prevents clickjacking attacks
- **X-XSS-Protection:** Enables XSS filtering
- **Referrer-Policy:** Controls referrer information
- **Permissions-Policy:** Restricts browser features

### Content Security Policy

The application implements a Content Security Policy to prevent XSS attacks and other security vulnerabilities.

## 📱 Step 6: Testing Your Deployment

1. **Visit your Vercel URL** (e.g., `https://documentation-portal.vercel.app`)
2. **Test key features:**
   - Navigation and sidebar
   - Search functionality
   - Documentation pages
   - Mobile responsiveness
   - Markdown rendering
   - Performance and caching

## 🔄 Step 7: Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to the `main` branch
- Create preview deployments for pull requests
- Provide deployment URLs for testing

## 🛠️ Troubleshooting

### Common Issues

1. **Build fails:**
   - Check Node.js version (requires 18+)
   - Verify all dependencies are in `package.json`
   - Check build logs in Vercel dashboard

2. **Markdown not rendering:**
   - Verify markdown files are in the `docs/` directory
   - Check frontmatter syntax in markdown files
   - Ensure API routes are working correctly

3. **Styling issues:**
   - Clear browser cache
   - Check Tailwind CSS compilation
   - Verify CSS imports in `globals.css`

### Getting Help

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)
- **Project Issues:** Create an issue in your GitHub repository

## 📈 Step 8: Monitoring and Analytics

### Vercel Analytics (Optional)

1. In Vercel dashboard, go to Analytics
2. Enable Web Analytics
3. Add the tracking code to your application

### Performance Monitoring

- **Core Web Vitals:** Available in Vercel dashboard
- **Function logs:** Check API route performance
- **Build times:** Monitor deployment performance

## 🎉 Success!

Your Documentation Portal is now live and ready for use! The application includes:

- ✅ Modern, responsive design
- ✅ Markdown content support
- ✅ Advanced search functionality
- ✅ Mobile-optimized interface
- ✅ Performance optimizations
- ✅ Security headers
- ✅ Professional styling with animations

## 🔄 Updates and Maintenance

To update your deployment:

1. **Make changes locally**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Your update description"
   git push origin main
   ```
3. **Vercel will automatically redeploy**

## 📚 Content Management

### Adding New Documentation

1. **Create markdown files** in the `docs/` directory
2. **Add frontmatter metadata** for organization
3. **Push to GitHub** - Vercel will automatically redeploy
4. **Content is immediately available** through the API

### Content Structure

```
docs/
├── getting-started/
│   └── welcome.md
├── user-management/
│   └── overview.md
├── maintenance-support/
│   └── overview.md
└── troubleshooting/
    └── common-issues.md
```

## 🚀 Performance Features

### Caching Strategy

- **API Caching:** 10-minute server-side cache
- **Client Caching:** 10-minute client-side cache
- **HTTP Caching:** Browser-level caching with validation
- **Static Generation:** Optimized for documentation content

### Optimization Features

- **Code splitting** for optimal loading
- **Image optimization** with Next.js Image component
- **Lazy loading** for non-critical components
- **Efficient markdown processing** with reusable processors

---

**Need help?** Check the main [README.md](README.md) for detailed project information and development setup.
