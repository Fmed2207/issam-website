# Roline Component Library Design Specification

## Executive Summary

This document defines the architecture, patterns, and interfaces for the Roline Smart Hydroponics component library built on React 18, TypeScript, Tailwind CSS, and shadcn/ui primitives.

---

## 1. Architecture Overview

### 1.1 Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Framework | React 18.3.1 | UI rendering with concurrent features |
| Type System | TypeScript 5.9.2 | Static type checking |
| Styling | Tailwind CSS 3.4.17 | Utility-first CSS |
| Primitives | Radix UI | Accessible, unstyled components |
| Variants | CVA (class-variance-authority) | Type-safe variant management |
| Utilities | clsx + tailwind-merge | Class name composition |

### 1.2 Design Principles

1. **Composition over Inheritance** - Build complex components from simple primitives
2. **Accessibility First** - All components meet WCAG 2.1 AA standards
3. **Type Safety** - Full TypeScript coverage with strict mode
4. **Dark Mode Native** - All components support light/dark themes
5. **Mobile First** - Responsive by default with xs-3xl breakpoints
6. **Animation Ready** - Built-in animation hooks and reduced motion support

---

## 2. Component Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│                    APPLICATION LAYER                         │
│  (App.tsx, Pages, Route Components)                         │
├─────────────────────────────────────────────────────────────┤
│                    LAYOUT COMPONENTS                         │
│  Header, Footer, PageHero, Sidebar, Container               │
├─────────────────────────────────────────────────────────────┤
│                    SECTION COMPONENTS                        │
│  SectionTitle, StatsSection, CTASection, ServiceCard        │
├─────────────────────────────────────────────────────────────┤
│                    COMPOSITE COMPONENTS                      │
│  VideoModal, FloatingButtons, NavigationMenu, Form          │
├─────────────────────────────────────────────────────────────┤
│                    BASE UI COMPONENTS                        │
│  Button, Card, Input, Badge, Dialog, Tabs, etc.             │
├─────────────────────────────────────────────────────────────┤
│                    PRIMITIVES (Radix UI)                     │
│  Slot, Portal, FocusScope, VisuallyHidden, etc.            │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Component Categories

### 3.1 Primitives (Base UI - `/components/ui/`)

These are the foundational building blocks from shadcn/ui.

| Component | Status | Description |
|-----------|--------|-------------|
| Button | ✅ Complete | Multi-variant button with icon support |
| Card | ✅ Complete | Container with header, content, footer |
| Input | ✅ Complete | Text input with validation states |
| Badge | ✅ Complete | Status indicator labels |
| Dialog | ✅ Complete | Modal dialogs with focus trap |
| Tabs | ✅ Complete | Tabbed navigation |
| Select | ✅ Complete | Dropdown selection |
| Checkbox | ✅ Complete | Toggle selection |
| Switch | ✅ Complete | Binary toggle |
| Tooltip | ✅ Complete | Hover information |
| Toast | ✅ Complete | Notification system |
| Accordion | ✅ Complete | Collapsible sections |
| Avatar | ✅ Complete | User/entity images |
| Carousel | ✅ Complete | Image/content slider |
| Progress | ✅ Complete | Progress indicators |

### 3.2 Layout Components (`/components/`)

| Component | Status | Description |
|-----------|--------|-------------|
| Header | ✅ Complete | Main navigation with mobile menu |
| Footer | ✅ Complete | Site footer with links |
| Logo | ✅ Complete | Brand logo variants |
| PageHero | ✅ Complete | Page header sections |
| ThemeProvider | ✅ Complete | Theme context management |

### 3.3 Section Components (`/components/`)

| Component | Status | Description |
|-----------|--------|-------------|
| SectionTitle | ✅ Complete | Reusable section headers |
| ServiceCard | ✅ Complete | Service showcase cards |
| StatsSection | ✅ Complete | Statistics display |
| CTASection | ✅ Complete | Call-to-action blocks |
| VideoCard | ✅ Complete | Video preview cards |

