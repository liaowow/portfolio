# Dev Project Layout Template

This template defines the standardized structure and styling for all development/engineering project case studies in the portfolio.

## Design Philosophy

This layout is specifically crafted to communicate:
- **Visual confidence** through bold typography
- **Layered depth** showing technical sophistication
- **Micro-interactions** demonstrating UX maturity
- **Systematic design** proving scalable thinking
- **Strategic polish** showing attention to detail

---

## File Structure

```astro
---
import Header from "../../components/Header.astro";
import BackNavigation from "../../components/BackNavigation.astro";
export const prerender = true;

const baseUrl = import.meta.env.BASE_URL;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href={`${baseUrl}favicon.png`} />
    <meta name="viewport" content="width=device-width" />
    <meta name="generator" content={Astro.generator} />
    <title>[Project Name] - Annie Liao</title>
  </head>
  <body class="bg-gray-50">
    <Header />
    <main class="pt-20">
      <!-- SECTIONS GO HERE -->
    </main>
  </body>
</html>
```

---

## Section 1: Hero Section

**Purpose:** Immediate impact with bold typography and colorful tech badges

### Structure:
```astro
<section class="py-24 md:py-32 px-6 bg-gradient-to-b from-white to-gray-50">
  <div class="max-w-5xl mx-auto">
    <div class="flex flex-col md:flex-row md:items-start gap-10 mb-12">

      <!-- Thumbnail -->
      <div class="flex-shrink-0">
        <img
          src={`${baseUrl}images/[thumbnail].png`}
          alt="[Alt text]"
          class="w-40 h-40 object-cover rounded-3xl shadow-xl ring-1 ring-gray-200"
        />
      </div>

      <!-- Title and Description -->
      <div class="flex-1 min-w-0">
        <h1 class="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">
          [Project Title]
        </h1>
        <p class="text-xl md:text-2xl text-gray-700 leading-relaxed mb-10 max-w-3xl">
          [One-sentence value proposition with measurable impact]
        </p>

        <!-- Tech Badges -->
        <div class="flex flex-wrap gap-2.5">
          <span class="px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">Technology</span>
          <!-- Add 4-6 badges total -->
        </div>
      </div>

    </div>
  </div>
</section>
```

### Style Guidelines:
- **Title:** `text-5xl md:text-7xl font-bold tracking-tight leading-tight`
- **Description:** `text-xl md:text-2xl text-gray-700 leading-relaxed`
- **Thumbnail:** `w-40 h-40 rounded-3xl shadow-xl ring-1 ring-gray-200`
- **Tech Badges:** Use semantic colors
  - Blue: Core frameworks (React, NextJS, Node.js)
  - Purple: Design/specialized tools (Statsig, D3.js, TypeScript)
  - Green: Databases/backend (MongoDB, PostgreSQL)
  - Orange: Cloud services (AWS Lambda, EventBridge)
  - Pink: Roles (Frontend Lead, Full-Stack Lead)
  - Indigo/Cyan: Modern tools (Tailwind, GraphQL)

---

## Section 2: The Challenge

**Purpose:** Frame the problem with visual storytelling using red/orange gradient

### Structure:
```astro
<section class="py-20 px-6 bg-gray-50">
  <div class="max-w-6xl mx-auto">

    <!-- Section Header -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        The Challenge
      </h2>
      <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        [2-3 sentence problem statement that sets the stage]
      </p>
    </div>

    <!-- Problem Cards -->
    <div class="mb-24">
      <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 md:p-12 border-2 border-red-200/60 shadow-lg">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

          <!-- Problem 1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-600" ...>[Icon]</svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2">[Problem Title]</h3>
            <p class="text-gray-600 text-sm">[Problem description]</p>
          </div>

          <!-- Problem 2 & 3 -->
          <!-- Repeat structure -->

        </div>
      </div>
    </div>

  </div>
</section>
```

### Style Guidelines:
- **Section Title:** `text-4xl md:text-5xl font-bold`
- **Description:** `text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto`
- **Container:** `bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 md:p-12 border-2 border-red-200/60 shadow-lg`
- **Icons:** `w-16 h-16 bg-red-100 rounded-full` with `w-8 h-8 text-red-600` SVG
- **Grid:** 3 columns on desktop, stack on mobile

---

## Section 3: The Solution

**Purpose:** Present the solution with green/emerald gradient conveying success

### Structure:
```astro
<div class="mb-24">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      The Solution
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      [How you approached and solved the problem]
    </p>
  </div>

  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 md:p-12 border-2 border-green-200/60 shadow-lg">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Solution 1 -->
      <div class="text-center">
        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-green-600" ...>[Icon]</svg>
        </div>
        <h3 class="font-bold text-gray-900 mb-2">[Solution Title]</h3>
        <p class="text-gray-600 text-sm">[Solution description]</p>
      </div>

      <!-- Solution 2 & 3 -->
      <!-- Repeat structure -->

    </div>
  </div>
</div>
```

