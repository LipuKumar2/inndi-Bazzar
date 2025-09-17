import React, { useState } from "react";
import { Tag, Clock, ArrowRight, X, Star, ShoppingBag, Heart, Grid, List } from "lucide-react";

const offers = [
  {
    id: 1,
    title: "Up to 20% Off on Dry Fruits",
    subtitle: "Grab your healthy snacks today!",
    description: "Enjoy amazing discounts on our premium selection of dry fruits. Perfect for healthy snacking, baking, or as gifts. Almonds, cashews, walnuts, and more at discounted prices!",
    image: "https://images.unsplash.com/photo-1606312619284-8ebdf1547c0d?auto=format&fit=crop&w=800&q=80",
    timeLeft: "2 days left",
    badge: "Popular",
    price: "$15.99",
    originalPrice: "$19.99",
    rating: 4.8,
    reviews: 142,
    category: "dry-fruits"
  },
  {
    id: 2,
    title: "Fresh Exotic Fruits Discount",
    subtitle: "Limited time offers on Dragon Fruit, Mangoes & more",
    description: "Treat yourself to our exotic fruit selection at special prices. Dragon fruit, passion fruit, mangoes, and other tropical delights delivered fresh to your doorstep.",
    image: "https://images.unsplash.com/photo-1622051314505-27d6a02cf79b?auto=format&fit=crop&w=800&q=80",
    timeLeft: "5 days left",
    price: "$24.99",
    originalPrice: "$29.99",
    rating: 4.6,
    reviews: 87,
    category: "fruits"
  },
  {
    id: 3,
    title: "Wellness Oils Sale",
    subtitle: "Essential oils & wellness products up to 15% off",
    description: "Discover our range of wellness oils including olive oil, coconut oil, and essential oils. Perfect for cooking, skincare, and aromatherapy. All products are organic and cold-pressed.",
    image: "https://images.unsplash.com/photo-1606813907980-0e1e8f6b6e3b?auto=format&fit=crop&w=800&q=80",
    timeLeft: "1 day left",
    badge: "Last Chance",
    price: "$12.99",
    originalPrice: "$15.99",
    rating: 4.9,
    reviews: 205,
    category: "oils"
  },
  {
    id: 4,
    title: "Organic Vegetables Bundle",
    subtitle: "Get fresh farm vegetables at 25% off",
    description: "Our farm-fresh organic vegetable bundle includes tomatoes, carrots, bell peppers, and leafy greens. Perfect for healthy meals and juicing.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    timeLeft: "3 days left",
    badge: "Bestseller",
    price: "$18.99",
    originalPrice: "$25.99",
    rating: 4.7,
    reviews: 189,
    category: "vegetables"
  },
  {
    id: 5,
    title: "Artisanal Honey Collection",
    subtitle: "15% off on raw, unfiltered honey",
    description: "Experience the natural goodness of our artisanal honey collection. Sourced from local beekeepers, our honey is raw, unfiltered, and packed with nutrients.",
    image: "https://images.unsplash.com/photo-1558645832-ea4a8c5e1ef6?auto=format&fit=crop&w=800&q=80",
    timeLeft: "6 days left",
    price: "$14.99",
    originalPrice: "$17.99",
    rating: 4.9,
    reviews: 223,
    category: "honey"
  },
  {
    id: 6,
    title: "Superfood Smoothie Packs",
    subtitle: "Buy 2 get 1 free on all smoothie packs",
    description: "Our superfood smoothie packs are packed with nutrients and flavor. Just blend with your favorite liquid for a quick, healthy breakfast or snack.",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    timeLeft: "4 days left",
    badge: "New",
    price: "$9.99",
    originalPrice: "$12.99",
    rating: 4.5,
    reviews: 76,
    category: "smoothies"
  },
  {
    id: 7,
    title: "Organic Coffee & Tea",
    subtitle: "20% off on our premium selection",
    description: "Wake up to the rich aroma of our organic coffee and tea. Ethically sourced and freshly roasted for the perfect cup every time.",
    image: "https://images.unsplash.com/photo-1611859266516-31fe4e4f1e6e?auto=format&fit=crop&w=800&q=80",
    timeLeft: "7 days left",
    price: "$16.99",
    originalPrice: "$21.99",
    rating: 4.8,
    reviews: 167,
    category: "beverages"
  },
  {
    id: 8,
    title: "Plant-Based Protein",
    subtitle: "Special discount on vegan protein powders",
    description: "Fuel your workouts with our plant-based protein powders. Made from peas, brown rice, and hemp, they're perfect for post-workout recovery.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80",
    timeLeft: "2 days left",
    badge: "Trending",
    price: "$22.99",
    originalPrice: "$27.99",
    rating: 4.6,
    reviews: 134,
    category: "supplements"
  },
  {
    id: 9,
    title: "Fresh Bakery Items",
    subtitle: "Morning special: 30% off before 10 AM",
    description: "Start your day with our freshly baked bread, pastries, and muffins. Made with organic ingredients and no preservatives.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80",
    timeLeft: "Daily",
    price: "$6.99",
    originalPrice: "$9.99",
    rating: 4.9,
    reviews: 278,
    category: "bakery"
  }
];

