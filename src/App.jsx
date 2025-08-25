
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./section/Hero";
import Categories from "./section/Categories";
import FeaturedProducts from "./section/FeaturedProducts";
import Offers from "./section/Offers";
import Testimonials from "./section/Testimonials";
import Newsletter from "./section/Newsletter";
import Footer from "./components/layout/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <>
      <Navbar />
     <Hero />
     <Categories />
     <FeaturedProducts />
     <Offers />
    <Testimonials />
  <Newsletter />
  <Footer />
    </>
  );
}

export default App;
