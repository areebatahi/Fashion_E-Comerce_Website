import React from 'react'

function Signup(){ return (
  <section className="py-20 max-w-md mx-auto px-4">
    <h2 className="text-2xl font-bold mb-4">Create account</h2>
    <form className="bg-white p-6 rounded-xl shadow space-y-3">
      <input className="w-full border rounded px-3 py-2" placeholder="Name" />
      <input className="w-full border rounded px-3 py-2" placeholder="Email" />
      <input className="w-full border rounded px-3 py-2" placeholder="Password" />
      <button className="w-full bg-brand-500 text-white py-2 rounded">Sign up</button>
    </form>
  </section>
)}

export default  Signup