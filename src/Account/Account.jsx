import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/layout/Footer'

const Account = () => {
    return (
       <div>
        <Navbar/>
         <div className="px-6 md:px-20 py-32">
     
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-500 text-sm">
          Home / <span className="text-black">My Account</span>
        </p>
        <p className="text-sm">
          Welcome! <span className="text-red-500 font-medium">Md Rimel</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <h3 className="font-semibold text-gray-700 mb-2">Manage My Account</h3>
          <ul className="space-y-2 mb-6">
            <li className="text-red-500 font-medium cursor-pointer">My Profile</li>
            <li className="text-gray-500 cursor-pointer">Address Book</li>
            <li className="text-gray-500 cursor-pointer">My Payment Options</li>
          </ul>

          <h3 className="font-semibold text-gray-700 mb-2">My Orders</h3>
          <ul className="space-y-2 mb-6">
            <li className="text-gray-500 cursor-pointer">My Returns</li>
            <li className="text-gray-500 cursor-pointer">My Cancellations</li>
          </ul>

          <h3 className="font-semibold text-gray-700 mb-2">My Wishlist</h3>
          <ul className="space-y-2">
            <li className="text-gray-500 cursor-pointer">Saved Items</li>
          </ul>
        </div>

        <div className="col-span-3 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-lg font-semibold text-red-500 mb-6">
            Edit Your Profile
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"

                  className="border rounded-md p-3 w-full bg-gray-100"
                  placeholder='Abinash'
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder='Sahoo'
                  className="border rounded-md p-3 w-full bg-gray-100"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder='abinashsahoo123@gmail.com'
                  className="border rounded-md p-3 w-full bg-gray-100"
                 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  className="border rounded-md p-3 w-full bg-gray-100"
                  placeholder='Rasulgarh, Bhubaneswar (Odisha)'
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Password Changes</label>
              <input
                type="password"
                placeholder="Current Password"
                className="border rounded-md p-3 w-full mb-3"
              />
              <input
                type="password"
                placeholder="New Password"
                className="border rounded-md p-3 w-full mb-3"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="border rounded-md p-3 w-full"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="button"
                className="text-gray-600 font-medium hover:underline"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        <Footer/>
       </div>
    )
}

export default Account
