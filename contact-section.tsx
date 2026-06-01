import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Luxury Lane, Sandton", "Johannesburg, 2196", "South Africa"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 12 345 6789", "+27 98 765 4321"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["bookings@silktouch.co.za", "info@silktouch.co.za"]
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon - Fri: 8:00 AM - 7:00 PM", "Saturday: 8:00 AM - 5:00 PM", "Sunday: Closed"]
  }
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions or need assistance? Reach out to us through any of the 
            channels below. We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map Placeholder & Social Links */}
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Map */}
          <div className="lg:col-span-2 aspect-video bg-card rounded-lg border border-border overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-secondary via-card to-primary/5 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">
                  123 Luxury Lane, Sandton
                </p>
                <p className="text-muted-foreground text-xs">
                  Johannesburg, South Africa
                </p>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Follow Us
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Stay connected and get inspired by our latest styles and 
              transformations on social media.
            </p>
            
            <div className="flex justify-center lg:justify-start gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
