# Annie Liao Portfolio

A modern, performant portfolio built with Astro showcasing software engineering projects and design work.

## Tech Stack

- **Framework**: Astro 5 with prerendering
- **Styling**: Tailwind CSS
- **Components**: React for interactive elements
- **Animations**: GSAP

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
│   │   └── ClickableImage.astro  # Interactive image component
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   └── projects/             # Individual project pages
│   └── scripts/                  # Animation scripts
├── public/images/                # Project screenshots and assets
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

## Deployment Setup

This portfolio is deployed via GitHub Actions to GitHub Pages with a custom domain. Here's what was configured:

### GitHub Actions Workflow
- **File**: `.github/workflows/deploy.yml`
- **Triggers**: Pushes to main branch
- **Process**: Builds with `npm run build` → Deploys `dist/` folder
- **Custom Domain**: Handled via `CNAME` file in `public/` folder

### Base URL Configuration
- **Issue**: GitHub Pages deploys to `/portfolio/` subpath, breaking assets and navigation
- **Solution**: Updated `astro.config.mjs` with `base: '/portfolio'`
- **Implementation**: All components use `import.meta.env.BASE_URL` for:
  - Image paths: `${baseUrl}images/...`
  - Navigation links: `${baseUrl}#work`
  - Project URLs: `${baseUrl}projects/...`

### Files Modified
- `astro.config.mjs` - Added base URL configuration
- `src/components/Work.astro` - Fixed project URLs and images
- `src/components/Header.astro` - Fixed navigation and avatar
- All project pages - Fixed image sources and back navigation
- `public/CNAME` - Moved from root for proper deployment

### Repository Settings
- **Pages Source**: Changed from "Deploy from branch" to "GitHub Actions"
- **Custom Domain**: `annieliao.com` (configured via CNAME)
