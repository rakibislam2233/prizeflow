import { UserRole } from "@/interface/user.interface";
import { getMyProfile } from "@/services/user.service";
import AuthButtons from "./AuthButtons";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavbarClientContainer from "./NavbarClientContainer";
import NavLinks from "./NavLinks";
import UserDropdown from "./UserDropdown";

const Navbar = async () => {
  const user = await getMyProfile();
  const dashboardHref =
    user?.role === UserRole.ADMIN
      ? "/dashboard/admin"
      : user?.role === UserRole.USER
        ? "/dashboard/user"
        : "/dashboard/company";

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
