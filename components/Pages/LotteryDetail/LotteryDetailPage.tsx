"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Clock, Shield, Ticket, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import type { LotteryItem } from "../Home/LotteryCard";
import RelevantLotteries from "./RelevantLotteries";

interface LotteryDetailPageProps {
  lottery: LotteryItem;
}

type DetailTabKey = "description" | "liveEntries" | "howItWorks" | "terms";

const LotteryDetailPage: React.FC<LotteryDetailPageProps> = ({ lottery }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<DetailTabKey>("description");

  const maxTicketPerUser = 55;
  const quickTicketOptions = [5, 10, 25, 35, 45, 55];
  const ticketDiscountMap: Record<number, number> = {
    5: 3,
    10: 5,
    25: 10,
    35: 12,
    45: 15,
    55: 18,
  };

  const subtotal = lottery.ticketPrice * ticketQuantity;
  const discountPercent = ticketDiscountMap[ticketQuantity] || 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const finalTotal = subtotal - discountAmount;

  const totalPrice = finalTotal.toFixed(2);

  const tabContent: Record<DetailTabKey, React.ReactNode> = {
    description: (
      <>
        <h3 className="mb-2 text-base font-semibold text-gray-900">
          About this prize
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          Experience the thrill of owning a luxury prize with complete fairness
          and transparency. This draw is handled by secure automated selection,
          and every entry has an equal chance. Enter now for just $
          {lottery.ticketPrice} and you could be our next winner.
        </p>
      </>
    ),
    liveEntries: (
      <>
        <h3 className="mb-2 text-base font-semibold text-gray-900">
          Live entries
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
            <span>John D.</span>
            <span className="text-xs text-gray-500">
              2 tickets • 2 mins ago
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
            <span>Sarah M.</span>
            <span className="text-xs text-gray-500">
              5 tickets • 5 mins ago
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
            <span>Mike R.</span>
            <span className="text-xs text-gray-500">1 ticket • 8 mins ago</span>
          </div>
          <div className="flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
            <span>Emma L.</span>
            <span className="text-xs text-gray-500">
              3 tickets • 12 mins ago
            </span>
          </div>
        </div>
      </>
    ),
    howItWorks: (
      <>
        <h3 className="mb-2 text-base font-semibold text-gray-900">
          How it works
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <p className="rounded-md bg-gray-50 px-3 py-2">
            <span className="font-semibold text-gray-900">1.</span> Purchase
            your lottery ticket for just ${lottery.ticketPrice}.
          </p>
          <p className="rounded-md bg-gray-50 px-3 py-2">
            <span className="font-semibold text-gray-900">2.</span> Wait for the
            draw on {lottery.drawDate}.
          </p>
          <p className="rounded-md bg-gray-50 px-3 py-2">
            <span className="font-semibold text-gray-900">3.</span> If your
            ticket is selected, you win {lottery.title}.
          </p>
        </div>
      </>
    ),
    terms: (
      <>
        <h3 className="mb-2 text-base font-semibold text-gray-900">
          Terms & conditions
        </h3>
        <ul className="space-y-1.5 text-sm text-gray-600 list-disc pl-5">
          <li>Participants must be 18+ years old to enter.</li>
          <li>All ticket purchases are final and non-refundable.</li>
          <li>Winner is selected by an automated random draw system.</li>
          <li>Prize claim is subject to identity verification.</li>
        </ul>
      </>
    ),
  };

  return (
    <section className="pt-16 lg:pt-24 bg-[#f3f4f6]">
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-10">
          <Link href="/lotteries">
            <Button
              variant="ghost"
              className="mb-6 flex items-center gap-2 text-gray-700 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Lotteries
            </Button>
          </Link>

          <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[1.08fr_1fr] items-start">
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <div className="relative h-72 w-full rounded-md bg-[#d9e6ef] flex flex-col items-center justify-center px-4">
                  <h3
                    className={`mb-4 text-center text-xl sm:text-2xl font-semibold ${lottery.titleColor || "text-gray-800"}`}
                  >
                    {lottery.title}
                  </h3>
                  <div className="relative h-36 w-56 sm:w-64">
                    <Image
                      src={lottery.imageUrl}
                      alt={lottery.title}
                      fill
                      sizes="(max-width: 640px) 224px, 256px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="mb-1 text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Draw Countdown
                </h3>
                <p className="mb-3 text-xs text-gray-500">
                  Draw Date: Sunday 15 March 2026 at 20:00
                </p>

                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  <div className="text-center rounded-md bg-primary px-2 py-2.5 text-white">
                    <div className="text-xl font-bold">12</div>
                    <div className="mt-1 text-[10px] text-white/90">Days</div>
                  </div>
                  <div className="text-center rounded-md bg-primary px-2 py-2.5 text-white">
                    <div className="text-xl font-bold">10</div>
                    <div className="mt-1 text-[10px] text-white/90">Hours</div>
                  </div>
                  <div className="text-center rounded-md bg-primary px-2 py-2.5 text-white">
                    <div className="text-xl font-bold">39</div>
                    <div className="mt-1 text-[10px] text-white/90">Mins</div>
                  </div>
                  <div className="text-center rounded-md bg-primary px-2 py-2.5 text-white">
                    <div className="text-xl font-bold">49</div>
                    <div className="mt-1 text-[10px] text-white/90">Secs</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="mb-3 grid grid-cols-4 gap-1.5 text-[11px]">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`rounded-md px-2 py-1.5 transition-colors ${
                      activeTab === "description"
                        ? "border border-gray-300 bg-white text-gray-700"
                        : "border border-transparent bg-gray-100 text-gray-600"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("liveEntries")}
                    className={`rounded-md px-2 py-1.5 transition-colors ${
                      activeTab === "liveEntries"
                        ? "border border-gray-300 bg-white text-gray-700"
                        : "border border-transparent bg-gray-100 text-gray-600"
                    }`}
                  >
                    Live entries
                  </button>
                  <button
                    onClick={() => setActiveTab("howItWorks")}
                    className={`rounded-md px-2 py-1.5 transition-colors ${
                      activeTab === "howItWorks"
                        ? "border border-gray-300 bg-white text-gray-700"
                        : "border border-transparent bg-gray-100 text-gray-600"
                    }`}
                  >
                    How it works
                  </button>
                  <button
                    onClick={() => setActiveTab("terms")}
                    className={`rounded-md px-2 py-1.5 transition-colors ${
                      activeTab === "terms"
                        ? "border border-gray-300 bg-white text-gray-700"
                        : "border border-transparent bg-gray-100 text-gray-600"
                    }`}
                  >
                    Terms
                  </button>
                </div>

                {tabContent[activeTab]}
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-5 sm:p-6">
              <h1 className="mb-4 text-2xl font-bold text-gray-900">
                {lottery.title}
              </h1>

              <div className="mb-4">
                <div className="mb-1.5 flex items-center justify-between text-xs text-gray-500">
                  <span>{lottery.soldPercentage}% sold</span>
                  <span>{lottery.ticketsLeft} ticket left</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-primary to-primary/80"
                    style={{ width: `${lottery.soldPercentage}%` }}
                  />
                </div>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2">
                  <p className="mb-1 inline-flex items-center gap-1 text-gray-500">
                    <Ticket className="h-3.5 w-3.5" /> entry price
                  </p>
                  <p className="text-lg font-semibold text-primary">
                    ${lottery.ticketPrice}
                  </p>
                </div>
              </div>

              <div className="mb-5">
                <div className="mb-2.5 text-sm font-medium text-gray-800">
                  Select ticket
                </div>

                <div className="mb-2 rounded-md border border-gray-200 bg-gray-50 p-3">
                  <div className="mb-2 flex items-center justify-between text-xs text-gray-600">
                    <span>Tickets: {ticketQuantity}</span>
                    <span>Max: {maxTicketPerUser}</span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={maxTicketPerUser}
                    value={ticketQuantity}
                    onChange={(event) =>
                      setTicketQuantity(Number(event.target.value))
                    }
                    className="w-full accent-primary cursor-pointer"
                    aria-label="Select ticket quantity"
                  />
                </div>

                <div className="mb-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {quickTicketOptions.map((qty) => (
                    <button
                      key={qty}
                      onClick={() => setTicketQuantity(qty)}
                      className={`rounded-md border px-2 py-1.5 text-sm font-medium transition-colors ${
                        ticketQuantity === qty
                          ? "border-primary bg-primary text-white"
                          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="block leading-tight">{qty}</span>
                      <span className="block text-[10px] opacity-90">
                        -{ticketDiscountMap[qty]}%
                      </span>
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-center text-gray-500">
                  Bundle discounts apply for 5, 10, 25, 35, 45, and 55 tickets
                </p>
              </div>
              <Link
                href={`/checkout?lotteryId=${lottery.id}&quantity=${ticketQuantity}`}
                className="block"
              >
                <Button className="h-11 w-full rounded-md bg-primary text-sm font-semibold text-white hover:bg-primary/90">
                  Buy {ticketQuantity} ticket(s) (${totalPrice})
                </Button>
              </Link>

              <div className="mt-4 space-y-2.5 text-xs text-gray-500">
                <p className="flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5 text-primary" /> Secure
                  encrypted payment
                </p>
                <p className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-primary" /> Fair and
                  transparent draw
                </p>
                <p className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-primary" /> Instant winner
                  notification
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relevant Lotteries Section */}
      <RelevantLotteries currentLotteryId={lottery.id} />
    </section>
  );
};

export default LotteryDetailPage;
