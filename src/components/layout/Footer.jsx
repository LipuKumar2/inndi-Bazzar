import React from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedin, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaLeaf,
  FaShippingFast,
  FaShieldAlt,
  FaRecycle
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4 ">
      {/* Trust Badges - More Compact */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="text-center p-2 bg-gray-800 rounded-lg">
            <FaLeaf className="text-[#475E2A] text-lg mx-auto mb-1" />
            <h4 className="font-medium text-xs">100% Organic</h4>
          </div>
          <div className="text-center p-2 bg-gray-800 rounded-lg">
            <FaShippingFast className="text-blue-400 text-lg mx-auto mb-1" />
            <h4 className="font-medium text-xs">Free Shipping</h4>
          </div>
          <div className="text-center p-2 bg-gray-800 rounded-lg">
            <FaShieldAlt className="text-yellow-400 text-lg mx-auto mb-1" />
            <h4 className="font-medium text-xs">Secure Payment</h4>
          </div>
          <div className="text-center p-2 bg-gray-800 rounded-lg">
            <FaRecycle className="text-purple-400 text-lg mx-auto mb-1" />
            <h4 className="font-medium text-xs">Easy Returns</h4>
          </div>
        </div>
      </div>

      {/* Main Footer Content - More Compact */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {/* Brand Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center mb-2">
            <div className="bg-green-600 p-1.5 rounded-md mr-2">
              <span className="text-white font-bold text-lg">IB</span>
            </div>
            <h2 className="text-xl font-bold text-green-600">InndiBazzar</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-2">
            Authentic Indian spices, dry fruits, and handcrafted treasures. Fresh from local farms.
          </p>
          <div className="flex gap-1">
            {[
              { icon: FaFacebookF, color: "hover:text-blue-400", label: "Facebook" },
              { icon: FaInstagram, color: "hover:text-pink-400", label: "Instagram" },
              { icon: FaTwitter, color: "hover:text-blue-300", label: "Twitter" },
              { icon: FaLinkedin, color: "hover:text-blue-500", label: "LinkedIn" }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className={`bg-gray-800 p-1.5 rounded-full text-gray-300 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                aria-label={social.label}
              >
                <social.icon size={12} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-white">Quick Links</h3>
          <ul className="space-y-1.5">
            {["Home", "About", "Products", "Contact", "Offers", "Blog", "FAQ"].map((link) => (
              <li key={link}>
                <Link 
                  to={`/${link.toLowerCase() === "home" ? "" : link.toLowerCase()}`} 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-white">Categories</h3>
          <ul className="space-y-1.5">
            {[
              "Spices & Grains", 
              "Dry Fruits", 
              "Exotic Fruits", 
              "Handicrafts", 
              "Wellness & Oils"
            ].map((cat) => (
              <li key={cat}>
                <Link 
                  to={`/categories/${cat.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-gray-300 hover:text-green-400 transition-colors duration-200 text-sm"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-sm mb-3 text-white">Contact Info</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-green-400 mt-0.5 mr-2 flex-shrink-0 text-xs" />
              <p className="text-gray-300 text-sm">Unit-4, Madhusudhan Nagar, Bhubaneswar-751001</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-green-400 mr-2 flex-shrink-0 text-xs" />
              <a href="mailto:support@inndibazzar.com" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                support@inndibazzar.com
              </a>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-green-400 mr-2 flex-shrink-0 text-xs" />
              <a href="tel:+919876543210" className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                +91 98765 43210
              </a>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-3">
              <h4 className="font-medium mb-1.5 text-white text-xs">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-2 py-1 bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:ring-1 focus:ring-green-500 text-white placeholder-gray-400 text-sm"
                />
                <button className="bg-[#475E2A] hover:bg-green-700 px-2 py-1 rounded-r transition-colors text-xs">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-gray-400 text-xs">
              &copy; {new Date().getFullYear()} InndiBazzar. All Rights Reserved.
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-gray-400">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-green-400 transition-colors">Shipping</a>
              <a href="#" className="hover:text-green-400 transition-colors">Refunds</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;