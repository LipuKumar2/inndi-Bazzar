import React, { useState, useRef, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const accountRef = useRef(null);

  // Close Account dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  const categories = [
    { name: "Spices & Grains", to: "/categories/spices-grains" },
    { name: "Dry Fruits", to: "/categories/dry-fruits" },
    { name: "Exotic Fruits", to: "/categories/exotic-fruits" },
    { name: "Handicrafts & Textiles", to: "/categories/handicrafts-textiles" },
    { name: "Wellness & Oils", to: "/categories/wellness-oils" },
    { name: "Beverages", to: "/categories/beverages" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="flex justify-between items-center h-20 px-4 md:px-16 lg:px-24 relative">
        <Link to="/" className="text-3xl font-bold text-green-600">
          InndiBazzar
        </Link>

        <div className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative group text-gray-700 font-medium hover:text-green-600 transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 group-hover:w-full transition-all"></span>
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-green-600 transition">
              Categories <FiChevronDown />
            </button>
            {categoriesOpen && (
              <div className="absolute top-10 left-0 bg-white border shadow-lg rounded-xl py-3 w-60 z-50 animate-fade-in">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.to}
                    className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-green-50 via-green-100 to-green-50 transition rounded-lg"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 ml-auto">
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 gap-2 transition shadow-sm hover:shadow-md focus-within:ring-2 focus-within:ring-green-400">
            <input
              type="text"
              placeholder="Search products"
              className="outline-none bg-transparent w-48 placeholder-gray-500"
            />
            <FiSearch className="text-gray-500" />
          </div>

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

          <div className="relative" ref={accountRef}>
            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-4 py-2 rounded-full transition hover:scale-105 shadow-md"
            >
              <FaUser />
              <span>Account</span>
              <FiChevronDown />
            </button>

            {accountOpen && (
              <div className="absolute right-0 mt-2 bg-white border shadow-lg rounded-xl py-3 w-56 z-50 animate-slide-down">
                <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">
                  Manage My Account
                </Link>
                <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                  My Orders
                </Link>
                <Link to="/cancellations" className="block px-4 py-2 hover:bg-gray-100">
                  My Cancellations
                </Link>
                <Link to="/reviews" className="block px-4 py-2 hover:bg-gray-100">
                  My Reviews
                </Link>
                <Link to="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden text-3xl text-green-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white w-full px-6 py-6 border-t border-gray-200 flex flex-col gap-4 animate-slide-down">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="hover:text-green-600 transition font-medium"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

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
                  <Link
                    key={cat.name}
                    to={cat.to}
                    className="text-gray-700 hover:text-green-600 transition"
                    onClick={() => setOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center border border-gray-300 rounded-full px-3 py-1 gap-2 mt-2">
            <input
              type="text"
              placeholder="Search products"
              className="outline-none bg-transparent w-full placeholder-gray-500"
            />
            <FiSearch className="text-gray-500" />
          </div>

          <div className="flex items-center justify-between mt-2">
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-2xl text-green-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            <button
              onClick={() => setAccountOpen(!accountOpen)}
              className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white px-5 py-2 rounded-full transition font-semibold"
            >
              <FaUser />
              Account
            </button>
          </div>

          {accountOpen && (
            <div className="flex flex-col mt-2 gap-1 pl-4">
              <Link to="/account" className="text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>
                Manage My Account
              </Link>
              <Link to="/orders" className="text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>
                My Orders
              </Link>
              <Link to="/cancellations" className="text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>
                My Cancellations
              </Link>
              <Link to="/reviews" className="text-gray-700 hover:text-green-600" onClick={() => setOpen(false)}>
                My Reviews
              </Link>
              <Link to="/logout" className="text-red-600 hover:text-green-600" onClick={() => setOpen(false)}>
                Logout
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
