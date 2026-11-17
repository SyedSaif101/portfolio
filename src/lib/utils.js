import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cx(...inputs) {
  return twMerge(clsx(inputs));
}

export const focusRing =
  "outline-none ring-2 ring-offset-2 ring-offset-[#090d14] ring-[#55d6c7]";
