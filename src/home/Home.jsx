import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './Hero'
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import Offers from './Offers'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import Footer from '../components/layout/Footer'

function Home() {
  return (
    <div>
       <Navbar />
     <Hero />
     <Categories />
     <FeaturedProducts/>
     <Offers />
    <Testimonials />
  <Newsletter />
  <Footer />
    </div>
  )
}

export default Home
