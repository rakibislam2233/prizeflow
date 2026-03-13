"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock } from "lucide-react";

const notifications = [
  {
    id: "1",
    type: "drawReminder",
    title: "Draw reminder",
    description: "Sports Car competition draw is in 2 days!",
    timestamp: "2 hours ago",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    icon: <Clock className="w-5 h-5 text-blue-500" />,
  },
  {
    id: "2",
    type: "entryConfirmed",
    title: "Entry confirmed",
    description: "Your entry for Gaming Setup has been confirmed",
    timestamp: "1 hours ago",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
  },
];

const NotificationsPage = () => {
  return (
    <div className="w-full space-y-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Notification</h1>
        <p className="text-gray-600">All the notification of your account</p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className={`${notification.borderColor} ${notification.bgColor}`}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 mt-1">{notification.icon}</div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{notification.description}</p>
                  <p className="text-sm text-gray-500">{notification.timestamp}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
