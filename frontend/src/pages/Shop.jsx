import React, {useState} from 'react'
import products from '../data/products'
import ProductCard from '../components/product/ProductCard'

function Shop(){
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? products : products.filter(p => p.category === filter)

  return (
    <section className="py-12 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Shop</h2>
      <div className="flex gap-3 mb-6">
        {['all','necklaces','rings','earrings','bracelets'].map(f=>(
          <button key={f} onClick={()=>setFilter(f)} className={`px-4 py-2 rounded ${filter===f? 'bg-brand-500 text-white':'bg-white'}`}>{f}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {list.map(p=> <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
export default Shop