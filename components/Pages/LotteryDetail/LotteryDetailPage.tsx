"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Ticket, Users } from "lucide-react";
import Link from "next/link";
import React from "react";
import type { LotteryItem } from "../Home/LotteryCard";

interface LotteryDetailPageProps {
  lottery: LotteryItem;
}

const LotteryDetailPage: React.FC<LotteryDetailPageProps> = ({ lottery }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Back Button */}
        <Link href="/lotteries">
          <Button variant="ghost" className="mb-6 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Lotteries
          </Button>
        </Link>

        {/* Lottery Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Header Image Section */}
          <div
            className={`relative w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center p-8 ${
              lottery.imageBg || "bg-gray-100"
            }`}
          >
            <h3 className={`font-bold text-center text-2xl md:text-3xl mb-6 ${lottery.titleColor || "text-gray-800"}`}>
              {lottery.title}
            </h3>
            <div className="relative w-48 h-32 md:w-64 md:h-40">
              <img
                src={lottery.imageUrl}
                alt={lottery.title}
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Ticket Info */}
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-4">
                  <Ticket className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Ticket Price</h4>
                  <p className="text-2xl font-bold text-primary">${lottery.ticketPrice}</p>
                </div>
              </div>

              {/* Draw Date */}
              <div className="text-center">
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <Calendar className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Draw Date</h4>
                  <p className="text-lg font-semibold text-gray-700">{lottery.drawDate}</p>
                </div>
              </div>

              {/* Tickets Left */}
              <div className="text-center">
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">Tickets Left</h4>
                  <p className="text-lg font-semibold text-gray-700">{lottery.ticketsLeft}</p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {lottery.soldPercentage}% Sold
                </span>
                <span className="text-sm text-gray-500">
                  {lottery.ticketsLeft} tickets remaining
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-linear-to-r from-primary to-primary/80 h-full rounded-full transition-all duration-500"
                  style={{ width: `${lottery.soldPercentage}%` }}
                />
              </div>
            </div>

            {/* Action Section */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to win amazing prizes?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Enter this lottery for a chance to win {lottery.title}. 
                Don't miss this opportunity to change your life!
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white border-0 h-12 px-8 rounded cursor-pointer text-base font-semibold shadow-lg shadow-primary/20 transition-all">
                Entry Now - ${lottery.ticketPrice}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryDetailPage;
