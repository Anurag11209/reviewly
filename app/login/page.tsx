import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
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
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <LoginForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/signup" className="underline underline-offset-4 hover:text-primary">
              Sign up
            </Link>
          </p>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Reviewly. All rights reserved.
        </div>
      </div>

      {/* Right side - Image */}
      <div className="hidden md:block md:w-1/2 bg-muted relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center p-12">
          <div className="max-w-md space-y-6 text-center">
            <div className="space-y-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Star className="h-6 w-6 fill-primary text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Collect reviews that convert</h2>
              <p className="text-muted-foreground">
                Join thousands of businesses using Reviewly to collect and showcase authentic customer reviews.
              </p>
            </div>
            <div className="relative rounded-xl border bg-background/80 backdrop-blur-sm p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="User avatar"
                  className="rounded-full"
                />
                <div className="space-y-2">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                  </div>
                  <p className="text-sm">
                    "Reviewly has transformed how we collect feedback. Our conversion rate has increased by 30% since
                    adding reviews to our site."
                  </p>
                  <div className="text-sm font-medium">Sarah Johnson, Marketing Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

