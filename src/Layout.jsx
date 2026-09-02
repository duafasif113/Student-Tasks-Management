import Sidebar from "./Components/Sidebar";
import TopNavbar from "./Components/TopNav";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen flex">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="flex-1 flex flex-col">
        
        {/* Top Navbar */}
        <TopNavbar />

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default Layout;