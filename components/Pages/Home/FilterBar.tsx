const FilterBar = () => {
  const filters = ["All", "Cash", "Tech", "Car", "Gadget", "Property"];

  return (
    <div className="w-full flex items-center justify-center px-4 pt-8 sm:pt-10">
      <div className="flex flex-wrap items-center justify-center gap-2 bg-white rounded-lg p-2 max-w-6xl mx-auto">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded transition-colors cursor-pointer whitespace-nowrap ${
              filter === "All"
                ? "bg-primary text-white"
                : "bg-[#F0F0F2] text-gray-600 hover:bg-gray-50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
