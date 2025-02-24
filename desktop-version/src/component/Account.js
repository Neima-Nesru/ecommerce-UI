import React from "react";
import { Switch } from "@headlessui/react";

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-3/5 rounded-2xl shadow-lg p-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/80"
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">Ryan Schnetzer</h2>
            <p className="text-gray-500">ryansc@gmail.com</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg text-sm">
              Edit Profile
            </button>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Content</h3>
          <div className="mt-2 space-y-2">
            <MenuItem title="My Details" />
            <MenuItem title="My Vehicles" />
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700">Performance</h3>
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
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition">
      <span className="text-gray-700 font-medium">{title}</span>
      {hasSwitch ? <SwitchComponent enabled={enabled} /> : <ArrowIcon />}
    </div>
  );
};

const SwitchComponent = ({ enabled }) => {
  return (
    <Switch
      checked={enabled}
      className={`$ {enabled ? "bg-green-500" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Toggle</span>
      <span
        className={`$ {enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform bg-white rounded-full transition`}
      />
    </Switch>
  );
};

const ArrowIcon = () => {
  return <span className="text-gray-400">▶</span>;
};

export default Account;
