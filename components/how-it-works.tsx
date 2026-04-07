"use client"

import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Add Clothes",
    description: "Take a photo or select from gallery. AI auto-enhances, removes backgrounds, and identifies categories and tags.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.14.41-vfkWnLGkb5BFmasCKmPar1fBVo0qU0.png"
  },
  {
    number: "02",
    title: "Create Outfits",
    description: "Freely combine clothes on canvas, adjust positions and layers to create your unique outfit combinations.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.14.58-CvDxAM7Z92HPVP9GolxGYkwTGLRIEJ.png"
  },
  {
    number: "03",
    title: "Manage Styles",
    description: "Save outfits as Styles, add tags for categorization, support drafts and public publishing.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.15.11-XyHrgfLt3TTp1q5xWKTOTq96vqTv2b.png"
  },
  {
    number: "04",
    title: "AI Try-On",
    description: "Create an AI model, select any outfit for virtual try-on, and preview how it looks on you.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.15.27-Dj9hNn7BkDi5Nx3yoqU8LeLcNH6vHG.png"
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Four Simple Steps to Smart Styling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From adding clothes to virtual try-on, Awardrobe makes everything simple and intuitive.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/3 -right-4 w-8 border-t-2 border-dashed border-border" />
              )}
              
              <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                {/* Step Number */}
                <div className="text-5xl font-bold text-accent/20 mb-4">
                  {step.number}
                </div>
                
                {/* Phone Screenshot */}
                <div className="mb-6 flex justify-center">
                  <div className="w-32 rounded-2xl overflow-hidden shadow-lg border-4 border-foreground/10 bg-card">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={150}
                      height={325}
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
