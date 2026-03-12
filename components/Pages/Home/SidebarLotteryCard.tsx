import type { LotteryItem } from "./LotteryCard";

interface SidebarLotteryCardProps {
  item: LotteryItem;
}

const SidebarLotteryCard = ({ item }: SidebarLotteryCardProps) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col">
      {/* Top Image Section */}
      <div
        className={`relative w-full h-[140px] flex flex-col items-center p-3 ${
          item.imageBg || "bg-gray-100"
        }`}
      >
        <h3 className={`font-bold text-center text-sm ${item.titleColor || "text-gray-800"}`}>
          {item.title}
        </h3>
        <div className="relative w-24 h-16 mt-2 grow">
          {/* Using a placeholder for dummy data */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 cursor-pointer bg-primary hover:bg-primary/90 text-white text-xs font-semibold transition-colors">
        Entry now ${item.ticketPrice}!
      </button>
    </div>
  );
};

export default SidebarLotteryCard;
