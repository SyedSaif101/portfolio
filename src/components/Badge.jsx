import React from "react";
import { tv } from "tailwind-variants";
import { cx } from "../lib/utils.js";

// Tremor Raw Badge pattern: copy/paste component, locally themed for this portfolio.
const badgeVariants = tv({
  base: "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium tracking-[0.04em] ring-1 ring-inset",
  variants: {
    variant: {
      default: "bg-violet-400/10 text-violet-200 ring-violet-300/20",
      neutral: "bg-white/[0.035] text-slate-300 ring-white/10",
      success: "bg-teal-300/10 text-teal-200 ring-teal-300/20",
      warning: "bg-amber-300/10 text-amber-200 ring-amber-300/20",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export function Badge({ className, variant = "neutral", ...props }) {
  return (
    <span
      className={cx(badgeVariants({ variant }), className)}
      tremor-id="tremor-raw"
      {...props}
    />
  );
}
