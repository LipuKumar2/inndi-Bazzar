import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  FiShoppingCart,
  FiStar,
  FiArrowLeft,
  FiHeart,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
  FiTruck,
  FiShield,
  FiRefreshCw,
  FiFilter,
  FiGrid,
  FiList,
  FiSearch
} from "react-icons/fi";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const CategoryProducts = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  // Sample product data (truncated for brevity)
  const categoryProducts = {
    "spices-grains": [
      {
        id: 1,
        name: "Premium Kashmiri Saffron",
        price: 1299,
        images: [
          "https://images.unsplash.com/photo-1614159188953-9dd46fbbe2f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1599058917765-a780eda07a3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 142,
        description: "Authentic Kashmiri saffron known for its rich aroma and deep red color. Hand-picked from the valleys of Kashmir.",
        details: "1g pack | Pure & natural | Rich in antioxidants",
        inStock: true,
        weight: "1g",
        origin: "Kashmir, India",
        benefits: ["Rich in antioxidants", "Enhances flavor", "Natural colorant", "Aromatic"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Premium", "Organic", "Handpicked"]
      },
      {
        id: 2,
        name: "Organic Turmeric Powder",
        price: 299,
        images: [
          "https://images.unsplash.com/photo-1584270354949-3d5f3c8e1f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1604908177520-3c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1617191517923-4c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 89,
        description: "Pure organic turmeric powder with vibrant color and anti-inflammatory properties. Perfect for cooking and wellness.",
        details: "100g pack | 100% organic | Rich in curcumin",
        inStock: true,
        weight: "100g",
        origin: "India",
        benefits: ["Anti-inflammatory", "Rich in curcumin", "Boosts immunity", "Natural colorant"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Ayurvedic", "Fresh"]
      },
      {
        id: 3,
        name: "Whole Black Peppercorns",
        price: 399,
        images: [
          "https://images.unsplash.com/photo-1570194065657-4d13d5434e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 67,
        description: "Aromatic whole black peppercorns that add a spicy kick to your dishes. Perfect for grinding fresh pepper.",
        details: "100g pack | Whole peppercorns | High piperine content",
        inStock: true,
        weight: "100g",
        origin: "India",
        benefits: ["Enhances flavor", "Rich in piperine", "Aids digestion", "Natural spice"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole", "Aromatic", "Fresh"]
      },
      {
        id: 4,
        name: "Basmati Rice (Aged)",
        price: 599,
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 156,
        description: "Aged basmati rice with long grains and distinctive aroma. Perfect for biryanis and pulao.",
        details: "5kg pack | Aged for 1 year | Non-GMO",
        inStock: true,
        weight: "5kg",
        origin: "Punjab, India",
        benefits: ["Long grains", "Aromatic", "Non-sticky", "Traditional variety"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Aged", "Premium", "Long Grain"]
      },
      {
        id: 5,
        name: "Cumin Seeds (Jeera)",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 98,
        description: "Aromatic cumin seeds with earthy flavor. Essential for tempering and spice blends.",
        details: "200g pack | Whole seeds | Rich in iron",
        inStock: true,
        weight: "200g",
        origin: "Rajasthan, India",
        benefits: ["Aids digestion", "Rich in iron", "Enhances flavor", "Versatile spice"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole", "Aromatic", "Traditional"]
      },
      {
        id: 6,
        name: "Red Chilli Powder",
        price: 199,
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 112,
        description: "Spicy red chilli powder made from sun-dried chillies. Adds heat and color to dishes.",
        details: "100g pack | Medium spicy | Vibrant color",
        inStock: true,
        weight: "100g",
        origin: "Andhra Pradesh, India",
        benefits: ["Adds heat", "Rich color", "Versatile", "Long shelf life"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Spicy", "Colorful", "Traditional"]
      },
      {
        id: 7,
        name: "Coriander Seeds",
        price: 179,
        images: [
          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1572441710261-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1584270354949-3d5f3c8e1f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.2,
        reviews: 87,
        description: "Fragrant coriander seeds with citrusy notes. Perfect for grinding and spice mixes.",
        details: "150g pack | Whole seeds | Citrusy aroma",
        inStock: true,
        weight: "150g",
        origin: "Gujarat, India",
        benefits: ["Digestive aid", "Citrusy flavor", "Versatile", "Aromatic"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole", "Fragrant", "Traditional"]
      },
      {
        id: 8,
        name: "Organic Quinoa",
        price: 499,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 134,
        description: "Nutrient-rich organic quinoa. Perfect for salads, bowls, and healthy meals.",
        details: "500g pack | 100% organic | High protein",
        inStock: true,
        weight: "500g",
        origin: "Peru",
        benefits: ["High protein", "Gluten-free", "Rich in fiber", "Complete protein"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Healthy", "Superfood"]
      },
      {
        id: 9,
        name: "Cardamom Pods (Green)",
        price: 899,
        images: [
          "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 78,
        description: "Aromatic green cardamom pods with sweet flavor. Perfect for desserts and masala chai.",
        details: "50g pack | Whole pods | Sweet aroma",
        inStock: true,
        weight: "50g",
        origin: "Kerala, India",
        benefits: ["Aromatic", "Digestive aid", "Versatile", "Sweet flavor"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Aromatic", "Whole", "Premium"]
      },
      {
        id: 10,
        name: "Mustard Seeds",
        price: 149,
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.1,
        reviews: 65,
        description: "Pungent mustard seeds for tempering and pickling. Adds crunch and flavor to dishes.",
        details: "200g pack | Whole seeds | Pungent flavor",
        inStock: true,
        weight: "200g",
        origin: "Rajasthan, India",
        benefits: ["Pungent flavor", "Tempering", "Pickling", "Crunchy texture"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole", "Pungent", "Traditional"]
      },
      {
        id: 11,
        name: "Organic Brown Rice",
        price: 449,
        images: [
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 121,
        description: "Nutritious organic brown rice with nutty flavor. Rich in fiber and nutrients.",
        details: "2kg pack | 100% organic | High fiber",
        inStock: true,
        weight: "2kg",
        origin: "India",
        benefits: ["High fiber", "Nutritious", "Low glycemic", "Heart healthy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Healthy", "Nutritious"]
      },
      {
        id: 12,
        name: "Fennel Seeds (Saunf)",
        price: 219,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 94,
        description: "Sweet fennel seeds with digestive properties. Perfect for mouth freshener and cooking.",
        details: "150g pack | Whole seeds | Sweet flavor",
        inStock: true,
        weight: "150g",
        origin: "Gujarat, India",
        benefits: ["Digestive aid", "Sweet flavor", "Mouth freshener", "Aromatic"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole", "Sweet", "Digestive"]
      }
    ],
    "processed-foods": [
      {
        id: 13,
        name: "Organic Honey",
        price: 499,
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 210,
        description: "Pure organic honey sourced from wildflowers. Unprocessed and retains all natural enzymes and antioxidants.",
        details: "500g jar | 100% organic | Raw & unprocessed",
        inStock: true,
        weight: "500g",
        origin: "India",
        benefits: ["Natural sweetener", "Rich in antioxidants", "Soothes sore throats", "Boosts immunity"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Raw", "Unprocessed"]
      },
      {
        id: 14,
        name: "Almond Butter",
        price: 699,
        images: [
          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1572441710261-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1584270354949-3d5f3c8e1f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 95,
        description: "Creamy almond butter made from roasted organic almonds. Perfect for spreads, smoothies, and baking.",
        details: "250g jar | 100% organic almonds | No added sugar",
        inStock: true,
        weight: "250g",
        origin: "USA",
        benefits: ["Rich in healthy fats", "High in protein", "Good source of vitamin E", "No added sugar"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "No Sugar", "Protein Rich"]
      },
      {
        id: 15,
        name: "Quinoa",
        price: 399,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 78,
        description: "Nutritious quinoa grains that are a great source of protein and fiber. Perfect for salads and bowls.",
        details: "500g pack | Gluten-free | High in protein",
        inStock: true,
        weight: "500g",
        origin: "Peru",
        benefits: ["High in protein", "Rich in fiber", "Gluten-free", "Contains all essential amino acids"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Gluten-free", "Protein", "Healthy"]
      },
      {
        id: 16,
        name: "Organic Peanut Butter",
        price: 349,
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 156,
        description: "Creamy organic peanut butter made from roasted peanuts. No added oils or sugars.",
        details: "300g jar | 100% organic | No added sugar",
        inStock: true,
        weight: "300g",
        origin: "India",
        benefits: ["High in protein", "Rich in healthy fats", "No added sugar", "Source of vitamins"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "No Sugar", "Protein"]
      },
      {
        id: 17,
        name: "Instant Coffee",
        price: 599,
        images: [
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 189,
        description: "Premium instant coffee made from Arabica beans. Quick and convenient without compromising on flavor.",
        details: "200g jar | 100% Arabica | Instant",
        inStock: true,
        weight: "200g",
        origin: "Colombia",
        benefits: ["Quick preparation", "Rich flavor", "Energy booster", "Antioxidants"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Instant", "Arabica", "Premium"]
      },
      {
        id: 18,
        name: "Organic Oats",
        price: 279,
        images: [
          "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 203,
        description: "Whole grain organic oats perfect for breakfast. High in fiber and essential nutrients.",
        details: "1kg pack | 100% organic | Whole grain",
        inStock: true,
        weight: "1kg",
        origin: "Australia",
        benefits: ["High in fiber", "Heart healthy", "Weight management", "Energy booster"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Whole Grain", "Healthy"]
      },
      {
        id: 19,
        name: "Dark Chocolate (85% Cocoa)",
        price: 449,
        images: [
          "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 167,
        description: "Rich dark chocolate with 85% cocoa content. Intense flavor with health benefits.",
        details: "200g bar | 85% cocoa | Vegan",
        inStock: true,
        weight: "200g",
        origin: "Belgium",
        benefits: ["Rich in antioxidants", "Low sugar", "Mood enhancer", "Heart healthy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dark", "Vegan", "Antioxidants"]
      },
      {
        id: 20,
        name: "Organic Granola",
        price: 399,
        images: [
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1494597564530-871f2b93ac55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 134,
        description: "Crunchy organic granola with nuts and seeds. Perfect for breakfast or snacks.",
        details: "500g pack | 100% organic | With nuts",
        inStock: true,
        weight: "500g",
        origin: "India",
        benefits: ["High in fiber", "Energy booster", "Nutritious", "Whole grains"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Crunchy", "Healthy"]
      },
      {
        id: 21,
        name: "Pasta (Whole Wheat)",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 98,
        description: "Whole wheat pasta made from durum wheat. High in fiber and perfect for healthy meals.",
        details: "500g pack | Whole wheat | High fiber",
        inStock: true,
        weight: "500g",
        origin: "Italy",
        benefits: ["High in fiber", "Whole grain", "Low glycemic", "Heart healthy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Whole Wheat", "Healthy", "Italian"]
      },
      {
        id: 22,
        name: "Organic Tomato Ketchup",
        price: 199,
        images: [
          "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-4.0.3&auto=format&fit=c crop&w=500&q=80",
          "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1565299585323-38174c739b6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 178,
        description: "Organic tomato ketchup made from ripe tomatoes. No artificial preservatives or colors.",
        details: "500g bottle | 100% organic | No preservatives",
        inStock: true,
        weight: "500g",
        origin: "India",
        benefits: ["No preservatives", "Natural ingredients", "Rich flavor", "Versatile"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "No Preservatives", "Natural"]
      },
      {
        id: 23,
        name: "Canned Chickpeas",
        price: 129,
        images: [
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.2,
        reviews: 145,
        description: "Ready-to-eat canned chickpeas. Perfect for salads, curries, and hummus.",
        details: "400g can | Ready to eat | High protein",
        inStock: true,
        weight: "400g",
        origin: "India",
        benefits: ["High protein", "Ready to eat", "Versatile", "Fiber rich"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Canned", "Protein", "Convenient"]
      },
      {
        id: 24,
        name: "Organic Jam (Mixed Fruit)",
        price: 299,
        images: [
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 167,
        description: "Sweet organic mixed fruit jam made with natural fruits. No artificial flavors or colors.",
        details: "250g jar | 100% organic | No artificial flavors",
        inStock: true,
        weight: "250g",
        origin: "India",
        benefits: ["Natural fruits", "No artificial flavors", "Sweet spread", "Versatile"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Natural", "Sweet"]
      }
    ],
    "fruits": [
      {
        id: 25,
        name: "Alphonso Mangoes (Box of 12)",
        price: 2499,
        images: [
          "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 150,
        description: "Juicy and sweet Alphonso mangoes, known as the king of mangoes. Perfect for eating fresh or making desserts.",
        details: "Box of 12 | Fresh & ripe | Rich in vitamins",
        inStock: true,
        weight: "Approx. 3kg",
        origin: "Maharashtra, India",
        benefits: ["Rich in vitamins", "High in fiber", "Boosts immunity", "Natural sweetness"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Premium", "Seasonal", "Fresh"]
      },
      {
        id: 26,
        name: "Dried Mango Slices",
        price: 599,
        images: [
          "https://images.unsplash.com/photo-1604908177520-3c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1617191517923-4c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1584270354949-3d5f3c8e1f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 85,
        description: "Sweet and tangy dried mango slices made from fresh Alphonso mangoes. Perfect for snacking.",
        details: "200g pack | No added sugar | Naturally dried",
        inStock: true,
        weight: "200g",
        origin: "India",
        benefits: ["Rich in vitamins", "High in fiber", "Natural sweetness", "Great for snacking"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dried", "No Sugar", "Healthy Snack"]
      },
      {
        id: 27,
        name: "Fresh Pomegranates (Box of 6)",
        price: 899,
        images: [
          "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 112,
        description: "Ruby red pomegranates with sweet and juicy arils. Rich in antioxidants and perfect for fresh eating.",
        details: "Box of 6 | Fresh & ripe | Seedless variety",
        inStock: true,
        weight: "Approx. 2kg",
        origin: "Maharashtra, India",
        benefits: ["Rich in antioxidants", "Boosts immunity", "Heart healthy", "Anti-inflammatory"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Fresh", "Antioxidants", "Seasonal"]
      },
      {
        id: 28,
        name: "Dehydrated Apple Chips",
        price: 349,
        images: [
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 78,
        description: "Crispy dehydrated apple chips made from fresh Himalayan apples. No added sugar or preservatives.",
        details: "150g pack | No added sugar | Crispy texture",
        inStock: true,
        weight: "150g",
        origin: "Himachal Pradesh, India",
        benefits: ["High in fiber", "No added sugar", "Crunchy snack", "Rich in vitamins"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dehydrated", "No Sugar", "Crunchy"]
      },
      {
        id: 29,
        name: "Fresh Kinnow Oranges (Box of 20)",
        price: 799,
        images: [
          "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 134,
        description: "Sweet and juicy Kinnow oranges from Punjab. Easy to peel and perfect for fresh juice.",
        details: "Box of 20 | Fresh & juicy | Easy peel",
        inStock: true,
        weight: "Approx. 4kg",
        origin: "Punjab, India",
        benefits: ["Rich in vitamin C", "Boosts immunity", "Hydrating", "Natural energy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Fresh", "Vitamin C", "Juicy"]
      },
      {
        id: 30,
        name: "Dried Apricots",
        price: 449,
        images: [
          "https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574226516831-e1dff420e43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 96,
        description: "Sweet and chewy dried apricots from Ladakh. Rich in iron and perfect for snacking.",
        details: "250g pack | No preservatives | Naturally sweet",
        inStock: true,
        weight: "250g",
        origin: "Ladakh, India",
        benefits: ["Rich in iron", "High in fiber", "Natural sweetness", "Energy booster"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dried", "Iron Rich", "Healthy"]
      },
      {
        id: 31,
        name: "Fresh Strawberries (Box of 4 Punnets)",
        price: 699,
        images: [
          "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 167,
        description: "Fresh, red and juicy strawberries from Mahabaleshwar. Perfect for desserts and fresh eating.",
        details: "4 punnets | Fresh picked | Sweet variety",
        inStock: true,
        weight: "Approx. 1kg",
        origin: "Mahabaleshwar, India",
        benefits: ["Rich in antioxidants", "Low calorie", "Vitamin C rich", "Heart healthy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Fresh", "Antioxidants", "Seasonal"]
      },
      {
        id: 32,
        name: "Dehydrated Banana Chips",
        price: 299,
        images: [
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 89,
        description: "Crispy banana chips made from ripe bananas. Lightly salted for perfect snacking.",
        details: "200g pack | Lightly salted | Crispy texture",
        inStock: true,
        weight: "200g",
        origin: "Kerala, India",
        benefits: ["Energy booster", "Crunchy snack", "Potassium rich", "Satisfying crunch"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dehydrated", "Crunchy", "Salted"]
      },
      {
        id: 33,
        name: "Fresh Green Grapes (Bunch of 2)",
        price: 549,
        images: [
          "https://images.unsplash.com/photo-1596363505726-56d49eedad44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1596363505726-56d49eedad44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1596363505726-56d49eedad44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 123,
        description: "Sweet and crisp green grapes. Seedless variety perfect for fresh eating and fruit salads.",
        details: "2 bunches | Seedless | Sweet variety",
        inStock: true,
        weight: "Approx. 1.5kg",
        origin: "Nashik, India",
        benefits: ["Hydrating", "Rich in antioxidants", "Low calorie", "Refreshing"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Fresh", "Seedless", "Sweet"]
      },
      {
        id: 34,
        name: "Dried Cranberries",
        price: 399,
        images: [
          "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 78,
        description: "Tart and sweet dried cranberries. Perfect for baking, salads, and snacking.",
        details: "150g pack | No added sugar | Tart & sweet",
        inStock: true,
        weight: "150g",
        origin: "USA",
        benefits: ["Rich in antioxidants", "Urinary health", "Vitamin C", "Fiber rich"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dried", "Antioxidants", "Tart"]
      },
      {
        id: 35,
        name: "Fresh Papayas (2 Pieces)",
        price: 249,
        images: [
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.2,
        reviews: 95,
        description: "Ripe and sweet papayas. Rich in digestive enzymes and perfect for breakfast.",
        details: "2 pieces | Ripe & sweet | Rich in enzymes",
        inStock: true,
        weight: "Approx. 2kg",
        origin: "South India",
        benefits: ["Digestive enzymes", "Vitamin C rich", "Skin health", "Hydrating"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Fresh", "Digestive", "Tropical"]
      },
      {
        id: 36,
        name: "Dehydrated Pineapple Rings",
        price: 379,
        images: [
          "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 112,
        description: "Sweet and chewy dehydrated pineapple rings. Natural tropical flavor without added sugar.",
        details: "200g pack | No added sugar | Chewy texture",
        inStock: true,
        weight: "200g",
        origin: "Kerala, India",
        benefits: ["Natural sweetness", "Vitamin C", "Digestive aid", "Tropical flavor"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Dehydrated", "Tropical", "No Sugar"]
      }
    ],
    "wellness-oils": [
      {
        id: 37,
        name: "Cold-Pressed Coconut Oil",
        price: 599,
        images: [
          "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 180,
        description: "Pure cold-pressed coconut oil, perfect for cooking, skincare, and haircare. Retains all natural nutrients and aroma.",
        details: "500ml bottle | 100% pure | Cold-pressed | Rich in MCTs",
        inStock: true,
        weight: "500ml",
        origin: "Kerala, India",
        benefits: ["Moisturizes skin", "Nourishes hair", "Boosts metabolism", "Natural cooking oil"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Cold-Pressed", "Multi-purpose", "Organic"]
      },
      {
        id: 38,
        name: "Lavender Essential Oil",
        price: 799,
        images: [
          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1572441710261-1c4f1f1e6f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1584270354949-3d5f3c8e1f4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 110,
        description: "Soothing lavender essential oil, perfect for aromatherapy, relaxation, and skincare. Known for its calming properties.",
        details: "100ml bottle | 100% pure | Steam-distilled | Calming aroma",
        inStock: true,
        weight: "100ml",
        origin: "France",
        benefits: ["Reduces stress", "Improves sleep", "Soothes skin", "Natural fragrance"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Aromatherapy", "Relaxation", "Therapeutic"]
      },
      {
        id: 39,
        name: "Turmeric Essential Oil",
        price: 899,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 75,
        description: "Powerful turmeric essential oil, known for its anti-inflammatory and antioxidant properties. Ideal for skincare and wellness.",
        details: "100ml bottle | 100% pure | Steam-distilled | Anti-inflammatory",
        inStock: true,
        weight: "100ml",
        origin: "India",
        benefits: ["Reduces inflammation", "Boosts immunity", "Improves skin health", "Natural remedy"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Anti-inflammatory", "Ayurvedic", "Healing"]
      },
      {
        id: 40,
        name: "Extra Virgin Olive Oil",
        price: 849,
        images: [
          "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 156,
        description: "Premium extra virgin olive oil, cold-pressed from the first pressing of olives. Perfect for cooking and dressings.",
        details: "500ml bottle | Extra virgin | Cold-pressed | Low acidity",
        inStock: true,
        weight: "500ml",
        origin: "Italy",
        benefits: ["Heart healthy", "Rich in antioxidants", "Anti-inflammatory", "Cooking & dressing"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Premium", "Cold-Pressed", "Mediterranean"]
      },
      {
        id: 41,
        name: "Tea Tree Essential Oil",
        price: 649,
        images: [
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 134,
        description: "Purifying tea tree essential oil with natural antiseptic properties. Excellent for skincare and cleaning.",
        details: "100ml bottle | 100% pure | Antimicrobial | Fresh scent",
        inStock: true,
        weight: "100ml",
        origin: "Australia",
        benefits: ["Antiseptic properties", "Clears skin", "Natural cleaner", "Fresh aroma"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Antiseptic", "Purifying", "Therapeutic"]
      },
      {
        id: 42,
        name: "Castor Oil (Cold-Pressed)",
        price: 449,
        images: [
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 98,
        description: "Pure cold-pressed castor oil, known for its hair growth and skincare benefits. Thick and nourishing.",
        details: "200ml bottle | Cold-pressed | 100% pure | Rich texture",
        inStock: true,
        weight: "200ml",
        origin: "India",
        benefits: ["Promotes hair growth", "Moisturizes skin", "Natural laxative", "Nourishing"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Hair Growth", "Ayurvedic", "Nourishing"]
      },
      {
        id: 43,
        name: "Eucalyptus Essential Oil",
        price: 549,
        images: [
          "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 87,
        description: "Invigorating eucalyptus essential oil with respiratory benefits. Perfect for diffusing and massage.",
        details: "100ml bottle | 100% pure | Respiratory support | Minty aroma",
        inStock: true,
        weight: "100ml",
        origin: "Australia",
        benefits: ["Respiratory support", "Clears sinuses", "Energizing", "Natural decongestant"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Respiratory", "Invigorating", "Medicinal"]
      },
      {
        id: 44,
        name: "Sesame Oil (Cold-Pressed)",
        price: 399,
        images: [
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.4,
        reviews: 112,
        description: "Traditional cold-pressed sesame oil, used in Ayurveda for massage and cooking. Rich in antioxidants.",
        details: "500ml bottle | Cold-pressed | Traditional | Nutty flavor",
        inStock: true,
        weight: "500ml",
        origin: "India",
        benefits: ["Ayurvedic massage", "Cooking oil", "Rich in antioxidants", "Skin nourishment"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Ayurvedic", "Traditional", "Nutty"]
      },
      {
        id: 45,
        name: "Peppermint Essential Oil",
        price: 699,
        images: [
          "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 145,
        description: "Refreshing peppermint essential oil with cooling properties. Perfect for headaches and digestion.",
        details: "100ml bottle | 100% pure | Cooling effect | Minty fresh",
        inStock: true,
        weight: "100ml",
        origin: "USA",
        benefits: ["Relieves headaches", "Aids digestion", "Cooling effect", "Mental clarity"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Cooling", "Refreshing", "Medicinal"]
      },
      {
        id: 46,
        name: "Almond Oil (Sweet)",
        price: 499,
        images: [
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 123,
        description: "Sweet almond oil, lightweight and nourishing. Perfect for massage, skincare, and hair care.",
        details: "250ml bottle | Cold-pressed | Lightweight | Non-greasy",
        inStock: true,
        weight: "250ml",
        origin: "California, USA",
        benefits: ["Lightweight moisture", "Hair nourishment", "Massage oil", "Vitamin E rich"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Lightweight", "Nourishing", "Versatile"]
      },
      {
        id: 47,
        name: "Frankincense Essential Oil",
        price: 1199,
        images: [
          "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1513530176992-0cf39c4cbed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 89,
        description: "Premium frankincense essential oil, known for its spiritual and skincare benefits. Earthy and uplifting aroma.",
        details: "50ml bottle | 100% pure | Spiritual use | Anti-aging",
        inStock: true,
        weight: "50ml",
        origin: "Oman",
        benefits: ["Anti-aging", "Spiritual upliftment", "Skin rejuvenation", "Meditation aid"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Premium", "Spiritual", "Anti-aging"]
      },
      {
        id: 48,
        name: "Mustard Oil (Kachi Ghani)",
        price: 349,
        images: [
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.3,
        reviews: 167,
        description: "Traditional kachi ghani mustard oil with pungent aroma. Used in cooking and Ayurvedic massage.",
        details: "500ml bottle | Cold-pressed | Traditional | Pungent aroma",
        inStock: true,
        weight: "500ml",
        origin: "Punjab, India",
        benefits: ["Hair growth", "Cooking oil", "Ayurvedic massage", "Warming properties"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Traditional", "Pungent", "Ayurvedic"]
      }
    ],

    "beverages": [
      {
        id: 101,
        name: "Coca Cola",
        price: 40,
        images: [
          "https://images.unsplash.com/photo-1580910051074-2d8f19e3caba?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1580910051074-2d8f19e3caba?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1580910051074-2d8f19e3caba?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.5,
        reviews: 250,
        description: "Refreshing carbonated soft drink with the classic cola taste.",
        details: "750ml bottle | Chilled best | Sparkling drink",
        inStock: true,
        weight: "750ml",
        origin: "India",
        benefits: ["Instant refreshment", "Party favorite", "Energy boost"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Soft Drink", "Refreshing", "Carbonated"]
      },
      {
        id: 102,
        name: "Tropicana Orange Juice",
        price: 120,
        images: [
          "https://images.unsplash.com/photo-1622487590507-cc0f61c86342?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1622487590507-cc0f61c86342?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1622487590507-cc0f61c86342?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 180,
        description: "100% orange juice with no added sugar, rich in Vitamin C.",
        details: "1L carton | No added sugar | Pure juice",
        inStock: true,
        weight: "1L",
        origin: "India",
        benefits: ["Rich in Vitamin C", "Boosts immunity", "Refreshing taste"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Juice", "Healthy", "Natural"]
      },
      {
        id: 103,
        name: "Tata Tea Premium",
        price: 250,
        images: [
          "https://images.unsplash.com/photo-1600959907703-111c08a13974?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1600959907703-111c08a13974?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1600959907703-111c08a13974?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 320,
        description: "Strong and refreshing Indian tea leaves for a perfect cup of chai.",
        details: "1kg packet | Premium quality | Strong flavor",
        inStock: true,
        weight: "1kg",
        origin: "Assam, India",
        benefits: ["Boosts energy", "Refreshing taste", "Rich aroma"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Tea", "Strong", "Refreshing"]
      },
      {
        id: 104,
        name: "Nescafe Classic Coffee",
        price: 350,
        images: [
          "https://images.unsplash.com/photo-1527169402691-aef8c61f0d50?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1527169402691-aef8c61f0d50?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1527169402691-aef8c61f0d50?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 410,
        description: "Instant coffee with a rich taste and strong aroma.",
        details: "200g jar | Instant coffee | Bold flavor",
        inStock: true,
        weight: "200g",
        origin: "India",
        benefits: ["Boosts alertness", "Rich aroma", "Quick to prepare"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Coffee", "Instant", "Bold"]
      }
    ],
    "dry-fruits": [
      {

        id: 201,
        name: "Almonds (Badam) - 1kg",

        price: 899,
        images: [
          "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 150,
        description: "Premium quality almonds, rich in nutrients and perfect for snacking.",
        details: "1kg pack | Premium quality | Nutrient-rich",
        inStock: true,
        weight: "1kg",
        origin: "California, USA",
        benefits: ["Rich in Vitamin E", "Good for heart health", "High in protein"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Nuts", "Healthy", "Snacking"]
      },
      {

        id: 202,
        name: "Cashews (Kaju) - 500g",
        price: 699,
        images: [
          "https://images.unsplash.com/photo-1585238342028-4a1f3b6c5f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1585238342028-4a1f3b6c5f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1585238342028-4a1f3b6c5f3e?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 120,
        description: "Delicious cashew nuts, perfect for snacking and cooking.",
        details: "500g pack | Delicious taste | Versatile use",
        inStock: true,
        weight: "500g",
        origin: "India",
        benefits: ["Rich in healthy fats", "Good for brain health", "High in magnesium"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Nuts", "Healthy", "Versatile"]
      },
      // Other dry fruits...
      {
        id: 203,
        name: "Walnuts (Akhrot) - 500g",
        price: 799,
        images: [
          "https://images.unsplash.com/photo-1604908177522-3c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1604908177522-3c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80",

          "https://images.unsplash.com/photo-1604908177522-3c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.6,
        reviews: 90,
        description: "Crunchy walnuts, rich in omega-3 fatty acids and antioxidants.",
        details: "500g pack | Crunchy texture | Omega-3 rich",
        inStock: true,
        weight: "500g",
        origin: "California, USA",
        benefits: ["Rich in omega-3", "Good for brain health", "High in antioxidants"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Nuts", "Healthy", "Omega-3"]
      },
      {
        id: 204,
        name: "Pistachios (Pista) - 500g",
        price: 899,
        images: [
          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80",

          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1590080877777-1c4f1f1e6f3e?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 110,
        description: "Tasty pistachios, perfect for snacking and adding to desserts.",
        details: "500g pack | Tasty flavor | Versatile use",
        inStock: true,
        weight: "500g",
        origin: "Iran",
        benefits: ["Rich in protein", "Good for heart health", "High in fiber"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Nuts", "Healthy", "Snacking"]
      }
    ],
    // Other categories...
    "handicrafts-textiles": [
      {
        id: 301,
        name: "Handwoven Cotton Saree",
        price: 2499,
        images: [
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 75,
        description: "Elegant handwoven cotton saree with traditional designs, perfect for festive occasions.",
        details: "100% cotton | Handwoven | Traditional designs",
        inStock: true,
        weight: "500g",
        origin: "India",
        benefits: ["Breathable fabric", "Comfortable wear", "Unique designs"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Handwoven", "Traditional", "Festive"]
      },
      {
        id: 302,
        name: "Wooden Carved Jewelry Box",
        price: 1599,
        images: [
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.7,
        reviews: 60,
        description: "Beautifully carved wooden jewelry box with intricate designs, perfect for storing your precious items.",
        details: "Hand-carved | Intricate designs | Sturdy build",
        inStock: true,
        weight: "1kg",
        origin: "India",
        benefits: ["Elegant storage", "Unique craftsmanship", "Durable material"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Handcrafted", "Wooden", "Jewelry"]

      },],
    "organic-foods": [
      {
        id: 401,
        name: "Organic Quinoa - 500g",
        price: 499,
        images: [
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.9,
        reviews: 85,

        description: "Nutritious organic quinoa, perfect for salads, bowls, and healthy meals.",
        details: "500g pack | Organic | High in protein",
        inStock: true,
        weight: "500g",
        origin: "Peru",
        benefits: ["Rich in protein", "Gluten-free", "High in fiber"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Healthy", "Gluten-Free"]
      },
      {
        id: 402,
        name: "Organic Chia Seeds - 250g",
        price: 299,
        images: [
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?auto=format&fit=crop&w=500&q=80",
          "https://images.unsplash.com/photo-1510626176961-4bfb1a3c5f3e?auto=format&fit=crop&w=500&q=80"
        ],
        rating: 4.8,
        reviews: 95,
        description: "High-quality organic chia seeds, rich in omega-3 and fiber, perfect for smoothies and baking.",
        details: "250g pack | Organic | Rich in omega-3",
        inStock: true,
        weight: "250g",
        origin: "Mexico",
        benefits: ["Rich in omega-3", "High in fiber", "Antioxidant properties"],
        delivery: "Free delivery on orders above ₹499",
        tags: ["Organic", "Healthy", "Superfood"]
      }]
    // Other categories...
  };

 const products = categoryProducts[categoryId] || [];
  const categoryNames = {
    "spices-grains": "Spices & Grains",
    "processed-foods": "Processed Foods",
    "fruits": "Fresh/Dehydrated Fruits",
    "wellness-oils": "Wellness & Oils",
    "beverages": "Beverages",
    "dry-fruits": "Dry Fruits",
    "handicrafts-textiles": "Handicrafts & Textiles",
    "organic-foods": "Organic Foods",
    "exotic-fruits": "Exotic Fruits"
  };

  // Filter and sort products
  const filteredProducts = products
    .filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(product =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return 0;
      }
    });

  // Load cart and favorites from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    const savedFavorites = localStorage.getItem('favorites');
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
  }, []);

  // Save cart and favorites to localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [cartItems, favorites]);

  const handleAddToCart = (product, qty = quantity) => {
    const existingItem = cartItems.find(item => item.id === product.id);

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: qty }]);
    }

    // Show notification
    showNotification(`${qty} ${product.name} added to cart!`);

    // Reset quantity
    setQuantity(1);
  };

  const showNotification = (message) => {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.cart-notification');
    existingNotifications.forEach(notification => notification.remove());

    const notification = document.createElement('div');
    notification.className = 'cart-notification fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl z-50 animate-fade-in-down flex items-center gap-2';
    notification.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="font-medium">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add('animate-fade-out-up');
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  };

const toggleFavorite = (product) => {
  let updatedFavorites;

  if (favorites.some((fav) => fav.id === product.id)) {
    updatedFavorites = favorites.filter((fav) => fav.id !== product.id);
  } else {
    updatedFavorites = [...favorites, product];
  }

  setFavorites(updatedFavorites);
  localStorage.setItem("wishlist", JSON.stringify(updatedFavorites));
};


  const openProductDetail = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    window.scrollTo(0, 0);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedProduct.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProduct.images.length - 1 : prev - 1
    );
  };

  const handleBuyNow = (product) => {
    handleAddToCart(product);
    setTimeout(() => {
      navigate("/cart");
    }, 500);
  };

  if (selectedProduct) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={closeProductDetail}
            className="flex items-center text-green-600 hover:text-green-700 transition-all duration-300 mb-8 group"
          >
            <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </button>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 p-10">
              {/* Product Image Gallery */}
              <div className="space-y-6">
                <div className="relative h-96 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={selectedProduct.images[currentImageIndex]}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />

                  {selectedProduct.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300"
                      >
                        <FiChevronLeft className="text-xl" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-xl hover:bg-white hover:scale-110 transition-all duration-300"
                      >
                        <FiChevronRight className="text-xl" />
                      </button>
                    </>
                  )}

                  {/* Sale Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Popular
                  </div>
                </div>

                {/* Thumbnail gallery */}
                {selectedProduct.images.length > 1 && (
                  <div className="flex gap-3">
                    {selectedProduct.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProduct.name} ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-3 transition-all duration-300 ${index === currentImageIndex
                          ? 'border-green-500 scale-105 shadow-md'
                          : 'border-transparent hover:border-gray-300'
                          }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-3">
                    {selectedProduct.name}
                  </h1>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className={i < Math.floor(selectedProduct.rating) ? "fill-current" : ""} />
                      ))}
                    </div>
                    <span className="ml-3 text-gray-600 font-medium">
                      {selectedProduct.rating} ({selectedProduct.reviews} reviews)
                    </span>
                  </div>

                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold text-green-600">
                      ₹{selectedProduct.price.toLocaleString()}
                    </span>
                    <span className="ml-3 text-green-500 bg-green-100 px-3 py-1 rounded-full text-sm font-medium">
                      In Stock
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Product Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tags?.map((tag, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quantity Selector */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <label className="block text-lg font-semibold text-gray-800 mb-4">Quantity:</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-5 py-3 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="px-6 py-3 font-bold text-lg bg-white">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-5 py-3 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-lg font-semibold text-gray-700">
                      Total: ₹{(selectedProduct.price * quantity).toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
                  >
                    <FiShoppingCart className="mr-3 text-xl" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(selectedProduct)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                  <button
                    onClick={() => toggleFavorite(selectedProduct.id)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${favorites.includes(selectedProduct.id)
                      ? 'border-red-500 bg-red-50 text-red-600 hover:bg-red-100'
                      : 'border-gray-200 text-gray-600 hover:border-green-500 hover:text-green-600'
                      }`}
                  >
                    <FiHeart className={`text-xl ${favorites.includes(selectedProduct.id) ? "fill-current" : ""}`} />
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center text-green-600">
                    <FiTruck className="mr-3 text-xl" />
                    <span className="font-semibold">{selectedProduct.delivery}</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <FiShield className="mr-3 text-xl" />
                    <span>100% Authentic Products Guaranteed</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <FiRefreshCw className="mr-3 text-xl" />
                    <span>Easy 7-Day Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <> 
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-32">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
            <div className="flex items-center mb-4 lg:mb-0">
              <Link to="/" className="flex items-center text-green-600 hover:text-green-700 transition-colors">
                <FiArrowLeft className="mr-2" /> Home
              </Link>
              <h1 className="text-4xl font-bold text-green-900 ml-6">
                {categoryNames[categoryId] || "Products"}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Filters and Controls */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <FiFilter />
                  Filters
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-green-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'grid'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <FiGrid />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-xl transition-colors ${viewMode === 'list'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <FiList />
                </button>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <div className="flex items-center gap-4">
                    <span>₹{priceRange[0]}</span>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="flex-1"
                    />
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Products Grid */}
   <div
  className={`grid gap-6 ${
    viewMode === "grid"
      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-1"
  }`}
>
  {filteredProducts.map((product) => {
    const isFavorite = favorites.some((fav) => fav.id === product.id);

    return (
      <div
        key={product.id}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      >
        {/* Product Image */}
        <div className="h-56 overflow-hidden relative">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
            onClick={() => openProductDetail(product)}
          />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(product);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
              isFavorite
                ? "bg-red-500 text-white shadow-lg"
                : "bg-white/80 text-gray-600 hover:bg-white hover:text-red-500"
            }`}
          >
            <FiHeart className={isFavorite ? "fill-current" : ""} />
          </button>

          {/* Rating Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <FiStar className="text-yellow-400 fill-current" />
            <span>{product.rating}</span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5">
          <h3
            className="font-semibold text-lg text-gray-900 hover:text-green-600 transition-colors cursor-pointer line-clamp-2 mb-2"
            onClick={() => openProductDetail(product)}
          >
            {product.name}
          </h3>

          <p className="text-2xl font-bold text-green-600 mb-4">
            ₹{product.price.toLocaleString()}
          </p>

          <button
            onClick={() => openProductDetail(product)}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            View Details
          </button>
        </div>
      </div>
    );
  })}
</div>

{/* Empty State */}
{filteredProducts.length === 0 && (
  <div className="text-center py-16">
    <div className="bg-white rounded-2xl shadow-lg p-12 max-w-md mx-auto">
      <FiSearch className="text-6xl text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        No products found
      </h3>
      <p className="text-gray-600 mb-6">
        Try adjusting your search or filters
      </p>
      <button
        onClick={() => {
          setSearchTerm("");
          setPriceRange([0, 5000]);
        }}
        className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  </div>
)}

        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes fade-in-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fade-out-up {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-10px);
            }
          }
          .animate-fade-in-down {
            animation: fade-in-down 0.3s ease-out;
          }
          .animate-fade-out-up {
            animation: fade-out-up 0.3s ease-in;
          }
        `}</style>
      </div>
      <Footer />
    </>
  );
};

export default CategoryProducts;