### Style Guidelines:
- **Container:** `bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 md:p-12 border-2 border-green-200/60 shadow-lg`
- **Icons:** `w-16 h-16 bg-green-100 rounded-full` with `w-8 h-8 text-green-600` SVG
- Match The Challenge structure but with green palette

---

## Section 4: My Role

**Purpose:** Detail your contributions with clean white cards and hover effects

### Structure:
```astro
<div class="mb-24">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      My Role
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      [Your role and approach to the project]
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

    <!-- Role Card 1 -->
    <div class="bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-gray-600" ...>[Icon]</svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-4">[Role Title]</h3>
      <ul class="space-y-3 text-gray-600">
        <li class="flex items-start space-x-3">
          <div class="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>[Responsibility or achievement]</span>
        </li>
        <!-- 3-4 bullets per card -->
      </ul>
    </div>

    <!-- Role Card 2 -->
    <!-- Repeat structure -->

  </div>
</div>
```

### Style Guidelines:
- **Cards:** `bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow`
- **Icon Container:** `w-12 h-12 bg-gray-100 rounded-xl`
- **Bullets:** `w-1.5 h-1.5 bg-gray-500 rounded-full mt-2` (small dots, not large icons)
- **Grid:** 2 columns, typically "Technical Leadership" + "Collaboration"

---

## Section 5: How It Works / The Architecture

**Purpose:** Show technical depth with system architecture and trade-offs

### Structure:
```astro
<div class="mb-24">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      How It Works  <!-- or "The Architecture" -->
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      [Technical approach and architecture overview]
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

    <!-- Tech Stack Card -->
    <div class="bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-gray-600" ...>[Database icon]</svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start space-x-3">
          <div class="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span><strong>Technology Name</strong> – brief description</span>
        </li>
        <!-- 4-5 items -->
      </ul>
    </div>

    <!-- Trade-offs Card -->
    <div class="bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-gray-600" ...>[Warning/decision icon]</svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-4">Strategic Trade-offs</h3>
      <ul class="space-y-3 text-gray-700">
        <li class="flex items-start space-x-3">
          <div class="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
          <span>[Trade-off decision and reasoning]</span>
        </li>
        <!-- 3-4 items -->
      </ul>
    </div>

  </div>
</div>
```

### Optional: Architecture Diagram
If you have a visual diagram, include it before the cards:
```astro
<div class="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 md:p-12 rounded-3xl border-2 border-blue-200/60 shadow-lg mb-12">
  <!-- SVG or Image of architecture -->
</div>
```

---

## Section 6: The Impact

**Purpose:** Quantify results with metrics and testimonials

### Structure:
```astro
<div class="mb-24">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      The Impact
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      [Overall impact statement]
    </p>
  </div>

  <!-- Metrics Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

    <!-- Metric Card -->
    <div class="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 text-green-600" ...>[Icon]</svg>
      </div>
      <div class="text-3xl font-bold text-gray-900 mb-2">[Metric]</div>
      <div class="text-gray-600 text-sm">[Metric label]</div>
    </div>

    <!-- 3-4 total metrics -->

  </div>

  <!-- Quote Section -->
  <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 md:p-12 border-2 border-green-200/60 shadow-lg">
    <div class="flex items-start space-x-6">
      <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
        <svg class="w-8 h-8 text-green-600" ...>[Quote icon]</svg>
      </div>
      <div>
        <blockquote class="text-xl text-gray-900 font-medium mb-3">
          "[Testimonial quote from stakeholder]"
        </blockquote>
        <div class="text-gray-700 font-medium">— [Name], [Title]</div>
      </div>
    </div>
  </div>
</div>
```

### Style Guidelines:
- **Metric Cards:** `p-8 rounded-3xl border-2 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`
- **Hover Effect:** Cards lift up slightly on hover (`hover:-translate-y-1`)
- **Icons:** Green success theme (`bg-green-100` with `text-green-600`)
- **Quote:** Same green gradient as solutions section for consistency

---

## Section 7: Looking Back

**Purpose:** Show reflective thinking and continuous improvement mindset

### Structure:
```astro
<div class="mb-16">
  <div class="text-center mb-16">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      Looking Back
    </h2>
    <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      [Context about lessons learned or future improvements]
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

    <!-- Reflection Card -->
    <div class="bg-white p-10 rounded-3xl border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
      <div class="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
        <svg class="w-6 h-6 text-gray-600" ...>[Icon]</svg>
      </div>
      <h3 class="text-xl font-bold text-gray-900 mb-4">[Lesson Title]</h3>
      <p class="text-gray-600">[Reflection or future improvement]</p>
    </div>

    <!-- 3 total reflection cards -->

  </div>
</div>
```

