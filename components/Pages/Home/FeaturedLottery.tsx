import { allLotteries } from "@/data/lotteryData";
import { AnimatePresence, motion } from "framer-motion";
import LotteryCard from "./LotteryCard";

interface FeaturedLotteryProps {
  activeFilter: string;
}

const FeaturedLottery = ({ activeFilter }: FeaturedLotteryProps) => {
  // Filter lotteries based on active filter
  const filteredLotteries =
    activeFilter === "All"
      ? allLotteries
      : allLotteries.filter((lottery) => lottery.category === activeFilter);

  const dummyItems = filteredLotteries.slice(0, 9); // Show only top 9 items for demo

  return (
    <section className="w-full mb-8 sm:mb-10 md:mb-12">
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
                  delay: index * 0.05,
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

export default FeaturedLottery;
