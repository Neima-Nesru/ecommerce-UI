import React from "react";
import { FaPhone } from "react-icons/fa";
import car from '../assets/car.jpg'
import parking from '../assets/parking.jpg'

const Bookings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/5 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-center">Bookings</h2>
        
        <div className="flex justify-center space-x-24 my-4 bg-white rounded-full py-6">
          <Tab label="ACTIVE" active />
          <Tab label="UPCOMING" />
          <Tab label="PAST" />
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm flex items-center space-x-4">
          <img src={car} alt="Parking" className="rounded-lg w-24" />
          <div>
            <h3 className="text-lg font-semibold">Covered Parking</h3>
            <p className="text-gray-400">Secure Parking with CCTV & Alarms</p>
            <div className="flex space-x-4 mt-2">
              <button className="text-green-600 font-medium border rounded-full p-2">
                <FaPhone className="inline"/> Call Now</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded-full">Park Here Now</button>
            </div>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mt-6">Payment Methods</h3>
        <div className="flex space-x-4 mt-2">
          <PaymentMethod name="Apple Pay" />
          <PaymentMethod name="Stripe" />
          <PaymentMethod name="Visa" />
          <PaymentMethod name="Google Pay" />
        </div>
        
        <h3 className="text-lg font-semibold mt-6">Parking Time</h3>
        <div className="flex space-x-4 mt-2">
          <TimeSlot time="10:00 - 2:00" label="Day" />
          <TimeSlot time="2:00 - 4:00" label="Evening" active />
          <TimeSlot time="2:00 - 4:00" label="Evening" />
        </div>
        
        <div className="flex justify-center my-6 overflow-hidden h-32">
          <img src={parking} alt="Parking Area" className="rounded-lg w-full object-cover" />
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">$36 <span className="text-gray-500 text-sm">Per Hour</span></span>
        </div>
        
        <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Tab = ({ label, active }) => (
  <button className={`px-4 py-2 font-medium ${active ? "bg-green-500 text-white rounded-full" : "text-gray-600"}`}>{label}</button>
);

const PaymentMethod = ({ name }) => (
  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black font-medium font-sm">{name}</div>
);

const TimeSlot = ({ time, label, active }) => (
  <div className={`bg-white p-4 rounded-full shadow-sm text-center ${active ? "text-bold-500" : ""}`}>
    <h4 className="font-medium">{label}</h4>
    <p className="text-sm">{time}</p>
  </div>
);

export default Bookings;
