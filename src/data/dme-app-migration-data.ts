export const dmeAppMigrationProject = {
  // Meta
  title: "DME App Migration",
  description: "Building a modern React 19 application to replace the legacy DME ordering platform, featuring React Router v7, React Hook Form, and a complete architecture overhaul with CloudFront CDN for assets.",
  thumbnail: "images/dme-app-migration-thumbnail.svg",
  thumbnailAlt: "DME app migration dashboard",
  techBadges: [
    { label: "React 19", color: "blue" },
    { label: "React Router v7", color: "green" },
    { label: "React Hook Form", color: "purple" },
    { label: "TypeScript", color: "indigo" },
    { label: "Project Lead", color: "pink" },
  ],

  // The Challenge
  challengeTitle: "The Challenge",
  challengeDescription:
    "Our legacy DME ordering platform was built with outdated patterns that hindered development velocity, user experience, and scalability.",
  problems: [
    {
      icon: "clock",
      title: "Legacy Architecture",
      description:
        "Class components, manual form state management, and Bootstrap styling created maintenance burden and inconsistent UX",
    },
    {
      icon: "warning",
      title: "Poor Developer Experience",
      description:
        "No type safety, scattered validation logic, and complex authentication flows made feature development slow and error-prone",
    },
    {
      icon: "chart-up",
      title: "Scalability Limitations",
      description:
        "Hardcoded static assets and lack of CDN infrastructure limited performance and content management flexibility",
    },
  ],

  // The Solution
  solutionTitle: "The Solution",
  solutionDescription:
    "I'm leading a ground-up rebuild with modern tooling, focusing on developer experience, type safety, and scalable infrastructure for 1H 2026.",
  solutions: [
    {
      icon: "lightning",
      title: "Modern React Stack",
      description:
        "React 19 with React Router v7 (SPA mode), leveraging concurrent features and modern routing patterns for optimal performance",
    },
    {
      icon: "lock",
      title: "Type-Safe Forms",
      description:
        "React Hook Form + Zod validation replacing manual state management, cutting form code by ~50% while adding full TypeScript support",
    },
    {
      icon: "cloud",
      title: "CloudFront CDN Architecture",
      description:
        "Migrating 59 static assets to S3 with CloudFront CDN, GraphQL API for content, and MongoDB for flexible content management",
    },
  ],

  // My Role
  myRoleDescription:
    "As project lead for 1H 2026, I'm driving the architecture decisions, implementing core features, and coordinating the migration from the legacy codebase.",
  roles: [
    {
      icon: "team",
      title: "Architecture & Planning",
      responsibilities: [
        "Designed the migration strategy from class components to modern functional patterns with React Hook Form",
        "Planned CloudFront CDN infrastructure with Pulumi, S3 bucket policies, and GraphQL integration",
        "Established form validation patterns using Zod schemas with reusable validation utilities",
        "Documented authentication flows for passwordless checkout supporting both regular and guest users",
      ],
    },
    {
      icon: "code",
      title: "Technical Implementation",
      responsibilities: [
        "Building multi-step form flow (Information -> Address -> Insurance) with sessionStorage persistence",
        "Implementing Headless UI components with Tailwind CSS v4 and full Storybook documentation",
        "Creating GraphQL queries for dynamic hero content, carousel items, and logo assets",
        "Setting up Vitest testing infrastructure with component-level Storybook integration",
      ],
    },
  ],

  // Architecture
  architectureTitle: "Architecture Overview",
  architectureDescription:
    "A modern, scalable architecture built for performance, developer experience, and future extensibility.",
  techStack: {
    icon: "code",
    items: [
      { tech: "React 19", description: "latest concurrent features with React Router v7 SPA mode" },
      { tech: "Tailwind CSS v4", description: "utility-first styling replacing Bootstrap" },
      { tech: "React Hook Form + Zod", description: "type-safe form validation with 50% less code" },
      { tech: "Apollo Client", description: "GraphQL data fetching with caching" },
      { tech: "CloudFront CDN", description: "global edge caching for static assets" },
      { tech: "Headless UI", description: "accessible, unstyled components" },
    ],
  },
  tradeoffs: {
    icon: "warning-triangle",
    title: "Strategic Decisions",
    items: [
      "Prioritized breast pump ordering flow as MVP, deferring other product offerings to future phases",
      "Chose CloudFront CDN over direct S3 URLs for better global performance despite higher complexity",
      "Implemented passwordless auth with guest checkout for frictionless UX, accepting duplicate user record trade-off",
    ],
  },

  // Implementation Details
  architectureSections: [
    {
      title: "Phase 1: Core Application (In Progress)",
      icon: "in-progress",
      items: [
        {
          title: "Modern Form System",
          description: "React Hook Form + Zod replacing class components with manual validation, using Controller pattern for custom components",
        },
        {
          title: "Multi-Step Checkout Flow",
          description: "Information -> Address -> Insurance steps with sessionStorage persistence and step validation",
        },
        {
          title: "Component Library",
          description: "FieldGroup, DatePicker, PhoneInput, Select components with Storybook documentation and TypeScript types",
        },
        {
          title: "Authentication System",
          description: "Passwordless flow supporting regular users (unique email) and guest checkout (existing email)",
        },
      ],
    },
    {
      title: "Phase 2: Asset Migration (Planned)",
      icon: "clock",
      items: [
        {
          title: "S3 + CloudFront CDN",
          description: "59 images migrating to private S3 bucket with CloudFront distribution, custom domain SSL, and HTTP/2+3 support",
        },
        {
          title: "GraphQL Content API",
          description: "New queries in bump-backend for hero content, carousel items, and logo assets from MongoDB",
        },
        {
          title: "Migration Script",
          description: "Automated script with dry-run mode, rollback capability, and validation for zero-downtime cutover",
        },
      ],
    },
    {
      title: "Phase 3: Checkout Redesign (Next Phase)",
      icon: "clock",
      items: [
        {
          title: "Complete Checkout Flow Redesign",
          description: "Reimagined purchase experience for both free (insurance-covered) and paid pump paths",
        },
        {
          title: "DME Upsell Addon Flow",
          description: "Cross-sell and upsell integration during checkout process",
        },
        {
          title: "Stripe Payments Integration",
          description: "Modern @stripe/react-stripe-js with useStripe/useElements hooks",
        },
      ],
    },
  ],

  // Impact
  impactDescription: "Building the foundation for Bump Health's biggest revenue driver in 2026.",
  metrics: [
    { icon: "code", value: "50%", label: "Less form code with RHF + Zod" },
    { icon: "lightning", value: "95%+", label: "Target CDN cache hit ratio" },
    { icon: "lock", value: "Full", label: "TypeScript type safety" },
  ],

  // Reflections
  reflections: [
    {
      icon: "chart",
      title: "Migration Strategy Matters",
      description:
        "Breaking the rebuild into phases (core forms -> asset CDN -> checkout redesign) allows shipping value incrementally while building toward the complete vision.",
    },
    {
      icon: "warning",
      title: "Simplify Auth with Purpose-Built Tools",
      description:
        "The dual-user-type authentication (regular vs guest) created subtle bugs around isTemporary flags. Future iterations should leverage tools like Stytch to handle passwordless auth, reducing custom logic and improving security.",
    },
    {
      icon: "document",
      title: "Invest in Developer Experience",
      description:
        "React Hook Form + Zod eliminates entire categories of bugs (type mismatches, forgotten validation) while making the codebase more approachable for the team.",
    },
  ],
};
