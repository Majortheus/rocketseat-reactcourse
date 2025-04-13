"use client";
import { ButtonHTMLAttributes } from "react";

type OathButtonProps = {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function OathButton({ children, ...rest }: OathButtonProps) {
  return (
    <button
      className="py-5 px-6 rounded-lg bg-gray-600 w-full cursor-pointer"
      {...rest}
    >
      <span className="font-bold text-gray-200 text-lg flex gap-5 justify-start items-center ">
        {children}
      </span>
    </button>
  );
}
