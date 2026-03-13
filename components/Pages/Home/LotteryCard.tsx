import Image from "next/image";
import Link from "next/link";

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
  category: string;
  isNew?: boolean;
  discount?: number;
}

interface LotteryCardProps {
  item: LotteryItem;
}

const LotteryCard = ({ item }: LotteryCardProps) => {
  return (
    <div className="bg-white rounded-[12px] p-3 sm:p-4 flex flex-col gap-3 relative">
      {/* Badges */}
      {/* <div className="absolute top-5 left-6 flex gap-1 z-10">
        {item.isNew && (
          <span className="bg-red-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
            New
          </span>
        )}
        {item.discount && item.discount > 0 && (
          <span className="bg-green-500 text-white text-[10px] sm:text-xs font-semibold px-2 py-1 rounded">
            {item.discount}% OFF
          </span>
        )}
      </div> */}

      {/* Top Image Section */}
      <div
        className={`relative w-full h-35 sm:h-45 rounded-lg flex flex-col items-center justify-between p-3 sm:p-7 ${
          item.imageBg || "bg-gray-100"
        }`}
      >
        <h3
          className={`font-bold text-center text-sm sm:text-base ${item.titleColor || "text-gray-800"}`}
        >
          {item.title}
        </h3>
        <div className="relative w-28 h-16 sm:w-36 sm:h-24 mt-4">
          {/* Using a placeholder for dummy data, falling back to Next Image if valid URL */}
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="w-full h-full object-contain mix-blend-multiply hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex justify-between items-center text-xs sm:text-sm">
        <div>
          <p className="text-[10px] sm:text-xs text-gray-400">Ticket price</p>
          <div className="flex items-center gap-2">
            {item.discount && item.discount > 0 && (
              <p className="text-gray-400 line-through text-sm sm:text-base">
                ${item.ticketPrice}
              </p>
            )}
            <p className="font-semibold text-green-600 text-sm sm:text-base">
              $
              {item.discount
                ? Math.round(item.ticketPrice * (1 - item.discount / 100))
                : item.ticketPrice}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] sm:text-xs text-gray-400">Draw date</p>
          <p className="font-semibold text-green-600 text-sm sm:text-base">
            {item.drawDate}
          </p>
        </div>
      </div>

      {/* Progress Section */}
      <div>
        <div className="w-full bg-gray-200 h-1 mt-1 rounded-full overflow-hidden">
          <div
            className="bg-primary h-full rounded-full"
            style={{ width: `${item.soldPercentage}%` }}
          />
        </div>
        <div className="flex justify-between items-center mt-1 text-[9px] sm:text-[10px] text-gray-500 font-medium">
          <span>{item.soldPercentage}% sold</span>
          <span>{item.ticketsLeft} ticket left</span>
        </div>
      </div>

      {/* Action Button */}
      <Link href={`/lottery/${item.id}`}>
        <button className="w-full py-2 sm:py-3 bg-primary text-white text-xs sm:text-sm font-medium rounded-[8px] transition-colors mt-2 cursor-pointer hover:bg-primary/90">
          Entry now
        </button>
      </Link>
    </div>
  );
};

export default LotteryCard;
