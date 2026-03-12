import { IUser, UserRole, UserStatus } from "@/interface/user.interface";
import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavbarClientContainer from "./NavbarClientContainer";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const user: IUser = {
    fullName: "Md Rakib Ali",
    email: "rakib@example.com",
    isEmailVerified: true,
    status: UserStatus.ACTIVE,
    role: UserRole.USER,
    isDeleted: false,
    createdAt: new Date().toISOString(),
  };
  const dashboardHref = "/dashboard";

  return (
    <NavbarClientContainer>
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Logo />
        </div>
        {/* Desktop Links */}
        <NavLinks />
        {/* Conditional: Show AuthButtons if no user, UserDropdown if user exists */}
        {user ? (
          <UserDropdown user={user} dashboardHref={dashboardHref} />
        ) : (
          <AuthButtons />
        )}
        <MobileMenu user={user} dashboardHref={dashboardHref} />
      </div>
    </NavbarClientContainer>
  );
};

export default Navbar;
