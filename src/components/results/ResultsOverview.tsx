"use client";

import { RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { feedControls } from "@/data/feed-controls";
import { getFeedDriftLabel, summarizeDecisions } from "@/lib/scoring";
import type { GameState } from "@/types/experience";
import { FeedDriftMeter } from "@/components/game/FeedDriftMeter";
import { VideoReviewRail } from "./VideoReviewRail";

interface ResultsOverviewProps {
  state: GameState;
  onReset: () => void;
}

export function ResultsOverview({ state, onReset }: ResultsOverviewProps) {
  const reduceMotion = useReducedMotion();
  const summary = summarizeDecisions(
    state.decisions,
    state.recognitionResponses,
  );
  const selectedControls = feedControls.filter((control) =>
    state.selectedFeedControls.includes(control.id),
  );

  return (
    <motion.div
      className="mx-auto max-w-6xl"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-stone-950 md:text-7xl">
            You shaped the feed. It shaped the choices in front of you.
          </h2>
        </div>
        <div className="rounded-[1.5rem] border border-stone-300 bg-[#f8f7f3] p-6">
          <FeedDriftMeter value={state.feedDrift} compact />
          <p className="mt-5 border-t border-stone-200 pt-5 text-sm leading-6 text-stone-600">
            Your simulated feed finished {getFeedDriftLabel(state.feedDrift).toLowerCase()}.
            This is a metaphor for accumulated choices, not a prediction of a real
            platform.
          </p>
        </div>
      </div>

      <dl className="mt-12 grid border-y border-stone-300 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Explicit signals", summary.explicitSignals],
          ["Implicit signals", summary.implicitSignals],
          ["Commercial actions", summary.commercialActions],
          ["Relationships recognized", `${summary.recognizedRelationships}/2`],
        ].map(([label, value]) => (
          <div
            key={label}
            className="border-b border-stone-300 px-0 py-5 sm:px-5 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
          >
            <dt className="text-sm text-stone-500">{label}</dt>
            <dd className="mt-2 font-mono text-3xl tracking-[-0.04em] text-stone-950">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 grid gap-6 rounded-[1.5rem] bg-stone-950 p-6 text-[#f4f3ef] md:grid-cols-[0.7fr_1.3fr] md:p-8">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-stone-400">
            Your micro narrative
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
            Controls you would use
          </h3>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {selectedControls.map((control) => (
            <li
              key={control.id}
              className="border-t border-white/20 pt-3 text-sm leading-6 text-stone-300"
            >
              <span className="block font-semibold text-[#f4f3ef]">
                {control.label}
              </span>
              {control.description}
            </li>
          ))}
        </ul>
      </div>

      <VideoReviewRail decisions={state.decisions} />

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-full border border-stone-400 px-4 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-stone-950 hover:text-stone-950 active:scale-[0.98]"
        >
          <RotateCcw aria-hidden="true" size={15} strokeWidth={1.8} />
          Replay simulation
        </button>
      </div>
    </motion.div>
  );
}