const OfferModal = ({ offer, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-72 object-cover rounded-2xl"
              />
              {offer.badge && (
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {offer.badge}
                </div>
              )}
              <div className="absolute -left-2 top-1/2 bg-green-600 text-white px-3 py-1 rounded-r-md shadow-md">
                <Tag size={16} className="inline mr-1" />
                <span className="text-sm font-semibold">SAVE UP TO 20%</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-green-900 mb-2">{offer.title}</h2>
              <p className="text-green-700 mb-4">{offer.subtitle}</p>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(offer.rating) ? "currentColor" : "none"} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {offer.rating} ({offer.reviews} reviews)
                </span>
              </div>
              
              <p className="text-gray-700 mb-6">{offer.description}</p>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-green-700 mr-3">{offer.price}</span>
                <span className="text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                <span className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded-md text-sm font-medium">
                  {offer.timeLeft}
                </span>
              </div>
              
              <div className="flex space-x-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg transition-all">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AllOffersModal = ({ offers, isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="relative p-6 border-b">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
          >
            <X size={20} />
          </button>
          
          <h2 className="text-3xl font-bold text-green-900 mb-2 text-center">All Special Offers</h2>
          <p className="text-green-700 text-center mb-6">Browse all our current promotions and discounts</p>
          
          <div className="flex justify-center mb-6">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md flex items-center ${viewMode === 'grid' ? 'bg-white shadow' : 'text-gray-500'}`}
              >
                <Grid size={18} className="mr-2" />
                Grid View
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md flex items-center ${viewMode === 'list' ? 'bg-white shadow' : 'text-gray-500'}`}
              >
                <List size={18} className="mr-2" />
                List View
              </button>
            </div>
          </div>
        </div>
        
        <div className={`p-6 overflow-y-auto ${viewMode === 'grid' ? 'max-h-[60vh]' : 'max-h-[70vh]'}`}>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
                    {offer.badge && (
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {offer.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-green-900 mb-1">{offer.title}</h3>
                    <p className="text-sm text-green-700 mb-3">{offer.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-green-700">{offer.price}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {offer.timeLeft}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {offers.map((offer) => (
                <div key={offer.id} className="flex items-center bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <div className="relative h-24 w-24 flex-shrink-0">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover rounded-lg" />
                    {offer.badge && (
                      <div className="absolute top-1 left-1 bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {offer.badge}
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="font-bold text-green-900">{offer.title}</h3>
                    <p className="text-sm text-green-700 mb-2">{offer.subtitle}</p>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            fill={i < Math.floor(offer.rating) ? "currentColor" : "none"} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600 mr-4">
                        {offer.rating} ({offer.reviews})
                      </span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        {offer.timeLeft}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-green-700">{offer.price}</span>
                    <span className="block text-sm text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="p-6 border-t bg-gray-50 rounded-b-2xl">
          <p className="text-center text-gray-600">Showing {offers.length} special offers</p>
        </div>
      </div>
    </div>
  );
};

const Offers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isAllOffersModalOpen, setIsAllOffersModalOpen] = useState(false);

  const handleShopNow = (offer) => {
    setSelectedOffer(offer);
    setIsOfferModalOpen(true);
  };

  const handleViewAllOffers = () => {
    setIsAllOffersModalOpen(true);
  };

  const closeModal = () => {
    setIsOfferModalOpen(false);
    setIsAllOffersModalOpen(false);
    setSelectedOffer(null);
  };

  return (
    <section className="bg-gradient-to-b from-green-50 via-green-100 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4 relative inline-block">
            Special Offers
            <span className="absolute left-0 right-0 -bottom-2 mx-auto w-16 h-1 bg-green-500 rounded-full"></span>
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            Discover our limited-time promotions and save on your favorite organic products
          </p>
        </div>

        {/* Offers Grid - Show only 3 offers initially */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.slice(0, 3).map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Time Left Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium text-green-800">
                  <Clock size={14} />
                  <span>{offer.timeLeft}</span>
                </div>
                
                {/* Special Badge */}
                {offer.badge && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {offer.badge}
                  </div>
                )}
                
                {/* Discount Tag */}
                <div className="absolute -left-2 top-1/2 bg-green-600 text-white px-3 py-1 rounded-r-md shadow-md">
                  <Tag size={16} className="inline mr-1" />
                  <span className="text-sm font-semibold">SAVE UP TO 20%</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2 line-clamp-2">
                  {offer.title}
                </h3>
                <p className="text-green-700 mb-4">
                  {offer.subtitle}
                </p>
                
                <button 
                  onClick={() => handleShopNow(offer)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                >
                  Shop Now
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllOffers}
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center"
          >
            View All Offers
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Modal for individual offer */}
      <OfferModal 
        offer={selectedOffer} 
        isOpen={isOfferModalOpen} 
        onClose={closeModal} 
      />
      
      {/* Modal for all offers */}
      <AllOffersModal 
        offers={offers} 
        isOpen={isAllOffersModalOpen} 
        onClose={closeModal} 
      />
    </section>
  );
};

export default Offers;