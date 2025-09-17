import React, { useState, useRef, useEffect } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronDown,
  FiUser,
  FiHeart,
  FiPackage,
  FiHome,
  FiInfo,
  FiMail,
  FiGrid
} from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import InndiBazarImg from "../../assets/indi.png";
import { useSearch } from "../../context/SearchContext"; // Import the search context

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(2);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // ✅ check authentication from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const navigate = useNavigate();
  const location = useLocation();
  const profileRef = useRef(null);
  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const { searchProducts } = useSearch(); // Get the search function from context

  // ✅ keep auth state synced with localStorage changes
  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(localStorage.getItem("isLoggedIn") === "true");
    };
    window.addEventListener("storage", checkAuth);
    checkAuth();
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
      if (mobileSearchRef.current && !mobileSearchRef.current.contains(event.target) &&
        !event.target.closest('button')) {
        setMobileSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update cart count dynamically
  useEffect(() => {
    const handleCartUpdate = (event) => {
      setCartCount(event.detail.count);
    };
    window.addEventListener("cartUpdate", handleCartUpdate);
    return () => window.removeEventListener("cartUpdate", handleCartUpdate);
  }, []);

  const isCartPage = location.pathname === "/cart";
  const showCartNotification = cartCount > 0 && !isCartPage;

  const navLinks = [
    { name: "Home", to: "/", icon: <FiHome className="w-4 h-4" /> },
    { name: "About", to: "/about", icon: <FiInfo className="w-4 h-4" /> },
    { name: "Products", to: "/products", icon: <FiGrid className="w-4 h-4" /> },
    { name: "Contact", to: "/contact", icon: <FiMail className="w-4 h-4" /> },
  ];

  const categories = [
    { name: "Spices & Grains", to: "/categories/spices-grains", icon: "🌶️" },
    { name: "Dry Fruits", to: "/categories/dry-fruits", icon: "🥜" },
    { name: "Exotic Fruits", to: "/categories/exotic-fruits", icon: "🍈" },
    { name: "Handicrafts & Textiles", to: "/categories/handicrafts-textiles", icon: "🧵" },
    { name: "Wellness & Oils", to: "/categories/wellness-oils", icon: "💆" },
    { name: "Beverages", to: "/categories/beverages", icon: "🍵" },
  ];

  const handleCartClick = () => {
    navigate("/cart");
    setOpen(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchProducts(searchTerm); // Use the search function from context
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setOpen(false);
      setMobileSearchOpen(false);
    }
  };

  const handleMobileSearchToggle = () => {
    setMobileSearchOpen(!mobileSearchOpen);
    // Focus on the input when opening mobile search
    if (!mobileSearchOpen) {
      setTimeout(() => {
        const mobileSearchInput = document.querySelector('.mobile-search-input');
        if (mobileSearchInput) mobileSearchInput.focus();
      }, 100);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* --- Top Info Bar --- */}
      <div className="hidden md:flex justify-between items-center bg-[#475E2A] text-white text-sm px-4 lg:px-6 py-2">
        <div className="flex items-center space-x-4">
          <span className="flex items-center gap-1">
            <span className="hidden lg:inline">📞</span>
            +91 9876543210
          </span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <span className="hidden lg:inline">✉️</span>
            support@inndibazzar.com
          </span>
        </div>
        <p className="font-medium text-xs sm:text-sm">
          Free Shipping on orders over ₹499
        </p>
      </div>

      {/* --- Main Navbar --- */}
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-2xl text-[#475E2A]"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>

          <Link to="/" className="flex items-center gap-2">
            {/* Add your logo image here */}
            <img
              src={InndiBazarImg}
              alt="InndiBazzar Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-[#475E2A]">
              InndiBazzar
            </span>
          </Link>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex relative items-center w-full max-w-md mx-8" ref={searchRef}>
          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#475E2A] focus:border-transparent outline-none transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#475E2A] transition-colors"
            >
              <FiSearch className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-6">
          {/* Navigation Links */}
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`flex items-center gap-1 font-medium transition ${location.pathname === item.to
                  ? "text-[#475E2A]"
                  : "text-gray-700 hover:text-[#475E2A]"
                }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}

          {/* Cart */}
          <button
            onClick={handleCartClick}
            className="relative p-2 text-gray-700 hover:text-[#475E2A] transition-colors"
          >
            <FiShoppingCart className="w-5 h-5" />
            {showCartNotification && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>

          {/* Profile Section */}
          <div className="relative" ref={profileRef}>
            {!isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/signin"
                  className="bg-[#475E2A] text-white px-4 py-2 rounded-full hover:bg-[#3a4b22] transition-colors text-sm"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="border border-[#475E2A] text-[#475E2A] px-4 py-2 rounded-full hover:bg-[#475E2A] hover:text-white transition-colors text-sm"
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-[#475E2A] text-white px-3 py-2 rounded-full hover:bg-[#3a4b22] transition-colors"
                >
                  <FiUser className="w-4 h-4" />
                  <span className="hidden lg:inline">Profile</span>
                  <FiChevronDown
                    className={`w-3 h-3 transition-transform ${profileOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {profileOpen && (
                  <div className="absolute top-12 right-0 bg-white border shadow-xl rounded-xl py-2 w-52 z-50">
                    <Link
                      to="/account"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FiUser className="w-4 h-4 text-gray-600" />
                      <span>My Account</span>
                    </Link>
                    <Link
                      to="/my-orders"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FiPackage className="w-4 h-4 text-gray-600" />
                      <span>My Orders</span>
                    </Link>
                    <Link
                      to="/wishlist"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm"
                      onClick={() => setProfileOpen(false)}
                    >
                      <FiHeart className="w-4 h-4 text-gray-600" />
                      <span>Wishlist</span>
                    </Link>
                    <div className="border-t my-1"></div>
                    <button
                      onClick={() => {
                        localStorage.removeItem("isLoggedIn"); // ✅ clear auth
                        localStorage.removeItem("userEmail");
                        setIsAuthenticated(false);
                        setProfileOpen(false);
                        navigate("/signin");
                      }}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 text-sm w-full text-left"
                    >
                      <FiX className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Mobile Search and Cart */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={handleMobileSearchToggle}
            className="p-2 text-gray-700 hover:text-[#475E2A] transition-colors"
          >
            <FiSearch className="w-5 h-5" />
          </button>
          <button
            onClick={handleCartClick}
            className="relative p-2 text-gray-700 hover:text-[#475E2A] transition-colors"
          >
            <FiShoppingCart className="w-5 h-5" />
            {showCartNotification && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3" ref={mobileSearchRef}>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="mobile-search-input w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#475E2A] focus:border-transparent outline-none transition-all duration-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#475E2A] transition-colors"
            >
              <FiSearch className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Categories Bar */}
      <div className="hidden md:flex justify-center bg-green-50 border-t border-gray-200 py-2 sticky top-16 z-40">
        <div className="flex gap-4 lg:gap-6 overflow-x-auto px-4 hide-scrollbar">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="flex items-center gap-1 whitespace-nowrap text-sm text-gray-700 hover:text-[#475E2A] transition-colors"
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setOpen(false)}></div>
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img
                src={InndiBazarImg}
                alt="InndiBazzar Logo"
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-[#475E2A]">
                InndiBazzar
              </span>
            </Link>
            <button onClick={() => setOpen(false)} className="text-2xl text-gray-600">
              <FiX />
            </button>
          </div>

          {/* Mobile Search in Drawer */}
          <div className="mb-6">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#475E2A] focus:border-transparent outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiSearch className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 mb-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${location.pathname === item.to
                    ? "bg-[#475E2A] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                  }`}
                onClick={() => setOpen(false)}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-800 mb-4 px-3">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.to}
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <span className="text-lg">{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Profile Actions */}
          <div className="mt-auto space-y-3 pt-6 border-t border-gray-200">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/signin"
                  className="flex items-center gap-3 p-3 rounded-lg bg-[#475E2A] text-white hover:bg-[#3a4b22] transition-colors justify-center"
                  onClick={() => setOpen(false)}
                >
                  <FiUser className="w-5 h-5" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#475E2A] text-[#475E2A] hover:bg-[#475E2A] hover:text-white transition-colors justify-center"
                  onClick={() => setOpen(false)}
                >
                  <span>Sign Up</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/account"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <FiUser className="w-5 h-5" />
                  <span>My Account</span>
                </Link>
                <Link
                  to="/my-orders"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <FiPackage className="w-5 h-5" />
                  <span>My Orders</span>
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  <FiHeart className="w-5 h-5" />
                  <span>Wishlist</span>
                </Link>
                <button
                  onClick={() => {
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("userEmail");
                    setIsAuthenticated(false);
                    setOpen(false);
                    navigate("/signin");
                  }}
                  className="flex items-center gap-3 p-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full"
                >
                  <span>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom CSS for scrollbar hiding */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;