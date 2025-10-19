import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/90 backdrop-blur-xl shadow-xl rounded-2xl p-6 w-full max-w-md border border-pink-100"
      >
        {/* Brand / Logo */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Gohira<span className="text-pink-500">Fashion</span>
        </h2>

        {/* Login Form */}
        <form className="space-y-3">

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

          {/* Password */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Password</label>
            <div className="flex items-center border rounded-lg px-3 py-2 relative">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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

          {/* Remember & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember Me
            </label>
            <a href="#" className="text-pink-500 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2.5 rounded-lg hover:bg-pink-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </motion.button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-pink-500 font-medium hover:underline">
            Create one
          </a>
        </p>
      </motion.div>
    </div >
  );
};

export default Login;
