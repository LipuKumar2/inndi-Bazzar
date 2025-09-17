import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Fake authentication ---
    if (email === "test@gmail.com" && password === "123456") {
      // Save login state (localStorage)
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userEmail", email);

      // Redirect to profile/account page
      navigate("/account");
    } else {
      setError("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-white via-green-50 to-green-100">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 pt-35 sm:px-6 lg:px-8 py-20">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 sm:p-10">
          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome <span className="text-[#475E2A]">Back</span>
            </h1>
            <div className="w-16 h-1 bg-[#475E2A] rounded-full mx-auto mt-2"></div>
            <p className="text-gray-500 mt-4">
              Sign in to continue your journey
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <p className="bg-red-100 text-red-600 text-sm p-2 rounded-md mt-4">
              {error}
            </p>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-8 mb-4 focus:ring-2 focus:ring-[#475E2A] focus:outline-none transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:ring-2 focus:ring-[#475E2A] focus:outline-none transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Forgot password link */}
            <div className="flex justify-end mb-6">
              <Link
                to="/forgot-password"
                className="text-sm text-[#DB4444] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 hover:shadow-md transition">
              <FcGoogle className="text-xl" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 hover:shadow-md transition">
              <FaFacebookF className="text-blue-600 text-lg" />
              <span className="font-medium text-gray-700">
                Continue with Facebook
              </span>
            </button>
          </div>

          {/* Redirect to Sign Up */}
          <p className="text-gray-700 text-center mt-6">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#475E2A] font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignIn;
