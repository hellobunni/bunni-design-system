import { SimpleBadge } from '@/stories/badges/simplebadge/SimpleBadge'
import { Button } from '@/stories/button/button'
import { Badge, Phone, MoveRight } from 'lucide-react'
import React from 'react'

const GroupHero = () => {
  return (
    <section 
      className="w-full py-20 lg:py-40 px-12 lg:px-6 max-w-7xl mx-auto"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch h-full min-h-[400px]">
          {/* Main content area */}
          <div className="flex flex-col gap-4">
            {/* Status badge */}
            <SimpleBadge variant="outline" aria-label="Status: We're live!">
              We're live!
            </SimpleBadge>
            
            {/* Main heading */}
            <h1 
              id="hero-heading"
              className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular"
            >
              This is the start of something!
            </h1>
            
            {/* Description */}
            <p className="text-lg text-gray-500 leading-relaxed tracking-tight max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
            
            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Call to action buttons">
              <Button 
                size="lg" 
                className="gap-4" 
                variant="outline"
                aria-label="Jump on a call with our team"
              >
                Jump on a call 
                <Phone className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button 
                size="lg" 
                className="gap-4"
                aria-label="Sign up for our service"
              >
                Sign up here 
                <MoveRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Visual placeholder area */}
          <div 
            className="grid grid-cols-2 gap-8"
            aria-label="Visual content area"
            role="img"
            aria-hidden="true"
          >
            <div className="bg-primary/30 rounded-md aspect-square" />
            <div className="bg-primary/30 rounded-md row-span-2" />
            <div className="bg-primary/30 rounded-md aspect-square" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GroupHero