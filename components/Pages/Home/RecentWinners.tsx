import { ArrowRight } from "lucide-react";
import React from "react";

export interface WinnerItem {
  id: string;
  name: string;
  date: string;
  ticketNumber: string;
  prize: string;
  imageUrl: string;
}

interface RecentWinnersProps {}

const dummyWinners: WinnerItem[] = [
  {
    id: "w1",
    name: "Sara jahan",
    date: "26 march 2026",
    ticketNumber: "#12345",
    prize: "Brand new car",
    imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w2",
    name: "John Smith",
    date: "25 march 2026",
    ticketNumber: "#12346",
    prize: "Cash $500000",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w3",
    name: "Emma Wilson",
    date: "24 march 2026",
    ticketNumber: "#12347",
    prize: "Mack Bok M5",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w4",
    name: "Michael Chen",
    date: "23 march 2026",
    ticketNumber: "#12348",
    prize: "Brand new car",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w5",
    name: "Lisa Anderson",
    date: "22 march 2026",
    ticketNumber: "#12349",
    prize: "Cash $250000",
    imageUrl: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: "w6",
    name: "David Brown",
    date: "21 march 2026",
    ticketNumber: "#12350",
    prize: "iPhone 15 Pro",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

const RecentWinners: React.FC<RecentWinnersProps> = () => {
  return (
    <section className="w-full container mx-auto px-4 sm:px-6 md:px-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
            Recent winner's
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Real people, real prizes. See who's been winning amazing rewards!
          </p>
        </div>
        <a 
          href="#" 
          className="text-sm font-medium text-green-600 flex items-center gap-1 hover:text-green-700 transition-colors whitespace-nowrap"
        >
          View all <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Winners Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {dummyWinners.map((winner) => (
          <div 
            key={winner.id}
            className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Winner Image */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full overflow-hidden bg-gray-100">
                <img
                  src={winner.imageUrl}
                  alt={winner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Winner Info */}
              <h3 className="font-semibold text-gray-800 text-base sm:text-lg mb-1">
                {winner.name}
              </h3>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-3">
                {winner.date}
              </p>
              
              <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3">
                Ticket: {winner.ticketNumber}
              </div>
              
              <div className="bg-primary text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
                {winner.prize}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWinners;
