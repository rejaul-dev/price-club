import React from "react";
import PricingOptions from "../../PricingOptions/PricingOptions";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "Free", price: 0, features:[
        'Awesome Features',
        'Best Features',
        'Amazing Features',
        'Will never use Features',
        'Hudai Features',
        'Ajaira Features',
    ] 
},
    { id: 2, name: "Basic", price: 9.99, features:[
        'Awesome Features',
        'Best Features',
        'Amazing Features',
        'Will never use Features',
        'Hudai Features',
        'Ajaira Features',
    ] 
 },
    { id: 3, name: "Premium", price: 19.99, features:[
        'Awesome Features',
        'Best Features',
        'Amazing Features',
        'Will never use Features',
        'Hudai Features',
        'Ajaira Features',
    ] 
 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold bg-indigo-500 text-white p-12">
        Best Deals of The Town
      </h1>
      <div className="grid md:grid-cols-3 gap-3">
        {pricingOption.map((option) => (
          <PricingOptions key={option.id} option={option}></PricingOptions>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
