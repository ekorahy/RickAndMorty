import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.png" width={60} height={60} alt="Logo image" />
    </Link>
  );
}
