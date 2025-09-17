import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100" >
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4  pt-35 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Create an <span className="text-[#475E2A]">Account</span>
          </h1>
          <p className="text-gray-500 text-center mt-2 mb-8">
            Join us and start your journey today!
          </p>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-[#475E2A] focus:outline-none"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-[#475E2A] focus:outline-none"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:ring-2 focus:ring-[#475E2A] focus:outline-none"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-[#475E2A] focus:outline-none"
          />

          {/* Sign Up Button */}
          <button className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-md transition">
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition">
              <FcGoogle className="text-xl" />
              <span className="font-medium text-gray-700">Sign up with Google</span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition">
              <FaFacebookF className="text-blue-600 text-lg" />
              <span className="font-medium text-gray-700">Sign up with Facebook</span>
            </button>
          </div>

          {/* Redirect to Sign In */}
          <p className="text-gray-700 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#DB4444] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      
    </div>
  );
}

export default SignUp;
