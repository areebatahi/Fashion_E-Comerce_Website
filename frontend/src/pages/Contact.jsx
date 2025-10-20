import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-pink-50 px-6 py-12 text-gray-800">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-3">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600">
          Have a question or need support? We’d love to hear from you.
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Contact Form */}
        <motion.form
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between h-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-6 bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info Card */}
        <motion.div
          className="bg-pink-100 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image Section */}
          <div className="h-56 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
              alt="Contact Zara Fashion"
              className="w-full h-60 md:h-auto object-cover"
            />

          </div>

          {/* Info Section */}
          <div className="flex-1 flex flex-col justify-center p-8 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-pink-600 text-2xl" />
              <p className="text-lg">+92 300 1234567</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaEnvelope className="text-pink-600 text-2xl" />
              <p className="text-lg">support@zarafashion.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-pink-600 text-2xl" />
              <p className="text-lg">Karachi, Pakistan</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
