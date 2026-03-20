import { useState } from "react";
import { X } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ProjectCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: string[];
}

export default function ProjectCarouselModal({
  isOpen,
  onClose,
  projectTitle,
  images,
}: ProjectCarouselModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-foreground/10 hover:bg-foreground/20 rounded-full transition-all duration-300"
          aria-label="Close carousel"
        >
          <X size={24} className="text-foreground" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-foreground to-accent p-6 text-white">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl">{projectTitle}</h2>
          <p className="text-white/70 text-sm mt-2">
            {currentSlide + 1} / {images.length}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative w-full">
          {images.length > 0 ? (
            <Slider {...slickSettings}>
              {images.map((image, idx) => (
                <div key={idx} className="flex items-center justify-center bg-muted h-96 sm:h-[500px]">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                    <div className="text-center text-muted-foreground">
                      {/* Placeholder - replace with actual image */}
                      <div className="flex flex-col items-center gap-4">
                        <svg
                          className="w-24 h-24 opacity-30"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4.5-4.5 3 3 4-4 2.5 2.5V5z" />
                        </svg>
                        <div>
                          <p className="font-semibold">Project Image {idx + 1}</p>
                          <p className="text-xs mt-1 opacity-50">{image}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="h-96 sm:h-[500px] flex items-center justify-center bg-muted">
              <p className="text-muted-foreground">No images available</p>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <div className="bg-card-foreground/5 p-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Slide {currentSlide + 1} of {images.length}
              </p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-foreground text-background rounded-full font-semibold hover:shadow-lg transition-all duration-300 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}