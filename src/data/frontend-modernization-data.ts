export const frontendModernizationProject = {
  // Meta
  title: "Frontend Modernization",
  description: "Led the biggest code modernization effort since 2019, upgrading from Node 14 to Node 22 and React 16 to React 18 while coordinating security, API compatibility, and CI/CD migration.",
  thumbnail: "images/frontend-modernization-thumbnail.png",
  thumbnailAlt: "Frontend modernization dashboard",
  techBadges: [
    { label: "React 18", color: "blue" },
    { label: "Node.js 22", color: "green" },
    { label: "GitHub Actions", color: "purple" },
    { label: "Apollo Client v3", color: "indigo" },
    { label: "Project Lead", color: "pink" },
  ],

  // The Challenge
  challengeTitle: "The Challenge",
  challengeDescription:
    "Our codebase was running on Node 14 (EOL) and React 16, creating security vulnerabilities and blocking access to modern tooling and performance improvements.",
  problems: [
    {
      icon: "clock",
      title: "Legacy Runtime & Framework",
      description:
        "Node 14.20.1 reached end-of-life with React 16.14.0, creating security risks and compatibility issues",
    },
    {
      icon: "warning",
      title: "Security Vulnerabilities",
      description:
        "Outdated dependencies (Axios, Sentry) exposed known security vulnerabilities in production",
    },
    {
      icon: "chart-up",
      title: "Technical Debt Accumulation",
      description:
        "Legacy patterns (Enzyme, Apollo v2, deprecated React APIs) blocked modernization and created maintenance burden",
    },
  ],

  // The Solution
  solutionTitle: "The Solution",
  solutionDescription:
    "I led a comprehensive, phased modernization spanning 2H 2025, coordinating with backend and infrastructure engineers to ensure zero downtime and maintain API compatibility.",
  solutions: [
    {
      icon: "lightning",
      title: "Core Runtime Upgrade",
      description:
        "Migrated Node 14 → 22 LTS and React 16 → 18 with Docker image updates and CI/CD pipeline migration from Bitbucket to GitHub Actions",
    },
    {
      icon: "lock",
      title: "Security-First Dependency Updates",
      description:
        "Systematically upgraded critical dependencies (Apollo Client v3, Axios, Sentry) and eliminated 40+ security vulnerabilities",
    },
    {
      icon: "code",
      title: "Modern Testing & Tooling",
      description:
        "Replaced Enzyme with React Testing Library, upgraded to modern testing patterns aligned with React 18's concurrent features",
    },
  ],

  // My Role
  myRoleDescription:
    "As the main project owner across 2H 2025, I coordinated cross-functional efforts, made architectural decisions, and ensured smooth delivery through systematic planning and execution.",
  roles: [
    {
      icon: "team",
      title: "Project Leadership & Coordination",
      responsibilities: [
        "Partnered with 1 backend and 1 infrastructure engineer to ensure API compatibility and deployment security throughout the migration",
        "Defined migration scope and phases, balancing quick wins with high-complexity upgrades to deliver value incrementally",
        "Established testing and rollback procedures to maintain zero production incidents during the modernization",
      ],
    },
    {
      icon: "code",
      title: "Technical Implementation",
      responsibilities: [
        "Executed Node 14 → 22 and React 16 → 18 upgrades, resolving breaking changes in concurrent rendering and lifecycle methods",
        "Migrated Apollo Client v2 → v3, refactoring GraphQL layer across entire application with backwards-compatible API design",
        "Converted Enzyme test suites to React Testing Library, establishing behavior-first testing patterns for the team",
        "Replaced deprecated React APIs (react-visibility-sensor → Intersection Observer, react-loadable → React.lazy/Suspense)",
      ],
    },
  ],

  // Architecture
  architectureTitle: "Implementation Strategy",
  architectureDescription:
    "A phased approach prioritizing critical security updates first, followed by systematic modernization of testing frameworks and deprecated APIs.",
  techStack: {
    icon: "code",
    items: [
      { tech: "Node.js 22 LTS", description: "upgraded from 14.20.1 with Docker and CI/CD pipeline updates" },
      { tech: "React 18.3.1", description: "migrated from 16.14.0 with concurrent rendering support" },
      { tech: "Apollo Client v3", description: "complete GraphQL layer rewrite from v2" },
      { tech: "GitHub Actions", description: "migrated CI/CD from Bitbucket Pipelines" },
      { tech: "React Testing Library", description: "replaced Enzyme with behavior-first testing" },
    ],
  },
  tradeoffs: {
    icon: "warning-triangle",
    title: "Strategic Decisions",
    items: [
      "Prioritized security dependencies (Axios, Sentry) before nice-to-have modernizations (ESLint, Prettier)",
      "Completed ahead of schedule, allowing expansion of scope to include React Router v6 and Stripe Elements updates",
      "Deferred code quality tooling (ESLint major versions) and UI library updates to future iterations",
    ],
  },

  // Implementation Details
  architectureSections: [
    {
      title: "Phase 1: Core Modernization (Completed)",
      icon: "check-circle",
      items: [
        {
          title: "Runtime & Framework Upgrade",
          description: "Node.js 14.20.1 → 22 LTS (22.12.0), React 16.14.0 → 18.3.1, React Scripts → Latest React 18 compatible",
        },
        {
          title: "CI/CD Infrastructure Migration",
          description: "Migrated from Bitbucket Pipelines to GitHub Actions, updated Docker images (node:14-bullseye → node:22-bullseye)",
        },
        {
          title: "Safe Package Updates",
          description: "Testing libraries (@testing-library/jest-dom@6.7.0), build tools (sass@1.90.0), GraphQL (graphql@16.11.0)",
        },
      ],
    },
    {
      title: "Phase 2: Extended Modernization (Completed Ahead of Schedule)",
      icon: "check-circle",
      items: [
        {
          title: "Apollo Client v2 → v3 Migration",
          description: "Complete GraphQL layer rewrite, migrated from react-apollo to @apollo/client, updated possibleTypes format and cache policies",
        },
        {
          title: "Testing Framework Migration",
          description: "Converted Enzyme test suites to React Testing Library, established behavior-first testing patterns with findBy/waitFor for async operations",
        },
        {
          title: "Security Dependency Updates",
          description: "Upgraded Axios with verified interceptors, migrated Sentry to @sentry/react with Browser Tracing for performance monitoring",
        },
        {
          title: "Stripe Payments Modernization",
          description: "Migrated react-stripe-elements → @stripe/react-stripe-js, converted injectStripe HOCs to useStripe/useElements hooks",
        },
        {
          title: "React Router v5 → v6",
          description: "Updated routing architecture, replaced Switch → Routes, removed withRouter in favor of modern hooks (useNavigate, useLocation)",
        },
        {
          title: "Deprecated API Cleanup",
          description: "Replaced react-visibility-sensor with Intersection Observer API, migrated react-loadable to React.lazy + Suspense",
        },
      ],
    },
    {
      title: "Future Iterations (Out of Scope)",
      icon: "clock",
      items: [
        {
          title: "Code Quality Tooling",
          description: "ESLint, Prettier major version upgrades with enhanced plugin ecosystem",
        },
        {
          title: "UI Library Modernization",
          description: "React Bootstrap, React Overlays, FontAwesome major version updates",
        },
        {
          title: "Bundle Size Optimization",
          description: "Route-level code splitting, vendor bundle analysis, modern build targets",
        },
      ],
    },
  ],

  // Impact
  impactDescription: "Successfully delivered the largest modernization effort in company history, ahead of schedule.",
  metrics: [
    { icon: "lock", value: "40+", label: "Security vulnerabilities fixed" },
    { icon: "lightning", value: "Ahead", label: "Of schedule delivery" },
    { icon: "share", value: "Modern", label: "CI/CD infrastructure" },
  ],

  // Reflections
  reflections: [
    {
      icon: "chart",
      title: "Phased Delivery Creates Value Early",
      description:
        "Breaking modernization into phases (core runtime → security → nice-to-haves) allowed us to ship security fixes quickly while building towards comprehensive modernization.",
    },
    {
      icon: "warning",
      title: "Test for Breaking Behavioral Changes",
      description:
        "Apollo Client v3 enforces object immutability through Object.freeze(), causing 2 production incidents where our code mutated cached objects. Integration tests would have caught this before deployment.",
    },
    {
      icon: "document",
      title: "Comprehensive Testing Enables Confidence",
      description:
        "Investing in testing framework migration alongside runtime upgrades gave us confidence to move fast without breaking production.",
    },
  ],
};
