import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm">
              <span className="font-medium">New feature:</span>
              <span className="ml-2 text-muted-foreground">Video testimonials are here!</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Collect customer reviews with <span className="text-primary">ease</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Gathering reviews is challenging, we get it! That's why we built Reviewly. Collect text and video reviews
              from your customers in minutes, no coding required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Button size="lg" className="h-12 px-6" asChild>
                <Link href="/signup">Try for free</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6">
                See how it works
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Get started with free credits. No credit card required.</div>
          </div>
          <div className="relative">
            <div className="relative rounded-lg border bg-background p-2 shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Reviewly dashboard preview"
                className="rounded border bg-muted"
              />
              <div className="absolute -bottom-4 -left-4 rounded-lg border bg-background p-4 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <span className="text-xl font-bold text-primary">98%</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Response rate</div>
                    <div className="text-xs text-muted-foreground">Higher than industry average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-muted to-transparent" />
    </section>
  )
}

