import Link from "next/link"
import { Heart } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Book Now" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            {/* Logo & Description */}
            <div className="text-center lg:text-left">
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-2xl font-semibold text-primary tracking-wide">
                  Silk Touch
                </span>
                <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  Hair Studios
                </span>
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto lg:mx-0">
                Where luxury meets artistry. Premium hair services 
                in the heart of Johannesburg.
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Newsletter or Tagline */}
            <div className="text-center lg:text-right">
              <p className="font-serif text-lg text-foreground mb-2">
                Your Beauty, Our Passion
              </p>
              <p className="text-muted-foreground text-sm">
                Book your transformation today
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Silk Touch Hair Studios. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in South Africa
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
