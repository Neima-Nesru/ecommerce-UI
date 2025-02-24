import React from "react";

const Bookings = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-3/5 rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center">Bookings</h2>
        
        <div className="flex justify-center space-x-4 my-4">
          <Tab label="Active" active />
          <Tab label="Upcoming" />
          <Tab label="Past" />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm flex items-center space-x-4">
          <img src="https://via.placeholder.com/100" alt="Parking" className="rounded-lg w-24" />
          <div>
            <h3 className="text-lg font-semibold">Covered Parking</h3>
            <p className="text-gray-500">Secure Parking with CCTV & Alarms</p>
            <div className="flex space-x-4 mt-2">
              <button className="text-green-600 font-medium">📞 Call Now</button>
              <button className="bg-green-500 text-white px-3 py-1 rounded-md">Park Here Now</button>
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
        
        <div className="flex justify-center my-6">
          <img src="https://via.placeholder.com/400" alt="Parking Area" className="rounded-lg w-full" />
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">$36 <span className="text-gray-500 text-sm">Per Hour</span></span>
        </div>
        
        <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Tab = ({ label, active }) => (
  <button className={`px-4 py-2 rounded-md font-medium ${active ? "bg-green-500 text-white" : "bg-gray-200 text-gray-600"}`}>{label}</button>
);

const PaymentMethod = ({ name }) => (
  <div className="bg-gray-200 px-4 py-2 rounded-lg font-medium">{name}</div>
);

const TimeSlot = ({ time, label, active }) => (
  <div className={`p-4 rounded-lg shadow-sm text-center ${active ? "bg-green-500 text-white" : "bg-gray-50 text-gray-700"}`}>
    <h4 className="font-medium">{label}</h4>
    <p className="text-sm">{time}</p>
  </div>
);

export default Bookings;
