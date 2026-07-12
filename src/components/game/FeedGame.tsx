"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { feedVideos } from "@/data/videos";
import { useGameState } from "@/hooks/useGameState";
import type { FeedAction } from "@/types/experience";
import { ResultsOverview } from "@/components/results/ResultsOverview";
import { DecisionPanel } from "./DecisionPanel";
import { FeedControlPanel } from "./FeedControlPanel";
import { LiveDataPanel } from "./LiveDataPanel";
import { PhoneFrame } from "./PhoneFrame";

export function FeedGame() {
  const {
    state,
    answerRecognition,
    recordDecision,
    advanceVideo,
    toggleFeedControl,
    completeGame,
    resetGame,
  } = useGameState();
  const reduceMotion = useReducedMotion();
  const [productPreview, setProductPreview] = useState(false);
  const currentVideo = feedVideos[state.currentVideoIndex];

  if (state.completed) {
    return (
      <section id="results" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <ResultsOverview state={state} onReset={resetGame} />
      </section>
    );
  }

  if (!currentVideo) {
    return (
      <section id="feed-controls" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <FeedControlPanel
          selected={state.selectedFeedControls}
          onToggle={toggleFeedControl}
          onComplete={completeGame}
        />
      </section>
    );
  }

  const decision = state.decisions.find(
    (item) => item.videoId === currentVideo.id,
  );
  const recognitionResponse = state.recognitionResponses.find(
    (item) => item.videoId === currentVideo.id,
  );

  const handleAction = (action: FeedAction) => {
    recordDecision(currentVideo.id, action);
    if (action.id === "open-product" || action.id === "view-voucher") {
      setProductPreview(true);
    }
  };

  const handleNext = () => {
    setProductPreview(false);
    advanceVideo();
  };

  const overlay = productPreview ? (
    <motion.div
      key="product-preview"
      className="absolute inset-x-4 bottom-4 z-40 rounded-[1.35rem] border border-white/20 bg-[#f8f7f3]/96 p-4 text-stone-950 shadow-2xl backdrop-blur-xl"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
    >
      <p className="font-mono text-[0.58rem] uppercase tracking-[0.12em] text-stone-500">
        Simulated product preview
      </p>
      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-lg font-semibold tracking-[-0.03em]">Luma Arc</p>
          <p className="mt-1 text-xs leading-5 text-stone-500">
            Opening this preview records commercial intent in the simulation.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setProductPreview(false)}
          className="shrink-0 rounded-full border border-stone-300 px-3 py-2 text-xs font-semibold transition hover:border-stone-950 active:scale-[0.97]"
        >
          Close
        </button>
      </div>
    </motion.div>
  ) : undefined;

  return (
    <section
      id="game"
      className="game-section scroll-mt-16 border-y border-stone-300 bg-[#eceae4] px-4 py-12 md:px-6 lg:min-h-[calc(100dvh-4rem)] lg:py-5"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="mb-5 flex items-end justify-between gap-5 px-1">
          <div>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-500">
              Guided feed simulation
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-stone-950">
              Take back the feed
            </h2>
          </div>
          <p className="font-mono text-xs text-stone-500">
            {state.currentVideoIndex + 1} / {feedVideos.length}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo.id}
            className="game-layout grid gap-7 lg:grid-cols-[minmax(14rem,0.72fr)_minmax(17rem,22rem)_minmax(21rem,1.1fr)] lg:items-stretch"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          >
            <div className="order-2 rounded-[1.7rem] border border-stone-300 bg-[#f4f3ef] p-5 lg:order-1 xl:p-6">
              <DecisionPanel
                video={currentVideo}
                decision={decision}
                recognitionResponse={recognitionResponse}
                isLastVideo={state.currentVideoIndex === feedVideos.length - 1}
                onRecognition={(answer) =>
                  answerRecognition(currentVideo.id, answer)
                }
                onAction={handleAction}
                onNext={handleNext}
              />
            </div>

            <div className="order-1 flex items-center justify-center lg:order-2">
              <PhoneFrame
                key={currentVideo.id}
                video={currentVideo}
                videoIndex={state.currentVideoIndex}
                totalVideos={feedVideos.length}
                overlay={overlay}
              />
            </div>

            <div className="order-3 lg:order-3">
              <LiveDataPanel
                feedDrift={state.feedDrift}
                decisions={state.decisions}
                currentVideo={currentVideo}
                currentDecision={decision}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
