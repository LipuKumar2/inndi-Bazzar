import React, { useState, useEffect } from "react";
import { 
  User, 
  Settings, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  CreditCard, 
  Bell, 
  LogOut,
  Edit3,
  Package,
  Truck,
  CheckCircle,
  XCircle,
  Plus,
  Trash2,
  Eye,
  Camera
} from "lucide-react";

const Account = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loading, setLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+91 9876543210",
    address: "123 MG Road, Bengaluru, India",
    avatar: null
  });

  // Mock data for demonstration
  const mockOrders = [
    {
      id: "ORD001",
      image: "https://via.placeholder.com/60x60",
      productName: "Wireless Headphones",
      status: "delivered",
      price: 2999,
      quantity: 1,
      date: "2024-03-15"
    },
    {
      id: "ORD002",
      image: "https://via.placeholder.com/60x60",
      productName: "Smart Watch",
      status: "shipped",
      price: 8999,
      quantity: 1,
      date: "2024-03-20"
    },
    {
      id: "ORD003",
      image: "https://via.placeholder.com/60x60",
      productName: "Running Shoes",
      status: "placed",
      price: 4999,
      quantity: 2,
      date: "2024-03-22"
    }
  ];

  const mockWishlist = [
    {
      id: 1,
      name: "Premium Laptop",
      price: 65999,
      image: "https://via.placeholder.com/150x150"
    },
    {
      id: 2,
      name: "Gaming Mouse",
      price: 2999,
      image: "https://via.placeholder.com/150x150"
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 8999,
      image: "https://via.placeholder.com/150x150"
    }
  ];

  const mockAddresses = [
    {
      id: 1,
      type: "Home",
      address: "123 MG Road, Bengaluru, India",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      address: "456 Tech Park, Electronic City, Bengaluru",
      isDefault: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered": return "text-green-600 bg-green-50";
      case "shipped": return "text-blue-600 bg-blue-50";
      case "placed": return "text-yellow-600 bg-yellow-50";
      case "cancelled": return "text-red-600 bg-red-50";
      default: return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered": return <CheckCircle className="w-4 h-4" />;
      case "shipped": return <Truck className="w-4 h-4" />;
      case "placed": return <Package className="w-4 h-4" />;
      case "cancelled": return <XCircle className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: User },
    { id: "orders", label: "Orders", icon: ShoppingBag },
    { id: "wishlist", label: "Wishlist", icon: Heart },
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payment", label: "Payment Methods", icon: CreditCard },
    { id: "settings", label: "Account Settings", icon: Settings },
  ];

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Orders</p>
              <p className="text-2xl font-bold text-blue-900">12</p>
            </div>
            <ShoppingBag className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-pink-600 text-sm font-medium">Wishlist Items</p>
              <p className="text-2xl font-bold text-pink-900">8</p>
            </div>
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Total Spent</p>
              <p className="text-2xl font-bold text-green-900">₹24,999</p>
            </div>
            <CreditCard className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
        <div className="space-y-4">
          {mockOrders.slice(0, 3).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={order.image} alt={order.productName} className="w-12 h-12 rounded-lg object-cover" />
                <div>
                  <p className="font-medium text-gray-900">{order.productName}</p>
                  <p className="text-sm text-gray-500">Order #{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="ml-1 capitalize">{order.status}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">₹{order.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">My Orders</h3>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
            <option>All Orders</option>
            <option>Delivered</option>
            <option>Shipped</option>
            <option>Placed</option>
            <option>Cancelled</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-start space-x-4">
                <img src={order.image} alt={order.productName} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{order.productName}</h4>
                  <p className="text-sm text-gray-500 mt-1">Order ID: {order.id}</p>
                  <p className="text-sm text-gray-500">Quantity: {order.quantity}</p>
                  <p className="text-sm text-gray-500">Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:text-right">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)} mb-2`}>
                  {getStatusIcon(order.status)}
                  <span className="ml-2 capitalize">{order.status}</span>
                </div>
                <p className="text-lg font-semibold text-gray-900">₹{order.price.toLocaleString()}</p>
                <div className="flex space-x-2 mt-2">
                  <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors">
                    <Eye className="w-3 h-3 inline mr-1" />
                    Track Order
                  </button>
                  <button className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWishlist = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">My Wishlist</h3>
        <p className="text-sm text-gray-500">{mockWishlist.length} items</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockWishlist.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="relative">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
              <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                <Trash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-gray-900">{item.name}</h4>
              <p className="text-lg font-semibold text-gray-900 mt-1">₹{item.price.toLocaleString()}</p>
              <button className="w-full mt-3 bg-[#475E2A] text-white py-2 rounded-lg hover:bg-[#3a4f22] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Delivery Addresses</h3>
        <button className="bg-[#475E2A] text-white px-4 py-2 rounded-lg hover:bg-[#3a4f22] transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockAddresses.map((address) => (
          <div key={address.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <span className="font-medium text-gray-900">{address.type}</span>
                {address.isDefault && (
                  <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Default</span>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-blue-600">
                  <Edit3 className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-600">{address.address}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Payment Methods</h3>
        <button className="bg-[#475E2A] text-white px-4 py-2 rounded-lg hover:bg-[#3a4f22] transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add Payment Method
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CreditCard className="w-8 h-8 text-blue-600 mr-4" />
              <div>
                <p className="font-medium text-gray-900">**** **** **** 1234</p>
                <p className="text-sm text-gray-500">Expires 12/26</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Default</span>
              <button className="text-gray-400 hover:text-red-600">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded mr-4 flex items-center justify-center">
                <span className="text-purple-600 font-semibold text-sm">UPI</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">john.doe@paytm</p>
                <p className="text-sm text-gray-500">UPI ID</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Account Settings</h3>
        
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-medium text-gray-900 mb-4">Change Password</h4>
            <div className="space-y-4">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:border-transparent"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#475E2A] focus:border-transparent"
              />
              <button className="bg-[#475E2A] text-white px-6 py-3 rounded-lg hover:bg-[#3a4f22] transition-colors">
                Update Password
              </button>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h4 className="font-medium text-gray-900 mb-4">Notifications</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">Email notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#475E2A]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Bell className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-700">SMS notifications</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#475E2A]"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h4 className="font-medium text-red-900 mb-2">Danger Zone</h4>
            <p className="text-sm text-red-600 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard": return renderDashboard();
      case "orders": return renderOrders();
      case "wishlist": return renderWishlist();
      case "addresses": return renderAddresses();
      case "payment": return renderPayment();
      case "settings": return renderSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  {userProfile.avatar ? (
                    <img src={userProfile.avatar} alt="Profile" className="w-16 h-16 rounded-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <button className="absolute -bottom-1 -right-1 bg-[#475E2A] text-white p-1.5 rounded-full hover:bg-[#3a4f22] transition-colors">
                  <Camera className="w-3 h-3" />
                </button>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">My Account</h1>
                <p className="text-gray-600">Welcome back, {userProfile.firstName} {userProfile.lastName}</p>
              </div>
            </div>
            
            <div className="mt-4 md:mt-0 bg-gray-50 rounded-xl p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{userProfile.email}</p>
                </div>
                <div>
                  <p className="text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">{userProfile.phone}</p>
                </div>
                <div>
                  <p className="text-gray-500">Location</p>
                  <p className="font-medium text-gray-900">Bengaluru, India</p>
                </div>
              </div>
              <button className="mt-3 text-[#475E2A] text-sm font-medium hover:text-[#3a4f22] flex items-center">
                <Edit3 className="w-4 h-4 mr-1" />
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-8">
              <nav className="space-y-2">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === item.id
                          ? "bg-[#475E2A] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {item.label}
                    </button>
                  );
                })}
                
                <div className="pt-4 border-t border-gray-200 mt-4">
                  <button className="w-full flex items-center px-4 py-3 text-left rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border p-8">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#475E2A]"></div>
                </div>
              ) : (
                renderContent()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;