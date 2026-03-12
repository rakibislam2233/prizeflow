import { allLotteries } from "@/data/lotteryData";
import { ArrowRight } from "lucide-react";
import LotteryCard from "./LotteryCard";

const WinningBigLottery = () => {
  const dummyItems = allLotteries.slice(6, 12);

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Winning big lottery ticket</h2>
        <a href="#" className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors whitespace-nowrap">
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {dummyItems.map((item) => (
          <LotteryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default WinningBigLottery;
