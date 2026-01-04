export const couponSwapProject = {
  // Meta
  title: "Coupon Swap Scheduler",
  description: "Empowered the marketing team with self-service scheduling, reduced engineering intervention, and improved campaign flexibility.",
  thumbnail: "images/coupon-swap-thumbnail.png",
  thumbnailAlt: "Coupon swap scheduler interface",
  techBadges: [
    { label: "React", color: "blue" },
    { label: "AWS Lambda", color: "orange" },
    { label: "EventBridge", color: "purple" },
    { label: "Node.js", color: "green" },
  ],

  // The Challenge
  challengeDescription: "Every week, marketing campaigns were stalled at the starting line: unable to kick off until a developer manually updated the coupon configurations.",
  problems: [
    {
      icon: "users",
      title: "Developer Bottleneck",
      description: "Marketing teams waited for engineering to manually update coupon configurations",
    },
    {
      icon: "clock",
      title: "Time-Sensitive Process",
      description: "2 hours/week of manual work and testing with zero room for error",
    },
    {
      icon: "x",
      title: "Campaign Delays",
      description: "Ad-hoc requests and urgent swaps disrupted development cycles",
    },
  ],

  // The Solution
  solutionDescription: "I built an event-driven system that gave marketing teams full control while eliminating developer bottlenecks.",
  solutions: [
    {
      icon: "clock",
      title: "Self-Service Scheduling",
      description: "Marketing teams can schedule coupon swaps independently",
    },
    {
      icon: "lightning",
      title: "Event-Driven Architecture",
      description: "AWS EventBridge and Lambda functions handle everything automatically",
    },
    {
      icon: "check-circle",
      title: "Zero Developer Intervention",
      description: "Completely eliminates manual developer work and reduces errors",
    },
  ],

  // My Role
  myRoleDescription: "I led both frontend and backend development, collaborating closely with our DevOps team to bring this automation vision to life.",
  roles: [
    {
      icon: "code",
      title: "Technical Leadership",
      responsibilities: [
        "Co-architected event-driven system with AWS EventBridge & Lambda",
        "Built React UI optimized for internal team workflows",
        "Implemented robust scheduling logic and error handling",
      ],
    },
    {
      icon: "team",
      title: "Cross-Team Collaboration",
      responsibilities: [
        "Coordinated IAM policies & deployment pipeline with DevOps",
        "Optimized multi-repo coordination and Lambda packaging",
        "Gathered requirements from marketing teams for UX design",
      ],
    },
  ],

  // Architecture
  architectureTitle: "The Architecture",
  architectureDescription: "A serverless architecture that orchestrates coupon swaps with precision timing and zero manual intervention.",
  architectureDiagram: `<svg viewBox="0 0 1200 600" class="w-full h-auto">
    <!-- Background sections -->
    <rect x="50" y="50" width="300" height="500" fill="#fef7e0" rx="10"></rect>
    <rect x="400" y="50" width="400" height="500" fill="#e0f2fe" rx="10"></rect>
    <rect x="850" y="50" width="300" height="500" fill="#fdf2f8" rx="10"></rect>

    <!-- Section labels -->
    <text x="200" y="40" text-anchor="middle" class="text-lg font-semibold" fill="#7c2d12">BACKEND</text>
    <text x="600" y="40" text-anchor="middle" class="text-lg font-semibold" fill="#0c4a6e">EVENTBRIDGE</text>
    <text x="1000" y="40" text-anchor="middle" class="text-lg font-semibold" fill="#831843">LAMBDA</text>

    <!-- Backend Call -->
    <rect x="80" y="280" width="240" height="80" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="200" y="310" text-anchor="middle" class="text-md font-medium" fill="#374151">Backend Call</text>
    <text x="200" y="330" text-anchor="middle" class="text-sm" fill="#6b7280">(applyCouponSwapInEventBridge)</text>

    <!-- Event Bus -->
    <rect x="430" y="280" width="140" height="60" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="500" y="305" text-anchor="middle" class="text-md font-medium" fill="#374151">Event Bus</text>

    <!-- EB Rules -->
    <rect x="430" y="150" width="160" height="60" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="510" y="175" text-anchor="middle" class="text-md font-medium" fill="#374151">EB Rule: Scheduled</text>

    <rect x="430" y="380" width="160" height="60" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="510" y="405" text-anchor="middle" class="text-md font-medium" fill="#374151">EB Rule: Live</text>

    <!-- EB Scheduler -->
    <rect x="880" y="150" width="180" height="60" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="970" y="175" text-anchor="middle" class="text-md font-medium" fill="#374151">EB Scheduler</text>

    <!-- Lambda Functions -->
    <rect x="880" y="280" width="240" height="80" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="1000" y="305" text-anchor="middle" class="text-md font-medium" fill="#374151">applyCouponSwapLambda</text>

    <!-- Backend Endpoints -->
    <rect x="80" y="450" width="240" height="60" fill="white" stroke="#6b7280" stroke-width="2" rx="8"></rect>
    <text x="200" y="485" text-anchor="middle" class="text-md font-medium" fill="#374151">Backend Endpoints</text>

    <!-- Arrows -->
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280"></polygon>
      </marker>
    </defs>

    <!-- Backend to Event Bus -->
    <line x1="320" y1="320" x2="430" y2="310" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>

    <!-- Event Bus to EB Rules -->
    <line x1="500" y1="280" x2="510" y2="210" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>
    <line x1="500" y1="340" x2="510" y2="380" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>

    <!-- EB Rule Scheduled to EB Scheduler -->
    <line x1="590" y1="180" x2="880" y2="180" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>

    <!-- EB Scheduler to Lambda -->
    <line x1="970" y1="210" x2="970" y2="280" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>

    <!-- EB Rule Live to Lambda -->
    <line x1="590" y1="410" x2="880" y2="320" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></line>

    <!-- Lambda to Backend Endpoints -->
    <polyline points="970,360 970,480 400,480 320,480" fill="none" stroke="#6b7280" stroke-width="2" marker-end="url(#arrowhead)"></polyline>
  </svg>`,
  techStack: {
    icon: "database",
    items: [
      { tech: "AWS EventBridge", description: "rule-based and time-based triggers" },
      { tech: "AWS Lambda", description: "serverless execution for coupon logic" },
      { tech: "Node.js Backend", description: "API integration layer" },
      { tech: "React Frontend", description: "minimal scheduling interface" },
      { tech: "Statsig", description: "dynamic banner text updates" },
    ],
  },
  tradeoffs: {
    icon: "chart",
    title: "Strategic Decisions",
    items: [
      "Minimal UI investment focused on backend automation for MVP speed",
      "Shared Yarn cache to optimize Lambda deployment times",
      "Careful IAM scoping to avoid permission bloat across functions",
    ],
  },

  // Impact
  impactDescription: "From manual bottlenecks to seamless automation.",
  metrics: [
    { icon: "clock", value: "2 hrs", label: "Weekly time saved" },
    { icon: "lightning", value: "0", label: "Ad-hoc requests" },
    { icon: "users", value: "100%", label: "Self-service adoption" },
    { icon: "chart", value: "5x", label: "Faster campaign testing" },
  ],
  testimonial: {
    quote: "This saves us from bugging devs every week. Total game-changer!",
    author: "Jenna",
    role: "Marketing Director",
  },

  // Reflections
  reflections: [
    {
      icon: "monitor",
      title: "Enhanced UI Experience",
      description: "Add real-time feedback, execution logs, and status indicators to build confidence for non-technical users and reduce support overhead.",
    },
    {
      icon: "lock",
      title: "Streamlined Setup",
      description: "Simplify IAM configurations and deployment processes earlier to enable easier handoffs and maintainability for future team members.",
    },
    {
      icon: "trending-up",
      title: "Scalable Architecture",
      description: "Consider AWS Step Functions for complex workflows to handle growing business logic without overcomplicating the core system.",
    },
  ],
};
