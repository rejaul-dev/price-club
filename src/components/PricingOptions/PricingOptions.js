import React from "react";
import Features from "../Features/Features";

const PricingOptions = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-indigo-400 m-3 p-3 rounded-lg">
      <div>
        <h2>
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-md font-semibold text-white">/Month</span>
        </h2>
        <p className="text-2xl font-semibold text-white">{name}</p>
      </div>
      {features.map((feature, idx) => (
        <Features key={idx} feature={feature}></Features>
      ))}
      <button className="bg-green-500 w-full py-2 font-bold rounded-md mt-2">Buy Now</button>
    </div>
  );
};

export default PricingOptions;
