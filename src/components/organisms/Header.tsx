import NavLargeDevice from "./NavLargeDevice";
import NavSmallDevice from "./NavSmallDevice";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50">
      <NavSmallDevice />
      <NavLargeDevice />
    </header>
  );
}
