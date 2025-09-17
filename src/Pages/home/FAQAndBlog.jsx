import React, { useState } from "react";
import { ChevronDown, ChevronUp, Calendar, User, ArrowRight, BookOpen } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does delivery take?",
      answer: "We deliver across India within 3-7 business days. Metro cities typically receive orders within 3 days, while other locations may take up to 7 days. You'll receive tracking information once your order ships."
    },
    {
      question: "Are your products organic and authentic?",
      answer: "Yes! We source directly from certified organic farms and trusted artisans. All our products come with quality guarantees and are thoroughly tested for authenticity and purity."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay. All transactions are secure and encrypted."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship only within India. However, we're working on expanding our services to select international destinations by next year."
    },
    {
      question: "How should I store dry fruits and spices?",
      answer: "For maximum freshness, store in airtight containers in a cool, dark place. Some items like nuts are best refrigerated. Each product includes specific storage instructions."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placement through your account dashboard. After that, please contact our support team immediately for assistance."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 relative inline-block">
            Frequently Asked Questions
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, ordering process, and more.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <button
                className="flex justify-between items-center w-full p-6 text-left font-semibold text-gray-800 hover:bg-green-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="text-green-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-green-600 flex-shrink-0" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 bg-white">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 shadow-md transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Health Benefits of Indian Superfoods",
      excerpt: "Discover how traditional Indian ingredients like turmeric, moringa, and amla can boost your immunity and overall health.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "April 12, 2023",
      author: "Dr. Priya Sharma",
      readTime: "5 min read",
      category: "Nutrition"
    },
    {
      id: 2,
      title: "How to Identify Authentic Indian Spices",
      excerpt: "Learn the telltale signs of quality spices and avoid common pitfalls when shopping for authentic Indian flavors.",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "March 28, 2023",
      author: "Chef Rajesh Kumar",
      readTime: "7 min read",
      category: "Cooking Tips"
    },
    {
      id: 3,
      title: "Sustainable Farming Practices in India",
      excerpt: "Explore how traditional and modern sustainable farming methods are preserving India's agricultural heritage.",
      image: "https://images.unsplash.com/photo-1625246335525-8f57a4fb2b9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      date: "March 15, 2023",
      author: "Arun Mehta",
      readTime: "6 min read",
      category: "Sustainability"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 relative inline-block">
            From Our Blog
            <span className="absolute left-1/2 -bottom-3 w-24 h-1 bg-green-500 rounded-full transform -translate-x-1/2"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover articles, recipes, and insights about Indian cuisine, wellness, and sustainable living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                  <button className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white border border-green-600 text-green-600 font-semibold rounded-full hover:bg-green-50 shadow-md transition-colors duration-300 flex items-center mx-auto">
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

const FAQAndBlog = () => {
  return (
    <>
      <FAQ />
      <Blog />
    </>
  );
};

export default FAQAndBlog;