import React from "react";
import { FaShippingFast, FaHeadset, FaUndo } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/layout/Footer";
import image45 from '../assets/image45.png'
import image46 from '../assets/image46.png'
import image47 from '../assets/image47.png'
import image48 from '../assets/image48.png'
const About = () => {
  return (
    <>
    <Navbar />
    <div className="px-6 md:px-20 py-24">
      <div className="text-sm text-gray-500 mb-6">
        Home / <span className="text-black">About</span>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div className="flex flex-col justify-start items-start w-full h-full py-22">
          <h2 className="text-3xl font-bold mb-4 text-justify">Our Story</h2>
          <p className="text-gray-600 mb-4 text-xl">
            Inndi Bazar was founded with a simple vision – to bring quality products closer to people with ease and trust. We aim to create a one-stop marketplace where shoppers can explore exclusive products, enjoy seamless shopping experiences, and receive exceptional customer service. With a growing community of sellers and customers, Inndi Bazar is redefining online shopping by combining affordability, reliability, and convenience.
          </p>
          <p className="text-gray-600 text-xl">
            We started with a mission to make shopping easy for everyone.
            Exclusive products, top-notch quality, and exceptional service are
            what define us.
          </p>
        </div>
        <div>
          <img
            src={image45}
            alt="About"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">10.5k</h3>
          <p className="text-gray-500">Sellers active on site</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm bg-red-500 text-white">
          <h3 className="text-2xl font-bold">33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">45.5k</h3>
          <p className="text-gray-500">Customers active on site</p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="text-2xl font-bold">25k</h3>
          <p className="text-gray-500">Annual Gross Sale</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
        <div>
          <div className="w-full flex items-center justify-center"> <img
            src={image46}
            className="rounded-2xl mb-4 shadow-lg "
          /></div>
         
          <h3 className="font-semibold">Abhishek Verma</h3>
          <p className="text-gray-500">Founder & Chairman</p>
        </div>
        <div>
          <div className="w-full flex items-center justify-center"> <img
            src={image47}
            className="rounded-2xl mb-4 shadow-lg"
          /></div>
         
          <h3 className="font-semibold">Ashish Kumar</h3>
          <p className="text-gray-500">Managing Director</p>
        </div>
        <div>
          <div className="w-full flex items-center justify-center"> <img
            src={image48}
            className="rounded-2xl mb-4 shadow-lg"
          /></div>
         
          <h3 className="font-semibold">Akruti Sahoo</h3>
          <p className="text-gray-500">Product Designer</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-center">
        <div className="p-6 border rounded-xl shadow-sm">
          <FaShippingFast className="text-3xl mx-auto mb-3 text-red-500" />
          <h3 className="font-semibold">Free and Fast Delivery</h3>
          <p className="text-gray-500 text-sm">
            Free delivery for all orders over ₹500
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <FaHeadset className="text-3xl mx-auto mb-3 text-red-500" />
          <h3 className="font-semibold">24/7 Customer Service</h3>
          <p className="text-gray-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-sm">
          <FaUndo className="text-3xl mx-auto mb-3 text-red-500" />
          <h3 className="font-semibold">Money Back Guarantee</h3>
          <p className="text-gray-500 text-sm">
            We return money within 30 days
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
