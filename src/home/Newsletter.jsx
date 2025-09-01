// src/sections/Newsletter/Newsletter.jsx
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email!");
    alert(`Thank you for subscribing with ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-r from-teal-500 via-green-500 to-green-600 py-20">
      <div className="max-w-3xl mx-auto text-center px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Stay Updated!
        </h2>
        <p className="text-green-100 mb-12 text-lg">
          Subscribe to our newsletter to receive the latest deals, offers, and updates directly in your inbox.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-white rounded-full shadow-lg px-4 py-3 max-w-2xl mx-auto"
        >
          <div className="relative flex-1 w-full">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-300 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-green-400 text-white font-semibold rounded-full hover:bg-green-500 shadow-md transition"
          >
            Subscribe
          </button>
        </form>

        {/* Optional small note */}
        <p className="text-green-100 text-sm mt-4">
          We respect your privacy. No spam ever.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
