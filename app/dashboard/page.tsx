"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Award, BellRing, Crown, DollarSign, Filter, LayoutGrid, Search, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Transaction data
const transactions = [
  { id: "TXN001", competition: "Win brand new car", amount: "$50", status: "Confirmed", date: "2024-03-20" },
  { id: "TXN002", competition: "Win a MacBook", amount: "$25", status: "Pending", date: "2024-03-19" },
  { id: "TXN003", competition: "Win a Brand Rolex", amount: "$30", status: "Confirmed", date: "2024-03-18" },
  { id: "TXN004", competition: "Win brand new car", amount: "$50", status: "Confirmed", date: "2024-03-17" },
  { id: "TXN005", competition: "Win a MacBook", amount: "$25", status: "Confirmed", date: "2024-03-16" },
];

// Recent competitions
const recentCompetitions = [
  { id: "1", name: "Win brand new car", tickets: 5, date: "2024-03-20", status: "Active" },
  { id: "2", name: "Win a MacBook", tickets: 3, date: "2024-03-19", status: "Active" },
  { id: "3", name: "Win a Brand Rolex", tickets: 2, date: "2024-03-18", status: "Ended" },
];

export default function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("transaction");

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 p-4 bg-white border-r">
        <nav className="space-y-2">
          <Link href="/dashboard/user">
            <Button 
              variant="default" 
              className="w-full justify-start text-lg px-4 py-2 bg-green-500 hover:bg-green-600 text-white"
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              Dashboard
            </Button>
          </Link>
          <Link href="/dashboard/user/profile">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg px-4 py-2"
            >
              <User className="mr-2 h-5 w-5" />
              My Profile
            </Button>
          </Link>
          <Link href="/dashboard/user/entries">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg px-4 py-2"
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              My Entries
            </Button>
          </Link>
          <Link href="/dashboard/user/notifications">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg px-4 py-2"
            >
              <BellRing className="mr-2 h-5 w-5" />
              Notifications
            </Button>
          </Link>
          <Link href="/dashboard/user/subscription">
            <Button 
              variant="ghost" 
              className="w-full justify-start text-lg px-4 py-2"
            >
              <Crown className="mr-2 h-5 w-5" />
              Subscription
            </Button>
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
        <p className="text-gray-600 mb-8">Track your entries, wins, and account activity</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-4 flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <LayoutGrid className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">10</CardTitle>
              <CardDescription>Total entries</CardDescription>
              <p className="text-sm text-gray-500">This month</p>
            </div>
          </Card>

          <Card className="p-4 flex items-center">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <Award className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">1</CardTitle>
              <CardDescription>Total wins</CardDescription>
              <p className="text-sm text-gray-500">Keep entering</p>
            </div>
          </Card>

          <Card className="p-4 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">£125,450</CardTitle>
              <CardDescription>Total Spent</CardDescription>
              <p className="text-sm text-gray-500">All time</p>
            </div>
          </Card>
        </div>

        {/* CTA Banner */}
        <Card className="bg-linear-to-r from-green-500 to-green-600 text-white mb-8">
          <CardContent className="p-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to enter more competitions?</h3>
              <p className="text-green-100">Browse our latest competitions and increase your chances to win!</p>
            </div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Browse Competitions
            </Button>
          </CardContent>
        </Card>

        {/* Content based on active tab */}
        {activeTab === "transaction" && (
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Your recent competition entries and payments</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Competition</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.competition}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge variant={transaction.status === "Confirmed" ? "default" : "secondary"}>
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}

        {activeTab === "entries" && (
          <Card>
            <CardHeader>
              <CardTitle>My Entries</CardTitle>
              <CardDescription>Competitions you've entered</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4 mb-6">
                <FormInput placeholder="Search competitions..." icon={Search} className="flex-1" />
                <Button variant="outline" className="flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recentCompetitions.map((competition) => (
                  <Card key={competition.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-semibold text-lg">{competition.name}</h3>
                        <Badge variant={competition.status === "Active" ? "default" : "secondary"}>
                          {competition.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Tickets: {competition.tickets}</p>
                        <p>Date: {competition.date}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "notification" && (
          <Card>
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Stay updated with your competition activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <BellRing className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Draw reminder</h4>
                    <p className="text-sm text-gray-600">The draw for "Win brand new car" is tomorrow at 8:00 PM</p>
                    <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 border rounded-lg">
                  <Award className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold">Entry confirmed</h4>
                    <p className="text-sm text-gray-600">Your entry for "Win a MacBook" has been confirmed</p>
                    <p className="text-xs text-gray-400 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "profile" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">First Name</label>
                    <FormInput placeholder="John" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Last Name</label>
                    <FormInput placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <FormInput placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <FormInput placeholder="+1 234 567 8900" />
                </div>
                <Button className="w-full">Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Change Password</label>
                  <FormInput type="password" placeholder="Current password" className="mb-2" />
                  <FormInput type="password" placeholder="New password" className="mb-2" />
                  <FormInput type="password" placeholder="Confirm new password" />
                </div>
                <Button variant="outline" className="w-full">Update Password</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  );
}
