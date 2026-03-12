"use client";
import CallToActionBanner from "@/components/Pages/Home/CallToActionBanner";
import DrawSoonSidebar from "@/components/Pages/Home/DrawSoonSidebar";
import FeaturedLottery from "@/components/Pages/Home/FeaturedLottery";
import FilterBar from "@/components/Pages/Home/FilterBar";
import HeroSection from "@/components/Pages/Home/HeroSection";
import RecentWinners from "@/components/Pages/Home/RecentWinners";
import WinningBigLottery from "@/components/Pages/Home/WinningBigLottery";
import { useState } from "react";

const HomeContent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };

  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FilterBar onFilterChange={handleFilterChange} activeFilter={activeFilter} />
      <div className="w-full container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="col-span-1 xl:col-span-3">
          <FeaturedLottery activeFilter={activeFilter} />
          <WinningBigLottery activeFilter={activeFilter} />
        </div>
        {/* Sidebar */}
        <aside className="col-span-1 xl:col-span-1 mt-8 xl:mt-14">
          <DrawSoonSidebar />
        </aside>
      </div>
      <RecentWinners />
      <CallToActionBanner />
    </div>
  );
};

export default HomeContent;
