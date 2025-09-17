// src/Pages/SearchResults.jsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { searchResults, isSearching, searchProducts } = useSearch();
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      const foundResults = searchProducts(query);
      setResults(foundResults || []);
    }
  }, [query, searchProducts]);

  if (isSearching) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-16 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">
        {query ? `Search Results for "${query}"` : 'Search Products'}
      </h1>
      
      {results.length === 0 && query ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            No products found for "{query}"
          </p>
          <p className="text-gray-400">Try different keywords like "spices", "dry fruits", or "oils"</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Enter a search term to find products</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">{results.length} product(s) found</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img 
                    src={product.image || '/assets/placeholder-product.jpg'} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.category}</p>
                  <p className="text-green-600 font-bold mt-2">₹{product.price}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm">
                      Add to Cart
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;