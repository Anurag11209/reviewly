import Link from "next/link"
import { Star, CheckCircle } from "lucide-react"
import { SignUpForm } from "@/components/auth/signup-form"

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-between md:w-1/2 p-8 md:p-12">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Star className="h-6 w-6 fill-primary text-primary" />
            <span className="text-xl font-bold">Reviewly</span>
          </Link>
        </div>
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your information to get started</p>
          </div>
          <SignUpForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Sign in
            </Link>
          </p>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Reviewly. All rights reserved.
        </div>
      </div>

      {/* Right side - Features */}
      <div className="hidden md:block md:w-1/2 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center p-12">
          <div className="max-w-md space-y-8">
            <div className="space-y-2 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-6 w-6 fill-primary text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Start collecting reviews today</h2>
              <p className="text-muted-foreground">
                Join thousands of businesses using Reviewly to boost conversions with authentic customer reviews.
              </p>
            </div>

            <div className="space-y-4">
              <FeatureItem
                title="Collect video & text reviews"
                description="Gather authentic testimonials in multiple formats"
              />
              <FeatureItem title="Customizable review forms" description="Match your brand's look and feel" />
              <FeatureItem title="Embed reviews anywhere" description="Add social proof to any page on your site" />
              <FeatureItem title="Detailed analytics" description="Track performance and conversion impact" />
            </div>

            <div className="rounded-lg border bg-background/80 backdrop-blur-sm p-4 text-center">
              <p className="text-sm font-medium">
                "We've collected over 500 reviews in just two months using Reviewly!"
              </p>
              <div className="mt-2 text-xs text-muted-foreground">Average customer result</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ title, description }) {
  return (
    <div className="flex items-start gap-3">
      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
        <CheckCircle className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

