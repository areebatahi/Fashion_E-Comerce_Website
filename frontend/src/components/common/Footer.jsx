import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h3 className="text-white font-bold">ZaraFashion</h3>
          <p className="text-sm mt-2">Handmade & curated fashion accessories.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Shop</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Earrings</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Support</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Contact</h4>
          <p className="text-sm mt-2">support@zara-fashion.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} ZaraFashion. All rights reserved.</div>
    </footer>
  )
}
