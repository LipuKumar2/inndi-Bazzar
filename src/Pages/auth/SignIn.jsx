import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    email: "", 
    password: "" 
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value 
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    
    try {
      console.log("Login Data:", formData);

      const response = await fetch("http://localhost:5000/auth/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Login failed");
      }

      const data = await response.json();
      console.log("Login success:", data);
      
      // Store user data (adjust based on your response structure)
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      
      // Navigate to home/dashboard
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);
      setErrors({ submit: error.message || "Login Failed. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    try {
      setLoading(true);
      setErrors({});
      // Redirect to Google OAuth endpoint
      window.location.href = 'http://localhost:5000/auth/user/google';
    } catch (err) {
      console.error('Google login error:', err);
      setErrors({ submit: 'Failed to initiate Google login. Please try again.' });
      setLoading(false);
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
          {errors.submit && (
            <div className="bg-red-100 text-red-600 text-sm p-2 rounded-md mt-4">
              {errors.submit}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none transition`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none transition`}
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

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
              disabled={loading}
              className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
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
            <button 
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 hover:shadow-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FcGoogle className="text-xl" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
            <button 
              className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 hover:shadow-md transition"
            >
              <FaFacebookF className="text-blue-600 text-lg" />
              <span className="font-medium text-gray-700">
                Continue with Facebook
              </span>
            </button>
          </div>

          {/* Redirect to Sign Up */}
          <p className="text-gray-700 text-center mt-6">
            Don't have an account?{" "}
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