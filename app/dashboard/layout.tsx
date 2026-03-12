import DashboardHome from "@/components/Pages/Dashboard/DashboardHome";

export default function UserDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-24">
      <div className="py-8 md:py-12 ">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
          My Dashboard
        </h1>
        <p className="text-gray-600 text-sm lg:text-base">
          Track your entries, wins, and account activity
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:gap-8">
        <DashboardHome />
        <main className="w-full pb-10">{children}</main>
      </div>
    </div>
  );
}
