import React, { useState } from "react";
import { Mail, Send, CheckCircle, Gift } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would make an API call here
      console.log("Subscribed with email:", email);
      setIsSubscribed(true);
    } catch (err) {
      setError("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setEmail("");
    setIsSubscribed(false);
    setError("");
  };

  if (isSubscribed) {
    return (
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to the IndiBazzar Family!
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Thank you for subscribing with <span className="font-semibold text-green-600">{email}</span>. 
              You'll receive our next newsletter with exclusive offers.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-6 flex items-center justify-center">
              <Gift className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-green-700 font-medium">
                Use code <code className="bg-green-200 px-2 py-1 rounded">WELCOME10</code> for 10% off your first order
              </span>
            </div>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 shadow-md transition-colors duration-300"
            >
              Subscribe Another Email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Stay Updated with IndiBazzar!
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to our newsletter for exclusive deals, seasonal offers, and health tips.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 font-bold">%</span>
            </div>
            <p className="text-sm font-medium">Exclusive Discounts</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 font-bold">✨</span>
            </div>
            <p className="text-sm font-medium">Early Access</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-green-600 font-bold">🌱</span>
            </div>
            <p className="text-sm font-medium">Health Tips</p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="bg-white rounded-2xl shadow-lg p-1 max-w-2xl mx-auto mb-4"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="relative flex-1 w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="w-full pl-12 pr-4 py-4 rounded-full outline-none text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-green-300 transition"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 sm:mt-0 sm:ml-2 px-6 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 disabled:bg-green-400 shadow-md transition-colors duration-300 flex items-center justify-center min-w-[140px]"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </>
              )}
            </button>
          </div>
        </form>

        {error && (
          <div className="max-w-2xl mx-auto mb-4">
            <p className="text-red-500 text-sm bg-red-50 py-2 px-4 rounded-lg">{error}</p>
          </div>
        )}

        {/* Privacy note */}
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          We respect your privacy. Unsubscribe at any time. No spam, just the good stuff.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;