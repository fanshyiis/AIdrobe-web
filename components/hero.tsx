"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-background to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Smart Styling Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 text-balance">
            Your Closet in Your Pocket
            <br />
            <span className="text-accent">Style with AI</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Awardrobe helps you digitize your wardrobe, create outfit combinations, and virtually try them on with AI. Get inspired every day.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-lg">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download on App Store
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-border">
              Learn More
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="mt-16 md:mt-24 relative">
          <div className="flex justify-center items-end gap-4 md:gap-8">
            {/* Left Phone */}
            <div className="hidden md:block w-52 lg:w-64 transform -rotate-6 translate-y-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.14.41-vfkWnLGkb5BFmasCKmPar1fBVo0qU0.png"
                  alt="Wardrobe interface"
                  width={300}
                  height={650}
                  className="w-full"
                />
              </div>
            </div>

            {/* Center Phone */}
            <div className="w-64 md:w-72 lg:w-80 z-10">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2015.11.29-tCD7EbJRq56jPEexmC8KxqTRu5cn0p.png"
                  alt="Discover page"
                  width={300}
                  height={650}
                  className="w-full"
                />
              </div>
            </div>

            {/* Right Phone */}
            <div className="hidden md:block w-52 lg:w-64 transform rotate-6 translate-y-8">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2015.11.22-pV9bjZd2RbXXBR0utEDpDnP7uyqlqt.png"
                  alt="Profile page"
                  width={300}
                  height={650}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
