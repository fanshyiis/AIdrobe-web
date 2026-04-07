"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown } from "lucide-react"
import Image from "next/image"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Experience basic features and start your smart styling journey",
    features: [
      "Up to 5 items in wardrobe",
      "Create 1 AI model",
      "3 AI try-on credits",
      "Basic image enhancement",
      "Browse Discover content"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Pro",
    price: "$99.99",
    period: "/year",
    originalPrice: "$119.88",
    discount: "17% OFF",
    description: "Unlock all features and explore endless styling possibilities",
    features: [
      "Unlimited wardrobe items",
      "Unlimited AI models",
      "Unlimited AI try-ons",
      "Advanced image processing & background removal",
      "Priority processing queue",
      "Dedicated customer support"
    ],
    cta: "Upgrade to Pro",
    popular: true
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade anytime to unlock more amazing features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? "bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground shadow-2xl scale-105"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                    <Crown className="w-4 h-4" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-primary-foreground/50 line-through">{plan.originalPrice}/year</span>
                    <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                      {plan.discount}
                    </span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.popular ? "bg-accent/20" : "bg-accent/10"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-accent" : "text-accent"}`} />
                    </div>
                    <span className={plan.popular ? "" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full h-12 rounded-full text-base font-medium ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Pro Screenshot */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-64 md:w-72 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-foreground/10 bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20-%202026-04-07%20at%2010.15.21-BpvgsCrv9OAILr6RfkCIAr9OrtTGhz.png"
                alt="Pro subscription page"
                width={300}
                height={650}
                className="w-full"
              />
            </div>
            <div className="absolute -left-8 top-1/4 hidden md:flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-lg border border-border">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Unlimited AI Try-On</span>
            </div>
            <div className="absolute -right-8 bottom-1/3 hidden md:flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-lg border border-border">
              <Crown className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium text-foreground">Pro Exclusive Features</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
