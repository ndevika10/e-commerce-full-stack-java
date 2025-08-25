import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" }
];

const Order = () => {
  return (
    <div className="flex">
      {/* Left Sidebar */}
      <div className="w-1/4 h-auto shadow-lg bg-white p-5 sticky top-5">
        <h1 className="font-bold text-lg">Filter</h1>

        <div className="space-y-4 mt-10">
          <h1>ORDER STATUS</h1>
          {orderStatus.map((option) => (
            <div key={option.value} className="flex items-center">
              <input
                id={option.value}
                value={option.value}
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                className="ml-3 text-sm text-gray-600"
                htmlFor={option.value}
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content (example placeholder) */}
      <div className="w-3/4 p-5 space-y-8">
        {[1,1,1,1,1,1].map((item)=><OrderCard/>)}
      </div>
    </div>
  );
};

export default Order;
