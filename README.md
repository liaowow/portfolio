# Annie Liao Portfolio

A modern, performant portfolio website built with Astro, React, and Tailwind CSS. Features smooth animations, responsive design, and optimized performance.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with island architecture
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Interactive Components**: [React](https://react.dev/) - For client-side interactivity
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/) - High-performance animations
- **Font**: [Inter](https://rsms.me/inter/) - Modern, readable typeface
- **Deployment**: GitHub Pages

## 🎨 Design Features

- Clean, minimal design inspired by modern portfolio aesthetics
- Smooth scroll navigation between sections
- Responsive layout for all device sizes
- Optimized typography with Inter font family
- Interactive hover states and micro-animations
- Performance-first architecture with selective JavaScript hydration

## 🏗️ Project Structure

```
/
├── public/
│   ├── favicon.png
│   └── images/
│       └── avatar.png
├── src/
│   ├── components/
│   │   ├── Header.astro          # Navigation header with avatar
│   │   ├── Hero.astro            # Main hero section
│   │   ├── Work.astro            # Portfolio projects section
│   │   ├── About.astro           # About me section
│   │   ├── Footer.astro          # Footer with social links
│   │   └── SmoothScroll.tsx      # Smooth scroll functionality
│   └── pages/
│       └── index.astro           # Main page layout
├── astro.config.mjs              # Astro configuration
├── tailwind.config.mjs           # Tailwind CSS configuration
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/liaowow/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## 📝 Content Management

### Updating Content

1. **Work Projects**: Edit `/src/components/Work.astro` to add your actual projects
2. **About Section**: Update `/src/components/About.astro` with your personal story
3. **Footer Links**: Modify `/src/components/Footer.astro` with your social links
4. **Avatar**: Replace `/public/images/avatar.png` with your photo

### Adding Animations

The project is set up with both GSAP and Framer Motion:

- **GSAP**: Ideal for complex scroll-triggered animations and timelines
- **Framer Motion**: Perfect for React component animations and interactions

Example usage can be found in the existing components.

## 🚀 Deployment

The site is configured for GitHub Pages deployment:

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the static files ready for deployment

3. For GitHub Pages, ensure your repository settings point to the correct branch/folder

## 🎯 Performance Features

- **Zero JavaScript by default**: Only interactive components load JS
- **Optimized images**: Automatic image optimization
- **Modern CSS**: Utility-first approach with Tailwind
- **Font optimization**: Preloaded Google Fonts with display swap
- **Build optimization**: Minified CSS and JS in production

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🔧 Customization

### Colors
Update the color scheme in `tailwind.config.mjs` and component files.

### Typography
Font weights and sizes can be adjusted in the Tailwind configuration and component classes.

### Layout
Sections can be reordered or modified in `/src/pages/index.astro`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with 🤖 by Annie Liao + Claude Code
