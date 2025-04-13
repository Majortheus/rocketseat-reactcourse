"use client";
import { GithubIcon } from "@/assets/icons/github-icon";
import { GoogleIcon } from "@/assets/icons/google-icon";
import { RocketLaunchIcon } from "@/assets/icons/rocket-launch-icon";
import OathButton from "@/components/oath-button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Login() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.replace("/");
    }
  }, [router, session.status]);

  return (
    <div className="grid grid-cols-[600px_1fr] gap-[226px] p-5">
      <Link href="/">
        <img
          src="/banners/login-hero-banner.png"
          alt="logo"
          className="h-[calc(100vh_-_40px)]"
        />
      </Link>
      <main className="flex flex-col justify-center items-start gap-10 w-sm">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-bold text-2xl leading-snug ">Boas vindas!</h1>
          <p className="text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <OathButton onClick={() => signIn("google")}>
            <GoogleIcon />
            Entrar com Google
          </OathButton>
          <OathButton onClick={() => signIn("github")}>
            <GithubIcon />
            Entrar com GitHub
          </OathButton>
          <Link href="/">
            <OathButton>
              <RocketLaunchIcon />
              Acessar como visitante
            </OathButton>
          </Link>
        </div>
      </main>
    </div>
  );
}
