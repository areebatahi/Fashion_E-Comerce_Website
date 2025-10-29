import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [] // {id, name, price, image, qty}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const found = state.items.find(i => i.id === item.id)
      if (found) found.qty += 1
      else state.items.push({ ...item, qty: 1 })
    },
    removeFromCart(state, action) {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    setQty(state, action) {
      const { id, qty } = action.payload
      const it = state.items.find(i => i.id === id)
      if (it) it.qty = Math.max(1, qty)
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, setQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
