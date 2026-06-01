"use client"

import { useState } from "react"
import { MessageCircle, Calendar, Clock, User, Mail, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const services = [
  "Braiding - Box Braids",
  "Braiding - Knotless Braids",
  "Braiding - Cornrows",
  "Wig Installation - Frontal",
  "Wig Installation - Closure",
  "Hair Treatment",
  "Silk Press",
  "Wash & Blow Dry",
  "Hair Colouring",
  "Other"
]

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your booking request! We will contact you shortly to confirm.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // WhatsApp link with pre-filled message
  const whatsappMessage = encodeURIComponent(
    "Hi Silk Touch Hair Studios! I'd like to book an appointment. Please let me know your available slots."
  )
  const whatsappLink = `https://wa.me/27123456789?text=${whatsappMessage}`

  return (
    <section id="booking" className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
            Reserve Your Slot
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready for your transformation? Book your appointment now via WhatsApp 
            for instant response or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* WhatsApp Card */}
          <Card className="bg-background border-primary/30">
            <CardHeader className="pb-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-4">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Quick WhatsApp Booking
              </h3>
              <p className="text-muted-foreground text-sm">
                Get instant responses and book your appointment directly via WhatsApp.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">Fast response within minutes</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">Check availability instantly</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Send className="w-4 h-4 text-primary" />
                  <span className="text-sm">Share reference photos easily</span>
                </li>
              </ul>
              
              <Button 
                asChild
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="bg-background border-border">
            <CardHeader className="pb-4">
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Booking Form
              </h3>
              <p className="text-muted-foreground text-sm">
                Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground/80">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+27 XX XXX XXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground/80">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground/80">
                    Select Service
                  </Label>
                  <Select 
                    value={formData.service}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                  >
                    <SelectTrigger className="bg-input border-border focus:border-primary">
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-foreground/80">
                      Preferred Date
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-foreground/80">
                      Preferred Time
                    </Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground/80">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your desired style, hair length, or any special requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit Booking Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
