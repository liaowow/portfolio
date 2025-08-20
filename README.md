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

## Deployment

This portfolio is deployed via GitHub Actions to GitHub Pages with custom domain support.

### Configuration
- **Site**: `https://annieliao.com`
- **Base Path**: `/` (root domain)
- **GitHub Actions**: Automated deployment on push to main
- **Custom Domain**: Configured via `CNAME` file in `public/` folder

### Asset Path Handling
All components use `import.meta.env.BASE_URL` for flexible asset paths that work with both GitHub Pages subdirectory (`/portfolio/`) and custom domain root (`/`) deployments:

```javascript
const baseUrl = import.meta.env.BASE_URL;
// Usage: src={`${baseUrl}images/...`}
```

### Live URLs
- **Primary**: https://annieliao.com
- **GitHub Pages**: https://liaowow.github.io/portfolio/
