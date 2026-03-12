import DashboardHome from "@/components/Pages/Dashboard/DashboardHome";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full container mx-auto pt-32 px-4 md:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">My Dashboard</h1>
      <p className="text-gray-600 mb-8">
        Track your entries, wins, and account activity
      </p>
      <DashboardHome />
      <main className="w-full pb-10">{children}</main>
    </div>
  );
}
