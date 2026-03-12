import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface ILottery {
  id: string;
  title: string;
  imageUrl: string;
  ticketPrice: number;
  drawDate: string;
  ticketsLeft: number;
  soldPercentage: number;
}

interface CompetitionCardProps {
  lottery: ILottery;
}

const CompetitionCard = ({ lottery }: CompetitionCardProps) => {
  return (
    <div
      key={lottery.id}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Prize Image */}
      <div className="relative h-48 bg-linear-to-br from-gray-50 to-gray-100 rounded-t-lg overflow-hidden">
        <img
          src={lottery.imageUrl}
          alt={lottery.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
          {lottery.soldPercentage}% sold
        </div>
      </div>

      {/* Competition Details */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-3 text-lg">
          {lottery.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Ticket price</span>
            <span className="font-semibold text-gray-900">
              ${lottery.ticketPrice}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Draw date</span>
            <span className="font-medium text-gray-900">
              {lottery.drawDate}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Tickets left</span>
            <span className="font-medium text-gray-900">
              {lottery.ticketsLeft}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div
              className="bg-linear-to-r from-primary to-primary/80 h-full rounded-full transition-all"
              style={{ width: `${lottery.soldPercentage}%` }}
            />
          </div>
        </div>

        {/* Entry Button */}
        <Link href={`/lottery/${lottery.id}`}>
          <Button className="w-full bg-primary text-white border-0 h-10 rounded-lg cursor-pointer font-semibold hover:bg-primary/90 transition-colors">
            Entry now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
