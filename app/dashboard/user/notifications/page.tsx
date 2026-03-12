"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, BellRing, CheckCircle, Clock, Gift, Info, Star, Trophy } from "lucide-react";
import { useState } from "react";

// Mock notification data
const notifications = [
  {
    id: "1",
    type: "winner",
    title: "Congratulations! You Won!",
    message: "You've won the MacBook Pro competition! Check your email for prize claim instructions.",
    time: "2 hours ago",
    read: false,
    icon: Trophy,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    id: "2",
    type: "draw_reminder",
    title: "Draw Reminder",
    message: "The 'Win Brand New Car' competition draw is tomorrow at 8:00 PM. Good luck!",
    time: "5 hours ago",
    read: false,
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    id: "3",
    type: "entry_confirmed",
    title: "Entry Confirmed",
    message: "Your 5 tickets for 'Luxury Watch Collection' have been confirmed. Ticket numbers: #34567-#34571",
    time: "1 day ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "4",
    type: "new_competition",
    title: "New Competition Alert",
    message: "A new iPhone 15 Pro Max competition is now live! Early bird discount available for the first 100 entries.",
    time: "2 days ago",
    read: true,
    icon: Gift,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    id: "5",
    type: "payment_success",
    title: "Payment Successful",
    message: "Your payment of $50 for competition entries has been processed successfully.",
    time: "3 days ago",
    read: true,
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    id: "6",
    type: "system_update",
    title: "System Update",
    message: "PrizeFlow will be undergoing maintenance on Sunday 2:00 AM - 4:00 AM EST. Services may be temporarily unavailable.",
    time: "4 days ago",
    read: true,
    icon: Info,
    color: "text-gray-600",
    bgColor: "bg-gray-50"
  },
  {
    id: "7",
    type: "special_offer",
    title: "Special Offer!",
    message: "Get 20% bonus tickets on all competitions this weekend only. Use code: WEEKEND20",
    time: "5 days ago",
    read: true,
    icon: Star,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    id: "8",
    type: "deadline_reminder",
    title: "Entry Deadline",
    message: "Only 24 hours left to enter the 'Dream Vacation Package' competition. Don't miss out!",
    time: "1 week ago",
    read: true,
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-50"
  }
];

export default function NotificationsPage() {
  const [filter, setFilter] = useState("all");
  const [notificationsList, setNotificationsList] = useState(notifications);

  const unreadCount = notificationsList.filter(n => !n.read).length;

  const markAsRead = (id: string) => {
    setNotificationsList(prev => 
      prev.map(notification => 
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotificationsList(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id: string) => {
    setNotificationsList(prev => prev.filter(n => n.id !== id));
  };

  const filteredNotifications = notificationsList.filter(notification => {
    if (filter === "all") return true;
    if (filter === "unread") return !notification.read;
    if (filter === "read") return notification.read;
    return notification.type === filter;
  });

  const getNotificationIcon = (notification: any) => {
    const Icon = notification.icon;
    return (
      <div className={`w-10 h-10 ${notification.bgColor} rounded-full flex items-center justify-center shrink-0`}>
        <Icon className={`w-5 h-5 ${notification.color}`} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
            <p className="text-gray-600">Stay updated with your competition activities</p>
          </div>
          <div className="flex items-center gap-3">
            {unreadCount > 0 && (
              <Button onClick={markAllAsRead} variant="outline">
                Mark All as Read
              </Button>
            )}
            <Button variant="outline">
              <BellRing className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <BellRing className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{notificationsList.length}</div>
              <p className="text-sm text-gray-600">Total Notifications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold text-sm">{unreadCount}</span>
              </div>
              <div className="text-2xl font-bold">{unreadCount}</div>
              <p className="text-sm text-gray-600">Unread</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">1</div>
              <p className="text-sm text-gray-600">Wins</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Gift className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">3</div>
              <p className="text-sm text-gray-600">Special Offers</p>
            </CardContent>
          </Card>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            size="sm"
          >
            All ({notificationsList.length})
          </Button>
          <Button
            variant={filter === "unread" ? "default" : "outline"}
            onClick={() => setFilter("unread")}
            size="sm"
          >
            Unread ({unreadCount})
          </Button>
          <Button
            variant={filter === "winner" ? "default" : "outline"}
            onClick={() => setFilter("winner")}
            size="sm"
          >
            Wins
          </Button>
          <Button
            variant={filter === "draw_reminder" ? "default" : "outline"}
            onClick={() => setFilter("draw_reminder")}
            size="sm"
          >
            Draw Reminders
          </Button>
          <Button
            variant={filter === "special_offer" ? "default" : "outline"}
            onClick={() => setFilter("special_offer")}
            size="sm"
          >
            Special Offers
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-4">
          {filteredNotifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`transition-all hover:shadow-md ${
                !notification.read ? 'border-l-4 border-l-primary' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {getNotificationIcon(notification)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`font-semibold text-gray-900 ${
                          !notification.read ? 'font-bold' : ''
                        }`}>
                          {notification.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{notification.message}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        {!notification.read && (
                          <Badge variant="default" className="bg-primary">
                            New
                          </Badge>
                        )}
                        <span className="text-sm text-gray-500 whitespace-nowrap">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      {!notification.read && (
                        <Button 
                          size="sm" 
                          variant="outline"
                          onClick={() => markAsRead(notification.id)}
                        >
                          Mark as Read
                        </Button>
                      )}
                      {notification.type === 'winner' && (
                        <Button size="sm" className="bg-primary text-white">
                          Claim Prize
                        </Button>
                      )}
                      {notification.type === 'new_competition' && (
                        <Button size="sm" variant="outline">
                          View Competition
                        </Button>
                      )}
                      {notification.type === 'special_offer' && (
                        <Button size="sm" variant="outline">
                          Use Code
                        </Button>
                      )}
                      <Button 
                        size="sm" 
                        variant="ghost"
                        onClick={() => deleteNotification(notification.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <BellRing className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No notifications</h3>
              <p className="text-gray-600">
                {filter === "all" 
                  ? "You're all caught up! No new notifications."
                  : `No ${filter} notifications found.`
                }
              </p>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredNotifications.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load Older Notifications
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
