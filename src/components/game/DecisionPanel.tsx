"use client";

import {
  ArrowRight,
  CircleX,
  Eye,
  Heart,
  Play,
  Settings2,
  ShoppingBag,
  SkipForward,
  Ticket,
  UserPlus,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import type {
  FeedAction,
  FeedVideo,
  RecognitionAnswer,
  RecognitionResponse,
  UserDecision,
} from "@/types/experience";

const actionIcons: Record<FeedAction["id"], LucideIcon> = {
  like: Heart,
  follow: UserPlus,
  "keep-watching": Play,
  "next-video": SkipForward,
  "adjust-recommendation": Settings2,
  "open-product": ShoppingBag,
  skip: SkipForward,
  "not-interested": CircleX,
  "view-voucher": Ticket,
};

const recognitionLabels: Record<RecognitionAnswer, string> = {
  yes: "Yes",
  no: "No",
  "not-sure": "Not sure",
};

interface DecisionPanelProps {
  video: FeedVideo;
  decision?: UserDecision;
  recognitionResponse?: RecognitionResponse;
  isLastVideo: boolean;
  onRecognition: (answer: RecognitionAnswer) => void;
  onAction: (action: FeedAction) => void;
  onNext: () => void;
}

export function DecisionPanel({
  video,
  decision,
  recognitionResponse,
  isLastVideo,
  onRecognition,
  onAction,
  onNext,
}: DecisionPanelProps) {
  const reduceMotion = useReducedMotion();
  const chosenAction = video.actions.find(
    (action) => action.id === decision?.actionId,
  );
  const canChooseAction = !video.recognitionPrompt || recognitionResponse;
  const feedback = chosenAction?.feedback ?? video.researchFeedback;

  return (
    <div className="flex min-h-full flex-col justify-center">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-600">
        {video.sequenceLabel}
      </p>
      <h3 className="mt-3 text-3xl font-semibold leading-[1.02] tracking-[-0.045em] text-stone-950">
        {decision ? "Signal recorded" : "What do you do?"}
      </h3>

      <details className="mt-4 text-xs leading-5 text-stone-600">
        <summary className="w-fit cursor-pointer font-semibold text-stone-600 transition hover:text-stone-950">
          Read media transcript
        </summary>
        <p className="mt-2 max-w-sm">{video.transcript}</p>
      </details>

      {video.recognitionPrompt ? (
        <fieldset className="mt-7 border-0 p-0">
          <legend className="text-sm font-medium leading-6 text-stone-700">
            {video.recognitionPrompt.question}
          </legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {video.recognitionPrompt.options.map((answer) => (
              <button
                key={answer}
                type="button"
                aria-pressed={recognitionResponse?.answer === answer}
                onClick={() => onRecognition(answer)}
                disabled={Boolean(decision)}
                className="rounded-full border border-stone-300 bg-[#f4f3ef] px-3.5 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950 active:scale-[0.98] disabled:cursor-default disabled:opacity-60 aria-pressed:border-stone-950 aria-pressed:bg-stone-950 aria-pressed:text-[#f4f3ef]"
              >
                {recognitionLabels[answer]}
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      <AnimatePresence mode="wait">
        {canChooseAction && !decision ? (
          <motion.div
            key="actions"
            className="mt-7 space-y-2.5"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          >
            {video.actions.map((action) => {
              const Icon = actionIcons[action.id];
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => onAction(action)}
                  className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-stone-300 bg-[#f8f7f3] px-4 py-3.5 text-left text-sm font-medium text-stone-900 shadow-[0_1px_0_rgba(23,23,20,0.04)] transition hover:-translate-y-0.5 hover:border-stone-500 hover:shadow-[0_8px_22px_rgba(23,23,20,0.08)] active:translate-y-0 active:scale-[0.99]"
                >
                  <span className="flex items-center gap-3">
                    <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                    {action.label}
                  </span>
                  <span className="font-mono text-xs text-stone-600 transition group-hover:text-stone-700">
                    {action.feedDriftDelta > 0 ? "+" : ""}
                    {action.feedDriftDelta}
                  </span>
                </button>
              );
            })}
          </motion.div>
        ) : null}

        {decision && chosenAction ? (
          <motion.div
            key="feedback"
            className="mt-7"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="rounded-2xl border border-stone-300 bg-[#f8f7f3] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-stone-900">
                <Eye aria-hidden="true" size={16} strokeWidth={1.8} />
                {chosenAction.label}
              </div>
              <p className="mt-3 text-sm leading-6 text-stone-600">{feedback}</p>
            </div>
            <button
              type="button"
              onClick={onNext}
              className="mt-4 flex w-full items-center justify-between rounded-2xl bg-stone-950 px-4 py-3.5 text-sm font-semibold text-[#f8f7f3] transition hover:bg-stone-800 active:scale-[0.99]"
            >
              {isLastVideo ? "Choose feed controls" : "Next post"}
              <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
