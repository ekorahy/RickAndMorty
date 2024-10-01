import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4 p-8">
        <h2 className="text-2xl font-bold">Error 404: Page Not Found</h2>
        <Link
          className="group relative w-max py-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:via-fuchsia-400 hover:to-amber-400 hover:bg-clip-text hover:text-transparent"
          href="/"
        >
          Back to home
          <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 transition-all duration-300 group-hover:w-full" />
        </Link>
      </div>
    </section>
  );
}
