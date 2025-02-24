import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import MyCars from "../component/MyCars";
import Bookings from "../component/Bookings";
import Account from "../component/Account";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("myCars");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="flex-1 p-6">
        {activeSection === "myCars" && <MyCars />}
        {activeSection === "bookings" && <Bookings />}
        {activeSection === "account" && <Account />}
      </div>
    </div>
  );
};

export default Dashboard;
