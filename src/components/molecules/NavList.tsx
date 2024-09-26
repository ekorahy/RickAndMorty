import { navigation } from "@/constants/navigation";
import NavItem from "../atoms/NavItem";

export default function NavList() {
  return (
    <ul className="flex lg:flex-row flex-col gap-4 lg:gap-8">
      {navigation.map(({ id, name, route }) => (
        <NavItem key={id} name={name} route={route} />
      ))}
    </ul>
  );
}
