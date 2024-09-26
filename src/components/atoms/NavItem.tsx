import Link from "next/link";

export default function NavItem({name, route}: NavItemProps) {
  return (
    <Link href={route}>
      {name}
    </Link>
  );
}