import React, { useState } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);

  const categories = [
    "Spices & Grains",
    "Dry Fruits",
    "Exotic Fruits",
    "Handicrafts & Textiles",
    "Wellness & Oils",
    "Beverages",
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center h-20 px-4 md:px-16 lg:px-24 relative">
        {/* Logo */}
        <a
          href="/"
          className="text-3xl font-bold text-green-600 absolute left-0 ml-4 md:ml-8 hover:text-green-700 transition-transform transform hover:scale-105"
        >
          InndiBazzar
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 mx-auto">
          {["Home", "About", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group text-gray-700 font-medium hover:text-green-600 transition"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 group-hover:w-full transition-all"></span>
            </a>
          ))}

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onMouseEnter={() => setCategoriesOpen(true)}
              onMouseLeave={() => setCategoriesOpen(false)}
              className="flex items-center gap-1 text-gray-700 font-medium hover:text-green-600 transition"
            >
              Categories <FiChevronDown />
            </button>

            {categoriesOpen && (
              <div
                onMouseEnter={() => setCategoriesOpen(true)}
                onMouseLeave={() => setCategoriesOpen(false)}
                className="absolute top-10 left-0 bg-white border shadow-lg rounded-xl py-3 w-60 z-50 animate-fade-in"
              >
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-green-50 via-green-100 to-green-50 transition rounded-lg"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Search, Cart, Login */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          {/* Search */}
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 gap-2 transition shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-green-400">
            <input
              type="text"
              placeholder="Search products"
              className="outline-none bg-transparent w-48 placeholder-gray-500"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Cart */}
          <div className="relative cursor-pointer group">
            <FiShoppingCart className="text-2xl text-green-600 hover:text-green-700 transition" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              3
            </span>
            <div className="absolute right-0 top-10 hidden group-hover:block bg-white border shadow-lg w-64 rounded-xl p-4 z-50 transition-transform transform hover:scale-105">
              <p className="font-semibold mb-2">Cart Items</p>
              <p className="text-gray-600 text-sm">You have 3 items in your cart</p>
              <button className="mt-3 w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-2 rounded-full hover:scale-105 transform transition">
                Checkout
              </button>
            </div>
          </div>

          {/* Login */}
          <button className="px-6 py-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full transition transform hover:scale-105 shadow-md font-semibold">
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-green-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white w-full px-6 py-6 border-t border-gray-200 flex flex-col gap-4 animate-slide-down">
          {["Home", "About", "Contact"].map((item) => (
            <a key={item} href="#" className="hover:text-green-600 transition font-medium">
              {item}
            </a>
          ))}

          {/* Mobile Categories */}
          <div>
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="flex justify-between items-center w-full font-medium text-gray-700 hover:text-green-600 transition"
            >
              Categories <FiChevronDown />
            </button>
            {categoriesOpen && (
              <div className="flex flex-col mt-2 gap-1 pl-4">
                {categories.map((cat) => (
                  <a
                    key={cat}
                    href="#"
                    className="text-gray-700 hover:text-green-600 transition"
                  >
                    {cat}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Search */}
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 gap-2 mt-2">
            <input
              type="text"
              placeholder="Search products"
              className="outline-none bg-transparent w-full placeholder-gray-500"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Mobile Cart */}
          <div className="flex items-center justify-between mt-2">
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-2xl text-green-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>
            <button className="px-5 py-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full transition font-semibold">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 