"use client";
import React from "react";

const WinnerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Winners
        </h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-gray-600 text-lg">
            See all the winners and their amazing prizes from PrizeFlow competitions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WinnerPage;
