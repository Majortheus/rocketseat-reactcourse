"use client";
import { BinoculosIcon } from "@/assets/icons/binoculos-icon";
import { TrendingIcon } from "@/assets/icons/trending-icon";
import { UserIcon } from "@/assets/icons/user-icon";
import { useSession } from "next-auth/react";
import { NavLink } from "../nav-link";

export function Menu() {
  const session = useSession();

  return (
    <nav className="flex flex-col gap-4 justify-center items-start w-full px-10">
      <NavLink href="/">
        <TrendingIcon />
        Início
      </NavLink>
      <NavLink href="/explore">
        <BinoculosIcon />
        Explorar
      </NavLink>
      {session.status === "authenticated" && (
        <NavLink href={`/profile/${session.data.user.id}`}>
          <UserIcon />
          Perfil
        </NavLink>
      )}
    </nav>
  );
}
