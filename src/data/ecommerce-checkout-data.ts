export const ecommerceCheckoutProject = {
  // Meta
  title: "E-Commerce Checkout UX Revamp",
  description: "Transformed a three-step popup checkout into a seamless single-page experience, boosting conversion rates by 12% YoY through strategic UX improvements and A/B testing.",
  thumbnail: "images/bump_checkout_before.png",
  thumbnailAlt: "E-Commerce checkout interface",
  techBadges: [
    { label: "React", color: "blue" },
    { label: "Node.js", color: "green" },
    { label: "Statsig A/B Testing", color: "purple" },
    { label: "UX Design", color: "pink" },
    { label: "Frontend Lead", color: "indigo" },
  ],

  // The Challenge
  challengeTitle: "The Challenge",
  challengeDescription:
    "Our three-step popup checkout was bleeding customers at every step, with sharp drop-off rates after the first step and stagnating conversion rates.",
  problems: [
    {
      icon: "chart-down",
      title: "Sharp Drop-off Rate",
      description:
        "Customers abandoned checkout after the first step, creating a conversion funnel bottleneck",
    },
    {
      icon: "minus",
      title: "Stagnating Conversion",
      description:
        "Conversion rates plateaued despite marketing efforts and traffic growth",
    },
    {
      icon: "warning",
      title: "Three-Step Friction",
      description:
        "Multiple steps in a popup created cognitive load and increased abandonment",
    },
  ],

  // The Solution
  solutionTitle: "The Solution",
  solutionDescription:
    "I led the frontend transformation from a fragmented popup to a single-page checkout, building real-time features and coordinating cross-functional rollout.",
  solutions: [
    {
      icon: "document-check",
      title: "Single-Page Design",
      description:
        "Eliminated multi-step friction with integrated payment flow and smart form design",
    },
    {
      icon: "lightning",
      title: "Real-time Tax Calculation",
      description:
        "Instant tax updates via Node.js API with debounced validation, reducing checkout surprises",
    },
    {
      icon: "chart",
      title: "A/B Testing with Statsig",
      description:
        "Data-driven optimization with systematic adoption rate monitoring",
    },
  ],

  // Before/After
  beforeAfter: {
    before: {
      image: "images/bump_checkout_before.png",
      alt: "Original three-step popup checkout interface",
      description: "Three-Step Popup",
      bullets: [
        "Multi-step process with high cognitive load",
        "Payment separated from main flow",
        "Add-on prompts before payment",
        "High abandonment after step 1",
      ],
    },
    after: {
      image: "images/bump_checkout_after.png",
      alt: "New single-page checkout interface with integrated payment",
      description: "Single-Page Flow",
      bullets: [
        "Unified checkout experience",
        "Integrated payment within main page",
        "Add-ons positioned after payment input",
        "Real-time tax calculation",
      ],
    },
  },

  // My Role
  myRoleDescription:
    "I spearheaded both frontend development and cross-functional collaboration, navigating time constraints and legacy code to deliver a successful revamp.",
  roles: [
    {
      icon: "code",
      title: "Lead Frontend Development",
      responsibilities: [
        "Built real-time tax calculation with debounced validation and Node.js API integration",
        "Shipped redesign in legacy React class components using strategic refactoring and feature flags for safe rollout",
        "Optimized form performance with lazy loading and improved keyboard navigation for screen reader accessibility",
      ],
    },
    {
      icon: "team",
      title: "Cross-Functional Collaboration",
      responsibilities: [
        "Partnered with designer on iterative design changes, shipping incrementally without hi-fi prototypes",
        "Built backend API endpoints to support real-time UX features and checkout flow requirements",
        "Coordinated with stakeholders to launch feature safely using Statsig for phased rollout monitoring",
      ],
    },
  ],

  // Architecture
  architectureTitle: "How It Works",
  architectureDescription:
    "A strategic blend of frontend optimization, backend API enhancement, and data-driven experimentation to maximize conversion rates.",
  techStack: {
    icon: "database",
    items: [
      { tech: "React Frontend", description: "class components with legacy architecture" },
      { tech: "Node.js Backend", description: "API endpoints for tax calculation" },
      { tech: "Statsig", description: "A/B testing platform for adoption monitoring" },
      { tech: "Legacy APIs", description: "integrated existing backend services" },
    ],
  },
  tradeoffs: {
    icon: "warning-triangle",
    title: "Strategic Trade-offs",
    items: [
      "Working with legacy class components and technical debt for faster launch",
      "Prioritized manual testing over unit tests to accelerate launch velocity and validate with real user feedback",
      "Launched without affecting original checkout flow for risk mitigation",
    ],
  },

  // Impact
  impactDescription: "Biggest checkout transformation in company history proved successful.",
  metrics: [
    { icon: "chart-up", value: "+12%", label: "Conversion increase YoY" },
    { icon: "check-circle", value: "0", label: "Impact on original flow" },
    { icon: "clock", value: "10", label: "Years since last revamp" },
    { icon: "lightning", value: "Real-time", label: "Tax calculation" },
  ],
  testimonial: {
    quote: "I don't say this enough. This UI is amazing, Annie did awesome work!",
    author: "Taylor",
    role: "CTO",
  },

  // Reflections
  reflections: [
    {
      icon: "document",
      title: "Add Planning Phase",
      description:
        "Invest time in stakeholder alignment and technical discovery before coding to prevent costly pivots and unnecessary tech debts.",
    },
    {
      icon: "chart",
      title: "Prioritize MVP Features",
      description:
        "Define core success metrics and ruthlessly prioritize MVP features early to avoid scope creep when working under tight deadlines.",
    },
    {
      icon: "share",
      title: "Isolate Feature Launches",
      description:
        "Separate feature launches from experiments to reduce complexity in measuring individual component impact.",
    },
  ],
};
