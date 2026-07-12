"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import { MotionReveal } from "@/components/shared/MotionReveal";

export function FinalMessage() {
  return (
    <section className="debrief-section flex min-h-[90dvh] items-center border-t border-stone-300 px-5 py-24 md:px-8">
      <MotionReveal className="mx-auto w-full max-w-[1480px]">
        <p className="max-w-6xl text-[clamp(3.6rem,8vw,8rem)] font-semibold leading-[0.87] tracking-[-0.075em] text-stone-950">
          Keep your interests.
          <span className="block text-stone-400">
            Question who is arranging what comes next.
          </span>
        </p>
        <div className="mt-12 flex flex-col gap-7 border-t border-stone-300 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-lg leading-8 text-stone-600">
            Your attention begins with you. The system decides what to do with it
            next. Meaningful agency should not require every user to constantly
            defend themselves from a system built to learn faster than they can
            react.
          </p>
          <div className="flex shrink-0 flex-wrap gap-3">
            <button
              type="button"
              onClick={() => window.location.assign("/#game")}
              className="flex items-center gap-2 rounded-full border border-stone-400 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
            >
              <RotateCcw aria-hidden="true" size={15} />
              Replay
            </button>
            <a
              href="#sources"
              className="flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2.5 text-sm font-semibold text-[#f4f3ef] transition hover:bg-stone-800"
            >
              View sources
              <ArrowRight aria-hidden="true" size={15} />
            </a>
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}
