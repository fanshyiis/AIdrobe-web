"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is Awardrobe?",
    answer: "Awardrobe is a smart wardrobe management app that helps you digitize your clothes, create outfit combinations, and use AI technology for virtual try-on. It connects 'individual items → complete outfits → on-body looks' into a seamless experience."
  },
  {
    question: "How does AI virtual try-on work?",
    answer: "First, upload a photo of yourself, and AI will generate a standardized digital model. Then you can combine any outfit with the model to generate HD virtual try-on images, previewing how clothes actually look when worn."
  },
  {
    question: "What are the limitations of the free version?",
    answer: "The free version allows you to save up to 5 items in your wardrobe, create 1 AI model, and enjoy 3 AI try-on credits. You can still browse the Discover page and create outfit combinations with basic features."
  },
  {
    question: "What does Pro subscription include?",
    answer: "Pro subscription unlocks unlimited wardrobe items, unlimited AI models, unlimited AI try-ons, and advanced image processing features. The annual plan saves 17%, at just $99.99/year."
  },
  {
    question: "Is my photo data safe?",
    answer: "We take user privacy very seriously. All photo data is encrypted for storage, and AI processing is done on secure servers. We will not use your personal photos for any other purpose or share them with third parties."
  },
  {
    question: "What devices are supported?",
    answer: "Awardrobe currently supports iOS devices (iPhone and iPad). We are actively developing the Android version, so stay tuned."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription at any time in the App Store subscription management. After cancellation, you can continue to use Pro features until the end of your current subscription period. It will automatically switch to the free version when expired."
  },
  {
    question: "How do I contact customer support?",
    answer: "Pro users have dedicated customer support. You can contact us through the 'Help & Feedback' feature in the app, or send an email to awardrobe@163.com. We typically respond within 24 hours."
  }
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We have answers.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-lg transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
