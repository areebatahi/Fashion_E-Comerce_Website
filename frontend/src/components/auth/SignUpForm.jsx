import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm"
      >
        {/* Logo / Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create your <span className="text-pink-500">ZaraFashion</span> Account
        </h2>

        {/* Form */}
        <form className="space-y-3">
          {/* Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Full Name</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 relative">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                required
                className="w-full outline-none text-gray-700"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" required className="accent-pink-500" />
            <p>
              I agree to the{" "}
              <a href="#" className="text-pink-500 hover:underline">
                Terms & Conditions
              </a>
            </p>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account? */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-pink-500 font-medium hover:underline">
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignUpForm;
