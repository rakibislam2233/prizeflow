"use client";
import React, { useEffect, useState } from "react";
interface NavbarClientContainerProps {
  children: React.ReactNode;
}
const NavbarClientContainer: React.FC<NavbarClientContainerProps> = ({
  children,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      data-scrolled={isScrolled}
      className={`group fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </nav>
  );
};

export default NavbarClientContainer;

// "use client";
// import React, { useEffect, useState } from "react";
// interface NavbarClientContainerProps {
//   children: React.ReactNode;
// }
// const NavbarClientContainer: React.FC<NavbarClientContainerProps> = ({
//   children,
// }) => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       data-scrolled={isScrolled}
//       className={`group fixed left-0 right-0 top-5 w-full z-100 transition-all duration-300 container mx-auto ${
//         isScrolled
//           ? "bg-white shadow-sm border-b border-gray-100 rounded-full"
//           : "bg-transparent border-transparent"
//       }`}
//     >
//       {children}
//     </nav>
//   );
// };

// export default NavbarClientContainer;