### 3.4 Proposed New Components

| Component | Priority | Description |
|-----------|----------|-------------|
| **FeatureCard** | High | Highlight features with icon, title, description |
| **TestimonialCard** | High | Customer testimonials with avatar |
| **PricingCard** | Medium | Pricing tier display |
| **TimelineItem** | Medium | Process/history timeline |
| **TeamMemberCard** | Medium | Team member profiles |
| **BlogPostCard** | High | Blog article previews |
| **ProjectCard** | High | Portfolio project cards |
| **FAQItem** | Medium | FAQ accordion items |
| **MetricCard** | Medium | KPI/metric display |
| **NewsletterForm** | High | Email subscription component |
| **ContactForm** | High | Contact form with validation |
| **SocialLinks** | Low | Social media link group |
| **Breadcrumbs** | Medium | Navigation breadcrumbs |
| **EmptyState** | Medium | No content placeholders |
| **LoadingSpinner** | High | Loading indicators |
| **ErrorBoundary** | High | Error handling wrapper |

---

## 4. Component Interface Specifications

### 4.1 Button Component

```typescript
// Existing implementation - well structured
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// Variants
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
```

**Recommended Enhancements:**
```typescript
interface ButtonProps {
  // Add loading state
  loading?: boolean;
  loadingText?: string;

  // Add icon support
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;

  // Add full width option
  fullWidth?: boolean;
}
```

### 4.2 Card Component (Enhanced)

```typescript
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'glass' | 'interactive';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

interface CardHeaderProps {
  action?: React.ReactNode;  // Header action button/menu
}
```

### 4.3 FeatureCard (New)

```typescript
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  badge?: string;
  variant?: 'default' | 'highlighted' | 'compact';
}
```

### 4.4 SectionTitle (Enhanced)

```typescript
interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  // New props
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  action?: React.ReactNode;
}
```

### 4.5 ServiceCard (Enhanced)

```typescript
interface ServiceCardProps {
  icon: string | React.ReactNode;  // Support both emoji and React icons
  title: string;
  description: string;
  features?: string[];
  // New props
  href?: string;
  cta?: {
    label: string;
    onClick?: () => void;
  };
  variant?: 'default' | 'horizontal' | 'compact';
  highlighted?: boolean;
}
```

### 4.6 TestimonialCard (New)

```typescript
interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    role?: string;
    company?: string;
    avatar?: string;
  };
  rating?: number;  // 1-5 stars
  variant?: 'default' | 'featured' | 'compact';
}
```

### 4.7 BlogPostCard (New)

```typescript
interface BlogPostCardProps {
  title: string;
  excerpt: string;
  image?: string;
  category?: string;
  author?: {
    name: string;
    avatar?: string;
  };
  date: string | Date;
  readTime?: string;
  href: string;
  variant?: 'default' | 'horizontal' | 'featured';
}
```

### 4.8 ProjectCard (New)

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  client?: string;
  location?: string;
  href?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}
```

### 4.9 MetricCard (New)

```typescript
interface MetricCardProps {
  label: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: React.ReactNode;
  description?: string;
}
```

### 4.10 ContactForm (New)

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  fields?: ('name' | 'email' | 'phone' | 'company' | 'subject' | 'message')[];
  submitLabel?: string;
  variant?: 'default' | 'compact' | 'inline';
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
}
```

---

## 5. Design Tokens

### 5.1 Color System

```css
/* Primary: Teal/Green - Brand Identity */
--primary: 162 63% 24%;        /* #1F7A5C - Main brand color */
--primary-foreground: 0 0% 100%;

/* Secondary: Orange/Gold - Accent */
--secondary: 36 60% 50%;       /* #CC8833 - CTA, highlights */
--secondary-foreground: 0 0% 100%;

/* Semantic Colors */
--destructive: 0 84.2% 60.2%;  /* Error states */
--muted: 210 20% 96%;          /* Subtle backgrounds */

/* Roline Brand Extensions */
--roline-primary: 162 63% 24%;
--roline-secondary: 36 60% 50%;
--roline-light: 162 40% 96%;
--roline-dark: 162 63% 12%;
```

