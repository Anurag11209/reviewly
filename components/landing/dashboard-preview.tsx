import Image from "next/image"
import { Check } from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="py-20" id="how-it-works">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative rounded-xl border bg-background p-2 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Reviewly dashboard"
                className="rounded border bg-muted"
              />
              <div className="absolute -top-4 -right-4 rounded-lg border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-xl font-bold text-primary">247</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Reviews collected</div>
                    <div className="text-xs text-muted-foreground">This month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful dashboard to manage all your reviews</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our intuitive dashboard gives you complete control over your review collection and management process.
            </p>
            <ul className="space-y-4">
              <FeatureListItem text="Create custom review collection forms in minutes" />
              <FeatureListItem text="Filter and moderate reviews before publishing" />
              <FeatureListItem text="Analyze review sentiment and trends" />
              <FeatureListItem text="Export reviews to use in marketing materials" />
              <FeatureListItem text="Respond to reviews directly from the dashboard" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureListItem({ text }) {
  return (
    <li className="flex items-start gap-3">
      <div className="rounded-full bg-primary/10 p-1">
        <Check className="h-5 w-5 text-primary" />
      </div>
      <span>{text}</span>
    </li>
  )
}

