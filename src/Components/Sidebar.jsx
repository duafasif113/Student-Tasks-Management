import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdOutlineSubject } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { LuCalendarHeart } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa";
        import { IoIosLogOut } from "react-icons/io";


      



import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='h-screen w-[17%] relative   p-5 border-r-2 border-gray-200  '>
      <div className='flex items-center gap-2 py-3'>
<FaUserGraduate  className='text-4xl text-purple-500'/>
        <div className='flex flex-col '>
        <span className='font-bold text-2xl'>Student Task</span>
        <span className='text-gray-500'>Managament System</span></div>
      </div>
      <div className='py-4'>
        <div className='flex flex-col gap-5'>
            
               <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                        <AiOutlineHome  />
                <div>
                Dashboard
                </div>

        </NavLink>
               <NavLink
          to="/tasks"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2 text-gray-600  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                        <FaTasks />
                <div>
                Tasks
                </div>

        </NavLink>
              
               <NavLink
          to="/calender"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2 text-gray-600  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                       <SlCalender />
                <div>
                Calender
                </div>

        </NavLink>
               <NavLink
          to="/subjects"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2 text-gray-600  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                      <MdOutlineSubject />
                <div>
                Subjects
                </div>

        </NavLink>
               <NavLink
          to="/stat"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2 text-gray-600  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                        <IoMdStats />
                <div>
                Statistics
                </div>

        </NavLink>
               <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "flex  items-center gap-2 text-xl text-purple-500 w-[180px] py-2 px-2 text-gray-600  bg-purple-100 "
              : "flex  items-center gap-2 text-xl  text-gray-600"
          }
        >
                        <IoSettingsOutline />
                <div>
                Settings
                </div>

        </NavLink>
  
           
        </div>
      </div>
      <div  className=' absolute flex  items-center gap-2 text-xl  text-gray-600 bottom-2 '>
         <IoIosLogOut/>
      <span>logout</span>
      </div>
     
    </div>
    
  
  )
}

export default Sidebar
