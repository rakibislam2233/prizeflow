import { allLotteries } from "@/data/lotteryData";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LotteryCard from "./LotteryCard";

interface WinningBigLotteryProps {
  activeFilter: string;
}

const WinningBigLottery = ({ activeFilter }: WinningBigLotteryProps) => {
  // Filter lotteries based on active filter
  const filteredLotteries = activeFilter === "All" 
    ? allLotteries 
    : allLotteries.filter(lottery => lottery.category === activeFilter);
  
  const dummyItems = filteredLotteries.slice(6, 12);

  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
          Winning big lottery ticket 
          {activeFilter !== "All" && <span className="text-primary ml-2">({activeFilter})</span>}
        </h2>
        <a href="#" className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors whitespace-nowrap">
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      
      <AnimatePresence mode="wait">
        {dummyItems.length > 0 ? (
          <motion.div 
            key="lottery-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {dummyItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${activeFilter}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  delay: index * 0.05
                }}
              >
                <LotteryCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-data"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg font-medium mb-2">
              No data found
            </div>
            <p className="text-gray-500 text-sm">
              No lottery tickets available in {activeFilter} category
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WinningBigLottery;
