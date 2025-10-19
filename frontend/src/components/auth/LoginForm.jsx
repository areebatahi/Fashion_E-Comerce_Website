import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-100 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md"
      >
        {/* Logo / Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Gohira<span className="text-pink-500">Fashion</span>
        </h2>
        <h3 className="text-lg text-center text-gray-500 mb-8">
          Welcome back 👋 Login to continue
        </h3>

        {/* Form */}
        <form className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Email</label>
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaUser className="text-gray-400 mr-2" />
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
            <div className="flex items-center border rounded-lg px-3 py-2">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                required
                className="w-full outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-pink-500" />
              Remember me
            </label>
            <a href="#" className="text-pink-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 transition-all"
          >
            Login
          </button>
        </form>

        {/* Signup link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/signup" className="text-pink-500 font-medium hover:underline">
            Create one
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
