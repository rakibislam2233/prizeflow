export interface DashboardEntry {
  id: string;
  image: string;
  title: string;
  price: string;
  tickets: string[];
  drawDate: string;
  status: "Active" | "Completed";
}

export interface DashboardNotification {
  id: string;
  type: "drawReminder" | "entryConfirmed";
  title: string;
  description: string;
  timestamp: string;
  borderColor: string;
  bgColor: string;
}

export interface DashboardTransaction {
  date: string;
  description: string;
  amount: string;
  status: "Completed";
}

export interface DashboardProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  notifications: {
    drawReminder: boolean;
    entryConfirmations: boolean;
    winnerAnnouncements: boolean;
  };
}

export interface DashboardSettingsFormData {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
  notifications: {
    drawReminder: boolean;
    entryConfirmations: boolean;
    winnerAnnouncements: boolean;
  };
}

export const dashboardEntries: DashboardEntry[] = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 March 2026",
    status: "Active",
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 March 2026",
    status: "Active",
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 March 2026",
    status: "Active",
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 January 2026",
    status: "Completed",
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 January 2026",
    status: "Completed",
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=300&h=200&fit=crop",
    title: "Win a brand new car",
    price: "$2",
    tickets: ["R123", "R456", "R789"],
    drawDate: "26 January 2026",
    status: "Completed",
  },
];

export const dashboardNotifications: DashboardNotification[] = [
  {
    id: "1",
    type: "drawReminder",
    title: "Draw reminder",
    description: "Sports Car competition draw is in 2 days!",
    timestamp: "2 hours ago",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
  },
  {
    id: "2",
    type: "entryConfirmed",
    title: "Entry confirmed",
    description: "Your entry for Gaming Setup has been confirmed",
    timestamp: "1 hours ago",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
  },
];

export const dashboardTransactions: DashboardTransaction[] = [
  {
    date: "12/10/2016",
    description: "Win a car",
    amount: "$12",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Gaming setup",
    amount: "$16",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Rolex watch",
    amount: "$19",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Dubai trip",
    amount: "$11",
    status: "Completed",
  },
  {
    date: "12/10/2016",
    description: "Chicken dinner",
    amount: "$14",
    status: "Completed",
  },
];

export const dashboardProfileInitialData: DashboardProfileFormData = {
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  phone: "+1 234 567 8900",
  dateOfBirth: "1990-01-15",
  address: "123 Competition Street, Prize City, PC 12345",
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  notifications: {
    drawReminder: true,
    entryConfirmations: true,
    winnerAnnouncements: false,
  },
};

export const dashboardSettingsInitialData: DashboardSettingsFormData = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
  notifications: {
    drawReminder: true,
    entryConfirmations: true,
    winnerAnnouncements: false,
  },
};
