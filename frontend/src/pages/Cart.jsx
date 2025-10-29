import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, setQty, clearCart } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'

function Cart(){
  const items = useSelector(s => s.cart.items)
  const dispatch = useDispatch()

  const total = items.reduce((acc, i) => {
    const num = Number(String(i.price).replace(/[^0-9.-]+/g, ''))
    return acc + num * i.qty
  }, 0)

  if(items.length === 0) return (
    <section className="py-20 text-center">
      <h2 className="text-2xl font-bold">Your cart is empty</h2>
      <Link to="/shop" className="mt-4 inline-block bg-brand-500 text-white px-4 py-2 rounded">Shop now</Link>
    </section>
  )

  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {items.map(it=> (
          <div key={it.id} className="bg-white p-4 rounded-xl shadow flex gap-4 items-center">
            <img src={it.image} alt={it.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <div className="font-semibold">{it.name}</div>
              <div className="text-brand-500 font-bold">{it.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <input type="number" min="1" value={it.qty} onChange={(e)=> dispatch(setQty({id:it.id, qty: Number(e.target.value)}))} className="w-20 border rounded px-2 py-1"/>
              <button onClick={()=> dispatch(removeFromCart(it.id))} className="px-3 py-1 border rounded">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <div className="text-lg font-semibold">Total: ${total.toFixed(2)}</div>
        <div className="mt-3 flex justify-end gap-3">
          <button onClick={()=> dispatch(clearCart())} className="px-4 py-2 border rounded">Clear</button>
          <Link to="/checkout" className="bg-brand-500 text-white px-4 py-2 rounded">Checkout</Link>
        </div>
      </div>
    </section>
  )
}
export default Cart