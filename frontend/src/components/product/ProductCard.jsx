import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

function ProductCard({product}){
  const dispatch = useDispatch()
  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-56 object-cover"/>
      </Link>
      <div className="p-4">
        <h4 className="font-medium text-gray-800">{product.name}</h4>
        <div className="text-brand-500 font-bold mt-1">{product.price}</div>
        <div className="mt-3 flex gap-2">
          <button onClick={()=>dispatch(addToCart(product))} className="flex-1 bg-brand-500 text-white py-2 rounded-full">Add to cart</button>
          <Link to={`/product/${product.id}`} className="px-4 py-2 border rounded-full">View</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard