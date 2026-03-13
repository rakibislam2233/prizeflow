"use client";
import logoBlack from "@/public/asset/logo/logo.png";
import logoWhite from "@/public/asset/logo/logo2.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    }
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep home behavior, but force black logo for all non-home pages.
  const logoSrc = isHomePage
    ? isScrolled
      ? logoWhite
      : logoBlack
    : logoWhite;

  return (
    <Image
      src={logoSrc}
      alt="Logo"
      width={75}
      height={75}
      className="rounded-full cursor-pointer"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
