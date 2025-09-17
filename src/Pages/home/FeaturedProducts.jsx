import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ShoppingCart, Zap } from "lucide-react";

import Cashew from "../../assets/Cashew.jpg"
import Almond from "../../assets/Almond.jpg"
import DragonFruit from "../../assets/DragonFruit.jpg"
import Walnut from "../../assets/Walnuts.jpg"

// Reusable Product Card
const FeaturedProductCard = ({ 
  title, 
  price, 
  description, 
  image, 
  rating, 
  onAddToCart, 
  onBuyNow 
}) => {
  return (
    <div className="relative flex flex-col bg-white rounded-3xl shadow-lg w-72 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
      {/* Product Image */}
      <div className="w-full h-52 overflow-hidden rounded-t-3xl relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        {/* Overlay on hover */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" /> */}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[#475E2A] font-bold text-lg">{price}</p>
        <h3 className="text-gray-800 text-lg font-semibold mt-1 line-clamp-1">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm flex-1 line-clamp-2">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < rating ? "currentColor" : "none"}
                strokeWidth={1.5}
                className={i < rating ? "fill-current" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">({rating}.0)</span>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button 
            onClick={onAddToCart}
            className="flex items-center justify-center gap-2 bg-green-100 text-[#475E2A] py-3 rounded-xl font-medium hover:bg-green-200 transition-all duration-300 hover:shadow-md"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
          <button 
            onClick={onBuyNow}
            className="flex items-center justify-center gap-2 bg-[#74b227] text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:shadow-md"
          >
            <Zap size={16} />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Products Section
export default function FeaturedProducts() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Cashew Nuts",
      price: "₹850/kg",
      description: "Crunchy premium cashews packed with nutrition.",
      image: Cashew,
      rating: 4,
    },
    {
      id: 2,
      title: "Almonds",
      price: "₹850/kg",
      description: "Healthy almonds sourced from California farms.",
      image: Almond,
      rating: 5,
    },
    {
      id: 3,
      title: "Dragon Fruit",
      price: "₹250/kg",
      description: "Exotic dragon fruit, sweet and refreshing.",
      image: DragonFruit,
      rating: 4,
    },
    {
      id: 4,
      title: "Walnuts",
      price: "₹900/kg",
      description: "Rich in Omega-3, perfect for a healthy snack.",
      image: Walnut,
      rating: 5,
    },
    {
      id: 5,
      title: "Blueberries",
      price: "₹500/kg",
      description: "Fresh, sweet, and full of antioxidants.",
      image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      id: 6,
      title: "Pistachios",
      price: "₹950/kg",
      description: "Crunchy and salty pistachios, roasted to perfection.",
      image: "Pistachios",
      rating: 4,
    },
    {
      id: 7,
      title: "Dried Figs",
      price: "₹650/kg",
      description: "Sweet and chewy dried figs, perfect for snacking.",
      image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      id: 8,
      title: "Dates",
      price: "₹550/kg",
      description: "Premium dates, naturally sweet and delicious.",
      image: "https://images.unsplash.com/photo-1600180758895-74f39f43b51e?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
  ];

  const handleAddToCart = (product) => {
    // Add to cart logic
    setCartItems(prev => [...prev, product]);
    
    // Save to localStorage for persistence
    const updatedCart = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    
    // Show notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-fade-in-down flex items-center gap-2';
    notification.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span>Added ${product.title} to cart!</span>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.classList.add('animate-fade-out-up');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

  const handleAddToCartAndNavigate = (product) => {
    handleAddToCart(product);
    // Navigate to cart page after a short delay
    setTimeout(() => {
      navigate('/cart');
    }, 500);
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    // Navigate to checkout page after a short delay
    setTimeout(() => {
      navigate('/checkout');
    }, 500);
  };

  const handleViewAllProducts = () => {
    navigate('/categories');
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#475E2A] to-[#527c1e] bg-clip-text text-transparent mb-4">
            🌟 Featured Products
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of premium dry fruits and fresh produce, carefully chosen for quality and taste
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {products.map((product) => (
            <FeaturedProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCartAndNavigate(product)}
              onBuyNow={() => handleBuyNow(product)}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllProducts}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View All Products
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-out-up {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out;
        }
        .animate-fade-out-up {
          animation: fade-out-up 0.3s ease-in;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </section>
  );
}