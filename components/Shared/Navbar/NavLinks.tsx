import Link from "next/link";

const NavLinks = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/compentition", label: "Compentition" },
    { href: "/winner", label: "Winner" },
    { href: "/how-it-works", label: "How it works" },
  ];
  return (
    <div className="hidden md:flex items-center gap-6 text-base font-medium">
      {navLinks?.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition-colors text-white group-data-[scrolled=true]:text-gray-900 hover:text-primary group-data-[scrolled=true]:hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
