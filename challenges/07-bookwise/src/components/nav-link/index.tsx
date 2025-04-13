"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export function NavLink({ children, href }: NavLinkProps) {
  const pathname = usePathname();

  if (
    (href !== "/" && pathname.startsWith(`/${href.split("/")[1]}`)) ||
    pathname === href
  ) {
    return (
      <div className="flex gap-4 justify-center items-center -ml-5">
        <div className="bg-linear-to-b from-gradient-from to-gradient-to w-1 h-6 rounded-full" />
        <Link
          href={href}
          className="text-gray-100 flex gap-3 justify-start items-center font-bold py-2"
        >
          {children}
        </Link>
      </div>
    );
  }

  return (
    <Link
      href={href}
      className="text-gray-400 flex gap-3 justify-start items-center py-2"
    >
      {children}
    </Link>
  );
}
