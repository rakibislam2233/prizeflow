"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dashboardEntries } from "@/data/dashboardData";
import Image from "next/image";

const EntriesPage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Entries</h1>
        <p className="text-gray-600">View all your competition entries</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <Image
                src={entry.image}
                alt={entry.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 right-4">
                <Badge
                  className={
                    entry.status === "Active"
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-100 text-gray-800 border-gray-200"
                  }
                >
                  {entry.status}
                </Badge>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{entry.title}</h3>
              <p className="text-sm text-gray-600 mb-3">Price per ticket: {entry.price}</p>

              <div className="mb-3">
                <p className="text-sm font-medium text-gray-700 mb-1">Your tickets:</p>
                <div className="flex flex-wrap gap-1">
                  {entry.tickets.map((ticket, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                    >
                      {ticket}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Draw date: <span className="font-medium">{entry.drawDate}</span>
                </p>
              </div>

              <Button className="w-full">
                {entry.status === "Active" ? "View competition" : "View winner"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntriesPage;
