/* eslint-disable @next/next/no-img-element */
import { Menu } from "@/components/menu";
import { UserButton } from "@/components/user-button";
import Link from "next/link";

export default function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grid grid-cols-[232px_1fr] min-h-screen py-6 px-5 gap-24">
      <aside className="sticky top-6 max-w-[300px] h-[calc(100vh_-_48px)] bg-[url(/banners/sidebar.png)] flex flex-col justify-start items-center py-10 px-5 pb-5 rounded-xl gap-16">
        <Link href="/">
          <img src="/logos/logo-primary.svg" alt="logo" />
        </Link>
        <Menu />
        <UserButton />
      </aside>
      {children}
    </div>
  );
}
