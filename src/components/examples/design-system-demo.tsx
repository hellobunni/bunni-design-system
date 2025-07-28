"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "@/lib/motion"
import { fadeIn, staggerContainer, staggerItem } from "@/lib/motion"
import { LucideHeart, LucideStar, LucideZap, LucideArrowRight } from "lucide-react"

export function DesignSystemDemo() {
  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div 
          className="text-center space-y-4"
          variants={staggerItem}
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-periwinkle-600 to-periwinkle-800 bg-clip-text text-transparent">
            Bunni Design System
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive design system built with Tailwind CSS, shadcn/ui, and Motion for beautiful, accessible, and animated components.
          </p>
        </motion.div>

        {/* Buttons Section */}
        <motion.section 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl font-semibold text-gray-900" variants={staggerItem}>
            Buttons
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerItem}>
            <Card variant="bunni-primary">
              <CardHeader>
                <CardTitle>Primary Variants</CardTitle>
                <CardDescription>Custom Bunni brand buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="bunni-primary" size="sm">
                    Primary
                  </Button>
                  <Button variant="bunni-secondary" size="sm">
                    Secondary
                  </Button>
                  <Button variant="bunni-ghost" size="sm">
                    Ghost
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="bunni-outline" size="sm">
                    Outline
                  </Button>
                  <Button variant="bunni-gradient" size="sm">
                    Gradient
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Standard Variants</CardTitle>
                <CardDescription>Default shadcn/ui buttons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" size="sm">
                    Default
                  </Button>
                  <Button variant="destructive" size="sm">
                    Destructive
                  </Button>
                  <Button variant="outline" size="sm">
                    Outline
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">
                    Secondary
                  </Button>
                  <Button variant="ghost" size="sm">
                    Ghost
                  </Button>
                  <Button variant="link" size="sm">
                    Link
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sizes & States</CardTitle>
                <CardDescription>Different sizes and loading states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="bunni-primary" size="xs">
                    XS
                  </Button>
                  <Button variant="bunni-primary" size="sm">
                    Small
                  </Button>
                  <Button variant="bunni-primary" size="default">
                    Default
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button variant="bunni-primary" size="lg">
                    Large
                  </Button>
                  <Button variant="bunni-primary" size="xl">
                    XL
                  </Button>
                  <Button variant="bunni-primary" loading>
                    Loading
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Cards Section */}
        <motion.section 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl font-semibold text-gray-900" variants={staggerItem}>
            Cards
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={staggerItem}>
            <Card variant="bunni-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideHeart className="h-5 w-5 text-periwinkle-600" />
                  Primary Card
                </CardTitle>
                <CardDescription>
                  Beautiful gradient background with periwinkle accents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  This card showcases our primary brand styling with subtle gradients and hover effects.
                </p>
              </CardContent>
            </Card>

            <Card variant="bunni-secondary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideStar className="h-5 w-5 text-periwinkle-700" />
                  Secondary Card
                </CardTitle>
                <CardDescription>
                  Solid background with brand colors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">
                  A more prominent card variant that draws attention with its solid background.
                </p>
              </CardContent>
            </Card>

            <Card variant="bunni-glass">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideZap className="h-5 w-5 text-periwinkle-600" />
                  Glass Card
                </CardTitle>
                <CardDescription>
                  Modern glassmorphism effect
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Features a beautiful backdrop blur effect for modern UI designs.
                </p>
              </CardContent>
            </Card>

            <Card variant="bunni-dark">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LucideArrowRight className="h-5 w-5 text-white" />
                  Dark Card
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Dark theme variant
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Perfect for dark mode interfaces or high-contrast designs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Motion Examples */}
        <motion.section 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl font-semibold text-gray-900" variants={staggerItem}>
            Motion & Animations
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={staggerItem}>
            <Card>
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>Hover and focus animations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4">
                  <Button variant="bunni-primary" size="lg">
                    Hover Me
                  </Button>
                  <Button variant="bunni-gradient" size="lg">
                    Scale Effect
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  All buttons have subtle hover and active states with smooth transitions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Page Transitions</CardTitle>
                <CardDescription>Staggered animations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  This entire page uses staggered animations for a polished feel.
                </p>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-periwinkle-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-periwinkle-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }} />
                  <div className="w-3 h-3 bg-periwinkle-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Design Tokens */}
        <motion.section 
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="text-3xl font-semibold text-gray-900" variants={staggerItem}>
            Design Tokens
          </motion.h2>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={staggerItem}>
            <Card>
              <CardHeader>
                <CardTitle>Colors</CardTitle>
                <CardDescription>Brand color palette</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-periwinkle-500 rounded" />
                  <span className="text-sm">Periwinkle 500</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-periwinkle-100 rounded" />
                  <span className="text-sm">Periwinkle 100</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-periwinkle-700 rounded" />
                  <span className="text-sm">Periwinkle 700</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Spacing</CardTitle>
                <CardDescription>Consistent spacing scale</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '0.25rem' }} />
                  <span className="text-sm">xs (4px)</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '1rem' }} />
                  <span className="text-sm">md (16px)</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded" style={{ width: '2rem' }} />
                  <span className="text-sm">xl (32px)</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>Font scale and weights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1">
                  <h4 className="text-2xl font-semibold">Heading</h4>
                  <p className="text-sm text-gray-600">text-2xl font-semibold</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base">Body Text</p>
                  <p className="text-sm text-gray-600">text-base</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm">Small Text</p>
                  <p className="text-sm text-gray-600">text-sm</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>
      </div>
    </motion.div>
  )
} 