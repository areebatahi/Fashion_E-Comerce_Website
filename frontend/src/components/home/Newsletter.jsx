import React from 'react'
function Newsletter(){
  return (
    <section className="py-8 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h4 className="text-xl font-bold">Subscribe for updates</h4>
        <p className="mt-2">Get latest offers and new arrivals</p>
        <form className="mt-4 flex justify-center gap-2">
          <input className="px-3 py-2 rounded-l-md text-gray-800" placeholder="Enter your email" />
          <button className="bg-black px-4 py-2 rounded-r-md">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter