import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { deepPurple } from '@mui/material/colors';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      {/* Delivery Address */}
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      {/* Order Tracker */}
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {/* Order Details Cards */}
      <div className="space-y-6"> 
        {[1, 1, 1, 1, 1].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-md p-5 border bg-white"
          >
            {/* Left Section (Image + Product Info) */}
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top rounded"
                src="https://static.nextdirect.com/resource/blob/998114/c087b788cdabef39d18a6bb72c8bf4b1/date-hero-mens-mb-data.jpg"
                alt="product"
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Beige Oversized Shirt Men</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Color: Beige</span> <span>Size: M</span>
                </p>
                <p className="text-sm">Seller: Souled store</p>
                <p className="font-medium">$1099</p>
              </div>
            </div>

            {/* Right Section (Rate & Review) */}
            <div className="flex items-center text-purple-700 cursor-pointer">
              <StarBorderIcon
                sx={{ fontSize: '2rem', color: deepPurple[500] }}
                className="px-2"
              />
              <span className="text-sm font-medium">Rate and Review Product</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderDetails
