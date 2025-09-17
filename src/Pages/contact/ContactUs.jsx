import React, { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { MdEmail, MdOutlineSupportAgent } from "react-icons/md";
import { FaHeadset, FaWhatsapp, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="relative bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 text-white pt-40 pb-32 px-6 md:px-16 lg:px-24 mt-16 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white opacity-5 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-teal-300 opacity-10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-emerald-400 opacity-15 rounded-full"></div>
        </div>
        
        {/* Background Overlay Image */}
        <div className="absolute inset-0 opacity-15 bg-[url('https://source.unsplash.com/1600x900/?customer,contact,office')] bg-cover bg-center"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
          >
            Contact{" "}
            <span className="bg-white text-green-700 px-3 py-1 rounded-lg inline-block transform rotate-2">
              Inndi Bazar
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl opacity-95 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            We'd love to hear from you 🤝. Whether you have questions, need support,
            or just want to share feedback, our team is here to assist you.
          </motion.p>
          
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center bg-black bg-opacity-20 px-4 py-2 rounded-full"
          >
            <FaClock className="mr-2" />
            <span>Typically replies within 2 hours</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.div
        className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            className="lg:col-span-1 space-y-6"
          >
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
                <MdOutlineSupportAgent className="mr-2 text-emerald-600" />
                Get in Touch
              </h2>

              <motion.div variants={fadeUp} className="flex items-start mb-8 group">
                <div className="bg-emerald-500 text-white p-4 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors">
                  <IoCall size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-1">Available 24/7</p>
                  <a href="tel:+919876543210" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start mb-8 group">
                <div className="bg-emerald-500 text-white p-4 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors">
                  <FaHeadset size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Customer Support</h3>
                  <p className="text-gray-600 mb-1">
                    Need help? We're here for you.
                  </p>
                  <a href="tel:1800123456" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                    1800-123-456
                  </a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start mb-8 group">
                <div className="bg-emerald-500 text-white p-4 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors">
                  <MdEmail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 mb-1">We reply within 24 hours</p>
                  <a href="mailto:support@inndibazar.com" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors block">
                    support@inndibazar.com
                  </a>
                  <a href="mailto:help@inndibazar.com" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                    help@inndibazar.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex items-start mb-8 group">
                <div className="bg-emerald-500 text-white p-4 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors">
                  <FaWhatsapp size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                  <p className="text-gray-600 mb-1">Quick chat support</p>
                  <a href="https://wa.me/919876543210" className="text-gray-900 font-medium hover:text-emerald-600 transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </motion.div>
              
              <motion.div variants={fadeUp} className="flex items-start group">
                <div className="bg-emerald-500 text-white p-4 rounded-full mr-4 group-hover:bg-emerald-600 transition-colors">
                  <IoLocationSharp size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Office Address</h3>
                  <p className="text-gray-600 mb-1">Visit our headquarters</p>
                  <p className="text-gray-900 font-medium">
                    123 Business Avenue,<br />
                    Suite 456,<br />
                    Mumbai, Maharashtra 400001
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Business Hours */}
            <motion.div 
              variants={fadeUp}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <h3 className="font-semibold text-xl mb-4 text-gray-900">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-6 rounded-lg text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you shortly.</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Your Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows="6"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 outline-none transition"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md transition-all duration-300 w-full flex items-center justify-center"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.section 
        initial="hidden"
        whileInView="show"
        variants={staggerContainer}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How quickly do you respond to inquiries?",
                answer: "We typically respond to all inquiries within 2 hours during business hours. For emails, we guarantee a response within 24 hours."
              },
              {
                question: "Do you offer 24/7 customer support?",
                answer: "Yes, our phone support is available 24/7 for urgent matters. For non-urgent inquiries, we respond during business hours."
              },
              {
                question: "Can I visit your office in person?",
                answer: "Absolutely! Our office is open Monday-Friday from 9 AM to 6 PM. We recommend scheduling an appointment first to ensure someone is available to assist you."
              },
              {
                question: "What information should I include in my support request?",
                answer: "Please include your name, contact information, order number (if applicable), and a detailed description of your issue or question to help us assist you faster."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2 text-emerald-700">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <Footer />
    </>
  );
};

export default ContactUs;