import React from "react";
import FilterBar from "@/components/Pages/Home/FilterBar";
import FeaturedLottery from "@/components/Pages/Home/FeaturedLottery";
import WinningBigLottery from "@/components/Pages/Home/WinningBigLottery";
import DrawSoonSidebar from "@/components/Pages/Home/DrawSoonSidebar";

export const metadata = {
  title: "PrizeFlow | Lottery & Giveaway",
  description: "Win big prizes including Cash, Tech, Cars, and Properties.",
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f6f8] py-8 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-grow lg:w-3/4">
          <FilterBar />
          <FeaturedLottery />
          <WinningBigLottery />
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 flex-shrink-0">
          <div className="sticky top-8">
            <DrawSoonSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
