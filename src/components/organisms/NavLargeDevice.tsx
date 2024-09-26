import Logo from "../atoms/Logo";
import NavList from "../molecules/NavList";

export default function NavLargeDevice() {
  return (
    <nav className="hidden lg:flex items-center justify-between py-4 px-8 container mx-auto">
      <Logo />
      <NavList />
    </nav>
  );
}