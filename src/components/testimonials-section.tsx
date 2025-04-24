import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Card, CardContent } from "./ui/card"

interface TestimonialProps {
  quote: string
  name: string
  title: string
  avatar: string
  initials: string
}

function Testimonial({ quote, name, title, avatar, initials }: TestimonialProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <blockquote className="flex-1 mb-4">
          <p className="text-muted-foreground">"{quote}"</p>
        </blockquote>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Users Say</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Trusted by developers and businesses worldwide to improve their web performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Testimonial
            quote="This tool helped us identify critical performance issues that were affecting our conversion rates. After implementing the recommendations, our page load time decreased by 40%."
            name="Sarah Johnson"
            title="CTO, E-commerce Platform"
            avatar="/diverse-group-city.png"
            initials="SJ"
          />
          <Testimonial
            quote="As a developer, I appreciate the detailed technical insights this analyzer provides. It's now part of our regular workflow to ensure we're delivering the best experience to our users."
            name="Michael Chen"
            title="Lead Developer, Tech Startup"
            avatar="/diverse-group-city.png"
            initials="MC"
          />
          <Testimonial
            quote="The accessibility audit feature helped us make our website more inclusive. We've received positive feedback from users with disabilities about the improvements we've made."
            name="Emily Rodriguez"
            title="UX Designer, Digital Agency"
            avatar="/diverse-group-city.png"
            initials="ER"
          />
        </div>
      </div>
    </section>
  )
}
