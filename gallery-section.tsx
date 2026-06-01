"use client"

import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  { id: 1, category: "Braids", title: "Knotless Box Braids" },
  { id: 2, category: "Wigs", title: "Frontal Wig Install" },
  { id: 3, category: "Styling", title: "Silk Press" },
  { id: 4, category: "Braids", title: "Tribal Braids" },
  { id: 5, category: "Colour", title: "Honey Blonde Highlights" },
  { id: 6, category: "Wigs", title: "Custom Wig Unit" },
  { id: 7, category: "Braids", title: "Cornrow Updo" },
  { id: 8, category: "Styling", title: "Special Occasion Style" },
]

const categories = ["All", "Braids", "Wigs", "Styling", "Colour"]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl font-semibold text-foreground mt-4 mb-6 text-balance">
            Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse through our collection of stunning transformations and 
            get inspired for your next look.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-foreground/80 hover:bg-primary/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                <span className="text-primary/50 font-serif text-sm">{image.category}</span>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-4">
                  <p className="text-primary text-xs uppercase tracking-wider mb-1">{image.category}</p>
                  <p className="text-foreground font-serif text-lg">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="max-w-4xl w-full aspect-square bg-secondary rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-primary/50 font-serif text-xl">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
