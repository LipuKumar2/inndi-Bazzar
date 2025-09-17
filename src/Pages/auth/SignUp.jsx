import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [currentStep, setCurrentStep] = useState(1); // 1: Basic info, 2: OTP, 3: Password
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    
    if (!formData.otp) {
      newErrors.otp = 'OTP is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!agreed) {
      newErrors.agreed = 'You must agree to the terms and conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = async () => {
    if (!validateStep1()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/auth/user/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          purpose: 'register'
        }),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (data.success) {
        setOtpSent(true);
        setCurrentStep(2);
        setErrors({});
      } else {
        setErrors({ submit: data.message });
      }
    } catch (error) {
      setErrors({ submit: 'Failed to send OTP. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!validateStep2()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/auth/user/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          otp: formData.otp,
          purpose: 'register'
        }),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (data.success) {
        setOtpVerified(true);
        setCurrentStep(3);
        setErrors({});
      } else {
        setErrors({ submit: data.message });
      }
    } catch (error) {
      setErrors({ submit: 'Failed to verify OTP. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegistration = async () => {
    if (!validateStep3()) return;
    
    setIsLoading(true);
    try {
      // Create a copy of formData without the otp field
      const { otp, ...registrationData } = formData;
      
      const response = await fetch('http://localhost:5000/auth/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
        credentials: 'include'
      });
      
      const data = await response.json();
      
      if (data.success) {
        navigate('/');
      } else {
        setErrors({ submit: data.message });
      }
    } catch (error) {
      setErrors({ submit: 'An error occurred during registration. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Based on current step, call the appropriate function
    if (currentStep === 1) {
      await handleSendOtp();
    } else if (currentStep === 2) {
      await handleVerifyOtp();
    } else if (currentStep === 3) {
      await handleRegistration();
    }
  };

  const handleGoogleSignup = () => {
    try {
      setIsLoading(true);
      setErrors({});
      window.location.href = 'http://localhost:5000/auth/user/google';
    } catch (err) {
      console.error('Google signup error:', err);
      setErrors({ submit: 'Failed to initiate Google signup. Please try again.' });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 via-white to-green-100">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 pt-35 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 sm:p-10">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Create an <span className="text-[#475E2A]">Account</span>
          </h1>
          <p className="text-gray-500 text-center mt-2 mb-8">
            {currentStep === 1 && "Enter your basic information to get started"}
            {currentStep === 2 && "Verify your email with the OTP sent to you"}
            {currentStep === 3 && "Set your password and complete registration"}
          </p>

          {errors.submit && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-70"
                >
                  {isLoading ? 'Sending OTP...' : 'Send Verification OTP'}
                </button>
              </>
            )}

            {/* Step 2: OTP Verification */}
            {currentStep === 2 && (
              <>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4 text-center">
                    We've sent a verification code to <span className="font-semibold">{formData.email}</span>
                  </p>
                  <input
                    type="text"
                    name="otp"
                    placeholder="Enter OTP"
                    value={formData.otp}
                    onChange={handleChange}
                    className={`w-full border ${errors.otp ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none`}
                  />
                  {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-70"
                >
                  {isLoading ? 'Verifying...' : 'Verify OTP'}
                </button>

                <button 
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-full mt-3 text-[#475E2A] font-semibold py-3 rounded-lg border border-[#475E2A] transition"
                >
                  Back to Edit Email
                </button>
              </>
            )}

            {/* Step 3: Password Setup */}
            {currentStep === 3 && (
              <>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`w-full border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none`}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                <div className="mb-4 relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:outline-none`}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-3.5 text-gray-500"
                    onClick={() => setShowConfirm(!showConfirm)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </button>
                  {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                </div>

                <div className="mb-6 flex items-start">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    checked={agreed}
                    onChange={() => setAgreed(!agreed)}
                    className="mt-1 mr-2"
                  />
                  <label htmlFor="agreeTerms" className="text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-[#475E2A] hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-[#475E2A] hover:underline">Privacy Policy</Link>
                  </label>
                </div>
                {errors.agreed && <p className="text-red-500 text-sm mt-1 mb-4">{errors.agreed}</p>}

                <button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#475E2A] hover:bg-[#3a4b22] text-white font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-70"
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </>
            )}
          </form>

          {/* Only show social login options on first step */}
          {currentStep === 1 && (
            <>
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
                  onClick={handleGoogleSignup}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition disabled:opacity-70"
                >
                  <FcGoogle className="text-xl" />
                  <span className="font-medium text-gray-700">Sign up with Google</span>
                </button>
                <button 
                  type="button"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition disabled:opacity-70"
                >
                  <FaFacebookF className="text-blue-600 text-lg" />
                  <span className="font-medium text-gray-700">Sign up with Facebook</span>
                </button>
              </div>
            </>
          )}

          {/* Redirect to Sign In */}
          <p className="text-gray-700 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[#475E2A] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;