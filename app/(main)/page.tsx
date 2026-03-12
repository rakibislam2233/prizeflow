import React from "react";
import FilterBar from "@/components/Pages/Home/FilterBar";
import FeaturedLottery from "@/components/Pages/Home/FeaturedLottery";
import WinningBigLottery from "@/components/Pages/Home/WinningBigLottery";
import DrawSoonSidebar from "@/components/Pages/Home/DrawSoonSidebar";
import HeroSection from "@/components/Pages/Home/HeroSection";

export const metadata = {
  title: "PrizeFlow | Lottery & Giveaway",
  description: "Win big prizes including Cash, Tech, Cars, and Properties.",
};

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <div className="container py-8 px-4 md:px-8 lg:px-12 mx-auto flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="grow lg:w-3/4">
          <FilterBar />
          <FeaturedLottery />
          <WinningBigLottery />
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/4 shrink-0">
          <div className="sticky top-8">
            <DrawSoonSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
