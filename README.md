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

**Prerequisites**: Node.js 18+

```bash
# Setup
git clone https://github.com/liaowow/portfolio.git
cd portfolio
npm install

# Development
npm run dev    # Start dev server at localhost:4321
npm run build  # Build for production
```

## Featured Projects

- **Ecommerce Checkout Revamp** - UX performance enhancement
- **Coupon Swap Scheduler** - AWS automation tool
- **Internal Data Management Portal** - NextJS/MongoDB full-stack app
- **Baby Name Blossoms** - React/D3.js data visualization
- **Infographics Collection** - Editorial design gallery
- **Bump Health Branding** - Logo and brand identity design
