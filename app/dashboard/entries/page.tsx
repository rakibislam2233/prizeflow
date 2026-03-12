"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FormInput } from "@/components/ui/form-input";
import { FormSelect } from "@/components/ui/form-select";
import { Search, Filter, Calendar, Ticket, Trophy, Clock } from "lucide-react";

// Mock data for user entries
const userEntries = [
  {
    id: "1",
    competitionName: "Win Brand New Car",
    competitionImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    ticketsPurchased: 5,
    totalTickets: 1000,
    ticketNumbers: ["#12345", "#12346", "#12347", "#12348", "#12349"],
    entryDate: "2024-03-20",
    drawDate: "2024-03-25",
    status: "active",
    prize: "Tesla Model 3"
  },
  {
    id: "2",
    competitionName: "Win a MacBook Pro",
    competitionImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop",
    ticketsPurchased: 3,
    totalTickets: 500,
    ticketNumbers: ["#23456", "#23457", "#23458"],
    entryDate: "2024-03-19",
    drawDate: "2024-03-24",
    status: "active",
    prize: "MacBook Pro 16-inch"
  },
  {
    id: "3",
    competitionName: "Luxury Watch Collection",
    competitionImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=200&fit=crop",
    ticketsPurchased: 2,
    totalTickets: 200,
    ticketNumbers: ["#34567", "#34568"],
    entryDate: "2024-03-18",
    drawDate: "2024-03-22",
    status: "ended",
    prize: "Rolex Submariner"
  },
  {
    id: "4",
    competitionName: "Dream Vacation Package",
    competitionImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
    ticketsPurchased: 10,
    totalTickets: 1500,
    ticketNumbers: ["#45678", "#45679", "#45680", "#45681", "#45682", "#45683", "#45684", "#45685", "#45686", "#45687"],
    entryDate: "2024-03-17",
    drawDate: "2024-03-30",
    status: "active",
    prize: "Maldives Resort Package"
  }
];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "draw-date", label: "Draw Date" },
  { value: "most-tickets", label: "Most Tickets" }
];

const filterOptions = [
  { value: "all", label: "All Status" },
  { value: "active", label: "Active" },
  { value: "ended", label: "Ended" },
  { value: "won", label: "Won" }
];

export default function EntriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [filterBy, setFilterBy] = useState("all");

  const filteredEntries = userEntries.filter(entry => {
    const matchesSearch = entry.competitionName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entry.prize.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === "all" || entry.status === filterBy;
    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "ended":
        return <Badge className="bg-gray-100 text-gray-800">Ended</Badge>;
      case "won":
        return <Badge className="bg-yellow-100 text-yellow-800">Won!</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Competition Entries</h1>
          <p className="text-gray-600">Track all your competition entries and ticket numbers</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Ticket className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">20</div>
              <p className="text-sm text-gray-600">Total Tickets</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">1</div>
              <p className="text-sm text-gray-600">Competitions Won</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-gray-600">Active Draws</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Calendar className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">$250</div>
              <p className="text-sm text-gray-600">Total Spent</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <FormInput
                  placeholder="Search competitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  icon={Search}
                  className="w-full"
                />
              </div>
              <FormSelect
                value={filterBy}
                onValueChange={setFilterBy}
                options={filterOptions}
                triggerClassName="w-full lg:w-48"
              />
              <FormSelect
                value={sortBy}
                onValueChange={setSortBy}
                options={sortOptions}
                triggerClassName="w-full lg:w-48"
              />
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEntries.map((entry) => (
            <Card key={entry.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={entry.competitionImage}
                  alt={entry.competitionName}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  {getStatusBadge(entry.status)}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{entry.competitionName}</CardTitle>
                <CardDescription>Prize: {entry.prize}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tickets:</span>
                    <span className="font-medium">{entry.ticketsPurchased} / {entry.totalTickets}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Entry Date:</span>
                    <span className="font-medium">{entry.entryDate}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Draw Date:</span>
                    <span className="font-medium">{entry.drawDate}</span>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600 mb-2">Your Ticket Numbers:</p>
                    <div className="flex flex-wrap gap-1">
                      {entry.ticketNumbers.map((ticket, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {ticket}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 pt-3">
                    <Button size="sm" className="flex-1">
                      View Details
                    </Button>
                    {entry.status === "active" && (
                      <Button size="sm" variant="outline">
                        Buy More
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredEntries.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No entries found</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm ? "Try adjusting your search terms" : "Start entering competitions to see your entries here"}
              </p>
              <Button>
                Browse Competitions
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredEntries.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Entries
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
