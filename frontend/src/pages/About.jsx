import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white text-gray-800 px-6 py-16 flex flex-col items-center">
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       <img
  src="https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80"
  alt="About Zara Fashion"
  className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
/>

        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            About Zara Fashion
          </h2>
          <p className="text-lg mb-4 leading-relaxed">
            Welcome to <span className="font-semibold">Zara Fashion</span>, your
            go-to destination for trendy, elegant, and affordable fashion. We
            bring you the latest styles with comfort and confidence — designed
            for everyone who loves fashion with a purpose.
          </p>
          <p className="text-lg leading-relaxed">
            From everyday essentials to special occasion outfits, Zara Fashion
            offers quality, variety, and unique designs. We believe in empowering
            individuals through style.
          </p>
          <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition duration-300">
            Shop Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
