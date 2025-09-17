import React, { useState, useEffect } from "react";
import {
  FiShoppingBag,
  FiPlus,
  FiMinus,
  FiTrash2,
  FiArrowLeft,
  FiShoppingCart,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; // ⬅️ Added useNavigate
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ⬅️ initialize navigate

  // Load cart items from localStorage
  useEffect(() => {
    const loadCartItems = () => {
      try {
        const savedCart = localStorage.getItem("cartItems");
        if (savedCart) {
          const parsedCart = JSON.parse(savedCart);
          setCartItems(Array.isArray(parsedCart) ? parsedCart : []);
        }
      } catch (error) {
        console.error("Error loading cart items:", error);
        setCartItems([]);
      } finally {
        setLoading(false);
      }
    };

    loadCartItems();
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      // Update the cart count in the navbar by dispatching an event
      const cartUpdateEvent = new CustomEvent("cartUpdate", {
        detail: { count: cartItems.length },
      });
      window.dispatchEvent(cartUpdateEvent);
    }
  }, [cartItems, loading]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 0 && subtotal < 499 ? 99 : 0;
  const discount = subtotal > 1999 ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal + shipping - discount;

  // Calculate savings message
  const getSavingsMessage = () => {
    if (subtotal < 499) {
      return `Add ₹${499 - subtotal} more for free shipping!`;
    }
    if (discount > 0) {
      return `You saved ₹${discount} on this order!`;
    }
    return "You qualify for free shipping!";
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading your cart...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-32">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center text-green-600 hover:text-green-700 transition"
              >
                <FiArrowLeft className="mr-2" /> Continue Shopping
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 ml-6 flex items-center">
                <FiShoppingBag className="mr-3 text-green-600" /> Your Cart
                {cartItems.length > 0 && (
                  <span className="ml-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "item" : "items"}
                  </span>
                )}
              </h1>
            </div>

            {cartItems.length > 0 && (
              <button
                onClick={clearCart}
                className="flex items-center text-red-600 hover:text-red-700 transition text-sm font-medium"
              >
                <FiTrash2 className="mr-2" />
                Clear Cart
              </button>
            )}
          </div>

          {cartItems.length === 0 ? (
            // Empty Cart
            <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-md mx-auto">
              <FiShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Your cart is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link
                to="/categories"
                className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 mb-6">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">🎉</span>
                    <p className="text-green-800 font-medium">
                      {getSavingsMessage()}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Cart Items ({cartItems.length})
                    </h2>
                    <span className="text-sm text-gray-500">
                      Total: ₹{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-6 flex flex-col sm:flex-row items-start gap-4 hover:bg-gray-50 transition-colors"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-medium text-gray-800 truncate">
                            {item.name}
                          </h3>
                          <p className="text-green-600 font-semibold mt-1">
                            ₹{item.price.toLocaleString()}
                          </p>

                          <div className="flex items-center mt-4 flex-wrap gap-3">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>

                              <span className="px-4 py-2 font-medium min-w-[2rem] text-center">
                                {item.quantity}
                              </span>

                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center text-red-600 hover:text-red-700 transition-colors text-sm"
                            >
                              <FiTrash2 className="mr-1 w-4 h-4" />
                              Remove
                            </button>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <p className="text-lg font-semibold text-gray-800">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.quantity} × ₹{item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 sticky top-28">
                  <h2 className="text-xl font-semibold text-gray-800 mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">
                        ₹{subtotal.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping > 0 ? `₹${shipping}` : "Free"}
                      </span>
                    </div>

                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount (10%)</span>
                        <span className="font-medium">
                          -₹{discount.toLocaleString()}
                        </span>
                      </div>
                    )}

                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-gray-800">
                          Total
                        </span>
                        <span className="text-xl font-bold text-green-600">
                          ₹{total.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Inclusive of all taxes
                      </p>
                    </div>
                  </div>

                  {/* ✅ Updated Button */}
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 
                               hover:from-green-600 hover:to-green-700 text-white py-3 
                               rounded-xl font-semibold shadow-lg hover:shadow-xl 
                               transition-all mt-6 transform hover:-translate-y-0.5"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="text-center mt-4">
                    <Link
                      to="/categories"
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Continue Shopping
                    </Link>
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <span className="text-green-500 mr-2">🔒</span>
                        <span className="text-xs text-gray-600">
                          Secure Checkout
                        </span>
                      </div>
                      <div className="flex gap-2 justify-center">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          SSL
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          256-bit
                        </span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Encrypted
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
