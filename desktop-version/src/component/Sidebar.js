import React from "react";
import { FaCar, FaCalendarAlt, FaUser } from "react-icons/fa";

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="w-64 h-screen bg-green-700 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Car Parking</h2>
      <ul className="space-y-4">
        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 rounded"
          onClick={() => setActiveSection("myCars")}
        >
          <FaCar /> <span>My Cars</span>
        </li>
        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 rounded"
          onClick={() => setActiveSection("bookings")}
        >
          <FaCalendarAlt /> <span>Bookings</span>
        </li>
        <li
          className="flex items-center space-x-2 p-3 cursor-pointer hover:bg-green-600 rounded"
          onClick={() => setActiveSection("account")}
        >
          <FaUser /> <span>Account</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
