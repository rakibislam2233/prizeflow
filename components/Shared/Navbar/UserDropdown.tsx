"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IUser } from "@/interface/user.interface";
import { cn } from "@/lib/utils";
import { logoutUser } from "@/services/auth.service";
import { motion } from "framer-motion";
import {
  Cloud,
  CreditCard,
  HardDrive,
  LogOut,
  Settings,
  User as UserIcon,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface UserDropdownProps {
  user: IUser | null;
  dashboardHref: string;
  theme?: "default" | "emerald";
}

const UserDropdown: React.FC<UserDropdownProps> = ({
  user,
  dashboardHref,
  theme = "default",
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logged out successfully");
      router.push("/login");
      router.refresh();
    } catch {
      toast.error("Failed to logout");
    }
  };

  const isEmerald = theme === "emerald";

  const nameClassName = cn(
    "text-base font-medium transition-colors",
    isHomePage
      ? isEmerald
        ? "text-white group-data-[scrolled=true]:text-emerald-600 group-hover:text-white/90 group-data-[scrolled=true]:group-hover:text-emerald-700"
        : "text-white group-data-[scrolled=true]:text-gray-700 group-hover:text-white/90 group-data-[scrolled=true]:group-hover:text-gray-900"
      : isEmerald
        ? "text-emerald-600 group-hover:text-emerald-700"
        : "text-gray-700 group-hover:text-gray-900",
  );

  const emailClassName = cn(
    "text-xs transition-colors",
    isHomePage
      ? "text-white/85 group-data-[scrolled=true]:text-gray-500"
      : "text-gray-500",
  );

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-3 pl-2 pr-1 py-1  cursor-pointer transition-all group group-data-[scrolled=true]:border-gray-200">
          <div className="flex flex-col gap-1 leading-none">
            <h1 className={nameClassName}>
              {user?.fullName || "User"}
            </h1>
            <h1 className={emailClassName}>{user?.email}</h1>
          </div>
          <Avatar
            className={cn(
              "size-10 rounded-full border  transition-transform group-hover:scale-105",
              isEmerald ? "border-emerald-200" : "border-gray-200",
            )}
          >
            <AvatarImage
              src={user?.profileImage || "https://github.com/shadcn.png"}
              alt={user?.fullName || "User"}
            />
            <AvatarFallback
              className={cn(
                "text-white text-xs  rounded-full ",
                isEmerald ? "bg-emerald-600" : "bg-primary",
              )}
            >
              {user?.fullName
                ?.split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2) || "UR"}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 mt-2 p-0 border-none shadow-none bg-transparent overflow-visible "
      >
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="bg-white rounded-md border border-gray-100 shadow-lg p-1 overflow-hidden"
        >
          <DropdownMenuLabel className="px-3 py-2 text-xs  text-gray-400  tracking-widest border-b border-gray-100 mb-2">
            Account Overview
          </DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/profile`)}
            className="px-3 py-2.5 text-sm text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <UserIcon className="w-4 h-4 text-primary" />
            <span className="font-medium">My Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/entries`)}
            className="px-3 py-2.5 text-sm text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <Cloud className="w-4 h-4 text-primary" />
            <span className="font-medium">My Entries</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/transactions`)}
            className="px-3 py-2.5 text-sm text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <HardDrive className="w-4 h-4 text-primary" />
            <span className="font-medium">Transactions</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/notifications`)}
            className="px-3 py-2.5 text-sm text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <CreditCard className="w-4 h-4 text-primary" />
            <span className="font-medium">Notifications</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => router.push(`${dashboardHref}/settings`)}
            className="px-3 py-2.5 text-sm text-gray-700 rounded-md cursor-pointer flex items-center gap-3 transition-colors focus:text-white hover:bg-gray-50 focus:bg-primary"
          >
            <Settings className="w-4 h-4 text-primary" />
            <span className="font-medium">Settings</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator className="bg-gray-100" />

          <DropdownMenuItem
            onClick={handleLogout}
            className="px-3 py-2.5 text-sm  text-red-600 focus:bg-red-50 focus:text-red-600 rounded-md cursor-pointer flex items-center gap-3 transition-colors hover:bg-red-50"
          >
            <LogOut className="w-4 h-4" />
            <span className="font-medium">Sign Out</span>
          </DropdownMenuItem>
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
