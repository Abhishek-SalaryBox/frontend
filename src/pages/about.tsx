import { Button } from "../components/ui/button"
import { Link } from "react-router-dom"
import pic from "/images/pic_abi.jpg"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              We're on a mission to help developers and businesses create faster, more accessible websites.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative w-[300px] aspect-[3/4] rounded-xl overflow-hidden bg-muted ml-40">
                <img 
                  src={pic} 
                  alt="Me" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}                />
                <div className="w-full h-full flex items-center justify-center hidden">
                  <p className="text-muted-foreground">Solo Team</p>
                </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">My Story</h2>
              <p className="text-muted-foreground">
  Web Performance Analyzer was built in 2025 by me as I'm passionate about creating fast, scalable, and accessible web experiences.
</p>
<p className="text-muted-foreground">
  After working on performance-heavy applications and improving Lighthouse scores by over 100%, I realized how valuable actionable insights are for developers. This tool is my way of helping others identify bottlenecks and build a smoother web — one page at a time.
</p>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              To empower developers and businesses to create high-performing, accessible websites that provide an
              excellent user experience for everyone.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Performance</h3>
              <p className="text-muted-foreground">
                We're committed to helping websites load faster and perform better, improving user experience and
                business outcomes.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Accessibility</h3>
              <p className="text-muted-foreground">
                We believe the web should be accessible to everyone, regardless of abilities or disabilities.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-2">Education</h3>
              <p className="text-muted-foreground">
                We're dedicated to educating developers about best practices for web performance and accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Try our Web Performance Analyzer today and start improving your website.
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link to="/">Analyze Your Website</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
