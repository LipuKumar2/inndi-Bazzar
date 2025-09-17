import React, { useState } from "react";
import Slider from "react-slick";
import { Box, Leaf, Coffee, Gift, Sparkles, ArrowRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images (make sure these paths are correct)
import spicesGrainsImg from "../../assets/spices.jpg";
import processedFoodsImg from "../../assets/Dehydrated.jpg";
import fruitsImg from "../../assets/Fruits.jpg";
import wellnessOilsImg from "../../assets/oils.jpg";
import beveragesImg from "../../assets/Beverages.jpg";
import dryFruitsImg from "../../assets/Dryfruits.jpg";
import handicraftsImg from "../../assets/Handicraft.jpg";
import organicFoodsImg from "../../assets/organic.jpg";
import exoticFruitsImg from "../../assets/Exotic.jpg";

const categories = [
  { id: "spices-grains", name: "Spices & Grains", image: spicesGrainsImg, description: "Fresh & premium quality spices", icon: <Leaf size={20} />, color: "from-amber-500 to-orange-500" },
  { id: "processed-foods", name: "Processed Foods", image: processedFoodsImg, description: "Healthy & tasty selections", icon: <Box size={20} />, color: "from-blue-500 to-cyan-500" },
  { id: "fruits", name: "Fresh Fruits", image: fruitsImg, description: "Natural & organic varieties", icon: <Coffee size={20} />, color: "from-emerald-500 to-green-500" },
  { id: "wellness-oils", name: "Wellness & Oils", image: wellnessOilsImg, description: "Pure organic wellness oils", icon: <Leaf size={20} />, color: "from-lime-500 to-emerald-500" },
  { id: "beverages", name: "Beverages", image: beveragesImg, description: "Refreshing natural drinks", icon: <Coffee size={20} />, color: "from-amber-500 to-orange-400" },
  { id: "dry-fruits", name: "Dry Fruits", image: dryFruitsImg, description: "Nutritious premium snacks", icon: <Gift size={20} />, color: "from-amber-600 to-amber-800" },
  { id: "handicrafts-textiles", name: "Handicrafts", image: handicraftsImg, description: "Artisan handmade creations", icon: <Gift size={20} />, color: "from-purple-500 to-pink-500" },
  { id: "organic-foods", name: "Organic Foods", image: organicFoodsImg, description: "Pure & natural selections", icon: <Leaf size={20} />, color: "from-green-500 to-emerald-600" },
  { id: "exotic-fruits", name: "Exotic Fruits", image: exoticFruitsImg, description: "Tropical exotic delights", icon: <Coffee size={20} />, color: "from-pink-500 to-rose-500" },
];

const AllCategoriesModal = ({ categories, isOpen, onClose }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">All Categories</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="flex items-center mb-2">
                  <div className="p-2 bg-gray-100 rounded-lg mr-3">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                </div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Categories = () => {
  const navigate = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(false);

  const handleCategoryClick = (categoryId) => {
    navigate(`/category/${categoryId}`);
  };

  const handleViewAllCategories = () => {
    setShowAllCategories(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    responsive: [
      { 
        breakpoint: 1280, 
        settings: { 
          slidesToShow: 3,
          arrows: true
        } 
      },
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: 2,
          arrows: true
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: 2,
          arrows: false
        } 
      },
      { 
        breakpoint: 640, 
        settings: { 
          slidesToShow: 1,
          arrows: false,
          dots: true
        } 
      },
    ],
  };

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block", right: "-25px" }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block", left: "-25px" }}
        onClick={onClick}
      />
    );
  };

  // Add custom arrows to settings
  settings.nextArrow = <NextArrow />;
  settings.prevArrow = <PrevArrow />;

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-0 w-24 h-24 bg-green-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-0 w-32 h-32 bg-amber-100 rounded-full opacity-20 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="text-amber-500 mr-2" size={24} />
            <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Premium Collections
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative">
            Explore Our Categories
            <span className="absolute left-1/2 bottom-0 w-20 h-1 bg-gradient-to-r from-green-400 to-teal-400 transform -translate-x-1/2 translate-y-2 rounded-full"></span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully curated selection of premium products, sourced for quality and freshness.
          </p>
        </div>

        {/* Categories Slider */}
        <div className="relative">
          <Slider {...settings}>
            {categories.map((category, index) => (
              <div key={index} className="px-3 focus:outline-none">
                <div
                  className="bg-white rounded-xl shadow-md border border-gray-100 p-5 flex flex-col items-center text-center h-[380px] transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group relative overflow-hidden"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 z-0`}></div>
                  
                  {/* Image container */}
                  <div className="w-full h-48 overflow-hidden rounded-lg mb-5 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Icon badge */}
                    <div className="absolute top-3 left-3 bg-white rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      {category.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center flex-grow justify-between z-10">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-2 line-clamp-2">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300 mb-4 leading-tight">
                        {category.description}
                      </p>
                    </div>
                    
                    {/* CTA Button */}
                    <button className="flex items-center justify-center gap-2 bg-[#475E2A] text-white px-5 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md hover:from-teal-500 hover:to-green-500 transition-all duration-300 group-hover:scale-105">
                      <span>Explore</span>
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllCategories}
            className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md hover:border-green-300 hover:text-green-600 transition-all duration-300"
          >
            <span>View All Categories</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* All Categories Modal */}
      <AllCategoriesModal 
        categories={categories} 
        isOpen={showAllCategories} 
        onClose={() => setShowAllCategories(false)} 
      />

      {/* Custom CSS for slick slider */}
      <style jsx>{`
        .slick-dots {
          bottom: -40px;
        }
        .slick-dots li button:before {
          font-size: 10px;
          color: #9CA3AF;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #10B981;
          opacity: 1;
        }
        .custom-arrow {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex !important;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          z-index: 10;
          transition: all 0.3s ease;
        }
        .custom-arrow:hover {
          background: #10B981;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        .custom-arrow:before {
          content: '';
          width: 10px;
          height: 10px;
          border: solid #4B5563;
          border-width: 0 2px 2px 0;
          display: inline-block;
          padding: 3px;
          transition: all 0.3s ease;
        }
        .next-arrow:before {
          transform: rotate(-45deg) translate(-1px, -1px);
        }
        .prev-arrow:before {
          transform: rotate(135deg) translate(-1px, -1px);
        }
        .custom-arrow:hover:before {
          border-color: white;
        }
        .slick-slide {
          padding: 5px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Categories;