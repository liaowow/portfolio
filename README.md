# Annie Liao Portfolio

A modern, performant portfolio built with Astro showcasing software engineering projects and design work.

## Tech Stack

- **Framework**: Astro 5 with static generation
- **Styling**: Tailwind CSS
- **Components**: React for interactive elements
- **Animations**: GSAP
- **Media Management**: Cloudinary API (build-time data fetching)
- **Carousel Library**: Swiper.js

## Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation
│   │   ├── Hero.astro            # Landing section
│   │   ├── Work.astro            # Projects overview
│   │   ├── About.astro           # About section
│   │   ├── Footer.astro          # Footer with links
│   │   ├── ImageModal.astro      # Modal for project images
│   │   ├── ClickableImage.astro  # Interactive image component
│   │   └── MasonryModal.astro    # Media gallery modal component
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── fun.astro             # Netflix-style multimedia gallery
│   │   └── projects/             # Individual project pages
│   ├── scripts/
│   │   ├── about-animation.ts    # About section animations
│   │   ├── hero-animation.ts     # Hero section animations
│   │   ├── hero-scroll-arrow.ts  # Scroll arrow animations
│   │   └── netflix-layout.ts     # Fun page Netflix-style layout
│   └── lib/
│       ├── services/
│       │   └── cloudinary.ts     # Cloudinary API integration
│       └── types/
│           └── fun-item.ts       # TypeScript type definitions
├── public/images/                # Project screenshots and assets
├── .github/workflows/            # GitHub Actions for deployment
└── dist/                        # Built site (GitHub Pages)
```

## Development

**Prerequisites**: Node.js 18+ and pnpm

```bash
# Setup
git clone https://github.com/liaowow/portfolio.git
cd portfolio
pnpm install

# Development
pnpm dev    # Start dev server at localhost:4321
pnpm build  # Build for production
pnpm preview # Preview production build
```

## Featured Projects

- **Ecommerce Checkout Revamp** - UX performance enhancement
- **Coupon Swap Scheduler** - AWS automation tool
- **Internal Data Management Portal** - NextJS/MongoDB full-stack app
- **Baby Name Blossoms** - React/D3.js data visualization
- **Infographics Collection** - Editorial design gallery
- **Bump Health Branding** - Logo and brand identity design

## Fun Page

The `/fun` page showcases personal adventures and memories through a Netflix-style interface:

### Features
- **Hero Banner** - Featured latest adventure with dynamic background
- **Category Rows** - Horizontal scrolling sections for food, art, nature, entertainment
- **Poster Cards** - Movie poster-style cards with hover overlays and ratings
- **Media Galleries** - Swiper.js carousel modals for photos and videos
- **Responsive Design** - Touch-optimized for mobile devices

### Technology Approach: Static Generation

The Fun page uses **static generation** instead of server-side rendering for several key benefits:

#### Why Static Over SSR?

**✅ Deployment Simplicity**
- No server adapter required
- Direct deployment to GitHub Pages
- No need for serverless functions or Edge runtime

**✅ Performance Benefits**
- Faster page loads (no API calls at runtime)
- Content available immediately on page load
- Better SEO with pre-rendered content
- Reduced bandwidth usage

**✅ Cost & Maintenance**
- Zero server costs
- No runtime dependency management
- Simpler CI/CD pipeline
- Better reliability (no server downtime)

#### How It Works

1. **Build-Time Data Fetching**: During `astro build`, the system fetches all media data from Cloudinary API
2. **Static Embedding**: Data is serialized and embedded directly into the HTML/JavaScript
3. **Client Hydration**: Netflix layout initializes with pre-loaded data instead of making API calls

#### Trade-offs Accepted

- **Content Updates**: Require rebuild/redeploy (acceptable for personal memories)
- **Build Time**: Slightly longer due to Cloudinary API calls during build
- **Data Freshness**: Content is fetched once at build time, not real-time

This approach is ideal for content that doesn't change frequently and prioritizes performance and deployment simplicity over real-time updates.

## Deployment

This portfolio is deployed via GitHub Actions to GitHub Pages with custom domain support.

### Configuration
- **Site**: `https://annieliao.com`
- **Base Path**: `/` (root domain)
- **Output**: Static generation (`output: 'static'`)
- **GitHub Actions**: Automated deployment on push to main
- **Custom Domain**: Configured via `CNAME` file in `public/` folder

### Environment Variables
The following GitHub Repository Secrets are required for Cloudinary integration:
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

These are used during the build process to fetch media data from Cloudinary API.

### Asset Path Handling
All components use `import.meta.env.BASE_URL` for flexible asset paths that work with both GitHub Pages subdirectory (`/portfolio/`) and custom domain root (`/`) deployments:

```javascript
const baseUrl = import.meta.env.BASE_URL;
// Usage: src={`${baseUrl}images/...`}
```

### Live URLs
- **Primary**: https://annieliao.com
- **GitHub Pages**: https://liaowow.github.io/portfolio/
