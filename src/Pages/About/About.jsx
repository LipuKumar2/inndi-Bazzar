import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import {
  FaShippingFast,
  FaHeadset,
  FaUndo,
  FaSmileBeam,
  FaUsers,
  FaStore,
  FaShoppingBag,
  FaChartLine,
  FaCheckCircle,
  FaMobileAlt,
  FaStar,
  FaNewspaper,
} from "react-icons/fa";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const About = () => {
  return (
    <>
      <Navbar />

      {/* 🌟 Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative bg-[#475E2A] text-white pt-40 pb-32 px-6 md:px-16 lg:px-24 mt-16 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://source.unsplash.com/1600x900/?market,shop')] bg-cover bg-center"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            About{" "}
            <span className="bg-amber-400 text-emerald-800 px-3 py-1 rounded-lg">
              Inndi Bazar
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl opacity-95 leading-relaxed max-w-2xl mx-auto"
          >
            Your trusted Indian e-commerce marketplace – connecting thousands of
            buyers and sellers with quality, affordability, and unmatched
            service.
          </motion.p>
        </div>
      </motion.section>

      {/* ✨ Our Story */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-6 text-emerald-800">
              Our Story ✨
            </h2>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              Inndi Bazar was started with one simple goal – to bring trust and
              convenience into online shopping. From small beginnings, we've
              grown into a platform trusted by thousands of customers across
              India.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our journey is powered by innovation, customer happiness, and the
              dream of empowering local sellers to reach a wider audience with
              ease.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="flex justify-center">
            <img
              src="https://source.unsplash.com/500x400/?ecommerce,delivery"
              alt="Our Story"
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* 🌍 Vision & Values */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-emerald-50 py-20"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold mb-12 text-emerald-800"
          >
            Our Vision & Values 🌍
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Trust & Transparency",
                desc: "We believe in honest shopping and fair business practices.",
              },
              {
                title: "Empowering Sellers",
                desc: "Giving small businesses the tools to grow online.",
              },
              {
                title: "Customer Happiness",
                desc: "Putting our customers at the center of every decision.",
              },
            ].map((val, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all"
              >
                <FaCheckCircle className="text-emerald-600 text-4xl mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-3 text-emerald-800">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 📊 Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: "15k+", text: "Sellers", icon: <FaStore />, color: "text-emerald-600" },
            { num: "50k+", text: "Monthly Orders", icon: <FaShoppingBag />, color: "text-teal-600" },
            { num: "80k+", text: "Happy Customers", icon: <FaUsers />, color: "text-amber-500" },
            { num: "30k+", text: "Annual Growth", icon: <FaChartLine />, color: "text-emerald-700" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-8 rounded-2xl bg-emerald-50 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className={`${item.color} text-5xl mb-3 flex justify-center`}>
                {item.icon}
              </div>
              <h3 className="text-3xl font-extrabold text-emerald-800">{item.num}</h3>
              <p className="text-gray-600 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 🛒 How It Works */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-gradient-to-r from-emerald-50 to-teal-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold mb-12 text-center text-emerald-800"
          >
            How Inndi Bazar Works 🛒
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { step: "Browse", desc: "Explore thousands of products from trusted sellers." },
              { step: "Order", desc: "Place your order with a smooth checkout process." },
              { step: "Enjoy", desc: "Fast delivery and excellent customer support, always." },
            ].map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 border-emerald-500"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-xl mb-4 mx-auto">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-emerald-800">
                  {s.step}
                </h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 👥 Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-emerald-50"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold mb-12 text-emerald-800"
          >
            What Our Customers Say 💬
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Rohit Sharma",
                text: "Amazing experience! Inndi Bazar delivers fast and reliable products.",
              },
              {
                name: "Priya Singh",
                text: "I love the customer service, they really care about shoppers.",
              },
              {
                name: "Arjun Patel",
                text: "Great platform for affordable products. Highly recommended!",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-amber-400 mx-1" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                <h3 className="font-bold text-emerald-800">{review.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 📱 App Promotion */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-[#475E2A] text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
          {/* 📱 Phone Mockup */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center md:justify-start"
          >
            <img
              src="https://cdn.dribbble.com/users/2200852/screenshots/15211309/media/3e0dcbec3e3f2d5c7e11df2f3a8cbbee.png?resize=800x600&vertical=center"
              alt="Inndi Bazar App"
              className="w-72 md:w-96 drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-3xl"
            />
          </motion.div>

          {/* 📢 App Content */}
          <motion.div variants={fadeUp} className="text-center md:text-left">
            <FaMobileAlt className="text-6xl mb-6 mx-auto md:mx-0 text-amber-300" />
            <h2 className="text-4xl font-extrabold mb-4">
              Download the Inndi Bazar App 📱
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Shop smarter, faster, and easier. Get exclusive offers, personalized
              deals, and seamless checkout right at your fingertips.
            </p>

            {/* Store Badges */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
              <a
                href="#"
                className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-black transition w-48 justify-center"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-full"
                />
              </a>
              <a
                href="#"
                className="flex items-center bg-gray-900 text-white px-5 py-3 rounded-lg shadow-lg hover:bg-black transition w-48 justify-center"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="w-full"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 📰 Press Mentions */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-20 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 text-center">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-extrabold mb-12 text-emerald-800"
          >
            Featured In 🏆
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["The Times", "Business Today", "Startup India", "Forbes"].map(
              (brand, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="p-6 bg-emerald-50 rounded-lg shadow-md hover:shadow-lg transition"
                >
                  <FaNewspaper className="text-emerald-600 text-4xl mx-auto mb-3" />
                  <p className="text-emerald-800 font-semibold">{brand}</p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default About;