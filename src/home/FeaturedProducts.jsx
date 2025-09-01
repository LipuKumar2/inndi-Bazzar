import React from "react";
import { Star } from "lucide-react";

// Reusable Product Card
const FeaturedProductCard = ({ title, price, description, image, rating }) => {
  return (
    <div className="relative flex flex-col bg-white rounded-3xl shadow-md w-72 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Product Image */}
      <div className="w-full h-52 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-rose-600 font-semibold text-lg">{price}</p>
        <h3 className="text-slate-800 text-lg font-semibold mt-1">{title}</h3>
        <p className="text-slate-500 mt-2 text-sm flex-1">{description}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating ? "currentColor" : "none"}
              strokeWidth={1.5}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <button className="bg-green-100 text-green-700 py-2 rounded-lg font-medium hover:bg-green-200 transition">
            Add to Cart
          </button>
          <button className="bg-rose-600 text-white py-2 rounded-lg font-medium hover:bg-rose-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Featured Products Section
export default function FeaturedProducts() {
  const products = [
    {
      title: "Cashew Nuts",
      price: "₹850/kg",
      description: "Crunchy premium cashews packed with nutrition.",
      image:
        "https://images.unsplash.com/photo-1615486365970-01629bfe7c68?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      title: "Almonds (California)",
      price: "₹1200/kg",
      description: "Healthy almonds sourced from California farms.",
      image:
        "https://images.unsplash.com/photo-1606312619284-8ebdf1547c0d?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
    {
      title: "Dragon Fruit",
      price: "₹350/kg",
      description: "Exotic dragon fruit, sweet and refreshing.",
      image:
        "https://images.unsplash.com/photo-1622051314505-27d6a02cf79b?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      title: "Walnuts (Akhrot)",
      price: "₹900/kg",
      description: "Rich in Omega-3, perfect for a healthy snack.",
      image:
        "https://images.unsplash.com/photo-1590451122095-623c6bdbb8b0?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
    {
      title: "Blueberries",
      price: "₹500/250g",
      description: "Fresh, sweet, and full of antioxidants.",
      image:
        "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      title: "Pistachios",
      price: "₹950/kg",
      description: "Crunchy and salty pistachios, roasted to perfection.",
      image:
        "https://images.unsplash.com/photo-1622205317275-d6c5d0a2f03f?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      title: "Dried Figs",
      price: "₹650/kg",
      description: "Sweet and chewy dried figs, perfect for snacking.",
      image:
        "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&w=400&q=80",
      rating: 4,
    },
    {
      title: "Dates (Khajur)",
      price: "₹550/kg",
      description: "Premium dates, naturally sweet and delicious.",
      image:
        "https://images.unsplash.com/photo-1600180758895-74f39f43b51e?auto=format&fit=crop&w=400&q=80",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-green-50 via-yellow-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-rose-600 to-orange-500 bg-clip-text text-transparent">
            ✨ Our Featured Products
          </h2>
          <p className="mt-3 text-gray-700 text-lg max-w-2xl mx-auto">
            Handpicked premium dry fruits & fresh produce for your healthy lifestyle 🌱
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
          {products.map((product, index) => (
            <FeaturedProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
