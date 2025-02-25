import React from "react";
import { Switch } from "@headlessui/react";
import ryan from '../assets/Ryan.jpg'
import { FaArrowRight, FaCar, FaLongArrowAltRight, FaUser } from "react-icons/fa";

import { useState } from "react";



const Account = () => {
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-3/5 rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src={ryan}
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Ryan Schnetzer</h2>
            <p className="text-gray-500">ryansc@gmail.com</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-400">Content</h3>
          <div className="mt-2 space-y-2">
            <MenuItem title="My Details" />
            <MenuItem title="My Vehicles" />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-400">Performance</h3>
          <div className="mt-2 space-y-2">
            <MenuItem title="Language" />
            <MenuItem title="My Payment Methods" hasSwitch={true} enabled={true} />
            <MenuItem title="My Promo Codes" hasSwitch={true} enabled={false} />
            <MenuItem title="List Your Space" />
            <MenuItem title="App Feedback" hasSwitch={true} enabled={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ title, hasSwitch = false, enabled = false }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg hover:bg-gray-100 transition">
      <span className="text-gray-700 font-medium">{title === "My Details" ? 
        <div className="flex items-center justify-center">    
          <div className="p-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
            <FaUser className="text-gray-700 text-xl " />
          </div> {title}
        </div>: 
                <div className="flex items-center justify-center">    
                <div className="p-2 w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <FaCar className="text-gray-700 text-xl " />
                </div> {title}
              </div>
      
      }
    </span>
      {hasSwitch ? <ToggleButton/> : <FaArrowRight className="text-gray-400"/>}
    </div>
  );
};

;


export default Account;


const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
          isOn ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};