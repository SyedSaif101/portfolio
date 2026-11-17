import React from "react";
import { cx, focusRing } from "../lib/utils.js";

// Tremor Raw BarList pattern, simplified to the props used on this portfolio.
export function BarList({ data, className, valueFormatter = (value) => String(value), showAnimation = true }) {
  const maxValue = Math.max(...data.map((item) => item.value), 0);

  return (
    <div className={cx("w-full space-y-3", className)} tremor-id="tremor-raw">
      {data.map((item, index) => {
        const width = item.value === 0 ? 0 : Math.max((item.value / maxValue) * 100, 2);
        return (
          <div className="grid grid-cols-[minmax(0,1fr)_2.25rem] items-center gap-4" key={item.name}>
            <div className="min-w-0">
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <span className="truncate text-xs text-[#c6cbd5]">{item.name}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
                <div
                  className={cx(
                    "h-full rounded-full bg-gradient-to-r from-[#7d70d9] to-[#55d6c7]",
                    showAnimation && "bar-list-fill",
                  )}
                  style={{ "--bar-width": `${width}%`, animationDelay: `${index * 90}ms` }}
                />
              </div>
            </div>
            <span className="text-right font-mono text-xs tabular-nums text-[#aab2c0]">{valueFormatter(item.value)}</span>
          </div>
        );
      })}
    </div>
  );
}
