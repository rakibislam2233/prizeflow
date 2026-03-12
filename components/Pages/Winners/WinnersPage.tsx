"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { Search, Trophy } from "lucide-react";
import React, { useState } from "react";
import WinnerCard from "../Home/WinnersGrid";

// Winner data interface
interface WinnerItem {
  id: string;
  name: string;
  date: string;
  ticketNumber: string;
  prize: string;
  imageUrl: string;
}

// Dummy winners data
const dummyWinners: WinnerItem[] = [
  {
    id: "w1",
    name: "Sara jahan",
    date: "26 march 2026",
    ticketNumber: "#1234",
    prize: "Cash $500000",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w2",
    name: "Rahim khan",
    date: "25 march 2026",
    ticketNumber: "#1235",
    prize: "Luxury car",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w3",
    name: "Karim ali",
    date: "24 march 2026",
    ticketNumber: "#1236",
    prize: "Dubai trip",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w4",
    name: "Fatima begum",
    date: "23 march 2026",
    ticketNumber: "#1237",
    prize: "Gaming PC",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w5",
    name: "Abdul karim",
    date: "22 march 2026",
    ticketNumber: "#1238",
    prize: "MacBook",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w6",
    name: "Nusrat jahan",
    date: "21 march 2026",
    ticketNumber: "#1239",
    prize: "iPhone 17 pro",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const WinnersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const monthOptions = [
    { value: "all", label: "All month" },
    { value: "march", label: "March" },
    { value: "february", label: "February" },
    { value: "january", label: "January" },
    { value: "december", label: "December" },
  ];

  // Filter winners based on search
  const filteredWinners = dummyWinners.filter((winner) =>
    winner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    winner.prize.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our winner's</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Celebrating real people who've won amazing prizes. Every winner is verified and publicly announced.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">10</h2>
            <p className="text-gray-600">Total winner's</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">$10000</h2>
            <p className="text-gray-600">Total prize awarded</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">All Category</h2>
            <p className="text-gray-600">Categories covered</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <FormInput
                placeholder="Search by winner name or prize"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={Search}
                className="w-full"
              />
            </div>

            {/* Month Dropdown */}
            <FormSelect
              value={selectedMonth}
              onValueChange={setSelectedMonth}
              options={monthOptions}
              triggerClassName="h-10"
            />
          </div>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredWinners.map((winner) => (
            <WinnerCard key={winner.id} winner={winner} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-colors">
            Load more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinnersPage;
