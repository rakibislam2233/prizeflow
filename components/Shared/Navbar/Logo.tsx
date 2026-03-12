"use client";
import logoBlack from "@/public/asset/logo/logo.png";
import logoWhite from "@/public/asset/logo/logo2.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Logo = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSrc = isClient && isScrolled ? logoWhite : logoBlack;

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
