import type { LotteryItem } from "./LotteryCard";
import SidebarLotteryCard from "./SidebarLotteryCard";

const dummySidebarItems: LotteryItem[] = [
  {
    id: "s1",
    title: "Win a Brand Rolex",
    titleColor: "text-indigo-900",
    imageBg: "bg-blue-100/60",
    imageUrl:
      "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 0,
    ticketsLeft: 0,
  },
  {
    id: "s2",
    title: "Win a MacBook",
    titleColor: "text-indigo-900",
    imageBg: "bg-yellow-100/60",
    imageUrl:
      "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Placeholder
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 0,
    ticketsLeft: 0,
  },
  {
    id: "s3",
    title: "Win a Brand Rolex",
    titleColor: "text-indigo-900",
    imageBg: "bg-blue-100/60",
    imageUrl:
      "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Placeholder
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 0,
    ticketsLeft: 0,
  },
  {
    id: "s4",
    title: "Win brand new car",
    titleColor: "text-red-500",
    imageBg: "bg-emerald-100/50",
    imageUrl:
      "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Placeholder
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 0,
    ticketsLeft: 0,
  },
];

const DrawSoonSidebar = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-white rounded-lg p-6">
      <div className="mb-2">
        <h2 className="text-sm font-medium text-gray-800 mb-2">Draw Soon</h2>
        <div className="w-full flex items-center justify-between gap-2">
          <div className="w-full px-4 py-3 bg-[#B1D8B4]  flex flex-col items-center justify-center rounded-sm text-green-800">
            <span className="text-lg font-bold">05</span>
            <span className="text-[10px]">Hrs</span>
          </div>
          <div className="w-full px-4 py-3 bg-[#B1D8B4] flex flex-col items-center justify-center rounded-sm text-green-800">
            <span className="text-lg font-bold">10</span>
            <span className="text-[10px]">Min</span>
          </div>
          <div className="w-full px-4 py-3 bg-[#B1D8B4] flex flex-col items-center justify-center rounded-sm text-green-800">
            <span className="text-lg font-bold">35</span>
            <span className="text-[10px]">Sec</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SidebarLotteryCard item={dummySidebarItems[0]} />
        <SidebarLotteryCard item={dummySidebarItems[1]} />
        <SidebarLotteryCard item={dummySidebarItems[2]} />

        {/* Banner Card */}
        <div className="bg-white rounded-md overflow-hidden shadow-sm flex flex-col">
          <div className="relative w-full h-[140px]">
            {/* Banner Placeholder */}
            <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-3 text-center">
              <span className="text-xl font-black text-orange-600 drop-shadow-md">
                WIN
              </span>
              <span className="text-2xl font-black text-white drop-shadow-md">
                $10000
              </span>
              <span className="text-xl font-black text-orange-600 drop-shadow-md">
                Cash
              </span>
            </div>
          </div>
          <button className="w-full py-3 bg-primary cursor-pointer hover:bg-primary/90 text-white text-xs font-semibold transition-colors">
            Entry now $5!
          </button>
        </div>

        <SidebarLotteryCard item={dummySidebarItems[3]} />
      </div>
    </div>
  );
};

export default DrawSoonSidebar;
