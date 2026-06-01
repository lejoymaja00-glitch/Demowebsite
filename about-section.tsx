import { Sparkles } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
                Our Story
              </span>
            </div>
            
            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mb-6 leading-tight text-balance">
              Crafting Beauty, One Strand at a Time
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in Johannesburg, Silk Touch Hair Studios emerged from a passion 
                for celebrating the diverse beauty of South African women. Our sanctuary 
                is where traditional techniques meet contemporary innovation.
              </p>
              <p>
                Our team of master stylists brings decades of combined experience in 
                braiding, wig artistry, and transformative hair treatments. We believe 
                every woman deserves to feel like royalty.
              </p>
              <p>
                From intricate protective styles to flawless wig installations, we 
                specialise in services that honour your hair&apos;s natural beauty while 
                expressing your unique personality.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-primary font-semibold">5+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-primary font-semibold">2K+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="font-serif text-3xl lg:text-4xl text-primary font-semibold">15+</p>
                <p className="text-sm text-muted-foreground mt-1">Expert Stylists</p>
              </div>
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                    <span className="text-primary/40 font-serif text-lg">Artistry</span>
                  </div>
                </div>
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/10 flex items-center justify-center">
                    <span className="text-primary/40 font-serif text-lg">Care</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square bg-secondary rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center">
                    <span className="text-primary/40 font-serif text-lg">Beauty</span>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-secondary rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-primary/20 flex items-center justify-center">
                    <span className="text-primary/40 font-serif text-lg">Style</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-primary/20 rounded-lg -z-10 hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
