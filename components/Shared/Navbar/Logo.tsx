"use client";
import logoWhite from "@/public/asset/logo/logo2.png";
import logoBlack from "@/public/asset/logo/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Link href="/">
      <Image
        src={
          !isScrolled && pathname === "/"
            ? logoBlack
            : isScrolled
            ? logoWhite
            : logoBlack
        }
        alt="Logo"
        width={75}
        height={75}
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
