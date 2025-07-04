// import React, { useState } from "react";
// import "../App.css";

// const PricingPlans = () => {
//   const [billingType, setBillingType] = useState<"monthly" | "annually">("monthly");

//   const plans = [
//     {
//       title: "Starter",
//       price: billingType === "monthly" ? "$29" : "$24",
//       description: "Perfect for small businesses and startups looking to enhance customer engagement.",
//       features: [
//         "500 conversations per month",
//         "Basic AI chatbot features",
//         "Email support",
//         "Customizable chatbot templates",
//       ],
//     },
//     {
//       title: "Professional",
//       price: billingType === "monthly" ? "$99" : "$79",
//       description: "Ideal for growing businesses needing more automation and customization.",
//       features: [
//         "5,000 conversations per month",
//         "Advanced AI capabilities",
//         "Multichannel support",
//         "Analytics & reporting",
//       ],
//       highlighted: true,
//     },
//     {
//       title: "Enterprise",
//       price: "Custom Pricing",
//       description: "Built for large organizations requiring scalable, AI-powered automation.",
//       features: [
//         "Unlimited conversations",
//         "Custom AI model training",
//         "API access & integrations",
//         "Dedicated account manager",
//       ],
//     },
//   ];

//   return (
//     <div className="pricing-section">
//       <h1 className="title">Find The Perfect Plan For Your Business</h1>
//       <p className="subtitle">
//         Unlock the power of AI-driven conversations with pricing plans designed
//         to suit businesses of all sizes.
//       </p>

//       {/* Billing type buttons (monthly/annually) */}
//       <div className="billing-toggle">
//         <button
//           className={billingType === "monthly" ? "billing-btn active" : "billing-btn"}
//           onClick={() => setBillingType("monthly")}
//         >
//           Monthly
//         </button>
//         <button
//           className={billingType === "annually" ? "billing-btn active" : "billing-btn"}
//           onClick={() => setBillingType("annually")}
//         >
//           Annually
//         </button>
//       </div>

//       <div className="plans-container">
//         {plans.map((plan, index) => (
//           <div
//             key={index}
//             className={`plan-box ${plan.highlighted ? "highlighted" : ""}`}
//           >
//             <h2>{plan.title}</h2>
//             <p className="price">
//               {plan.price}
//               {plan.price !== "Custom Pricing" && (
//                 <span className="duration">/{billingType === "annually" ? "year" : "month"}</span>
//               )}
//             </p>
//             <button className="premium-button"  onClick={() => alert(`${plan.title} clicked!`)}>Get Premium</button>
//             <p className="plan-description">{plan.description}</p>
//             <ul className="feature-list">
//               {plan.features.map((feature, i) => (
//                 <li key={i}>
//                   <span className="check-icon">✔️</span> {feature}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PricingPlans;
import React, { useState } from "react";
import "../App.css";

const PricingPlans = () => {
  const [billingType, setBillingType] = useState<"monthly" | "annually">("monthly");
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); // Default selected: "Professional"

  const plans = [
    {
      title: "Starter",
      price: billingType === "monthly" ? "$29" : "$24",
      description: "Perfect for small businesses and startups looking to enhance customer engagement.",
      features: [
        "500 conversations per month",
        "Basic AI chatbot features",
        "Email support",
        "Customizable chatbot templates",
      ],
    },
    {
      title: "Professional",
      price: billingType === "monthly" ? "$99" : "$79",
      description: "Ideal for growing businesses needing more automation and customization.",
      features: [
        "5,000 conversations per month",
        "Advanced AI capabilities",
        "Multichannel support",
        "Analytics & reporting",
      ],
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      description: "Built for large organizations requiring scalable, AI-powered automation.",
      features: [
        "Unlimited conversations",
        "Custom AI model training",
        "API access & integrations",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <div className="pricing-section">
      <h1 className="title">Find The Perfect Plan For Your Business</h1>
      <p className="subtitle">
        Unlock the power of AI-driven conversations with pricing plans designed
        to suit businesses of all sizes.
      </p>

      {/* Billing type buttons (monthly/annually) */}
      <div className="billing-toggle">
        <button
          className={billingType === "monthly" ? "billing-btn active" : "billing-btn"}
          onClick={() => setBillingType("monthly")}
        >
          Monthly
        </button>
        <button
          className={billingType === "annually" ? "billing-btn active" : "billing-btn"}
          onClick={() => setBillingType("annually")}
        >
          Annually
        </button>
      </div>

      <div className="plans-container">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`plan-box ${selectedPlanIndex === index ? "highlighted" : ""}`}
            onClick={() => setSelectedPlanIndex(index)}
          >
            <h2>{plan.title}</h2>
            <p className="price">
              {plan.price}
              {plan.price !== "Custom Pricing" && (
                <span className="duration">/{billingType === "annually" ? "year" : "month"}</span>
              )}
            </p>
            <button className="premium-button" onClick={() => alert(`${plan.title} clicked!`)}>
              Get Premium
            </button>
            <p className="plan-description">{plan.description}</p>
            <ul className="feature-list">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="check-icon">✔️</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
