import React from "react";
import { FaCar, FaCalendarAlt, FaUser, FaPaypal, FaBinoculars } from "react-icons/fa";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 h-screen p-6 border-r-2 border-gray-300 pl-4">
      <h2 className="text-2xl font-bold mb-16">Company Logo</h2>
      <ul className="space-y-4">

        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded-full"
          onClick={() => setActiveSection("myCars")}
        >
          <FaCar /> <span>My Cars</span>
        </li>

        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded-full"
          onClick={() => setActiveSection("myCars")}
        >
          <FaPaypal /> <span>Payment</span>
        </li>

        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded-full"
          onClick={() => setActiveSection("bookings")}
        >
          <FaCalendarAlt /> <span>Bookings</span>
        </li>
       
        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 hover:text-white rounded-full"
          onClick={() => setActiveSection("account")}
        >
          <FaUser /> <span>Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
