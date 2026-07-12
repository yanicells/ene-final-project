"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  getFeedDriftLabel,
  getFeedDriftPosition,
} from "@/lib/scoring";

interface FeedDriftMeterProps {
  value: number;
  compact?: boolean;
}

export function FeedDriftMeter({ value, compact = false }: FeedDriftMeterProps) {
  const reduceMotion = useReducedMotion();
  const position = getFeedDriftPosition(value);
  const label = getFeedDriftLabel(value);

  return (
    <div className={compact ? "space-y-2" : "space-y-4"}>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-600">
            Feed drift
          </p>
          <p className="mt-1 text-lg font-medium tracking-[-0.02em] text-stone-900">
            {label}
          </p>
        </div>
        <output className="font-mono text-sm tabular-nums text-stone-600">
          {value > 0 ? "+" : ""}
          {value}
        </output>
      </div>

      <div
        className="relative h-7"
        role="meter"
        aria-label={`Feed drift: ${label}`}
        aria-valuemin={-100}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div className="absolute inset-x-0 top-3 h-px bg-stone-300" />
        <div className="absolute left-1/2 top-1 h-5 w-px bg-stone-400" />
        <motion.div
          className="absolute top-1.5 size-4 -translate-x-1/2 rounded-full border-2 border-stone-950 bg-[#f1cf4f] shadow-[0_3px_10px_rgba(23,23,20,0.18)]"
          initial={false}
          animate={{ left: `${position}%` }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 160, damping: 22 }
          }
        />
      </div>

      <div className="flex justify-between font-mono text-[0.62rem] uppercase tracking-[0.1em] text-stone-600">
        <span>Interest-led</span>
        <span>Sales-led</span>
      </div>
    </div>
  );
}
