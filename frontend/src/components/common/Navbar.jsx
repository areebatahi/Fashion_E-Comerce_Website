import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHeart, FaShoppingCart, FaUser, FaMoon, FaSun } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../redux/slices/themeSlice'

const Navbar = () => {
  const cartCount = useSelector(s => s.cart.items.reduce((a,b) => a + b.qty, 0))
  const wishlistCount = 0
  const dispatch = useDispatch()
  const dark = useSelector(s => s.theme.dark)

  return (
    <header className="bg-white shadow sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-brand-600">ZaraFashion</Link>

          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({isActive})=> isActive? 'text-gray-900' : 'text-gray-600'}>Home</NavLink>
            <NavLink to="/shop" className={({isActive})=> isActive? 'text-gray-900' : 'text-gray-600'}>Shop</NavLink>
            <NavLink to="/profile" className={({isActive})=> isActive? 'text-gray-900' : 'text-gray-600'}>Profile</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? 'text-gray-900' : 'text-gray-600'}>Contact</NavLink>
          </nav>

          <div className="flex items-center gap-4">
            <button onClick={()=>dispatch(toggleTheme())} className="p-2 rounded hover:bg-gray-100">
              {dark ? <FaSun/> : <FaMoon/>}
            </button>

            <Link to="/wishlist" className="relative p-2">
              <FaHeart className="text-lg text-gray-700" />
              {wishlistCount>0 && <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1">{wishlistCount}</span>}
            </Link>

            <Link to="/cart" className="relative p-2">
              <FaShoppingCart className="text-lg text-gray-700" />
              {cartCount>0 && <span className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full px-1">{cartCount}</span>}
            </Link>

            <Link to="/login" className="p-2"><FaUser className="text-gray-700" /></Link>

            {/* simple mobile menu placeholder */}
            <div className="md:hidden">
              <button className="p-2 rounded hover:bg-gray-100">☰</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