### Style Guidelines:
- **Grid:** 3 columns for lessons/reflections
- Same card style as "My Role" section
- Focus on: what you learned, what you'd do differently, or future enhancements

---

## Section 8: Back Navigation

**Purpose:** Guide users back to the portfolio with a polished CTA

### Structure:
```astro
<BackNavigation />
```

Uses the reusable `BackNavigation` component with:
- Arrow icon
- Hover lift effect
- Consistent styling across all projects

---

## Design System Reference

### Typography Scale
```css
/* Hero Title */
text-5xl md:text-7xl font-bold tracking-tight leading-tight

/* Section Titles */
text-4xl md:text-5xl font-bold

/* Large Description */
text-xl md:text-2xl leading-relaxed

/* Card Titles */
text-xl font-bold

/* Body Text */
text-gray-600 or text-gray-700
```

### Spacing Scale
```css
/* Section Padding */
py-20 px-6 (standard)
py-24 md:py-32 px-6 (hero)

/* Card Padding */
p-10 rounded-3xl (role cards, tech stack)
p-10 md:p-12 rounded-3xl (problem/solution gradient cards)
p-8 rounded-3xl (metric cards)

/* Gaps */
gap-2.5 (tech badges)
gap-8 (card grids)
gap-10 (hero layout)
mb-12 (section spacing)
mb-16 (large section spacing)
mb-24 (major section spacing)
```

### Color Palette
```css
/* Problem Gradient */
bg-gradient-to-br from-red-50 to-orange-50
border-2 border-red-200/60

/* Solution/Success Gradient */
bg-gradient-to-br from-green-50 to-emerald-50
border-2 border-green-200/60

/* Neutral Cards */
bg-white border-2 border-gray-200

/* Tech Badges */
bg-[color]-100 text-[color]-800
```

### Interactive States
```css
/* Hover Shadow */
hover:shadow-xl transition-shadow

/* Hover Lift */
hover:-translate-y-1 transition-all

/* Button Hover */
hover:-translate-y-0.5 hover:shadow-lg
```

---

## Content Guidelines

### Hero Section
- **Title:** Project name (3-5 words)
- **Description:** One impactful sentence with measurable outcome (20-30 words)
- **Tech Badges:** 4-6 key technologies + role

### The Challenge
- **Header:** 2-3 sentences setting up the problem
- **Cards:** 3 specific pain points, each 10-15 words

### The Solution
- **Header:** 2-3 sentences on your approach
- **Cards:** 3 solution components, matching problem structure

### My Role
- **Header:** Your role and approach (2-3 sentences)
- **Cards:** 2 aspects (Technical + Collaboration), 3-4 bullets each

### How It Works
- **Header:** Architecture overview (2-3 sentences)
- **Tech Stack:** 4-5 key technologies with brief descriptions
- **Trade-offs:** 3-4 strategic decisions with reasoning

### The Impact
- **Header:** Overall impact statement
- **Metrics:** 4 quantifiable results
- **Quote:** 1-2 sentence testimonial

### Looking Back
- **Header:** Context for reflections
- **Cards:** 3 lessons/improvements

---

## Examples in Portfolio

### Current Projects Using This Template:
1. **E-Commerce Checkout UX Revamp** - `/projects/ecommerce-checkout-revamp.astro`
2. **Coupon Swap Scheduler** - `/projects/coupon-swap-scheduler.astro`
3. **Internal Data Management Portal** - `/projects/internal-data-management-portal.astro`

### When to Use This Template:
- Full-stack development projects
- Frontend/backend engineering work
- Technical infrastructure projects
- System architecture projects
- Projects with measurable business impact

### When NOT to Use This Template:
- Design projects (use design-specific template)
- Personal/experimental projects (can use simplified version)
- Quick prototypes or hackathon projects

---

## Quick Start Checklist

When creating a new project page:

- [ ] Copy template structure
- [ ] Replace all `[brackets]` with actual content
- [ ] Choose semantic colors for tech badges
- [ ] Prepare 40x40 thumbnail image
- [ ] Write 3 problems and 3 solutions that match
- [ ] Gather 4 impact metrics
- [ ] Get a testimonial quote if possible
- [ ] Ensure all sections flow narratively
- [ ] Test hover states and responsive behavior
- [ ] Add to portfolio homepage

---

## Maintenance

**Last Updated:** January 2026
**Template Version:** 1.0
**Applies To:** Development/Engineering projects only

For questions or template updates, refer to the implemented examples in `/src/pages/projects/`.