### 5.2 Typography Scale

```css
/* Font Families */
--font-sans: 'Inter', sans-serif;
--font-display: 'Plus Jakarta Sans', sans-serif;

/* Display Sizes */
--display-2xl: 4.5rem;   /* 72px - Hero headlines */
--display-xl: 3.75rem;   /* 60px - Page titles */
--display-lg: 3rem;      /* 48px - Section titles */
--display-md: 2.25rem;   /* 36px - Subsections */
--display-sm: 1.875rem;  /* 30px - Card titles */
```

### 5.3 Spacing System

```css
/* Base: 4px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

### 5.4 Shadow System

```css
/* Elevation Levels */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
--shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.1);

/* Soft Shadows (Custom) */
--shadow-soft: 0 2px 8px rgba(0,0,0,0.08);
--shadow-soft-lg: 0 4px 16px rgba(0,0,0,0.1);
--shadow-glow: 0 0 20px rgba(31,122,92,0.15);
```

---

## 6. Animation System

### 6.1 Core Animations

| Animation | Duration | Easing | Use Case |
|-----------|----------|--------|----------|
| `fadeIn` | 600ms | ease-out | Content reveal |
| `slideUp` | 600ms | ease-out | List items, cards |
| `slideDown` | 600ms | ease-out | Dropdown menus |
| `scaleIn` | 500ms | ease-out | Modals, popovers |
| `float` | 6s | ease-in-out | Decorative elements |
| `shimmer` | infinite | linear | Loading states |

### 6.2 Scroll Animations

```css
/* Usage: Add class + .is-visible when in viewport */
.animate-on-scroll { transform: translateY(30px); opacity: 0; }
.animate-on-scroll-left { transform: translateX(-30px); opacity: 0; }
.animate-on-scroll-right { transform: translateX(30px); opacity: 0; }
.animate-on-scroll-scale { transform: scale(0.95); opacity: 0; }
```

### 6.3 Stagger Animation

```tsx
// Apply to parent container
<div className="stagger-children">
  <Card /> {/* delay: 100ms */}
  <Card /> {/* delay: 200ms */}
  <Card /> {/* delay: 300ms */}
</div>
```

---

## 7. Responsive Breakpoints

```css
/* Mobile First Approach */
xs: 475px    /* Large phones */
sm: 640px    /* Small tablets */
md: 768px    /* Tablets */
lg: 1024px   /* Small laptops */
xl: 1280px   /* Desktops */
2xl: 1400px  /* Large screens */
3xl: 1600px  /* Extra large */
```

---

## 8. Accessibility Guidelines

### 8.1 Requirements

- All interactive elements must have visible focus states
- Color contrast ratio minimum 4.5:1 for text
- All images must have alt text
- Form inputs must have associated labels
- Keyboard navigation support for all interactions
- Screen reader announcements for dynamic content

### 8.2 Implementation Patterns

```tsx
// Focus visible styling (already in global.css)
:focus-visible {
  @apply outline-none ring-2 ring-secondary ring-offset-2 ring-offset-background;
}

// Reduced motion support
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}

// Screen reader only text
<span className="sr-only">Description for screen readers</span>
```

---

## 9. Usage Patterns

### 9.1 Component Composition

```tsx
// Preferred: Compose from primitives
<Card className="card-hover">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### 9.2 Variant Selection with CVA

```tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const cardVariants = cva(
  'rounded-xl border transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'bg-card border-border shadow-sm',
        elevated: 'bg-card border-border shadow-lg',
        glass: 'bg-white/80 backdrop-blur-xl border-white/20',
        interactive: 'bg-card border-border hover:shadow-xl hover:-translate-y-1',
      },
      padding: {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);
```

