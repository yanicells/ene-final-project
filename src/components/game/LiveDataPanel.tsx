"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { sourcesById } from "@/data/sources";
import type { FeedVideo, UserDecision } from "@/types/experience";
import { FeedDriftMeter } from "./FeedDriftMeter";

interface LiveDataPanelProps {
  feedDrift: number;
  decisions: readonly UserDecision[];
  currentVideo: FeedVideo;
  currentDecision?: UserDecision;
}

export function LiveDataPanel({
  feedDrift,
  decisions,
  currentVideo,
  currentDecision,
}: LiveDataPanelProps) {
  const reduceMotion = useReducedMotion();
  const visibleSignals = decisions.slice(-4).reverse();
  const citations = currentVideo.citationIds
    .map((id) => sourcesById.get(id))
    .filter((source) => source !== undefined);

  return (
    <aside className="live-data-panel flex h-full flex-col rounded-[1.7rem] border border-stone-300/90 bg-[#f8f7f3] p-5 shadow-[0_18px_45px_rgba(36,32,22,0.07)] xl:p-6">
      <FeedDriftMeter value={feedDrift} />

      <div className="mt-7 border-t border-stone-200 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-stone-500">
              Simulation data
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.035em] text-stone-950">
              Data collected about you
            </h3>
          </div>
          <span className="rounded-full border border-stone-300 px-2.5 py-1 font-mono text-[0.62rem] text-stone-500">
            {decisions.length}/6
          </span>
        </div>

        <div className="mt-5 min-h-[11rem] space-y-2">
          <AnimatePresence initial={false}>
            {visibleSignals.length ? (
              visibleSignals.map((decision, index) => (
                <motion.div
                  key={decision.videoId}
                  className={`flex items-start gap-3 rounded-xl border px-3 py-2.5 ${
                    index === 0
                      ? "border-[#dbc35b] bg-[#f8edb6]/55"
                      : "border-stone-200 bg-[#f4f3ef]"
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-stone-700" />
                  <div>
                    <p className="text-xs font-semibold capitalize text-stone-500">
                      {decision.signalType} signal
                    </p>
                    <p className="mt-0.5 text-sm leading-5 text-stone-800">
                      {decision.dataLabel}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.p
                className="max-w-xs text-sm leading-6 text-stone-500"
                initial={false}
                animate={{ opacity: 1 }}
              >
                Your first decision will appear here. The simulation records both
                deliberate actions and behavior that can still carry a signal.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {currentDecision ? (
          <motion.div
            key={currentVideo.id}
            className="mt-auto border-t border-stone-200 pt-5"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-sm leading-6 text-stone-700">
              {currentVideo.researchFeedback}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {citations.map((source) => (
                <a
                  key={source.id}
                  href={`#source-${source.id}`}
                  className="text-xs font-semibold text-stone-600 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950"
                >
                  {source.shortCitation}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </aside>
  );
}
