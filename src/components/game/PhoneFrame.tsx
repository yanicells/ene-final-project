"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { imageCreditsByPath } from "@/data/imageCredits";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mediaFailed, setMediaFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(Boolean(video.videoSrc));
  const showVideo = Boolean(video.videoSrc && !mediaFailed);
  const imageCredit = imageCreditsByPath.get(video.posterSrc);

  const togglePlayback = () => {
    const media = videoRef.current;
    if (!media) return;

    if (media.paused) {
      void media.play();
    } else {
      media.pause();
    }
  };

  return (
    <div className="phone-shell relative mx-auto w-full max-w-[18.5rem] lg:max-w-[16.5rem] xl:max-w-[19rem] 2xl:max-w-[20rem]">
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
              {showVideo ? (
                <video
                  ref={videoRef}
                  src={video.videoSrc}
                  poster={video.posterSrc}
                  aria-label={video.posterAlt}
                  autoPlay
                  muted
                  playsInline
                  preload={videoIndex === 0 ? "auto" : "metadata"}
                  onError={() => setMediaFailed(true)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="size-full object-cover"
                />
              ) : (
                <Image
                  src={video.posterSrc}
                  alt={video.posterAlt}
                  fill
                  priority={videoIndex === 0}
                  sizes="(max-width: 768px) 88vw, 352px"
                  className="object-cover"
                />
              )}
              <motion.div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,14,0.08)_0%,rgba(16,16,14,0.02)_42%,rgba(16,16,14,0.82)_100%)]"
                animate={reduceMotion ? undefined : { opacity: [0.86, 1, 0.86] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-x-5 top-4 z-20 flex items-center justify-between text-[0.68rem] font-semibold text-white">
            <span>For You</span>
            <span className="rounded-full bg-black/35 px-2 py-1 backdrop-blur-md">
              Simulation
            </span>
          </div>

          <div
            className="absolute inset-x-4 top-12 z-20 flex gap-1"
            role="progressbar"
            aria-label="Feed progress"
            aria-valuemin={1}
            aria-valuemax={totalVideos}
            aria-valuenow={videoIndex + 1}
            aria-valuetext={`Post ${videoIndex + 1} of ${totalVideos}`}
          >
            {Array.from({ length: totalVideos }, (_, index) => (
              <span
                key={index}
                className={`h-[2px] flex-1 rounded-full ${
                  index <= videoIndex ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {showVideo ? (
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute left-4 top-16 z-30 grid size-9 place-items-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition hover:bg-black/55 active:scale-[0.96]"
            >
              {isPlaying ? (
                <Pause aria-hidden="true" size={14} fill="currentColor" />
              ) : (
                <Play aria-hidden="true" size={14} fill="currentColor" />
              )}
            </button>
          ) : null}

          <div className="absolute inset-x-3 bottom-3 z-20 rounded-[1.35rem] border border-white/10 bg-black/65 p-3.5 text-white shadow-[0_14px_34px_rgba(0,0,0,0.24)] backdrop-blur-md">
            <p className="mb-2 inline-flex rounded-full bg-black/35 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] backdrop-blur-md">
              {showVideo ? "Production video" : "Production still"}
            </p>
            <p className="text-[0.78rem] font-semibold text-white">
              {video.creator}
            </p>
            <h3 className="mt-1.5 max-w-[17rem] text-[1.35rem] font-semibold leading-[1.08] tracking-[-0.035em] [text-shadow:0_1px_4px_rgb(0_0_0/0.55)]">
              {video.title}
            </h3>
            <p className="mt-2 max-w-[17rem] text-[0.78rem] font-medium leading-[1.15rem] text-white">
              {video.caption}
            </p>
            {video.disclosure ? (
              <p className="mt-2 text-[0.62rem] font-medium text-[#f6df7e]">
                {video.disclosure}
              </p>
            ) : null}
            {imageCredit && !showVideo ? (
              <a
                href={imageCredit.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[0.58rem] font-medium text-white/55 underline decoration-white/25 underline-offset-2 transition hover:text-white/85"
              >
                Photo: {imageCredit.photographer}, {imageCredit.source}
              </a>
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
