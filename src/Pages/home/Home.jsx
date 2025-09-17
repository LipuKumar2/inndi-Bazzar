import React, { useState, useEffect } from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from './Hero'
import Categories from './Categories'
import FeaturedProducts from './FeaturedProducts'
import Offers from './Offers'
import Testimonials from './Testimonials'
import Newsletter from './Newsletter'
import FAQAndBlog from './FAQAndBlog'
import Footer from '../../components/layout/Footer'
import { ChevronUp } from 'lucide-react'


function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Offers />
      <Testimonials />
      <FAQAndBlog />
      <Newsletter />
      <Footer />
      
      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  )
}

export default Home