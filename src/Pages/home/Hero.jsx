import React, { useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

// Import images (consider using dynamic imports for better performance)
import Heropage1 from "../../assets/Heropage1.jpg";
import indi1 from "../../assets/indi1.png";
import indi2 from "../../assets/indi2.png";

const Hero = () => {
  // Slide data with enhanced properties
  const slides = [
    {
      image: Heropage1,
      title: "Welcome to IndiBazzar",
      subtitle: "Discover the finest spices, grains, dry fruits, exotic fruits, and handicrafts – all in one place!",
      ctaPrimary: "Shop Now",
      ctaSecondary: "Explore Categories",
      overlay: "bg-gradient-to-r from-black/60 to-transparent"
    },
    {
      image: indi1,
      title: "Fresh & Organic Products",
      subtitle: "From farms to your home – natural, healthy, and pure.",
      ctaPrimary: "Browse Organic",
      ctaSecondary: "Learn More",
      overlay: "bg-gradient-to-r from-emerald-900/50 to-transparent"
    },
    {
      image: indi2,
      title: "Taste the Tradition",
      subtitle: "Authentic Indian spices & wellness products delivered to you.",
      ctaPrimary: "Discover Spices",
      ctaSecondary: "Our Story",
      overlay: "bg-gradient-to-r from-amber-900/50 to-transparent"
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [preloaded, setPreloaded] = useState(false);

  // Preload images with better error handling
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      try {
        const imagePromises = slides.map((slide) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => reject();
            img.src = slide.image;
          });
        });

        await Promise.all(imagePromises);
        if (isMounted) {
          setIsLoading(false);
          setPreloaded(true);
        }
      } catch (error) {
        console.error("Error loading images:", error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Memoized slide navigation functions
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent((prev) => (prev + 1) % slides.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, slides.length]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index === current) return;
    
    setIsTransitioning(true);
    setCurrent(index);
    
    // Reset transitioning state after animation completes
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [isTransitioning, current]);

  // Auto-advance slides
  useEffect(() => {
    if (!isLoading && !isTransitioning && preloaded) {
      const timer = setInterval(nextSlide, 6000);
      return () => clearInterval(timer);
    }
  }, [isLoading, isTransitioning, preloaded, nextSlide]);

  // Loading state
  if (isLoading) {
    return (
      <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-green-50 to-amber-50 mt-32">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-gray-700 text-xl font-medium">Loading IndiBazzar...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden mt-32" aria-label="Hero carousel">
      {/* Background Images with optimized loading */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: "center center",
              backgroundSize: "cover"
            }}
            aria-hidden={index !== current}
          >
            <div className={`absolute inset-0 ${slide.overlay || "bg-black/30"}`}></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 sm:px-6">
        <div className="text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 animate-fadeIn">
            {slides[current].title}
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fadeIn delay-200">
            {slides[current].subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-500">
            <Link
              to="/featured"
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              {slides[current].ctaPrimary || "Shop Now"}
            </Link>
            <Link
              to="/categories"
              className="px-8 py-3 bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full shadow-lg hover:bg-white/30 hover:text-gray-900 transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              {slides[current].ctaSecondary || "Explore Categories"}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Previous slide"
        disabled={isTransitioning}
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 p-3 rounded-full z-20 transition-all duration-300 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label="Next slide"
        disabled={isTransitioning}
      >
        <FiChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white scale-125" 
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            disabled={isTransitioning}
          />
        ))}
      </div>

      {/* Progress bar for auto-advance */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-20">
        <div 
          className="h-full bg-green-400 transition-all duration-6000 ease-linear"
          style={{ 
            width: isTransitioning ? '100%' : '0%',
            transition: isTransitioning ? 'width 6s linear' : 'none'
          }}
          key={current}
        ></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent z-10"></div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default React.memo(Hero);