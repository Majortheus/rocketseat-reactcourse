/* eslint-disable @next/next/no-img-element */
"use client";
import { LoginIcon } from "@/assets/icons/login-icon";
import { LogoutIcon } from "@/assets/icons/logout-icon";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function UserButton() {
  const session = useSession();

  if (session.status === "authenticated") {
    return (
      <div className="mt-auto flex items-center justify-center gap-3">
        <div className="relative min-w-8 min-h-8 flex justify-center items-center">
          <div className="w-8 h-8 rounded-full bg-linear-to-b from-gradient-from to-gradient-to absolute inset-0" />
          {session.data.user?.image && (
            <img
              src={session.data.user.image}
              alt="avatar"
              className="w-7 h-7 rounded-full z-10"
            />
          )}
        </div>
        <div className="text-sm">{session.data.user?.name?.split(" ")[0]}</div>
        <button onClick={() => signOut()} className="cursor-pointer">
          <LogoutIcon />
        </button>
      </div>
    );
  }

  return (
    <Link href="/login" className="mt-auto flex items-center gap-3 font-bold">
      Fazer Login
      <span className="text-green-100 h-[22px]">
        <LoginIcon />
      </span>
    </Link>
  );
}
