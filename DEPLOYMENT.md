# Deployment Guide

This guide covers various deployment options for the Sidath Rathnayake Portfolio.

## 🚀 Vercel (Recommended)

Vercel is the optimal choice as Next.js is built by Vercel and integrates seamlessly.

### Steps:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import the GitHub repository
5. Vercel automatically detects Next.js and configures build settings
6. Click "Deploy"

### Custom Domain:
1. Go to project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 🐳 Docker

### Local Docker Build:
```bash
# Build image
docker build -t sidath-portfolio .

# Run container
docker run -p 3000:3000 sidath-portfolio

# Access at http://localhost:3000
```

### Docker Compose:
```bash
# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## ☁️ Cloud Providers

### AWS (EC2 + Elastic Container Service)
1. Build Docker image
2. Push to AWS ECR (Elastic Container Registry)
3. Create ECS task definition
4. Launch ECS service
5. Configure ALB (Application Load Balancer)
6. Set up Route 53 for domain

### Google Cloud (Cloud Run)
```bash
# Build and push to Google Container Registry
gcloud builds submit --tag gcr.io/PROJECT_ID/sidath-portfolio

# Deploy to Cloud Run
gcloud run deploy sidath-portfolio \
  --image gcr.io/PROJECT_ID/sidath-portfolio \
  --platform managed \
  --region us-central1
```

### Azure (App Service)
1. Create Azure App Service for containers
2. Connect to Docker registry
3. Configure deployment settings
4. Enable continuous deployment from git

## 🔄 CI/CD Pipeline

### GitHub Actions Example:
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@main
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
```

## 📦 npm Registry

To publish as a template:
```bash
npm login
npm publish
```

## ⚙️ Configuration for Production

### Environment Variables:
Create `.env.production.local`:
```env
NEXT_PUBLIC_DOMAIN=yourdomain.com
```

### Performance Optimizations:
- Enable gzip compression
- Set up CDN for static assets
- Configure cache headers
- Enable minification

### Security Headers:
Already configured in `next.config.ts`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin

## 🔒 SSL/TLS

- Vercel: Automatic with Let's Encrypt
- Docker/Self-hosted: Use nginx + Let's Encrypt
- AWS: Use AWS Certificate Manager
- Azure: Built-in SSL support

## 📊 Monitoring & Analytics

### Recommended Services:
- **Vercel Analytics**: Built-in, no configuration needed
- **Google Analytics**: Add tracking ID
- **Sentry**: Error tracking
- **New Relic**: Application monitoring

## 🚨 Health Checks

All deployments should respond to health checks:
```bash
curl -f http://your-domain.com/
```

## 📝 Backup & Recovery

### Git Backup:
```bash
git push --all
git push --tags
```

### Docker Image Backup:
```bash
docker save sidath-portfolio > portfolio-backup.tar
```

## 🔄 Update Process

1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Commit: `git commit -m "Update"`
5. Push: `git push`
6. Vercel auto-deploys on push

## ✅ Deployment Checklist

- [ ] All environment variables set
- [ ] SEO metadata verified
- [ ] Analytics configured
- [ ] Custom domain set up
- [ ] SSL/TLS enabled
- [ ] Performance tested
- [ ] Mobile responsiveness verified
- [ ] 404 page configured
- [ ] Monitoring enabled
- [ ] Backup strategy in place
