import React from "react";
import car from '../assets/car.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const MyCars = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-3/5 p-6">
        <h2 className="text-2xl font-bold text-center">My Cars</h2>
        <p className="text-green-600 text-center mt-1 cursor-pointer">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-lg" /> <span className="text-gray-500">Show my vehicle on the map</span> 
        </p>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <InfoCard title="Remaining Time" value="20 hr" subtitle="Slot B-027" />
          <InfoCard title="Charging" value="75%" subtitle="2h left" />
        </div>
        
        <div className="flex justify-center my-6">
          <img src={car} alt="Car" className="w-1/2 rounded-lg" />
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Policy Details</h3>
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mt-2">
            <DetailRow label="Policy Number" value="PI1006987" />
            <DetailRow label="Insurance Type" value="Fault Insurance (FI)" />
            <DetailRow label="Car Model" value="BMW X7" />
            <DetailRow label="Plate Number" value="7KJL890 🇺🇸" />
          </div>
        </div>
        
        <button className="mt-6 w-full bg-green-500 text-white py-3 rounded-full text-lg font-semibold">
          Show More Details
        </button>
      </div>
    </div>
  );
};

const InfoCard = ({ title, value, subtitle }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
    <h4 className="text-gray-700 font-medium">{title}</h4>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-gray-500 text-sm">{subtitle}</p>
  </div>
);

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b last:border-none">
    <span className="text-gray-600">{label}</span>
    <span className="text-gray-900 font-medium">{value}</span>
  </div>
);

export default MyCars;
