"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import type { FeedVideo } from "@/types/experience";

interface PhoneFrameProps {
  video: FeedVideo;
  videoIndex: number;
  totalVideos: number;
  overlay?: ReactNode;
}

export function PhoneFrame({
  video,
  videoIndex,
  totalVideos,
  overlay,
}: PhoneFrameProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="phone-shell relative mx-auto w-full max-w-[22rem]">
      <div className="phone-hardware relative overflow-hidden rounded-[3.15rem] border-[0.48rem] border-[#1b1b1a] bg-[#151514] shadow-[0_30px_80px_rgba(34,31,24,0.24),0_3px_12px_rgba(34,31,24,0.18)]">
        <div className="absolute left-1/2 top-2 z-30 h-6 w-[5.6rem] -translate-x-1/2 rounded-full bg-[#111110] shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]" />

        <div className="relative aspect-[9/19.4] overflow-hidden rounded-[2.55rem] bg-[#24231f]">
          <AnimatePresence mode="wait">
            <motion.div
              key={video.id}
              className="absolute inset-0"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
              transition={{ duration: reduceMotion ? 0 : 0.45 }}
            >
              <Image
                src={video.posterSrc}
                alt={video.posterAlt}
                fill
                priority={videoIndex === 0}
                sizes="(max-width: 768px) 88vw, 352px"
                className="object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,14,0.08)_0%,rgba(16,16,14,0.02)_42%,rgba(16,16,14,0.82)_100%)]"
                animate={reduceMotion ? undefined : { opacity: [0.86, 1, 0.86] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-5 top-4 z-20 flex items-center justify-between text-[0.61rem] font-medium text-white/80">
            <span>For You</span>
            <span className="rounded-full bg-black/35 px-2 py-1 backdrop-blur-md">
              Simulation
            </span>
          </div>

          <div className="absolute inset-x-4 top-12 z-20 flex gap-1" aria-label={`Post ${videoIndex + 1} of ${totalVideos}`}>
            {Array.from({ length: totalVideos }, (_, index) => (
              <span
                key={index}
                className={`h-[2px] flex-1 rounded-full ${
                  index <= videoIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          <div className="absolute inset-x-4 bottom-5 z-20 text-white">
            <p className="mb-2 inline-flex rounded-full bg-black/35 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] backdrop-blur-md">
              Production still
            </p>
            <p className="text-[0.72rem] font-semibold text-white/90">
              {video.creator}
            </p>
            <h3 className="mt-1.5 max-w-[16rem] text-xl font-semibold leading-[1.08] tracking-[-0.035em]">
              {video.title}
            </h3>
            <p className="mt-2 max-w-[17rem] text-[0.72rem] leading-5 text-white/78">
              {video.caption}
            </p>
            {video.disclosure ? (
              <p className="mt-2 text-[0.62rem] font-medium text-[#f6df7e]">
                {video.disclosure}
              </p>
            ) : null}
          </div>

          <AnimatePresence>{overlay}</AnimatePresence>
        </div>
      </div>

      <div className="absolute -left-1 top-[20%] h-16 w-1 rounded-l bg-[#2b2b29]" />
      <div className="absolute -left-1 top-[31%] h-10 w-1 rounded-l bg-[#2b2b29]" />
      <div className="absolute -right-1 top-[25%] h-20 w-1 rounded-r bg-[#2b2b29]" />
    </div>
  );
}
