import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2, FiShoppingCart } from "react-icons/fi";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [message, setMessage] = useState("");

  // Load wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  // Save wishlist when updated
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    setMessage("Removed from wishlist ❌");
    setTimeout(() => setMessage(""), 2000);
  };

  const moveToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    storedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(storedCart));

    // update cart count in Navbar
    window.dispatchEvent(
      new CustomEvent("cartUpdate", { detail: { count: storedCart.length } })
    );

    removeFromWishlist(product.id);
    setMessage("Moved to cart 🛒");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="pt-28 px-4 sm:px-6 lg:px-12 bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mb-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        / <span className="text-[#475E2A] font-semibold">Wishlist</span>
      </p>

      <h1 className="text-3xl font-bold text-[#475E2A] mb-10">My Wishlist</h1>

      {/* Toast Message */}
      {message && (
        <div className="fixed top-20 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
          {message}
        </div>
      )}

      {wishlist.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4208/4208492.png"
            alt="Empty Wishlist"
            className="w-28 h-28 mb-6 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-gray-500 mb-6">
            Start exploring and add your favorite items!
          </p>
          <Link
            to="/"
            className="bg-[#475E2A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#3a4b22] transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        // Wishlist Items
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="group border rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image || "https://via.placeholder.com/300x200"}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col h-full">
                <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                  {item.name}
                </h2>
                <p className="text-[#475E2A] font-bold mt-1">₹{item.price}</p>

                <div className="flex flex-col sm:flex-row gap-3 mt-5">
                  <button
                    onClick={() => moveToCart(item)}
                    className="flex items-center justify-center gap-2 bg-[#475E2A] text-white px-4 py-2 rounded-lg hover:bg-[#3a4b22] transition-colors w-full font-medium"
                  >
                    <FiShoppingCart /> Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="flex items-center justify-center gap-2 text-red-600 hover:text-white hover:bg-red-500 transition-colors px-4 py-2 rounded-lg border border-red-300 w-full font-medium"
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
