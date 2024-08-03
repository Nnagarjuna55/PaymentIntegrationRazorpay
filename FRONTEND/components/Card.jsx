// Card.js
import React from 'react';

const Card = ({ amount, img, checkoutHandler }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
      <div className="relative">
        <img
          src={img}
          alt="Product"
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col justify-between">
        <h2 className="text-lg font-bold">Price: ₹{amount}</h2>
        <button
          onClick={() => checkoutHandler(amount)}
          className="mt-2 bg-blue-500 hover:bg-blue-700 transition text-white px-4 py-2 rounded"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;
