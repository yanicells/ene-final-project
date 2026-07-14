"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { CitationLink } from "@/components/research/CitationLink";
import { worldviewCases } from "@/data/worldviewCases";

function getRelativePosition(index: number, activeIndex: number) {
  const count = worldviewCases.length;
  let position = (index - activeIndex + count) % count;

  if (position > Math.floor(count / 2)) position -= count;
  return position;
}

export function WorldviewCaseCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCase = worldviewCases[activeIndex];

  function move(direction: -1 | 1) {
    setActiveIndex(
      (current) =>
        (current + direction + worldviewCases.length) % worldviewCases.length,
    );
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Cases showing how feeds can shape worldviews"
      className="relative min-h-[39rem] overflow-hidden rounded-[1.8rem] border border-stone-300 bg-[#e5e2da] p-5 md:p-7"
    >
      <div className="relative z-40 flex items-center justify-between">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-600">
            Case {String(activeIndex + 1).padStart(2, "0")} / 05
          </p>
          <p className="mt-1 text-sm font-semibold text-stone-800">
            Move through the evidence
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous case"
            className="grid size-11 place-items-center rounded-full border border-stone-400 bg-[#f8f7f3] transition hover:-translate-x-0.5 hover:border-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next case"
            className="grid size-11 place-items-center rounded-full bg-stone-950 text-white transition hover:translate-x-0.5 hover:bg-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-950"
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-5 top-24 md:bottom-7">
        {worldviewCases.map((item, index) => {
          const position = getRelativePosition(index, activeIndex);
          const isVisible = Math.abs(position) <= 1;
          const isActive = position === 0;

          return (
            <motion.article
              key={item.id}
              aria-hidden={!isActive}
              initial={false}
              animate={{
                x: `${position * 44}%`,
                y: isActive ? 0 : 54,
                scale: isActive ? 1 : 0.78,
                opacity: isVisible ? (isActive ? 1 : 0.58) : 0,
                rotate: isActive ? 0 : position * 2.5,
                zIndex: isActive ? 30 : 10,
              }}
              transition={{
                duration: reduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute bottom-0 left-1/2 flex h-[30rem] w-[78%] -translate-x-1/2 flex-col overflow-hidden rounded-[1.5rem] border border-stone-300 bg-[#f8f7f3] shadow-[0_24px_55px_rgba(35,31,24,0.16)] md:h-[31.5rem] ${isActive ? "pointer-events-auto" : "pointer-events-none"}`}
            >
              <div className="relative h-[44%] shrink-0 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={isActive ? item.imageAlt : ""}
                  fill
                  sizes="(min-width: 1024px) 500px, 70vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 rounded-full bg-black/65 px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.08em] text-white backdrop-blur-md">
                  {item.imageNote}
                </span>
              </div>
              <div
                className="flex min-h-0 flex-1 flex-col p-5 md:p-6"
                style={{ borderTop: `0.35rem solid ${item.accent}` }}
              >
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.13em] text-stone-500">
                  {item.eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-[1.02] tracking-[-0.045em] text-stone-950 md:text-3xl">
                  {item.title}
                </h3>
                <AnimatePresence mode="wait" initial={false}>
                  {isActive ? (
                    <motion.p
                      key={item.id}
                      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-sm leading-6 text-stone-600"
                    >
                      {item.body} <CitationLink sourceId={item.sourceId} />
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </div>
            </motion.article>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {activeCase.title}, case {activeIndex + 1} of {worldviewCases.length}
      </p>
    </div>
  );
}
