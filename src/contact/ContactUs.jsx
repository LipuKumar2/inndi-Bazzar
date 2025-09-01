import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/layout/Footer'
import { IoCall } from "react-icons/io5";

const ContactUs = () => {
    return (
        <div >
            <Navbar />

            <div className="px-6 md:px-20 py-32">
              
                <p className="text-gray-500 text-sm mb-6">
                    Home / <span className="text-black">Contact</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 
                    <div className="bg-white shadow-md rounded-lg p-6">
                      
                        <div className="flex items-start mb-6">
                            <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                                📞
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Call To Us</h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    We are available 24/7, 7 days a week.
                                </p>
                                <p className="text-gray-900 font-medium">
                                    Phone: +91 9876543210
                                </p>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <div className="flex items-start">
                            <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                                ✉️
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Write To US</h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    Fill out our form and we will contact you within 24 hours.
                                </p>
                                <p className="text-gray-900 font-medium">
                                    Emails: customer@exclusive.com
                                </p>
                                <p className="text-gray-900 font-medium">
                                    Emails: support@exclusive.com
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="border rounded-md p-3 w-full focus:outline-red-400"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email *"
                                    className="border rounded-md p-3 w-full focus:outline-red-400"
                                    required
                                />
                                <input
                                    type="tel"
                                    placeholder="Your Phone *"
                                    className="border rounded-md p-3 w-full focus:outline-red-400"
                                    required
                                />
                            </div>
                            <textarea
                                placeholder="Your Message"
                                rows="6"
                                className="border rounded-md p-3 w-full focus:outline-red-400"
                            ></textarea>
                            <button
                                type="submit"
                                className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-md transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>


            <Footer />

        </div>
    )
}

export default ContactUs
