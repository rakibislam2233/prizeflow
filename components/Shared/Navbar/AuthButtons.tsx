'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthButtons = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link href="/login">
        <Button
          variant="ghost"
          className={`font-semibold hover:bg-transparent hover:text-white/80 cursor-pointer ${
            isHomePage
              ? "text-white group-data-[scrolled=true]:text-primary hover:bg-transparent hover:text-white/80 group-data-[scrolled=true]:hover:bg-transparent group-data-[scrolled=true]:hover:text-primary/80"
              : "text-gray-900 hover:bg-gray-100 hover:text-primary"
          }`}
        >
          Login
        </Button>
      </Link>
      <Link href="/register">
        <Button className="bg-primary text-white h-12 px-5 cursor-pointer">
          Register
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
