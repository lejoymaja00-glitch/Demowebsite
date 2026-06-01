import { Check } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingCategories = [
  {
    title: "Braiding",
    description: "Protective styles that last",
    items: [
      { name: "Box Braids (Medium)", price: "R850", duration: "4-5 hrs" },
      { name: "Knotless Braids", price: "R1,200", duration: "5-6 hrs" },
      { name: "Cornrows (Full Head)", price: "R450", duration: "2-3 hrs" },
      { name: "Tribal Braids", price: "R950", duration: "4-5 hrs" },
      { name: "Feed-in Braids", price: "R650", duration: "3-4 hrs" },
    ],
    popular: true
  },
  {
    title: "Wig Services",
    description: "Flawless installations",
    items: [
      { name: "Frontal Wig Install", price: "R600", duration: "1-2 hrs" },
      { name: "Closure Wig Install", price: "R450", duration: "1 hr" },
      { name: "Custom Wig Making", price: "R2,500+", duration: "Varies" },
      { name: "Wig Revamp", price: "R350", duration: "1-2 hrs" },
      { name: "Glueless Install", price: "R500", duration: "1 hr" },
    ],
    popular: false
  },
  {
    title: "Treatments & Styling",
    description: "Restore and transform",
    items: [
      { name: "Silk Press", price: "R450", duration: "1-2 hrs" },
      { name: "Deep Conditioning", price: "R250", duration: "45 min" },
      { name: "Protein Treatment", price: "R350", duration: "1 hr" },
      { name: "Wash & Blow Dry", price: "R300", duration: "1 hr" },
      { name: "Hair Colouring", price: "R650+", duration: "2-3 hrs" },
    ],
    popular: false
  }
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
            Investment in Beauty
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Our Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transparent pricing for all our premium services. Prices may vary based on 
            hair length and complexity. Consultation available.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingCategories.map((category, index) => (
            <Card 
              key={index}
              className={`bg-background border-border relative overflow-hidden ${
                category.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {category.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">
                    Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-4">
                  {category.items.map((item, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start justify-between pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <div>
                          <p className="text-foreground font-medium text-sm">{item.name}</p>
                          <p className="text-muted-foreground text-xs">{item.duration}</p>
                        </div>
                      </div>
                      <span className="text-primary font-semibold text-sm">{item.price}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a href="#booking">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          * Prices are subject to change. A deposit may be required for certain services.
          Please contact us for custom quotes.
        </p>
      </div>
    </section>
  )
}
