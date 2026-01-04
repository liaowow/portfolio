export const internalDataPortalProject = {
  // Meta
  title: "Internal Data Management Portal",
  description: "Transformed manual CSV file updates into a robust database management tool with live updates, reducing dev involvement from constant updates while improving data accuracy and team efficiency.",
  thumbnail: "images/internal-data-thumbnail.png",
  thumbnailAlt: "Internal data management portal interface",
  techBadges: [
    { label: "NextJS", color: "blue" },
    { label: "TypeScript", color: "indigo" },
    { label: "MongoDB", color: "green" },
    { label: "Tailwind CSS", color: "cyan" },
    { label: "DaisyUI", color: "purple" },
    { label: "Full-Stack Lead", color: "pink" },
  ],

  // The Challenge
  challengeDescription: "Our DME (Durable Medical Equipment) team's growing business was constrained by a massive CSV file with thousands of insurance entries that required constant manual updates.",
  problems: [
    {
      icon: "document",
      title: "Manual CSV Updates",
      description: "Thousands of insurance entries required constant developer involvement for updates",
    },
    {
      icon: "dollar",
      title: "Revenue Impact",
      description: "Pricing changes directly tied to revenue were delayed by manual processes",
    },
    {
      icon: "warning-triangle",
      title: "Data Inconsistency",
      description: "Users might select outdated partners or miss new partnerships due to pending updates",
    },
  ],

  // The Solution
  solutionDescription: "From CSV hell to database heaven: Built a comprehensive internal web app that transformed manual CSV updates into a robust database tool with live edits and instant customer-side reflection.",
  solutions: [
    {
      icon: "database",
      title: "Database Management Tool",
      description: "Transformed CSV into robust MongoDB with full CRUDL operations",
    },
    {
      icon: "lightning",
      title: "Live Updates",
      description: "Zero latency between database changes and customer-side UI reflection",
    },
    {
      icon: "sparkles",
      title: "Smooth UX",
      description: "Inline form updates, instant search/filter, and bulk operations",
    },
  ],

  // My Role
  myRoleDescription: "I led both frontend and backend development while spearheading the team's modernization efforts by introducing new technologies and practices.",
  roles: [
    {
      icon: "code",
      title: "Full-Stack Development",
      responsibilities: [
        "Built all API endpoints using NextJS's full-stack capabilities",
        "Connected with MongoDB for comprehensive CRUDL operations",
        "Designed smooth UX with inline form updates, instant search, and pagination controls",
      ],
    },
    {
      icon: "lightning",
      title: "Team Modernization",
      responsibilities: [
        "Introduced NextJS, TypeScript, Tailwind, and DaisyUI to the dev stack",
        "Established GitHub workflow alongside DevOps team as part of modernization efforts",
        "Implemented bulk add/edit functionality with real-time reflection",
      ],
    },
  ],

  // Architecture
  architectureTitle: "How It Works",
  architectureDescription: "A modern full-stack approach with careful technology choices and documented challenges that informed future development decisions.",
  techStack: {
    icon: "database",
    items: [
      { tech: "NextJS", description: "Full-stack framework with API routes" },
      { tech: "TypeScript", description: "Type safety and improved developer experience" },
      { tech: "Tailwind + DaisyUI", description: "Rapid UI development with component library" },
      { tech: "MongoDB", description: "Document database for flexible insurance data" },
    ],
  },
  tradeoffs: {
    icon: "warning-triangle",
    title: "Strategic Trade-offs",
    items: [
      "Limited TypeScript best practices knowledge within dev team created learning curve",
      "NextJS auth's opinionated configuration made debugging deployment issues difficult to troubleshoot",
      "NextJS expected environment variables to be built into the Docker container, limiting deployment flexibility",
    ],
  },

  // Impact
  impactDescription: "Eliminated bottlenecks and transformed how we manage critical business data.",
  metrics: [
    { icon: "check-circle", value: "0", label: "Dev involvement needed" },
    { icon: "lightning", value: "0ms", label: "Latency for UI updates" },
    { icon: "chart-down", value: "98.5%", label: "Code reduction (20k→300 lines)" },
    { icon: "database", value: "1000s", label: "Insurance entries managed" },
  ],
  testimonial: {
    quote: "Annie has taken the lead on processing the data, and has made headway on several other full stack code improvements. She's not afraid to take on a challenging project and succeed!!",
    author: "Christine",
    role: "CEO & Co-Founder",
  },

  // Reflections
  reflections: [
    {
      icon: "users",
      title: "Involve Other Devs for Knowledge Share",
      description: "Collaborate more closely with team members to share learnings about new technologies and reduce the risk of knowledge silos in critical projects.",
    },
    {
      icon: "book",
      title: "Deep-dive on Framework Challenges",
      description: "Invest more time understanding framework-specific challenges like NextJS auth configuration and deployment patterns to avoid roadblocks during implementation.",
    },
    {
      icon: "chart",
      title: "Compare Framework Options",
      description: "Conduct thorough framework comparison and evaluation phase to select the best tool for our specific use case and team capabilities before committing to implementation.",
    },
  ],
};
