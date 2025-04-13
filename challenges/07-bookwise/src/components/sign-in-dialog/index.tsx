"use client";
import { CloseIcon } from "@/assets/icons/close-icon";
import { GithubIcon } from "@/assets/icons/github-icon";
import { GoogleIcon } from "@/assets/icons/google-icon";
import * as Dialog from "@radix-ui/react-dialog";
import { signIn } from "next-auth/react";
import OathButton from "../oath-button";

export function SignInDialog() {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-overlayShow z-30" />
      <Dialog.Content className="fixed flex flex-col gap-10 justify-center items-center left-1/2 top-1/2 z-40 max-h-[85vh] w-[90vw] max-w-[516px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-gray-700 p-[56px] shadow-xl focus:outline-none data-[state=open]:animate-contentShow">
        <Dialog.Title className="font-bold">
          Faça login para deixar sua avaliação
        </Dialog.Title>
        <Dialog.Close asChild>
          <button className="absolute right-4 top-4" aria-label="Close">
            <CloseIcon />
          </button>
        </Dialog.Close>
        <Dialog.Description className="flex flex-col gap-4 w-full">
          <OathButton onClick={() => signIn("google")}>
            <GoogleIcon />
            Entrar com Google
          </OathButton>
          <OathButton onClick={() => signIn("github")}>
            <GithubIcon />
            Entrar com GitHub
          </OathButton>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
