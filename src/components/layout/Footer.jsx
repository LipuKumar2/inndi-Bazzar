// src/components/layout/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-300 text-gray-900 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 text-white">IndiBazzar</h2>
          <p className="text-white/90 leading-relaxed">
            Fresh Spices, Dry Fruits, Exotic Fruits, Handicrafts, Wellness & more delivered to your doorstep.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white/70 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-white/70 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white/70 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white/70 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Contact", "Offers"].map((link) => (
              <li key={link}>
                <a href="#" className="text-white/90 hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Categories</h3>
          <ul className="space-y-2">
            {["Spices & Grains", "Dry Fruits", "Exotic Fruits", "Handicrafts & Textiles", "Wellness & Oils", "Beverages"].map((cat) => (
              <li key={cat}>
                <a href="#" className="text-white/90 hover:text-white transition">
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Contact Us</h3>
          <p className="text-white/90 leading-relaxed">123, Market Street, Delhi, India</p>
          <p className="text-white/90 mt-2">
            Email: <a href="mailto:support@indibazzar.com" className="hover:text-white transition">support@indibazzar.com</a>
          </p>
          <p className="text-white/90 mt-2">
            Phone: <a href="tel:+919876543210" className="hover:text-white transition">+91 98765 43210</a>
          </p>
        </div>
      </div>

      <div className="border-t border-white/30 mt-12 pt-6 text-center text-white/70 text-sm">
        &copy; {new Date().getFullYear()} IndiBazzar. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
