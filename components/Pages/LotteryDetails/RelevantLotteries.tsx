"use client";
import React from "react";
import LotteryCard from "@/components/Pages/Home/LotteryCard";
import { allLotteries } from "@/data/lotteryData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface RelevantLotteriesProps {
  currentLotteryId: string;
}

const RelevantLotteries: React.FC<RelevantLotteriesProps> = ({
  currentLotteryId,
}) => {
  // Filter out the current lottery and get 6 relevant lotteries
  const relevantLotteries = allLotteries
    .filter((lottery) => lottery.id !== currentLotteryId)
    .slice(0, 6);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Relevant Lottery Tickets
          </h2>
          <Link href="/competition" className="flex items-center gap-1">
            <span className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors whitespace-nowrap">
              View all <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {relevantLotteries.map((item) => (
            <LotteryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelevantLotteries;
