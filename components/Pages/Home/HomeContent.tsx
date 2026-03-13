"use client";
import CallToActionBanner from "@/components/Pages/Home/CallToActionBanner";
import DrawSoonSidebar from "@/components/Pages/Home/DrawSoonSidebar";
import FeaturedLottery from "@/components/Pages/Home/FeaturedLottery";
import FilterBar from "@/components/Pages/Home/FilterBar";
import HeroSection from "@/components/Pages/Home/HeroSection";
import RecentWinners from "@/components/Pages/Home/RecentWinners";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const HomeContent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FilterBar
        onFilterChange={handleFilterChange}
        activeFilter={activeFilter}
      />

      <div className="w-full container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        <div className="col-span-full flex flex-col sm:flex-row justify-between items-start sm:items-center  gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Featured lottery ticket
          </h2>
          <Link
            href="#"
            className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors whitespace-nowrap"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        {/* Main Content */}
        <div className="col-span-1 xl:col-span-3">
          <FeaturedLottery activeFilter={activeFilter} />
        </div>
        {/* Sidebar */}
        <aside className="col-span-1 xl:col-span-1 ">
          <DrawSoonSidebar />
        </aside>
      </div>
      <RecentWinners />
      <CallToActionBanner />
    </div>
  );
};

export default HomeContent;
