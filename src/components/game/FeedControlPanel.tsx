"use client";

import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { feedControls } from "@/data/feed-controls";

interface FeedControlPanelProps {
  selected: readonly string[];
  onToggle: (controlId: string) => void;
  onComplete: () => void;
}

export function FeedControlPanel({
  selected,
  onToggle,
  onComplete,
}: FeedControlPanelProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mx-auto max-w-5xl"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-2xl">
        <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-stone-950 md:text-6xl">
          Change the feed itself.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
          Choose two or three controls you would use. They can influence what
          appears next, but they do not provide full control over ranking.
        </p>
      </div>

      <div className="mt-10 grid gap-x-10 md:grid-cols-2">
        {feedControls.map((control) => {
          const isSelected = selected.includes(control.id);
          const disabled = !isSelected && selected.length >= 3;
          return (
            <button
              key={control.id}
              type="button"
              aria-pressed={isSelected}
              disabled={disabled}
              onClick={() => onToggle(control.id)}
              className="group flex items-start gap-4 border-t border-stone-300 py-5 text-left transition last:border-b hover:border-stone-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <span
                className={`mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition ${
                  isSelected
                    ? "border-stone-950 bg-stone-950 text-[#f4f3ef]"
                    : "border-stone-400 text-transparent group-hover:border-stone-950"
                }`}
              >
                <Check aria-hidden="true" size={13} strokeWidth={2.2} />
              </span>
              <span>
                <span className="block text-base font-semibold text-stone-900">
                  {control.label}
                </span>
                <span className="mt-1 block text-sm leading-6 text-stone-500">
                  {control.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between gap-5">
        <p className="font-mono text-xs text-stone-500">
          {selected.length} selected, choose 2 or 3
        </p>
        <button
          type="button"
          disabled={selected.length < 2}
          onClick={onComplete}
          className="flex items-center gap-3 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-[#f8f7f3] transition hover:bg-stone-800 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
        >
          See my results
          <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
        </button>
      </div>
    </motion.div>
  );
}
