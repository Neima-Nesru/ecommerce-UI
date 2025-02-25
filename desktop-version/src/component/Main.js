import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MyCars from "./MyCars";
import Bookings from "./Bookings";
import Account from "./Account";

const Main = () => {
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

export default Main;
