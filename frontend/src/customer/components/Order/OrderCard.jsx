import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${5}')} className="grid grid-cols-12 items-center gap-4 p-4 border-b bg-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300">
      {/* Product Image + Details */}
      <div className="col-span-6 flex items-start space-x-4">
        <img
          className="w-20 h-20 object-cover object-top rounded"
          src="https://static.nextdirect.com/resource/blob/998114/c087b788cdabef39d18a6bb72c8bf4b1/date-hero-mens-mb-data.jpg"
          alt="product"
        />

        <div className="space-y-1">
          <p className="font-medium">Men Slim Mid Rise Black Jeans</p>
          <p className="opacity-70 text-xs">Size: M</p>
          <p className="opacity-70 text-xs">Color: Black</p>
        </div>
      </div>

      {/* Price */}
      <div className="col-span-3 text-center">
        <p className="font-semibold">₹1099</p>
      </div>

      {/* Delivery Status */}
      <div className="col-span-3 flex flex-col items-end">
        <div className="flex items-center space-x-2">
          <AdjustIcon className="text-green-600 text-sm" />
          <p className="text-sm font-medium text-gray-700">
            Delivered On March 03
          </p>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Your Item Has Been Delivered
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
