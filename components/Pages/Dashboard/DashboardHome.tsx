"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, BellRing, DollarSign, LayoutGrid, User } from "lucide-react";
import Link from "next/link";

const DashboardHome = () => {
  const menuItems = [
    { name: "My Profile", icon: User, href: "/dashboard" },
    {
      name: "My entries",
      icon: LayoutGrid,
      href: "/dashboard/entries",
    },
    {
      name: "Transactions",
      icon: BellRing,
      href: "/dashboard/transactions",
    },
    { name: "Notifications", icon: BellRing, href: "/dashboard/notifications" },
  ];

  return (
    <div className="w-full flex ">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 p-5 rounded-lg h-fit bg-white border-r">
        <nav className="space-y-4">
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.name}
              className={cn(
                "flex items-center gap-3 px-4 py-3 text-sm font-bold rounded transition-all duration-200 no-underline",
                item.href === "/dashboard"
                  ? "bg-primary text-white"
                  : "text-gray-500 hover:text-primary hover:bg-white/50",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  item.href === "/dashboard" ? "text-primary" : "text-gray-400",
                )}
              />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 px-8">
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
              <h3 className="text-2xl font-bold mb-2">
                Ready to enter more competitions?
              </h3>
              <p className="text-green-100">
                Browse our latest competitions and increase your chances to win!
              </p>
            </div>
            <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
              Browse Competitions
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DashboardHome;
