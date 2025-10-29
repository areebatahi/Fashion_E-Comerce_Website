import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

function ProductDetails(){
  const { id } = useParams()
  const product = products.find(p => String(p.id) === id)
  const dispatch = useDispatch()
  if(!product) return <div className="py-20 text-center">Product not found</div>

  return (
    <section className="py-12 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <div className="text-brand-500 font-bold mt-2">{product.price}</div>
        <p className="mt-4 text-gray-600">{product.desc}</p>
        <div className="mt-6 flex gap-4">
          <button onClick={()=>dispatch(addToCart(product))} className="bg-brand-500 text-white px-6 py-2 rounded-full">Add to cart</button>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails