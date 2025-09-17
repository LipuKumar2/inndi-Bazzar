// src/Pages/Products.jsx
import React, { useState, useEffect } from 'react';
import { useSearch } from '../context/SearchContext';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const { searchResults, searchTerm, isSearching } = useSearch();

  // Mock product data - replace with actual API call
  const mockProducts = [
    { id: 1, name: 'Organic Turmeric', category: 'Spices & Grains', price: 250, rating: 4.5, description: 'Pure organic turmeric powder with rich color and aroma.' },
    { id: 2, name: 'Almonds', category: 'Dry Fruits', price: 500, rating: 4.7, description: 'Premium quality almonds, rich in nutrients and flavor.' },
    { id: 3, name: 'Mango', category: 'Exotic Fruits', price: 300, rating: 4.8, description: 'Fresh exotic mangoes, sweet and juicy.' },
    { id: 4, name: 'Silk Saree', category: 'Handicrafts & Textiles', price: 2500, rating: 4.6, description: 'Handcrafted silk saree with traditional designs.' },
    { id: 5, name: 'Coconut Oil', category: 'Wellness & Oils', price: 350, rating: 4.4, description: 'Pure cold-pressed coconut oil for cooking and wellness.' },
    { id: 6, name: 'Masala Chai', category: 'Beverages', price: 200, rating: 4.9, description: 'Authentic Indian masala chai blend with aromatic spices.' },
    { id: 7, name: 'Basmati Rice', category: 'Spices & Grains', price: 450, rating: 4.3, description: 'Long grain basmati rice with exquisite fragrance.' },
    { id: 8, name: 'Cashews', category: 'Dry Fruits', price: 600, rating: 4.7, description: 'Premium quality cashews, crunchy and delicious.' },
    { id: 9, name: 'Dragon Fruit', category: 'Exotic Fruits', price: 400, rating: 4.2, description: 'Exotic dragon fruit with vibrant color and sweet taste.' },
    { id: 10, name: 'Handmade Pottery', category: 'Handicrafts & Textiles', price: 1200, rating: 4.5, description: 'Beautiful handmade pottery with traditional designs.' },
    { id: 11, name: 'Sandalwood Oil', category: 'Wellness & Oils', price: 800, rating: 4.8, description: 'Pure sandalwood oil for aromatherapy and skincare.' },
    { id: 12, name: 'Green Tea', category: 'Beverages', price: 300, rating: 4.6, description: 'Organic green tea with antioxidant properties.' },
  ];

  const categories = ['All', 'Spices & Grains', 'Dry Fruits', 'Exotic Fruits', 'Handicrafts & Textiles', 'Wellness & Oils', 'Beverages'];

  useEffect(() => {
    // Simulate API call
    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    if (searchTerm && searchResults.length > 0) {
      setFilteredProducts(searchResults);
      setSelectedCategory('All');
    } else if (searchTerm === '' && products.length > 0) {
      filterProducts(selectedCategory, sortBy);
    }
  }, [searchTerm, searchResults, products]);

  const filterProducts = (category, sort) => {
    let filtered = category === 'All' 
      ? [...products] 
      : products.filter(product => product.category === category);
    
    // Sort products
    filtered.sort((a, b) => {
      switch(sort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });
    
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterProducts(category, sortBy);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    filterProducts(selectedCategory, sort);
  };

  const addToCart = (product) => {
    // Implement add to cart functionality
    console.log('Added to cart:', product);
    // You can dispatch a custom event or update cart context here
    const event = new CustomEvent('cartUpdate', { 
      detail: { 
        action: 'add', 
        product,
        count: cartCount + 1 // You'll need to manage cart count state
      } 
    });
    window.dispatchEvent(event);
  };

  if (isSearching) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-gray-600 mb-8">Browse our complete collection of authentic Indian products</p>

      {/* Search results indicator */}
      {searchTerm && (
        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <p className="text-green-800">
            {filteredProducts.length > 0 
              ? `Showing ${filteredProducts.length} results for "${searchTerm}"`
              : `No results found for "${searchTerm}"`
            }
          </p>
          <button 
            onClick={() => window.history.back()} 
            className="text-green-600 hover:text-green-800 mt-2"
          >
            ← Back to all products
          </button>
        </div>
      )}

      {/* Filters and sorting */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-600 text-sm">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="name">Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Products grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                <p className="text-gray-700 text-sm mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between mb-3">
                  <p className="text-green-600 font-bold">₹{product.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;