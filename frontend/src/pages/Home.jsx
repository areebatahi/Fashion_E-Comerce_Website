import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import NewArrivals from '../components/home/NewArrivals'
import Categories from '../components/home/Categories'
import Testimonials from '../components/home/Testimonials'
import FAQ from '../components/home/FAQ'
import Newsletter from '../components/home/Newsletter'

export default function Home(){
  return (
    <div>
      <Hero />
      <Features />
      <NewArrivals />
      <Categories />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  )
}
