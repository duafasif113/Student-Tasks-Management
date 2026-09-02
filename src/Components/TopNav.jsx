import React from 'react'
  import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const TopNav = () => {
  return (
    <div className=" w-min-screen h-[15%] flex items-center justify-between bg-white px-6 py-4">
      
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back, Ali! Here's what's happening with your tasks.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        
        {/* Search */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-72">
          <IoSearchOutline className="text-gray-500 text-xl" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent outline-none ml-2 w-full text-sm"
          />
        </div>

        {/* Notification */}
        <button className="relative">
          <IoNotificationsOutline className="text-2xl text-gray-600" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">
          <img
            src=""
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h3 className="text-sm font-semibold text-gray-800">
              Ali Khan
            </h3>
            <p className="text-xs text-gray-500">
              Student
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopNav
