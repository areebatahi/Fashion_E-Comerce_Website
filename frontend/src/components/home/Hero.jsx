import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-l from-white to-amber-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Handcrafted jewelry to{' '}
            <span className="text-amber-600">light up</span> your every day.
          </h1>
          <p className="mt-4 text-gray-600">
            Exquisite <span className="text-amber-600">handmade</span> pieces,
            ethically sourced materials. Free shipping on orders above $50.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="/shop"
              className="bg-gradient-to-r from-amber-500 to-amber-700 hover:from-amber-600 hover:to-amber-800 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href="#new"
              className="bg-white text-amber-600 hover:bg-gradient-to-r hover:from-amber-600 hover:to-amber-800 hover:text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
            >
              New Arrivals
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg bg-amber-50">
            <img
              src=".././public/images/hero_jewllery.jpeg"
              alt="Handcrafted jewelry"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
