import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Example cart summary (replace with context or props)
  const cartItems = [
    { id: 1, name: "Organic Spices Pack", price: 250, quantity: 2 },
    { id: 2, name: "Fresh Fruits Basket", price: 500, quantity: 1 },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 50;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = () => {
    if (
      !shippingInfo.fullName ||
      !shippingInfo.email ||
      !shippingInfo.phone ||
      !shippingInfo.address
    ) {
      alert("Please fill all required shipping fields!");
      return;
    }

    console.log("Order placed:", { shippingInfo, paymentMethod, cartItems });
    alert("✅ Your order has been placed successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow px-6 md:px-16 pt-40 pb-16 bg-gray-50">
        {/* ✅ Breadcrumb with Links */}
        <p className="text-gray-500 text-sm mb-6">
          <Link to="/" className="hover:text-[#475E2A] transition">
            Home
          </Link>{" "}
          /{" "}
          <Link to="/cart" className="hover:text-[#475E2A] transition">
            Cart
          </Link>{" "}
          / <span className="text-[#475E2A]">Checkout</span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Info */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-[#475E2A] mb-6">
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={shippingInfo.fullName}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={shippingInfo.email}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone *"
                value={shippingInfo.phone}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={shippingInfo.state}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
              />
            </div>
            <textarea
              name="address"
              placeholder="Full Address *"
              value={shippingInfo.address}
              onChange={handleInputChange}
              className="mt-6 border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-[#475E2A]"
            ></textarea>

            {/* Payment Options */}
            <h2 className="text-xl font-semibold text-[#475E2A] mt-10 mb-4">
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Cash on Delivery (COD)
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                Credit / Debit Card
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                UPI / Netbanking
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-md rounded-lg p-6 h-fit">
            <h2 className="text-xl font-semibold text-[#475E2A] mb-6">
              Order Summary
            </h2>
            <ul className="divide-y divide-gray-200 mb-6">
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between py-3">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Shipping</span>
              <span>₹{shipping}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg text-[#475E2A] mb-6">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white py-3 rounded-lg font-medium transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutPage;
