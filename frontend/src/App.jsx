import React from 'react'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import AppRoutes from './routes/AppRoutes'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
