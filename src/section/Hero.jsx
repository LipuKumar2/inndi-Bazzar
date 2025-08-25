import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import indi1 from "../assets/indi 1.png"; // Rename the file in your assets folder to "indi1.png" (no spaces)
const Hero = () => {      
  const slides = [
    {
      image: indi1,
      title: "Welcome to IndiBazzar",
      subtitle:
        "Discover the finest spices, grains, dry fruits, exotic fruits, and handicrafts – all in one place!",
    },
    {
      image: indi1,
      title: "Fresh & Organic Products",
      subtitle: "From farms to your home – natural, healthy, and pure.",
    },
    {
      image: indi1,
      title: "Taste the Tradition",
      subtitle: "Authentic Indian spices & wellness products delivered to you.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${slides[current].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* Debug: Uncomment to check if image loads */}
        {/* <img src={slides[current].image} alt="" style={{display: 'none'}} /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md">
          {slides[current].subtitle}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition">
            Shop Now
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-indigo-600 transition">
            Explore Categories
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
      >
        <FiChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
      >
        <FiChevronRight size={28} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
