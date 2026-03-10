import { Button } from "@/components/ui/button";
import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link href="/login">
        <Button
          variant="ghost"
          className="text-primary font-semibold hover:bg-transparent cursor-pointer"
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
