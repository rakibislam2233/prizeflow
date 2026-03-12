"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Minus, Plus, Ticket, Users } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import type { LotteryItem } from "../Home/LotteryCard";
import RelevantLotteries from "./RelevantLotteries";

interface LotteryDetailPageProps {
  lottery: LotteryItem;
}

const LotteryDetailPage: React.FC<LotteryDetailPageProps> = ({ lottery }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);

  return (
    <div className="w-full pt-20">
      {/* Header Section with Image */}
      <div className="relative">
        <div className="bg-linear-to-b from-primary/10 to-white/50">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
            <Link href="/lotteries">
              <Button variant="ghost" className="flex items-center gap-2 mb-6">
                <ArrowLeft className="w-4 h-4" />
                Back to Lotteries
              </Button>
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Side - Image and Details */}
              <div className="space-y-6">
                {/* Lottery Image */}
                <div className="bg-white rounded-lg p-8">
                  <div className="relative w-full h-[300px] flex flex-col items-center justify-center">
                    <h3 className={`font-bold text-center text-2xl mb-6 ${lottery.titleColor || "text-gray-800"}`}>
                      {lottery.title}
                    </h3>
                    <div className="relative w-48 h-32">
                      <img
                        src={lottery.imageUrl}
                        alt={lottery.title}
                        className="w-full h-full object-contain mix-blend-multiply"
                      />
                    </div>
                  </div>
                </div>

                {/* Draw Countdown */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Draw Countdown
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-lg p-3">
                        <span className="text-2xl font-bold">05</span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">Days</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-lg p-3">
                        <span className="text-2xl font-bold">12</span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">Hours</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-lg p-3">
                        <span className="text-2xl font-bold">34</span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">Mins</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary text-white rounded-lg p-3">
                        <span className="text-2xl font-bold">56</span>
                      </div>
                      <span className="text-xs text-gray-500 mt-1">Secs</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About This Prize</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enter for a chance to win {lottery.title}! This amazing prize could be yours for just ${lottery.ticketPrice}. 
                    Our lottery system is fair, transparent, and gives everyone an equal chance to win. Don't miss this opportunity 
                    to change your life with this incredible prize.
                  </p>
                </div>

                {/* Live Entries */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Live Entries
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-gray-600">John D.</span>
                      <span className="text-sm text-gray-500">2 tickets • 2 mins ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-gray-600">Sarah M.</span>
                      <span className="text-sm text-gray-500">5 tickets • 5 mins ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-gray-600">Mike R.</span>
                      <span className="text-sm text-gray-500">1 ticket • 8 mins ago</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-gray-600">Emma L.</span>
                      <span className="text-sm text-gray-500">3 tickets • 12 mins ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Lottery Info */}
              <div className="space-y-6">
                {/* Lottery Name and Sold Info */}
                <div className="bg-white rounded-lg p-8">
                  <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    {lottery.title}
                  </h1>
                  
                  {/* Sold Percentage */}
                  <div className="mb-6">
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
                        className="bg-linear-to-r from-primary to-primary/80 h-full rounded-full"
                        style={{ width: `${lottery.soldPercentage}%` }}
                      />
                    </div>
                  </div>

                  {/* Ticket Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Ticket className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Ticket Price</p>
                        <p className="text-2xl font-bold text-gray-900">${lottery.ticketPrice}</p>
                      </div>
                    </div>
                  </div>

                  {/* Draw Date */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Draw Date</p>
                        <p className="text-lg font-semibold text-gray-900">{lottery.drawDate}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Quantity Selector */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Tickets
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-xl font-semibold text-gray-900 min-w-12 text-center">
                        {ticketQuantity}
                      </span>
                      <button
                        onClick={() => setTicketQuantity(ticketQuantity + 1)}
                        className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Max 100 tickets per entry</p>
                  </div>

                  {/* Total Price */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Total Price:</span>
                      <span className="text-2xl font-bold text-primary">
                        ${(lottery.ticketPrice * ticketQuantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className="w-full bg-primary text-white border-0 h-12 rounded-lg cursor-pointer text-base font-semibold">
                    Entry Now - ${(lottery.ticketPrice * ticketQuantity).toFixed(2)}
                  </Button>
                </div>

                {/* How It Works */}
                <div className="bg-white rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                        1
                      </div>
                      <p className="text-gray-600">Purchase your lottery ticket for just ${lottery.ticketPrice}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                        2
                      </div>
                      <p className="text-gray-600">Wait for the draw on {lottery.drawDate}</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold shrink-0 mt-0.5">
                        3
                      </div>
                      <p className="text-gray-600">If your ticket is drawn, you win the {lottery.title}!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relevant Lotteries Section */}
      <RelevantLotteries currentLotteryId={lottery.id} />
    </div>
  );
};

export default LotteryDetailPage;
