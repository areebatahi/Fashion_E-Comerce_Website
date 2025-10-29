import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

function Login(){
  const [email, setEmail] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    // fake login: would be replaced with real API
    dispatch(login({ id:1, name: 'User', email }))
    navigate('/')
  }

  return (
    <section className="py-20 max-w-md mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Email" required />
        <input type="password" className="w-full border rounded px-3 py-2" placeholder="Password" required />
        <button className="w-full bg-brand-500 text-white py-2 rounded">Login</button>
      </form>
    </section>
  )
}

export default Login