const FilterBar = () => {
  const filters = ["All", "Cash", "Tech", "Car", "Gadget", "Property"];

  return (
    <div className="w-full flex items-center justify-center pt-10">
      <div className="flex items-center gap-2 bg-white rounded p-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-10 py-3 text-sm font-medium rounded transition-colors cursor-pointer ${
              filter === "All"
                ? "bg-primary] text-white"
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
