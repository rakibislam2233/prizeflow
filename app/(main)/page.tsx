import DrawSoonSidebar from "@/components/Pages/Home/DrawSoonSidebar";
import FeaturedLottery from "@/components/Pages/Home/FeaturedLottery";
import FilterBar from "@/components/Pages/Home/FilterBar";
import HeroSection from "@/components/Pages/Home/HeroSection";
import WinningBigLottery from "@/components/Pages/Home/WinningBigLottery";

export const metadata = {
  title: "PrizeFlow | Lottery & Giveaway",
  description: "Win big prizes including Cash, Tech, Cars, and Properties.",
};

const HomePage = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <FilterBar />
      <div className="w-full container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="col-span-1 xl:col-span-3">
          <FeaturedLottery />
          <WinningBigLottery />
        </div>

        {/* Sidebar */}
        <aside className="col-span-1 xl:col-span-1 mt-8 xl:mt-14">
          <DrawSoonSidebar />
        </aside>
      </div>
    </div>
  );
};

export default HomePage;
