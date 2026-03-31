# Setup & Quick Start Guide

## 📋 Prerequisites

- Node.js 18.0 or higher
- pnpm 8.0+ (or npm 9.0+)
- Git
- A code editor (VS Code recommended)

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 2. Run Development Server
```bash
pnpm dev
# or
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Update Personal Information

Edit `/src/constants/constants.ts`:

```typescript
export const ABOUT_ME = {
  DESCRIPTION: "Your bio here",
  FULL_NAME: "Your Name",
  EMAIL: "your.email@example.com",
  PHONE: "+XX XXX XXX XXXX",
  ADDRESS: "Your Address",
  LINKEDIN_URL: "https://linkedin.com/in/yourprofile",
  GITHUB_URL: "https://github.com/yourprofile",
};
```

### 2. Update Technical Skills

```typescript
export const TECHNICAL_SKILLS = {
  FRONTEND: ["Your", "Frontend", "Skills"],
  BACKEND: ["Your", "Backend", "Skills"],
  // ... etc
};
```

### 3. Update Projects

Add your projects to `PROJECTS_DATA`:

```typescript
export const PROJECTS_DATA = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    category: "Category"
  },
  // ... more projects
];
```

### 4. Update Experience

Modify `EXPERIENCE_DATA` with your work history:

```typescript
export const EXPERIENCE_DATA = [
  {
    company: "Company Name",
    position: "Your Position",
    duration: "Start - End",
    location: "City, Country",
    description: "Job description",
    responsibilities: ["Task 1", "Task 2"]
  }
];
```

### 5. Update Education

Update `EDUCATION_DATA`:

```typescript
export const EDUCATION_DATA = [
  {
    institution: "University Name",
    degree: "Your Degree",
    specialization: "Your Specialization",
    duration: "2019 - 2023",
    location: "City, Country",
    gpa: "Your GPA"
  }
];
```

## 🎨 Styling Customization

### Colors

Edit the color scheme in Tailwind utilities:
- Primary green: `text-green-400`, `border-green-500`
- Background: `bg-slate-900`, `from-slate-900`
- Modify in component `className` attributes

### Typography

Font is set to "Oswald" in `layout.tsx`. Change in:
1. `next/font/google` import
2. Apply different font family

### Responsive Breakpoints

Already built in using Tailwind:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)

## 🔧 Advanced Configuration

### 3D Background

Customize in `/src/components/ThreeBackground.tsx`:
- Particle count: Adjust `count` variable
- Colors: Modify material colors
- Speed: Adjust `delta` multipliers
- Lighting: Change `intensity` values

### Animation Speed

Update transition values in component classes:
- `duration-300` for 300ms
- `duration-500` for 500ms
- `motion-safe:transition` for respect prefers-reduced-motion

### Layout Width

Sidebar width: `w-104` (416px in Tailwind)
Padding: `lg:pl-104`

## 📱 Mobile Optimization

All components are mobile-first and responsive:
- Test with `pnpm dev` and browser DevTools
- Check different screen sizes
- Verify touch targets are 48x48px minimum

## 🔍 SEO Configuration

### Update Metadata

In `src/constants/constants.ts`:
```typescript
export const SEO = {
  SITE_TITLE: "Your Name | Job Title",
  SITE_DESCRIPTION: "Your professional description",
};
```

### Add Canonical URL

In `src/app/layout.tsx`:
```typescript
<link rel="canonical" href="https://yourdomain.com" />
```

### Update Domain

1. In `layout.tsx`: Change canonical URL
2. In `/public/sitemap.xml`: Update domain
3. In `src/lib/schema.ts`: Update URLs

## 🧪 Testing

### Build for Production
```bash
pnpm build
pnpm start
```

### Check Performance
```bash
# Lighthouse (requires extension or use PageSpeed Insights)
```

### Test Responsiveness
```
Use DevTools or responsivedesignchecker.com
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Traditional Server
```bash
npm run build
npm run start
# Access via your server IP/domain
```

## 📚 Project Structure Reference

```
sidath-portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx        ← Update SEO here
│   │   └── page.tsx
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── Sidebar.tsx
│   │   ├── TabHeader.tsx
│   │   ├── ThreeBackground.tsx ← 3D customization
│   │   └── tabs/             ← Add new tab components
│   ├── constants/
│   │   └── constants.ts      ← UPDATE THIS FILE
│   └── lib/
│       └── schema.ts         ← Update JSON-LD
├── public/
│   ├── sitemap.xml          ← Update domain
│   └── robots.txt
├── README.md
├── DEPLOYMENT.md
├── PERFORMANCE.md
└── package.json
```

## 🐛 Troubleshooting

### 3D Background Not Showing
- Check browser console for errors
- Ensure WebGL is supported
- Try in different browser
- Check that `ThreeBackground` is not being SSR blocked

### Styling Issues
- Clear Tailwind cache: `rm -rf .next`
- Run `pnpm install` again
- Check for typos in class names

### Build Fails
- Delete `node_modules` and `.next`
- Run `pnpm install` fresh
- Check Node.js version (need 18+)

### Slow Performance
- Check Performance.md for optimization
- Reduce particle count in 3D scene
- Check bundle size: `npm run build && npm start`

## 💬 Getting Help

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev)

### Common Commands

```bash
# Development
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Clear cache
rm -rf .next node_modules
```

## ✅ Customization Checklist

- [ ] Updated ABOUT_ME section
- [ ] Added your projects
- [ ] Updated experience
- [ ] Added education
- [ ] Changed colors if desired
- [ ] Updated SEO metadata
- [ ] Changed canonical URL
- [ ] Deployed to hosting
- [ ] Tested on mobile
- [ ] Verified all links work
- [ ] Checked performance metrics

## 🎉 You're Done!

Your portfolio is ready to showcase your work. Make it your own by:
1. Adding your content
2. Customizing colors and fonts
3. Deploying to your domain
4. Sharing with employers and clients

Good luck! 🚀
