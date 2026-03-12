"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { allLotteries } from "@/data/lotteryData";
import { Search, X } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CompetitionCard from "./CompetitionCard";

const CompetitionPage: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("price-low-high");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // Initialize state from URL params on mount
  useEffect(() => {
    const urlSearchTerm = searchParams.get("searchTerm");
    const urlCategory = searchParams.get("category");

    if (urlSearchTerm) {
      setSearchTerm(urlSearchTerm);
    }
    if (urlCategory) {
      setSelectedCategory(urlCategory);
      handleCategoryFilter(urlCategory);
    }
  }, [searchParams]);

  // Update URL when search term changes
  const updateSearchTerm = (term: string) => {
    setSearchTerm(term);
    const params = new URLSearchParams(searchParams.toString());

    if (term) {
      params.set("searchTerm", term);
    } else {
      params.delete("searchTerm");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  // Update URL when category changes
  const updateCategory = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams.toString());

    if (category !== "all") {
      params.set("category", category);
      setActiveFilters([`Category: ${category}`]);
    } else {
      params.delete("category");
      setActiveFilters([]);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  const categoryOptions = [
    { value: "all", label: "All category" },
    { value: "tech", label: "Tech" },
    { value: "automotive", label: "Automotive" },
    { value: "luxury", label: "Luxury" },
    { value: "electronics", label: "Electronics" },
  ];

  const sortOptions = [
    { value: "price-low-high", label: "Price: low to high" },
    { value: "price-high-low", label: "Price: high to low" },
    { value: "ending-soon", label: "Ending soon" },
    { value: "most-popular", label: "Most popular" },
  ];

  // Filter lotteries based on search and filters
  const filteredLotteries = allLotteries.filter((lottery) =>
    lottery.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleCategoryFilter = (category: string) => {
    updateCategory(category);
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
    setSelectedCategory("all");
    updateCategory("all");
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchTerm("");
    setSelectedCategory("all");
    router.replace(pathname);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 pt-16 lg:pt-24">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="w-full mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            All competition
          </h1>
          <p className="text-gray-600 text-lg">
            Browse through all available prize competitions
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <FormInput
                placeholder="Search competition"
                value={searchTerm}
                onChange={(e) => updateSearchTerm(e.target.value)}
                icon={Search}
                className="w-full"
              />
            </div>

            {/* Category Dropdown */}
            <FormSelect
              value={selectedCategory}
              onValueChange={handleCategoryFilter}
              options={categoryOptions}
              triggerClassName="h-10"
            />

            {/* Price Sort Dropdown */}
            <FormSelect
              value={sortBy}
              onValueChange={setSortBy}
              options={sortOptions}
              triggerClassName="h-10"
            />
          </div>

          {/* Active Filters */}
          {(activeFilters.length > 0 || searchTerm) && (
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600">Active filter:</span>
              {searchTerm && (
                <div className="inline-flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  Search: {searchTerm}
                  <button
                    onClick={() => updateSearchTerm("")}
                    className="hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
              {activeFilters.map((filter, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1 bg-primary text-white px-3 py-1 rounded-full text-sm"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="hover:bg-primary/80 rounded-full p-0.5"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
              {(activeFilters.length > 0 || searchTerm) && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-gray-600 hover:text-primary underline"
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>

        {/* Competition Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredLotteries.map((lottery) => (
            <CompetitionCard key={lottery.id} lottery={lottery} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            className="px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
