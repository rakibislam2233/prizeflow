import React from "react";
import LotteryCard, { LotteryItem } from "./LotteryCard";
import { ArrowRight } from "lucide-react";

const dummyItems: LotteryItem[] = [
  {
    id: "w1",
    title: "Win brand new car",
    titleColor: "text-red-500",
    imageBg: "bg-emerald-100/50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 65,
    ticketsLeft: 100,
  },
  {
    id: "w2",
    title: "Win a MacBook",
    titleColor: "text-indigo-900",
    imageBg: "bg-orange-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 45,
    ticketsLeft: 100,
  },
  {
    id: "w3",
    title: "Win a Brand Rolex",
    titleColor: "text-indigo-900",
    imageBg: "bg-blue-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 85,
    ticketsLeft: 100,
  },
  {
    id: "w4",
    title: "Win brand new car",
    titleColor: "text-red-500",
    imageBg: "bg-emerald-100/50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 65,
    ticketsLeft: 100,
  },
  {
    id: "w5",
    title: "Win a MacBook",
    titleColor: "text-indigo-900",
    imageBg: "bg-orange-50",
    imageUrl: "https://v.ftcdn.net/05/85/68/73/360_F_585687358_R94T2K9R9Q1k0r70Z0K7M2z2Y2l0u0m2.jpg",
    ticketPrice: 5,
    drawDate: "March 20",
    soldPercentage: 85,
    ticketsLeft: 100,
  },
  {
    id: "w6",
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

const WinningBigLottery = () => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Winning big lottery ticket</h2>
        <a href="#" className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors">
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyItems.map((item) => (
          <LotteryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default WinningBigLottery;
