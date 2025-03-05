import Image from "next/image"
import { Star } from "lucide-react"

export function TestimonialWall() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by thousands of businesses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers are saying about Reviewly
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard
            name="Sarah Johnson"
            company="Acme Inc."
            image="/placeholder.svg?height=100&width=100"
            rating={5}
            text="Reviewly has transformed how we collect customer feedback. The video testimonials have been a game-changer for our marketing efforts."
          />
          <TestimonialCard
            name="Michael Chen"
            company="TechStart"
            image="/placeholder.svg?height=100&width=100"
            rating={5}
            text="The ease of use is incredible. We've increased our review collection rate by 300% since switching to Reviewly."
            featured={true}
          />
          <TestimonialCard
            name="Emma Rodriguez"
            company="Design Studio"
            image="/placeholder.svg?height=100&width=100"
            rating={4}
            text="The customization options are fantastic. Our review wall perfectly matches our brand and has increased conversions on our landing page."
          />
          <TestimonialCard
            name="David Kim"
            company="SaaS Platform"
            image="/placeholder.svg?height=100&width=100"
            rating={5}
            text="The analytics provided by Reviewly have helped us understand which products receive the best feedback and why."
          />
          <TestimonialCard
            name="Lisa Thompson"
            company="E-commerce Shop"
            image="/placeholder.svg?height=100&width=100"
            rating={5}
            text="Integration with our existing tools was seamless. The support team was incredibly helpful throughout the process."
            featured={true}
          />
          <TestimonialCard
            name="James Wilson"
            company="Marketing Agency"
            image="/placeholder.svg?height=100&width=100"
            rating={5}
            text="Our clients love the review collection process. It's simple, non-intrusive, and yields high-quality testimonials."
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, company, image, rating, text, featured = false }) {
  return (
    <div
      className={`p-6 rounded-xl ${featured ? "bg-primary/10 border-primary/20" : "bg-background"} border shadow-sm`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={image || "/placeholder.svg"}
          width={50}
          height={50}
          alt={name}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-muted-foreground">{company}</div>
        </div>
      </div>
      <div className="flex mb-3">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`} />
          ))}
      </div>
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}

