import React from "react";
import { Tag } from "lucide-react"; // For an icon on offers

const offers = [
  {
    title: "Up to 20% Off on Dry Fruits",
    subtitle: "Grab your healthy snacks today!",
    image:
      "https://images.unsplash.com/photo-1606312619284-8ebdf1547c0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Fresh Exotic Fruits Discount",
    subtitle: "Limited time offers on Dragon Fruit, Mangoes & more",
    image:
      "https://images.unsplash.com/photo-1622051314505-27d6a02cf79b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wellness Oils Sale",
    subtitle: "Essential oils & wellness products up to 15% off",
    image:
      "https://images.unsplash.com/photo-1606813907980-0e1e8f6b6e3b?auto=format&fit=crop&w=800&q=80",
  },
];

const Offers = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 via-green-100 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 relative inline-block">
            Current Offers
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
          </h2>
          <p className="mt-3 text-green-700 text-lg max-w-2xl mx-auto">
            Grab your favourite products at exciting discounts 🌱
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Image */}
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="text-green-400 w-6 h-6" />
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {offer.title}
                  </h3>
                </div>
                <p className="text-sm text-white drop-shadow-md">{offer.subtitle}</p>
                <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
