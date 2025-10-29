import React from 'react'
import products from '../../data/products'
import ProductCard from '../../components/product/ProductCard'

function NewArrivals(){
  const arr = products.slice(0,4)
  return (
    <section id="new" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {arr.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}

export default NewArrivals