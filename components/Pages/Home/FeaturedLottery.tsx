import { ArrowRight } from "lucide-react";
import LotteryCard, { LotteryItem } from "./LotteryCard";

const dummyItems: LotteryItem[] = [
  {
    id: "f1",
    title: "Win brand new car",
    titleColor: "text-red-500",
    imageBg: "bg-emerald-100/50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Replace with real car image
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 65,
    ticketsLeft: 100,
  },
  {
    id: "f2",
    title: "Win a MacBook",
    titleColor: "text-indigo-900",
    imageBg: "bg-orange-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Replace with real macbook image
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 85,
    ticketsLeft: 100,
  },
  {
    id: "f3",
    title: "Win a Brand Rolex",
    titleColor: "text-indigo-900",
    imageBg: "bg-blue-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg", // Replace with real rolex image
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 35,
    ticketsLeft: 100,
  },
  {
    id: "f4",
    title: "Win brand new car",
    titleColor: "text-red-500",
    imageBg: "bg-emerald-100/50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 88,
    ticketsLeft: 100,
  },
  {
    id: "f5",
    title: "Win a MacBook",
    titleColor: "text-indigo-900",
    imageBg: "bg-orange-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 80,
    ticketsLeft: 100,
  },
  {
    id: "f6",
    title: "Win a Brand Rolex",
    titleColor: "text-indigo-900",
    imageBg: "bg-blue-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 85,
    ticketsLeft: 100,
  },
];

const FeaturedLottery = () => {
  return (
    <section className="mb-8 sm:mb-10 md:mb-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">Featured lottery ticket</h2>
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

export default FeaturedLottery;
