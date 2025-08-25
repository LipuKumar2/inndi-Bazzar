import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Regular Customer",
    message: "IndiBazzar delivers the freshest dry fruits and exotic fruits! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Anjali Mehta",
    role: "Health Enthusiast",
    message: "Amazing quality and quick delivery. I love their wellness oils selection.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Home Chef",
    message: "The spices and grains are top-notch. IndiBazzar has made my cooking easier.",
    image: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-50 via-amber-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center relative inline-block">
          What Our Customers Say
          <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-transform duration-500 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 left-4 text-green-400 opacity-30 w-6 h-6" />
              
              {/* Customer Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover border-2 border-green-400 shadow-sm"
              />

              {/* Message */}
              <p className="text-gray-700 mb-4 text-sm md:text-base">"{testimonial.message}"</p>

              {/* Name and Role */}
              <h3 className="text-green-600 font-semibold text-lg">{testimonial.name}</h3>
              <span className="text-gray-500 text-sm">{testimonial.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
