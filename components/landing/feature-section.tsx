import { Video, MessageSquare, Users, BarChart, Globe, Zap } from "lucide-react"

export function FeatureSection() {
  return (
    <section className="py-20" id="features">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to collect powerful reviews</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Reviewly provides all the tools you need to collect, manage, and showcase authentic customer reviews.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Video className="h-10 w-10 text-primary" />}
            title="Video Reviews"
            description="Collect authentic video testimonials from your customers with our easy-to-use recording tool."
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10 text-primary" />}
            title="Text Reviews"
            description="Gather written feedback with customizable forms that match your brand's look and feel."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10 text-primary" />}
            title="Review Wall"
            description="Display your best reviews on your website with our customizable review wall widget."
          />
          <FeatureCard
            icon={<BarChart className="h-10 w-10 text-primary" />}
            title="Analytics"
            description="Track performance with detailed analytics on review collection, engagement, and conversion."
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10 text-primary" />}
            title="Integrations"
            description="Connect with your favorite tools including Zapier, Slack, and major CRM platforms."
          />
          <FeatureCard
            icon={<Zap className="h-10 w-10 text-primary" />}
            title="Automation"
            description="Set up automated review requests triggered by customer actions or scheduled campaigns."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-start p-6 bg-muted/50 rounded-xl hover:bg-muted/80 transition-colors">
      <div className="mb-4 rounded-lg bg-background p-2 shadow-sm">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

