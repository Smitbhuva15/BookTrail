import React from "react";

const Card = ({item}) => {
  return (

    <div className="">
    <div className="max-w-xs bg-white rounded-lg shadow-lg overflow-hidden dark:border">
      <img
        className="w-full h-64 object-cover "
        src={item.image}
        alt={item.title}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.title}</p>
        <p className="mt-2 text-gray-700">
          <span className="text-lg font-bold text-indigo-600">Free</span>
        </p>
        <p className="text-lg font-bold text-black">${item.price}</p>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-all">
          Purchase
        </button>
      </div>
    </div>
    </div>
    
  );
};

export default Card;
