# Sidath Rathnayake - Advanced Game Menu Portfolio

A stunning, high-performance portfolio built with Next.js 16, Three.js, and advanced web technologies. Featuring a game-inspired menu aesthetic with smooth animations and optimized 3D graphics.

## 🎮 Features

- **Advanced 3D Background**: Custom Three.js scene with particles, energy fields, and animated debris
- **Game Menu Aesthetic**: Portal 2-inspired futuristic UI with green neon accents
- **Fully Responsive**: Mobile-first design optimized for all devices
- **High Performance**: Zero lag, optimized rendering, lazy loading
- **SEO Optimized**: Complete metadata, structured data (JSON-LD), sitemap, and robots.txt
- **Server Components**: Leveraging Next.js 16 Server Components for optimal performance
- **Dynamic Tab System**: Single-route architecture with dynamic component loading
- **Modern Stack**: React 19, TypeScript, Tailwind CSS, Framer Motion

## 📋 Sections

1. **About Me** - Professional summary and contact information
2. **Technical Skills** - Frontend, Backend, Databases, Cloud & DevOps
3. **Personal Skills** - Core competencies and soft skills
4. **Projects** - Showcase of 9+ completed projects
5. **Experience** - 3+ years of professional experience
6. **Education** - Academic background and qualifications
7. **Extra Activities** - Additional engagements and interests

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install
# or
npm install

# Run development server
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🏗️ Architecture

### Key Technologies
- **Framework**: Next.js 16 with App Router
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Performance Optimizations
- React Compiler enabled
- Dynamic imports with lazy loading
- Optimized Canvas rendering with DPR adjustment
- Image optimization with WebP/AVIF support
- Minified CSS and JavaScript
- Strategic caching headers

### SEO Features
- Complete metadata tags
- Open Graph and Twitter Card support
- JSON-LD structured data
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Semantic HTML structure

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── Dashboard.tsx       # Main dashboard
│   │   ├── Sidebar.tsx         # Navigation sidebar
│   │   ├── TabHeader.tsx       # Tab header
│   │   ├── ThreeBackground.tsx # 3D background scene
│   │   ├── DetailSection.tsx   # Detail section
│   │   └── tabs/
│   │       ├── about-me/
│   │       ├── technical-skills/
│   │       ├── personal-skills/
│   │       ├── projects/
│   │       ├── experience/
│   │       ├── education/
│   │       └── extra-activities/
│   ├── constants/
│   │   └── constants.ts        # All content data
│   ├── helpers/
│   │   └── common.helpers.tsx  # Utility functions
│   ├── lib/
│   │   ├── schema.ts           # JSON-LD schemas
│   │   └── cn.ts               # Tailwind utilities
│   ├── interfaces/
│   │   └── tab.ts              # Type definitions
│   └── enum/
│       └── tab.ts              # Tab enums
├── public/
│   ├── sitemap.xml
│   ├── robots.txt
│   └── favicon.ico
└── Configuration files
```

## 🎨 Design System

### Color Palette
- **Primary**: #4ade80 (Green accent)
- **Background**: #0a0e0f (Deep dark)
- **Card Background**: rgba(15, 23, 42, 0.4)
- **Border**: rgba(74, 222, 128, 0.2)

### Typography
- **Font**: Oswald for headings and body (futuristic feel)
- **Sizes**: Responsive with sm:/md:/lg: prefixes
- **Line Height**: 1.5-1.6 for readability

## 📱 Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Build for Production
```bash
pnpm build
pnpm start
```

### Lint Code
```bash
pnpm lint
```

### Environment Variables
No environment variables required for basic functionality.

## 📊 Performance Metrics

- **Lighthouse Score**: 90+
- **Time to Interactive**: < 2s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Docker
```bash
docker build -t sidath-portfolio .
docker run -p 3000:3000 sidath-portfolio
```

## 📄 License

MIT License - feel free to use this template

## 👤 Author

**Sidath Rathnayake**
- LinkedIn: [sidath-rathnayake-757a68216](https://www.linkedin.com/in/sidath-rathnayake-757a68216)
- GitHub: [sidathrathnayake](https://github.com/sidathrathnayake)
- Email: sidathirathnayake@gmail.com

## 🙏 Acknowledgments

- Three.js community for incredible 3D graphics capabilities
- Vercel for Next.js and deployment platform
- TailwindCSS for utility-first styling
- React community for amazing tools and libraries
