import React from "react";

const FilterBar = () => {
  const filters = ["All", "Cash", "Tech", "Car", "Gadget", "Property"];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
            filter === "All"
              ? "bg-[#4CAF50] text-white"
              : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 shadow-sm"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
