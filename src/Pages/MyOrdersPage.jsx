import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow px-6 md:px-16 pt-40 pb-16 bg-gray-50">
        {/* Breadcrumb */}
        <p className="text-gray-500 text-sm mb-6">
          <Link to="/" className="hover:text-[#475E2A] transition">
            Home
          </Link>{" "}
          / <span className="text-[#475E2A]">My Orders</span>
        </p>

        <h1 className="text-2xl font-semibold text-[#475E2A] mb-6">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="text-center bg-white shadow-md rounded-lg p-8">
            <p className="text-gray-600 mb-4">You have no orders yet.</p>
            <Link
              to="/categories"
              className="bg-[#475E2A] text-white px-6 py-2 rounded-lg hover:bg-[#3a4b22] transition"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left text-gray-700">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Items</th>
                  <th className="py-3 px-4">Total</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4 font-medium">{order.id}</td>
                    <td className="py-3 px-4">{order.date}</td>
                    <td className="py-3 px-4">
                      {order.items.map((item, idx) => (
                        <p key={idx} className="text-sm text-gray-700">
                          {item.name} × {item.quantity}
                        </p>
                      ))}
                    </td>
                    <td className="py-3 px-4">₹{order.total}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Shipped"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyOrdersPage;
