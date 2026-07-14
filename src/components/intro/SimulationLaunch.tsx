"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { feedVideos } from "@/data/videos";

export function SimulationLaunch() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activePost = feedVideos[activeIndex];

  return (
    <div className="overflow-hidden rounded-[2rem] bg-[#f1cf4f] p-5 text-stone-950 md:p-8 lg:p-10">
      <div className="grid items-end gap-10 lg:grid-cols-[0.68fr_1.32fr]">
        <div>
          <div className="flex items-baseline gap-4">
            <span className="text-[clamp(5rem,10vw,9rem)] font-semibold leading-[0.75] tracking-[-0.09em]">
              08
            </span>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-700">
              fixed posts
              <br />one changing signal trail
            </p>
          </div>
          <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-5xl">
            Watch what the feed learns from an ordinary interest.
          </h3>
          <p className="mt-5 max-w-md text-sm leading-6 text-stone-700">
            Every post is fixed. Your decisions change the data trail and the
            explanation you receive, not a hidden score.
          </p>
        </div>

        <div>
          <div
            className="flex min-h-[23rem] items-end gap-2 overflow-hidden rounded-[1.5rem] bg-stone-950 p-4 md:gap-3 md:p-6"
            onMouseLeave={() => setActiveIndex(0)}
          >
            {feedVideos.map((post, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={post.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  animate={{
                    flexGrow: isActive ? 3.4 : 1,
                    y: isActive ? -10 : 0,
                    opacity: isActive ? 1 : 0.62,
                  }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.42,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  aria-label={`Preview post ${index + 1}: ${post.title}`}
                  className="group relative h-[18rem] min-w-0 basis-0 overflow-hidden rounded-[1rem] border border-white/15 text-left outline-none ring-[#f1cf4f] focus-visible:ring-2 md:h-[20rem]"
                >
                  <Image
                    src={post.posterSrc}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 300px, 18vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/20" />
                  <span className="absolute left-3 top-3 font-mono text-[0.6rem] text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <motion.div
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    className="absolute inset-x-4 bottom-4 min-w-[12rem] text-white"
                  >
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-white/65">
                      {post.sequenceLabel}
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-5">
                      {post.title}
                    </p>
                  </motion.div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col gap-3 border-t border-stone-950/25 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite" className="text-sm font-semibold">
              {String(activeIndex + 1).padStart(2, "0")} / 08 · {activePost.role}
            </p>
            <a
              href="#game"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-semibold text-[#f4f3ef] transition hover:bg-stone-800 active:scale-[0.98]"
            >
              Enter the feed
              <ArrowRight
                aria-hidden="true"
                size={17}
                strokeWidth={1.8}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
