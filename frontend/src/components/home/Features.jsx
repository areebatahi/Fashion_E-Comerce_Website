import React from 'react';
import { FaShippingFast, FaGem, FaUndo } from 'react-icons/fa';

function Features() {
  const items = [
    { icon: <FaShippingFast />, title: 'Free Shipping', desc: 'On orders $50+' },
    { icon: <FaUndo />, title: 'Easy Returns', desc: '14 day returns' },
    { icon: <FaGem />, title: 'Premium Quality', desc: 'Handmade pieces' }
  ];

  return (
    <section className="py-12 bg-gradient-to-l from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 shadow text-center border border-amber-50 hover:shadow-lg transition-all flex align-middle justify-around"
          >
            <div>
              <div className="text-3xl text-amber-500">{it.icon}</div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">{it.title}</h4>
              <p className="text-sm text-gray-500 mt-1">{it.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
