import React from 'react'
import { FaShippingFast, FaGem, FaUndo } from 'react-icons/fa'

function Features(){
  const items = [
    {icon:<FaShippingFast/>, title:'Free Shipping', desc:'On orders $50+'},
    {icon:<FaUndo/>, title:'Easy Returns', desc:'14 day returns'},
    {icon:<FaGem/>, title:'Premium Quality', desc:'Handmade pieces'}
  ]
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((it,idx)=>(
          <div key={idx} className="bg-white rounded-2xl p-6 shadow text-center">
            <div className="text-3xl text-brand-500">{it.icon}</div>
            <h4 className="mt-3 font-semibold">{it.title}</h4>
            <p className="text-sm text-gray-500 mt-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Features