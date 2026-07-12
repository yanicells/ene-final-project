"use client";

import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

const pauseQuestions = [
  {
    question: "Did I want this before I saw it repeatedly?",
    answer:
      "Repetition can make a claim or product feel familiar. Familiarity can be mistaken for importance or truth.",
    action: "Name the original need before considering the product.",
    citation: "Fazio et al., 2015",
    sourceId: "fazio-2015",
  },
  {
    question: "Does the creator earn money if I buy?",
    answer:
      "A clear disclosure can help you recognize persuasion, but short affiliate labels are not always understood.",
    action: "Check the caption, link, code, and creator-brand relationship.",
    citation: "Boerman et al., 2017",
    sourceId: "boerman-2017",
  },
  {
    question: "Is urgency shortening my decision?",
    answer:
      "A countdown or voucher changes the conditions of the choice. It does not prove that the product is necessary.",
    action: "Leave the app and decide after the timer is gone.",
    citation: "Lyngs et al., 2019",
    sourceId: "lyngs-2019",
  },
  {
    question: "Have I checked outside the feed?",
    answer:
      "A personalized feed is a selected information environment, not a neutral sample of every available source.",
    action: "Compare reviews, evidence, and prices somewhere else.",
    citation: "Friestad & Wright, 1994",
    sourceId: "friestad-1994",
  },
  {
    question: "Am I reacting because the post made me angry or afraid?",
    answer:
      "Emotional content can hold attention quickly. A pause creates room to separate a strong feeling from a reliable claim.",
    action: "Wait before sharing and verify the claim independently.",
    citation: "Piccardi et al., 2024",
    sourceId: "piccardi-2024",
  },
] as const;

export function AgencyBeyondControls() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = pauseQuestions[activeIndex];

  return (
    <section className="debrief-section border-y border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
              Add friction before the next action.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              Awareness is not perfect protection. It can still create a pause
              between exposure and belief, sharing, or spending.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-2">
              {pauseQuestions.map((item, index) => (
                <button
                  key={item.question}
                  type="button"
                  aria-pressed={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                  className="group flex w-full items-center justify-between gap-4 rounded-xl border border-transparent px-4 py-3 text-left text-sm font-medium leading-5 text-stone-600 transition hover:border-stone-300 hover:bg-[#f4f3ef] hover:text-stone-950 active:scale-[0.99] aria-pressed:border-stone-950 aria-pressed:bg-stone-950 aria-pressed:text-[#f4f3ef]"
                >
                  {item.question}
                  <ArrowRight
                    aria-hidden="true"
                    className="shrink-0 opacity-45"
                    size={15}
                  />
                </button>
              ))}
            </div>

            <div className="min-h-[24rem] rounded-[1.6rem] border border-stone-300 bg-[#f8f7f3] p-6 md:p-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.question}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                >
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-stone-500">
                    Pause question
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-[1.05] tracking-[-0.045em] text-stone-950">
                    {active.question}
                  </h3>
                  <p className="mt-6 text-base leading-7 text-stone-600">
                    {active.answer}
                  </p>
                  <div className="mt-8 border-t border-stone-300 pt-5">
                    <p className="text-sm font-semibold text-stone-950">
                      Try this instead
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {active.action}
                    </p>
                    <a
                      href={`#source-${active.sourceId}`}
                      className="mt-5 inline-block text-xs font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4"
                    >
                      {active.citation}
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
