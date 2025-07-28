# Bunni Design System 🎨

A comprehensive design system built with **Next.js**, **Tailwind CSS v4**, **shadcn/ui**, and **Motion** for beautiful, accessible, and animated components.

## ✨ Features

- **🎯 Tailwind-first**: Comprehensive design tokens, spacing, and responsive control
- **🎨 shadcn/ui**: Base components you own & theme with custom Bunni variants
- **🎬 Motion**: Smooth animations for modals, toasts, and interactive elements
- **🎨 Design Tokens**: Centralized in `/styles/globals.css` with CSS variables
- **🏷️ Brand System**: Custom classNames, variants, and themes
- **♿ Accessible**: Built with accessibility in mind
- **📱 Responsive**: Mobile-first responsive design
- **🌙 Dark Mode**: Built-in dark mode support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bunni-design-system

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your design system in action!

## 🏗️ Architecture

### Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 15** | React framework with App Router |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **shadcn/ui** | Base component library |
| **Motion** | Animation library |
| **TypeScript** | Type safety |
| **Storybook** | Component documentation |

### File Structure

```
src/
├── app/
│   ├── styles/
│   │   └── globals.css          # Design tokens & global styles
│   └── page.tsx                 # Main demo page
├── components/
│   ├── ui/                      # Base components
│   │   ├── button.tsx          # Button with custom variants
│   │   └── card.tsx            # Card component
│   ├── providers/
│   │   └── theme-provider.tsx   # Theme provider
│   └── examples/
│       └── design-system-demo.tsx # Demo showcase
└── lib/
    ├── utils.ts                 # Utility functions
    └── motion.ts               # Animation variants
```

## 🎨 Design Tokens

### Colors

Our color system is built around the **Periwinkle** brand color:

```css
/* Primary Brand Colors */
--periwinkle-100: #e4e4ff
--periwinkle-300: #c1c1f7
--periwinkle-500: #9e9ee6  /* Primary */
--periwinkle-700: #7c7ccf

/* Status Colors */
--warning-500: #facc15
--danger-500: #ef4444
--success-500: #22c55e
--info-500: #3b82f6
```

### Spacing

Consistent 4px base unit system:

```css
xs: 0.25rem  /* 4px */
sm: 0.5rem   /* 8px */
md: 1rem     /* 16px */
lg: 1.5rem   /* 24px */
xl: 2rem     /* 32px */
2xl: 3rem    /* 48px */
```

### Typography

```css
text-xs: 0.75rem
text-sm: 0.875rem
text-base: 1rem
text-lg: 1.125rem
text-xl: 1.25rem
text-2xl: 1.5rem
text-3xl: 1.875rem
text-4xl: 2.25rem
```

## 🧩 Components

### Button

Custom Bunni variants with motion integration:

```tsx
import { Button } from "@/components/ui/button"

// Bunni variants
<Button variant="bunni-primary">Primary</Button>
<Button variant="bunni-secondary">Secondary</Button>
<Button variant="bunni-ghost">Ghost</Button>
<Button variant="bunni-outline">Outline</Button>
<Button variant="bunni-gradient">Gradient</Button>

// Sizes
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
```

### Card

Multiple variants with hover effects:

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// Variants
<Card variant="bunni-primary">Primary Card</Card>
<Card variant="bunni-secondary">Secondary Card</Card>
<Card variant="bunni-glass">Glass Card</Card>
<Card variant="bunni-dark">Dark Card</Card>

// Structure
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

## 🎬 Motion & Animations

### Animation Variants

```tsx
import { motion } from "@/lib/motion"
import { fadeIn, slideUp, scaleIn } from "@/lib/motion"

// Basic animations
<motion.div variants={fadeIn}>Fade In</motion.div>
<motion.div variants={slideUp}>Slide Up</motion.div>
<motion.div variants={scaleIn}>Scale In</motion.div>

// Staggered animations
<motion.div variants={staggerContainer}>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
</motion.div>
```

### Animation Presets

```tsx
import { animationPresets } from "@/lib/motion"

// Quick fade for content
<motion.div {...animationPresets.quickFade}>Content</motion.div>

// Smooth slide for cards
<motion.div {...animationPresets.cardSlide}>Card</motion.div>

// Bounce for notifications
<motion.div {...animationPresets.notificationBounce}>Notification</motion.div>
```

## 🎨 Customization

### Adding New Variants

1. **Update the component variants** in the component file:

```tsx
const buttonVariants = cva(
  "base-classes",
  {
    variants: {
      variant: {
        // Add your new variant
        "bunni-new": "bg-new-color text-white",
      },
    },
  }
)
```

2. **Add corresponding CSS variables** in `globals.css`:

```css
:root {
  --new-color: #your-color;
}
```

3. **Update Tailwind config** if needed:

```ts
colors: {
  'new': {
    500: 'var(--new-color)',
  },
}
```

### Adding New Components

1. Create the component in `src/components/ui/`
2. Use the `cn()` utility for class merging
3. Export variants for reuse
4. Add to the demo page

## 📚 Storybook

Document your components with Storybook:

```bash
# Start Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

- [ ] Add more base components (Input, Select, Modal, etc.)
- [ ] Create component documentation site
- [ ] Add more animation presets
- [ ] Implement design token generator
- [ ] Add Figma plugin for design tokens
- [ ] Create component playground

---

Built with ❤️ by the Bunni team
