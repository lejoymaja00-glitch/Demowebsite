"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent hidden lg:block" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        {/* Tagline */}
        <p className="text-primary text-xs lg:text-sm uppercase tracking-[0.3em] mb-6 lg:mb-8 font-medium">
          Premium Hair Services in South Africa
        </p>
        
        {/* Main Heading */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground leading-[1.1] mb-6 lg:mb-8 text-balance">
          Where Luxury
          <span className="block text-primary">Meets Artistry</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mb-10 lg:mb-12 leading-relaxed text-pretty">
          Experience the pinnacle of hair care at Silk Touch Hair Studios. 
          Our master stylists craft bespoke looks that celebrate your unique beauty.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-sm uppercase tracking-wider font-medium min-w-[200px]"
          >
            <a href="#booking">Book Appointment</a>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary px-8 py-6 text-sm uppercase tracking-wider font-medium min-w-[200px]"
          >
            <a href="#services">Our Services</a>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-primary/60" />
        </div>
      </div>
      
      {/* Side Text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left hidden xl:block">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Est. 2020</span>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right hidden xl:block">
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Johannesburg</span>
      </div>
    </section>
  )
}
