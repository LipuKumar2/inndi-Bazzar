// src/Pages/Admin/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FiBox,
  FiShoppingCart,
  FiUsers,
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiMenu,
  FiLogOut,
  FiSettings,
  FiPieChart,
  FiPackage,
  FiShoppingBag,
  FiUser,
  FiRefreshCw,
  FiAlertCircle,
  FiCalendar,
  FiBarChart2
} from 'react-icons/fi';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalRevenue: 0,
    pendingOrders: 0,
    lowStockProducts: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month');
  const navigate = useNavigate();

  // Fetch dashboard data
  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Simulate API calls with mock data
      setTimeout(() => {
        // Stats data
        setStats({
          totalProducts: 156,
          totalOrders: 284,
          totalUsers: 189,
          totalRevenue: 125600,
          pendingOrders: 23,
          lowStockProducts: 8
        });

        // Recent orders
        setRecentOrders([
          { id: '#ORD-001', customer: 'Rahul Sharma', amount: '₹2,499', status: 'Delivered', date: '2 hours ago' },
          { id: '#ORD-002', customer: 'Priya Patel', amount: '₹1,899', status: 'Processing', date: '4 hours ago' },
          { id: '#ORD-003', customer: 'Amit Kumar', amount: '₹3,450', status: 'Shipped', date: '6 hours ago' },
          { id: '#ORD-004', customer: 'Sneha Singh', amount: '₹899', status: 'Pending', date: '1 day ago' },
          { id: '#ORD-005', customer: 'Vikram Mehta', amount: '₹2,100', status: 'Delivered', date: '1 day ago' },
          { id: '#ORD-006', customer: 'Neha Gupta', amount: '₹4,200', status: 'Processing', date: '2 days ago' }
        ]);

        // Top products
        setTopProducts([
          { name: 'Organic Turmeric', sales: 45, revenue: '₹11,250' },
          { name: 'Almonds', sales: 38, revenue: '₹19,000' },
          { name: 'Basmati Rice', sales: 32, revenue: '₹14,400' },
          { name: 'Cashews', sales: 28, revenue: '₹16,800' },
          { name: 'Saffron', sales: 15, revenue: '₹18,750' }
        ]);

        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setLoading(false);
    }
  };

  // Check authentication and load data
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchDashboardData();
  }, [navigate, timeRange]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminEmail');
    navigate('/admin/login');
  };

  const handleRefresh = () => {
    fetchDashboardData();
  };

  const StatCard = ({ title, value, icon: Icon, trend, trendValue, onClick, isAlert = false }) => (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer ${isAlert ? 'border-orange-200 bg-orange-50' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className={`text-2xl font-bold mt-1 ${isAlert ? 'text-orange-600' : 'text-gray-900'}`}>
            {value}
          </p>
          {trend && (
            <div className={`flex items-center mt-2 text-sm ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
              {trend === 'up' ? <FiTrendingUp className="mr-1" /> : <FiTrendingDown className="mr-1" />}
              {trendValue}
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${isAlert ? 'bg-orange-100' : 'bg-green-100'}`}>
          <Icon className={`h-6 w-6 ${isAlert ? 'text-orange-600' : 'text-green-600'}`} />
        </div>
      </div>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const statusConfig = {
      Delivered: { color: 'green', bg: 'green-100', text: 'green-800' },
      Processing: { color: 'yellow', bg: 'yellow-100', text: 'yellow-800' },
      Shipped: { color: 'blue', bg: 'blue-100', text: 'blue-800' },
      Pending: { color: 'gray', bg: 'gray-100', text: 'gray-800' },
      Cancelled: { color: 'red', bg: 'red-100', text: 'red-800' }
    };

    const config = statusConfig[status] || statusConfig.Pending;

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${config.bg} text-${config.text}`}>
        {status}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-green-800 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="flex items-center justify-between h-16 px-4 bg-green-900">
          <h1 className="text-white text-xl font-bold">InndiBazzar Admin</h1>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white">
            <FiMenu className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8 px-4 space-y-2">
          <Link to="/admin/dashboard" className="flex items-center px-4 py-3 text-white bg-green-700 rounded-xl">
            <FiPieChart className="h-5 w-5 mr-3" />
            Dashboard
          </Link>
          <Link to="/admin/products" className="flex items-center px-4 py-3 text-green-100 hover:text-white hover:bg-green-700 rounded-xl">
            <FiPackage className="h-5 w-5 mr-3" />
            Products
          </Link>
          <Link to="/admin/orders" className="flex items-center px-4 py-3 text-green-100 hover:text-white hover:bg-green-700 rounded-xl">
            <FiShoppingBag className="h-5 w-5 mr-3" />
            Orders
          </Link>
          <Link to="/admin/users" className="flex items-center px-4 py-3 text-green-100 hover:text-white hover:bg-green-700 rounded-xl">
            <FiUser className="h-5 w-5 mr-3" />
            Users
          </Link>
          <Link to="/admin/settings" className="flex items-center px-4 py-3 text-green-100 hover:text-white hover:bg-green-700 rounded-xl">
            <FiSettings className="h-5 w-5 mr-3" />
            Settings
          </Link>
          <button onClick={handleLogout} className="flex items-center w-full px-4 py-3 text-green-100 hover:text-white hover:bg-green-700 rounded-xl">
            <FiLogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-500 mr-4">
                <FiMenu className="h-6 w-6" />
              </button>
              <div className="flex items-center space-x-4">
                <FiCalendar className="text-gray-400" />
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="border-none bg-transparent text-gray-600 focus:outline-none"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleRefresh}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Refresh data"
              >
                <FiRefreshCw className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-4">Welcome, Admin</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
              <p className="text-gray-600">Welcome to your admin dashboard</p>
            </div>
            <div className="flex items-center space-x-2 mt-4 sm:mt-0">
              <FiBarChart2 className="text-gray-400" />
              <span className="text-sm text-gray-500">Last updated: Just now</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
            <StatCard
              title="Total Products"
              value={stats.totalProducts}
              icon={FiBox}
              trend="up"
              trendValue="+12%"
              onClick={() => navigate('/admin/products')}
            />
            <StatCard
              title="Total Orders"
              value={stats.totalOrders}
              icon={FiShoppingCart}
              trend="up"
              trendValue="+8%"
              onClick={() => navigate('/admin/orders')}
            />
            <StatCard
              title="Total Users"
              value={stats.totalUsers}
              icon={FiUsers}
              trend="up"
              trendValue="+5%"
              onClick={() => navigate('/admin/users')}
            />
            <StatCard
              title="Total Revenue"
              value={`₹${stats.totalRevenue.toLocaleString()}`}
              icon={FiDollarSign}
              trend="up"
              trendValue="+15%"
            />
            <StatCard
              title="Pending Orders"
              value={stats.pendingOrders}
              icon={FiAlertCircle}
              trend="down"
              trendValue="-3%"
              isAlert={stats.pendingOrders > 0}
              onClick={() => navigate('/admin/orders?status=pending')}
            />
            <StatCard
              title="Low Stock"
              value={stats.lowStockProducts}
              icon={FiAlertCircle}
              trend="same"
              trendValue="No change"
              isAlert={stats.lowStockProducts > 0}
              onClick={() => navigate('/admin/products?stock=low')}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent orders */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
                <Link to="/admin/orders" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View all →
                </Link>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Order ID</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Customer</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Amount</th>
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">
                          <Link to={`/admin/orders/${order.id}`} className="hover:text-green-600">
                            {order.id}
                          </Link>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{order.customer}</td>
                        <td className="py-3 px-4 text-sm text-gray-900">{order.amount}</td>
                        <td className="py-3 px-4">
                          <StatusBadge status={order.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Top products */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Top Selling Products</h2>
                <Link to="/admin/products" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View all →
                </Link>
              </div>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-gray-900">{product.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{product.sales} units</div>
                      <div className="text-xs text-gray-500">{product.revenue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminDashboard;