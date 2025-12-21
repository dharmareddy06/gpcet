import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/gpcet-video-cover.png", caption: "Main Building" },
  { src: "/images/facilities/convocation ceremony.webp", caption: "Convocation Ceremony" },
  { src: "/images/facilities/computer lab.jpg", caption: "Computer Lab" },
  { src: "/images/facilities/library.jpg", caption: "Central Library" },
  { src: "/images/facilities/annual day.jpeg", caption: "Annual Day" },
  { src: "/images/facilities/cultural activities.webp", caption: "Cultural Activities" },
  { src: "/images/facilities/workshop session.jpg", caption: "Workshop Session" },
  { src: "/images/facilities/sports.jpeg", caption: "Sports Day" },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section className="college-section bg-college-light-blue">
      <div className="college-container">
        <div className="text-center mb-12">
          <h2 className="college-heading mb-4">Campus Gallery</h2>
          <p className="college-subheading max-w-2xl mx-auto">
            Glimpses of life at GPCET - academics, events, and celebrations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? 'h-full min-h-[300px] md:min-h-[400px]' : 'h-48'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-primary-foreground font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 bg-primary/95 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={goToPrev}
              className="absolute left-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <div className="max-w-4xl w-full">
              <img
                src={galleryImages[selectedIndex].src.replace('600', '1200').replace('400', '800')}
                alt={galleryImages[selectedIndex].caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-primary-foreground text-center mt-4 text-lg">
                {galleryImages[selectedIndex].caption}
              </p>
            </div>

            <button
              onClick={goToNext}
              className="absolute right-4 text-primary-foreground hover:text-accent transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
