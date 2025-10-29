import React from 'react'
import { useSelector } from 'react-redux'

function Checkout(){
  const items = useSelector(s => s.cart.items)
  const total = items.reduce((acc,i)=> acc + Number(String(i.price).replace(/[^0-9.-]+/g,'')) * i.qty, 0)

  return (
    <section className="py-12 max-w-3xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <div>
          <h3 className="font-semibold">Order Summary</h3>
          <ul className="mt-2 space-y-1">
            {items.map(it=> <li key={it.id} className="flex justify-between">{it.name} x {it.qty} <span>{it.price}</span></li>)}
          </ul>
        </div>
        <div className="flex justify-between font-semibold">Total <span>${total.toFixed(2)}</span></div>

        <form className="space-y-3">
          <input className="w-full border rounded px-3 py-2" placeholder="Full name" required />
          <input className="w-full border rounded px-3 py-2" placeholder="Address" required />
          <input className="w-full border rounded px-3 py-2" placeholder="Card number" required />
          <div className="text-right">
            <button className="bg-brand-500 text-white px-4 py-2 rounded">Place order</button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default Checkout