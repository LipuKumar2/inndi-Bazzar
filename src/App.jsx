

import React from "react";
import SignUp from "./Pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { Contact, SignalIcon } from "lucide-react";
import ContactUs from "./pages/contact/ContactUs";
import Account from "./Pages/Account/Account";
import { Routes ,Route } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/home/Home";
import Cart from "./Pages/Cart";
import Categories from "./Pages/home/Categories";
import CategoryProducts from "./Pages/CategoryProducts";
import FeaturedProducts from "./Pages/home/FeaturedProducts";
import CheckoutPage from "./Pages/CheckoutPage";
import MyOrdersPage from "./Pages/MyOrdersPage";
import Wishlist from "./Pages/Wishlist";
import { SearchProvider } from './context/SearchContext.jsx';
import SearchResults from "./Pages/SearchResults.jsx";
import Products from "./Pages/Products.jsx";
import AdminLogin from "./AdminLogin.jsx";
import AdminDashboard from "./AdminDashBoard.jsx";
function App() {
  return (
     <SearchProvider>
<Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/account" element={<Account />} />
    <Route path="/about" element={<About />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/category/:categoryId" element={<CategoryProducts />} />
<Route path="/categories/:categoryId" element={<CategoryProducts />} />
<Route  path="/featured" element={<FeaturedProducts/>}/>
<Route path="/checkout" element={<CheckoutPage/>}/>
<Route path="/my-orders" element={<MyOrdersPage />} />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/search" element={<SearchResults  />} />
<Route path="/products" element={<Products />} />
<Route path="/admin/login" element={<AdminLogin />} />
<Route path="/admin/dashboard" element={<AdminDashboard />} />

</Routes>
</SearchProvider >
  );
}

export default App;
