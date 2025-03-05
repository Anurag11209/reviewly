import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  return (
    <section className="py-20 bg-muted/30" id="pricing">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your business
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Starter"
            price="$29"
            description="Perfect for small businesses just getting started with reviews"
            features={[
              "50 reviews per month",
              "Text testimonials",
              "Basic review wall",
              "Email support",
              "1 team member",
            ]}
            buttonText="Start free trial"
            buttonVariant="outline"
          />
          <PricingCard
            title="Professional"
            price="$79"
            description="Ideal for growing businesses looking to scale their review collection"
            features={[
              "250 reviews per month",
              "Text & video testimonials",
              "Advanced review wall",
              "Analytics dashboard",
              "Priority support",
              "5 team members",
            ]}
            buttonText="Start free trial"
            buttonVariant="default"
            highlighted={true}
          />
          <PricingCard
            title="Enterprise"
            price="$199"
            description="For large organizations with advanced needs"
            features={[
              "Unlimited reviews",
              "All testimonial types",
              "Custom branding",
              "Advanced analytics",
              "Dedicated support",
              "Unlimited team members",
              "API access",
            ]}
            buttonText="Contact sales"
            buttonVariant="outline"
          />
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, description, features, buttonText, buttonVariant, highlighted = false }) {
  return (
    <div
      className={`rounded-xl border ${highlighted ? "border-primary shadow-lg scale-105" : "border-border"} bg-background p-6`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={buttonVariant} className="w-full">
        {buttonText}
      </Button>
    </div>
  )
}

