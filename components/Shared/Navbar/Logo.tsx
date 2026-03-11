import logo from "@/public/asset/logo/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        width={75}
        height={75}
        className="rounded-full"
      />
    </Link>
  );
};

export default Logo;
