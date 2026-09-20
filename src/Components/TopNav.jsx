// import React from 'react'
//   import { IoSearchOutline } from "react-icons/io5";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { useAuth0 } from "@auth0/auth0-react";

// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// const TopNav = () => {

//   const getGreeting = () => {
//   const hour = new Date().getHours();

//   console.log("Current hour:", hour);

//   if (hour >= 5 && hour < 12) {
//     return "Good Morning";
//   } else if (hour >= 12 && hour < 18) {
//     return "Good Afternoon";
//   } else {
//     return "Good Evening";
//   }
// };

//   const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();


//   const navigate = useNavigate();
// const [search, setSearch] = useState("");

// const handleSearch = (e) => {
//   e.preventDefault();

//   if (!search.trim()) return;

//   navigate(`/tasks?search=${encodeURIComponent(search)}`);
// };

//   return (
//     <div className=" w-min-screen h-[15%] flex items-center justify-between bg-white px-6 py-4">
      
//       {/* Left Section */}
//       <div>
//         <h1 className="text-3xl font-bold text-gray-800">
//           {getGreeting()}
//         </h1>
//         <p className="text-sm text-gray-500">
//           Welcome back, {user?.name} Here's what's happening with your tasks.
//         </p>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-5">
        
//         {/* Search */}
//         <form onSubmit={handleSearch} className="relative">
//   <input
//     type="text"
//     placeholder="Search tasks..."
//     value={search}
//     onChange={(e) => setSearch(e.target.value)}
//     className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
//   />
// </form>

//         {/* Notification */}
//         <button className="relative">
//           <IoNotificationsOutline className="text-2xl text-gray-600" />
//           <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//         </button>

//         {/* User Profile */}
// {isAuthenticated ? (
//   <div className="flex items-center gap-3">
    
//     <img
//       src={user.picture}
//       alt={user.name}
//       className="w-10 h-10 rounded-full object-cover"
//     />

//     <div>
//       <h3 className="text-sm font-semibold text-gray-800">
//         {user.name}
//       </h3>

//       <p className="text-xs text-gray-500">
//         Student
//       </p>
//     </div>

//     <button
//       onClick={() =>
//         logout({
//           logoutParams: {
//             returnTo: window.location.origin,
//           },
//         })
//       }
//       className="text-sm text-red-500 hover:text-red-600"
//     >
//       Logout
//     </button>

//   </div>
// ) : (
//   <button
//     onClick={() => loginWithRedirect()}
//     className="bg-purple-600 text-white px-4 py-2 rounded-lg"
//   >
//     Login
//   </button>
// )}

//       </div>
//     </div>
//   )
// }

// export default TopNav




// import React, { useState } from "react";
// import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useNavigate } from "react-router-dom";

// const TopNav = () => {

//   // Auth0
//   const {
//     user,
//     isAuthenticated,
//     loginWithRedirect,
//     logout
//   } = useAuth0();

//   // Navigation
//   const navigate = useNavigate();

//   // Search state
//   const [search, setSearch] = useState("");


//   // Greeting
//   const getGreeting = () => {
//     const hour = new Date().getHours();

//     if (hour >= 5 && hour < 12) {
//       return "Good Morning";
//     } else if (hour >= 12 && hour < 18) {
//       return "Good Afternoon";
//     } else {
//       return "Good Evening";
//     }
//   };


//   // Search task
//   const handleSearch = (e) => {
//     e.preventDefault();

//     // Don't search if input is empty
//     if (!search.trim()) {
//       return;
//     }

//     // Navigate to Tasks page with search text
//     navigate(`/tasks?search=${encodeURIComponent(search.trim())}`);
//   };


//   return (
//     <div className="w-full bg-white px-6 py-4 flex items-center justify-between">

//       {/* ================= LEFT SECTION ================= */}

//       <div>
//         <h1 className="text-3xl font-bold text-gray-800">
//           {getGreeting()}
//         </h1>

