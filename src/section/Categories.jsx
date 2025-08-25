import React from "react";
import Slider from "react-slick";
import { Box, Leaf, Coffee, Gift } from "lucide-react"; // icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  { name: "Spices & Grains", image: "https://images.unsplash.com/photo-1589307000937-87b0d91f84ab?auto=format&fit=crop&w=400&q=80", description: "Fresh & premium", icon: <Leaf size={20} /> },
  { name: "Processed Foods", image: "https://images.unsplash.com/photo-1587815131615-0f0b5c78b5f4?auto=format&fit=crop&w=400&q=80", description: "Healthy & tasty", icon: <Box size={20} /> },
  { name: "Fresh/Dehydrated Fruits", image: "https://images.unsplash.com/photo-1598514982234-4c202e6574b0?auto=format&fit=crop&w=400&q=80", description: "Natural & organic", icon: <Coffee size={20} /> },
  { name: "Wellness & Oils", image: "https://images.unsplash.com/photo-1606813907980-0e1e8f6b6e3b?auto=format&fit=crop&w=400&q=80", description: "Organic oils", icon: <Leaf size={20} /> },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1600628421663-3bc2e0f8d057?auto=format&fit=crop&w=400&q=80", description: "Refreshing drinks", icon: <Coffee size={20} /> },
  { name: "Dry Fruits", image: "https://images.unsplash.com/photo-1593529467223-f68c5f5c6df4?auto=format&fit=crop&w=400&q=80", description: "Nutritious snacks", icon: <Gift size={20} /> },
  { name: "Handicrafts & Textiles", image: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62?auto=format&fit=crop&w=400&q=80", description: "Artisan creations", icon: <Gift size={20} /> },
  { name: "Organic Foods", image: "https://images.unsplash.com/photo-1589919570060-f7d462cbf647?auto=format&fit=crop&w=400&q=80", description: "Pure & natural", icon: <Leaf size={20} /> },
  { name: "Exotic Fruits", image: "https://images.unsplash.com/photo-1598514982234-4c202e6574b0?auto=format&fit=crop&w=400&q=80", description: "Tropical delights", icon: <Coffee size={20} /> },
];

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block">
            Our Product Categories
            <span className="absolute left-1/2 -bottom-2 w-20 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Explore a wide range of fresh, organic, and quality products curated for you.
          </p>
        </div>

        <Slider {...settings}>
          {categories.map((category, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center h-96 transition-transform transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group">
                
                {/* Image */}
                <div className="w-full h-48 overflow-hidden rounded-xl mb-4 relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Icon */}
                  <div className="absolute top-3 left-3 bg-white rounded-full p-1 shadow-md">
                    {category.icon}
                  </div>
                </div>

                {/* Category Name */}
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-green-600 transition">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-700 transition">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Categories;
