import React, { useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Regular Customer",
    message: "IndiBazzar delivers the freshest dry fruits and exotic fruits! Their packaging ensures everything arrives in perfect condition. Highly recommended for quality-conscious buyers.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Anjali Mehta",
    role: "Health Enthusiast",
    message: "Amazing quality and quick delivery. I love their wellness oils selection and the detailed information they provide about each product's benefits.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    role: "Home Chef",
    message: "The spices and grains are top-notch. IndiBazzar has made my cooking easier with their consistent quality and wide variety of authentic ingredients.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
    rating: 5,
  },
  {
    name: "Priya Desai",
    role: "Food Blogger",
    message: "As someone who works with ingredients daily, I can attest to IndiBazzar's superior quality. Their products have elevated my recipes and content.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    name: "Arun Kumar",
    role: "Restaurant Owner",
    message: "We've been sourcing from IndiBazzar for over a year now. Their bulk ordering system and consistent quality have been invaluable to our business.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);
  
  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="bg-gradient-to-b from-yellow-50 via-amber-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 relative inline-block">
            What Our Customers Say
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust IndiBazzar for their premium grocery needs
          </p>
        </div>

        {/* Testimonials Carousel for mobile, Grid for desktop */}
        <div className="relative">
          {/* Desktop Grid View */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Mobile Carousel View */}
          <div className="md:hidden relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-green-600" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-green-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-green-600" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-600">10K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-600">500+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-600">98%</div>
            <div className="text-gray-600">Positive Reviews</div>
          </div>
          <div className="p-4">
            <div className="text-3xl md:text-4xl font-bold text-green-600">15</div>
            <div className="text-gray-600">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group h-full">
      {/* Quote Icon */}
      <Quote className="absolute top-4 left-4 text-green-400 opacity-30 w-6 h-6" />
      
      {/* Customer Image */}
      <div className="relative mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 h-20 rounded-full object-cover border-4 border-green-100 shadow-sm group-hover:border-green-300 transition-colors"
        />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          ★ {testimonial.rating}
        </div>
      </div>

      {/* Rating Stars */}
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-gray-700 mb-4 text-sm md:text-base italic">"{testimonial.message}"</p>

      {/* Name and Role */}
      <div className="mt-auto">
        <h3 className="text-green-600 font-semibold text-lg">{testimonial.name}</h3>
        <span className="text-gray-500 text-sm">{testimonial.role}</span>
      </div>
    </div>
  );
};

export default Testimonials;