### 9.3 Theme-Aware Styling

```tsx
// Using CSS variables for automatic dark mode
<div className="bg-card text-card-foreground">
  {/* Automatically adapts to light/dark theme */}
</div>

// Explicit dark mode overrides
<div className="bg-white dark:bg-gray-800">
  {/* Manual dark mode styling */}
</div>
```

---

## 10. File Organization

```
client/
├── components/
│   ├── ui/                    # Base primitives (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── layout/                # Layout components (proposed)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── PageHero.tsx
│   ├── sections/              # Section components (proposed)
│   │   ├── SectionTitle.tsx
│   │   ├── ServiceCard.tsx
│   │   └── CTASection.tsx
│   ├── composite/             # Complex components (proposed)
│   │   ├── VideoModal.tsx
│   │   ├── ContactForm.tsx
│   │   └── NewsletterForm.tsx
│   ├── cards/                 # Card variants (proposed)
│   │   ├── FeatureCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── BlogPostCard.tsx
│   │   └── ProjectCard.tsx
│   └── shared/                # Shared utilities (proposed)
│       ├── Logo.tsx
│       ├── ThemeProvider.tsx
│       └── SEO.tsx
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useScrollAnimation.ts
├── lib/
│   └── utils.ts
└── styles/
    └── global.css
```

---

## 11. Implementation Roadmap

### Phase 1: Foundation Enhancement
- [ ] Enhance Button with loading states and icons
- [ ] Add Card variants (glass, interactive)
- [ ] Create LoadingSpinner component
- [ ] Implement ErrorBoundary

### Phase 2: Content Components
- [ ] Build FeatureCard
- [ ] Build TestimonialCard
- [ ] Build BlogPostCard
- [ ] Build ProjectCard
- [ ] Build MetricCard

### Phase 3: Form Components
- [ ] Enhance ContactForm
- [ ] Build NewsletterForm
- [ ] Add form field variants

### Phase 4: Layout Components
- [ ] Build Breadcrumbs
- [ ] Build EmptyState
- [ ] Build TimelineItem
- [ ] Enhance Footer with newsletter integration

### Phase 5: Documentation
- [ ] Component Storybook setup
- [ ] API documentation
- [ ] Usage examples

---

## 12. Quality Checklist

For each new component, verify:

- [ ] TypeScript interfaces defined
- [ ] Default props documented
- [ ] Variants implemented with CVA
- [ ] Dark mode support tested
- [ ] Responsive behavior verified (xs-3xl)
- [ ] Accessibility audit passed
- [ ] Reduced motion support added
- [ ] Animation hooks integrated
- [ ] RTL support considered
- [ ] Unit tests written

---

## Appendix A: Import Conventions

```typescript
// UI primitives from shadcn
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';

// Utility function
import { cn } from '@/lib/utils';

// Icons
import { Icon } from 'lucide-react';

// Animation
import { motion } from 'framer-motion';
```

---

## Appendix B: CSS Class Reference

### Button Classes (Custom)
- `btn-primary` - Primary button with shadow
- `btn-secondary` - Secondary/accent button
- `btn-outline` - Outlined button
- `btn-ghost` - Transparent button
- `btn-shine` - Shine hover effect

### Card Classes (Custom)
- `card-hover` - Hover lift effect
- `card-glass` - Glassmorphism style
- `card-tilt` - 3D tilt on hover

### Animation Classes
- `animate-float` - Floating animation
- `animate-fade-in` - Fade in
- `animate-slide-up` - Slide up reveal
- `animate-on-scroll` - Scroll-triggered fade
- `stagger-children` - Staggered child animations

### Utility Classes
- `text-gradient` - Brand gradient text
- `glass` / `glass-dark` - Glassmorphism
- `section-padding` / `section-padding-sm` - Consistent spacing
- `container-narrow` / `container-wide` - Width constraints
