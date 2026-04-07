"use client"

import { Shirt, Sparkles, Palette, Calendar, Users, Wand2, Star } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Shirt,
    title: "Smart Wardrobe Management",
    description: "Take photos or import from gallery. AI automatically removes backgrounds, identifies categories and colors to build your digital closet.",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Palette,
    title: "Style Creation",
    description: "Freely combine multiple items on a canvas, create your own outfit combinations, save drafts or publish to share.",
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: Wand2,
    title: "AI Virtual Try-On",
    description: "Upload a photo to generate an AI model, combine outfits with your model to preview how they look on you.",
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Users,
    title: "Discover Inspiration",
    description: "Browse public outfit posts from others, filter by occasion, season, or style to get unlimited styling inspiration.",
    color: "bg-amber-100 text-amber-600"
  },
  {
    icon: Calendar,
    title: "Outfit Calendar",
    description: "Plan your outfits for each day with calendar view at a glance. Plan ahead so mornings are stress-free.",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    icon: Star,
    title: "AI Outfit Scoring",
    description: "Get instant AI feedback on your outfits with multi-dimensional scoring on color harmony, silhouette, occasion fit, and overall style.",
    color: "bg-yellow-100 text-yellow-600"
  },
  {
    icon: Sparkles,
    title: "AI Image Processing",
    description: "One-click photo enhancement and smart background removal to make your wardrobe look more polished and professional.",
    color: "bg-indigo-100 text-indigo-600"
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            All-in-One Smart Styling Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From item management to complete outfits, from style creation to virtual try-on, Awardrobe creates a complete fashion loop for you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm mb-4">
              <Sparkles className="w-4 h-4" />
              Core Feature
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Try-On, Instant Style Icon
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With just one photo, AI can generate your personal digital model. Combine any outfit with your model to instantly preview how it looks on you.
              Say goodbye to fitting rooms and explore your style possibilities on your phone.
            </p>
            <ul className="space-y-3">
              {[
                "Upload a photo to auto-generate a standardized model",
                "Try on public styles or private outfits",
                "HD rendering for realistic results",
                "Try-on history for easy review"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.15.27-Dj9hNn7BkDi5Nx3yoqU8LeLcNH6vHG.png"
                  alt="AI tools interface"
                  width={300}
                  height={650}
                  className="w-full"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-48 md:w-56 rounded-[2rem] overflow-hidden shadow-xl border-4 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.15.37-3x4JmdABxZlrviveGHIVtR4LQRqZct.png"
                  alt="Create AI model"
                  width={200}
                  height={433}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI Scoring Highlight */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2015.11.40-zcQHPCmSzgv7OjsvxftRC7ePBYVZrU.png"
                  alt="AI Outfit Scoring"
                  width={300}
                  height={650}
                  className="w-full"
                />
              </div>
              {/* Score badge */}
              <div className="absolute -right-4 top-1/3 bg-card rounded-2xl shadow-xl p-4 border border-border">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Overall Score</div>
                  <div className="text-4xl font-bold text-accent">76</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm mb-4">
              <Star className="w-4 h-4" />
              New Feature
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI Outfit Scoring
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Get professional-level feedback on your outfits instantly. Our AI analyzes color harmony, silhouette balance, occasion appropriateness, and overall style coherence to give you actionable insights.
            </p>
            <ul className="space-y-3">
              {[
                "Multi-dimensional scoring with detailed breakdown",
                "Natural language summary and suggestions",
                "Score your try-on results with one tap",
                "Track your style improvement over time"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-yellow-600" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
