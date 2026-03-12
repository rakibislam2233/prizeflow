"use client";
import { motion } from "framer-motion";

interface FilterBarProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

const FilterBar = ({ onFilterChange, activeFilter }: FilterBarProps) => {
  const filters = ["All", "Cash", "Tech", "Car", "Gadget", "Property", "Luxury", "Travel"];

  return (
    <div className="w-full flex items-center justify-center px-4 pt-8 sm:pt-10">
      <div className="flex items-center justify-center gap-2 bg-white rounded-lg p-2 max-w-7xl mx-auto overflow-x-auto scrollbar-hide sm:flex-wrap">
        {filters.map((filter, index) => (
          <motion.button
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 300
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onFilterChange(filter)}
            className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 ${
              activeFilter === filter
                ? "bg-primary text-white shadow-lg"
                : "bg-[#F0F0F2] text-gray-600 hover:bg-gray-50 hover:shadow-md"
            }`}
          >
            {filter}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
