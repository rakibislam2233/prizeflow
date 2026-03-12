export interface LotteryItem {
  id: string;
  title: string;
  titleColor?: string;
  imageBg?: string;
  imageUrl: string;
  ticketPrice: number;
  drawDate: string;
  soldPercentage: number;
  ticketsLeft: number;
}

interface LotteryCardProps {
  item: LotteryItem;
}

const LotteryCard = ({ item }: LotteryCardProps) => {
  return (
    <div className="bg-white rounded-[12px] p-3 flex flex-col gap-3">
      {/* Top Image Section */}
      <div
        className={`relative w-full h-[160px] rounded-[4px] flex flex-col items-center justify-between p-4 ${
          item.imageBg || "bg-gray-100"
        }`}
      >
        <h3
          className={`font-bold text-center ${item.titleColor || "text-gray-800"}`}
        >
          {item.title}
        </h3>
        <div className="relative w-32 h-20 mt-2">
          {/* Using a placeholder for dummy data, falling back to Next Image if valid URL */}
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex justify-between items-center text-sm">
        <div>
          <p className="text-xs text-gray-400">Ticket price</p>
          <p className="font-semibold text-green-600">${item.ticketPrice}</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Draw date</p>
          <p className="font-semibold text-green-600">{item.drawDate}</p>
        </div>
      </div>

      {/* Progress Section */}
      <div>
        <div className="w-full bg-gray-200 h-1 mt-1 rounded-full overflow-hidden">
          <div
            className="bg-gray-800 h-full rounded-full"
            style={{ width: `${item.soldPercentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-1 text-[10px] text-gray-500 font-medium">
          <span>{item.soldPercentage}% sold</span>
          <span>{item.ticketsLeft} ticket left</span>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full py-3 bg-primary text-white text-sm font-medium rounded-[8px] transition-colors mt-2 cursor-pointer">
        Entry now
      </button>
    </div>
  );
};

export default LotteryCard;
