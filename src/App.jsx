
import Navbar from "./components/Navbar";
import React from "react";
import Categories from "./home/Categories";
import FeaturedProducts from "./home/FeaturedProducts";
import Offers from "./home/Offers";
import Testimonials from "./home/Testimonials";
import Newsletter from "./home/Newsletter";
import Footer from "./components/layout/Footer";
import Home from "./home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import { Contact, SignalIcon } from "lucide-react";
import ContactUs from "./contact/ContactUs";
import Account from "./Account/Account";
import { Routes ,Route } from "react-router-dom";
import About from "./About/About";

function App() {
  return (
<Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/account" element={<Account />} />
    <Route path="/about" element={<About />} />

</Routes>
  );
}

export default App;
