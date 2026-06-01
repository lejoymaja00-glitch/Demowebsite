import { Scissors, Crown, Sparkles, Wind, Droplets, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Scissors,
    title: "Braiding",
    description: "From intricate box braids to elegant cornrows, our expert braiders create stunning protective styles that last.",
    features: ["Box Braids", "Cornrows", "Knotless Braids", "Tribal Braids"]
  },
  {
    icon: Crown,
    title: "Wig Installation",
    description: "Flawless wig installations that look completely natural. Lace fronts, closures, and custom units.",
    features: ["Lace Front Wigs", "Closures", "360 Lace", "Custom Units"]
  },
  {
    icon: Sparkles,
    title: "Hair Treatments",
    description: "Rejuvenate and restore your hair with our premium deep conditioning and protein treatments.",
    features: ["Deep Conditioning", "Protein Treatment", "Scalp Therapy", "Hair Botox"]
  },
  {
    icon: Wind,
    title: "Styling",
    description: "Whether it&apos;s a special occasion or everyday glam, our stylists create looks that turn heads.",
    features: ["Updos", "Silk Press", "Flexi Rods", "Special Occasions"]
  },
  {
    icon: Droplets,
    title: "Wash & Blow-Dry",
    description: "Premium wash services with professional products that cleanse and nourish your hair.",
    features: ["Luxury Wash", "Scalp Massage", "Blow Dry", "Trim & Shape"]
  },
  {
    icon: Palette,
    title: "Hair Colouring",
    description: "From subtle highlights to bold transformations, our colourists bring your vision to life.",
    features: ["Full Colour", "Highlights", "Balayage", "Colour Correction"]
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Our Premium Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our comprehensive range of hair services, each delivered with 
            meticulous attention to detail and the finest products.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-500 group"
            >
              <CardContent className="p-6 lg:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
