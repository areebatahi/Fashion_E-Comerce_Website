import React from 'react'

function Hero(){
  return (
    <section className="bg-gradient-to-b from-white to-brand-50 py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Wear Confidence — Everyday jewelry for every mood.</h1>
          <p className="mt-4 text-gray-600">Handmade pieces, ethically sourced materials. Free shipping on orders above $50.</p>
          <div className="mt-6 flex gap-4">
            <a href="/shop" className="bg-brand-500 text-white px-6 py-3 rounded-full">Shop Now</a>
            <a href="#new" className="text-gray-700 py-3">New Arrivals</a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg">
            <img src="/images/hero-jewelry.jpg" alt="hero" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero