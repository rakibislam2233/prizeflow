import React from "react";
import type { WinnerItem } from "./RecentWinners";

interface WinnersGridProps {
  winner: WinnerItem;
}

const WinnerCard: React.FC<WinnersGridProps> = ({ winner }) => {
  return (
    <div
      key={winner.id}
      className="bg-white rounded-lg p-4 sm:p-6 transition-shadow duration-300"
    >
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

        <p className="text-xs sm:text-sm text-gray-500 mb-3">{winner.date}</p>

        <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-3">
          Ticket: {winner.ticketNumber}
        </div>

        <div className="bg-primary text-white px-4 py-2 rounded-md text-xs sm:text-sm font-medium">
          {winner.prize}
        </div>
      </div>
    </div>
  );
};

export default WinnerCard;
