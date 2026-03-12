"use client";
import React from "react";

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Prize",
      description:
        "Browse through our amazing competitions featuring luxury cars, cash prizes, the latest tech, dream holidays, and more. Each competition clearly shows the prize value, entry price, total tickets available, and draw date.",
    },
    {
      number: 2,
      title: "Purchase Your Entries",
      description:
        "Select how many entries you want to purchase. More entries mean better odds of winning! Complete your secure payment using credit/debit card or digital wallet. All transactions are encrypted and safe.",
    },
    {
      number: 3,
      title: "Wait for the Draw",
      description:
        "After purchasing, you'll receive instant confirmation with your unique ticket numbers. The draw is conducted on the scheduled date using a certified random number generator to ensure complete fairness and transparency.",
    },
    {
      number: 4,
      title: "Claim Your Prize!",
      description:
        "Winners are notified immediately via email and SMS. All winners are publicly verified and announced on our Winners page. Prizes must be claimed within 30 days. It's that simple - good luck!",
    },
  ];

  return (
    <section className="w-full pt-16 lg:pt-24 py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How it work's
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Everything you need to know about entering competitions
          </p>
        </div>

        {/* Steps Grid */}
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-lg p-8 border border-gray-200"
            >
              {/* Step Number */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {step.title}
                </h3>
              </div>

              {/* Step Description */}
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