//         <p className="text-sm text-gray-500 mt-1">
//           Welcome back, {user?.name || "Student"}! Here's what's
//           happening with your tasks.
//         </p>
//       </div>


//       {/* ================= RIGHT SECTION ================= */}

//       <div className="flex items-center gap-5">


//         {/* ================= SEARCH ================= */}

//         <form
//           onSubmit={handleSearch}
//           className="relative"
//         >

//           <IoSearchOutline
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
//           />

//           <input
//             type="text"
//             placeholder="Search tasks..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-64 pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//           />

//         </form>


//         {/* ================= NOTIFICATION ================= */}

//         <button className="relative">

//           <IoNotificationsOutline
//             className="text-2xl text-gray-600"
//           />

//           <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full">
//           </span>

//         </button>


//         {/* ================= USER PROFILE ================= */}

//         {isAuthenticated ? (

//           <div className="flex items-center gap-3">

//             {/* Profile Picture */}

//             <img
//               src={user?.picture}
//               alt={user?.name || "Student"}
//               className="w-10 h-10 rounded-full object-cover"
//             />


//             {/* User Information */}

//             <div>

//               <h3 className="text-sm font-semibold text-gray-800">
//                 {user?.name}
//               </h3>

//               <p className="text-xs text-gray-500">
//                 Student
//               </p>

//             </div>


//             {/* Logout */}

//             <button
//               onClick={() =>
//                 logout({
//                   logoutParams: {
//                     returnTo: window.location.origin,
//                   },
//                 })
//               }
//               className="text-sm text-red-500 hover:text-red-600 ml-2"
//             >
//               Logout
//             </button>

//           </div>

//         ) : (

//           /* Login */

//           <button
//             onClick={() => loginWithRedirect()}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition"
//           >
//             Login
//           </button>

//         )}

//       </div>

//     </div>
//   );
// };

// export default TopNav;


import React, { useEffect, useState } from "react";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const TopNav = () => {

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout
  } = useAuth0();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");


  // ==============================
  // SEARCH EFFECT
  // ==============================

  useEffect(() => {

    // Don't do anything when search is empty
    if (!search.trim()) {
      return;
    }

    // Navigate to Tasks page
    navigate(
      `/tasks?search=${encodeURIComponent(search.trim())}`
    );

  }, [search, navigate]);


  // ==============================
  // GREETING
  // ==============================

  const getGreeting = () => {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return "Good Morning";
    }

    if (hour >= 12 && hour < 18) {
      return "Good Afternoon";
    }

    return "Good Evening";
  };


  return (
    <div className="w-full bg-white px-6 py-4 flex items-center justify-between">

      {/* LEFT */}

      <div>

        <h1 className="text-3xl font-bold text-gray-800">
          {getGreeting()}
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Welcome back, {user?.name || "Student"}! Here's what's
          happening with your tasks.
        </p>

      </div>


      {/* RIGHT */}

      <div className="flex items-center gap-5">


        {/* SEARCH */}

        <div className="relative">

          <IoSearchOutline
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
          />

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-64 pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-purple-500"
          />

        </div>


        {/* NOTIFICATION */}

        <button className="relative">

          <IoNotificationsOutline
            className="text-2xl text-gray-600"
          />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full">
          </span>

        </button>


        {/* USER */}

        {isAuthenticated ? (

          <div className="flex items-center gap-3">

            <img
              src={user?.picture}
              alt={user?.name || "Student"}
              className="w-10 h-10 rounded-full object-cover"
            />

            <div>

              <h3 className="text-sm font-semibold text-gray-800">
                {user?.name}
              </h3>

              <p className="text-xs text-gray-500">
                Student
              </p>

            </div>

            <button
              onClick={() =>
                logout({
                  logoutParams: {
                    returnTo: window.location.origin,
                  },
                })
              }
              className="text-sm text-red-500 hover:text-red-600 ml-2"
            >
              Logout
            </button>

          </div>

        ) : (

          <button
            onClick={() => loginWithRedirect()}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg"
          >
            Login
          </button>

        )}

      </div>

    </div>
  );
};

export default TopNav;