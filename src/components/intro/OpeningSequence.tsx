"use client";

import Image from "next/image";
import {
  motion,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

const sequenceLines = [
  {
    text: "You liked a video because it was funny.",
    className: "lg:left-[4%] lg:top-[17%]",
    range: [0.02, 0.2, 0.32] as const,
  },
  {
    text: "You finished a review because you were curious.",
    className: "lg:right-[3%] lg:top-[24%]",
    range: [0.17, 0.34, 0.46] as const,
  },
  {
    text: "You followed a creator whose style you liked.",
    className: "lg:left-[1%] lg:top-[49%]",
    range: [0.33, 0.49, 0.61] as const,
  },
  {
    text: "You shared a recommendation.",
    className: "lg:right-[6%] lg:top-[55%]",
    range: [0.48, 0.64, 0.76] as const,
  },
  {
    text: "You opened one product link.",
    className: "lg:left-[8%] lg:bottom-[12%]",
    range: [0.63, 0.78, 0.88] as const,
  },
];

interface SequenceLineProps {
  progress: MotionValue<number>;
  text: string;
  className: string;
  range: readonly [number, number, number];
  reduceMotion: boolean | null;
}

function SequenceLine({
  progress,
  text,
  className,
  range,
  reduceMotion,
}: SequenceLineProps) {
  const opacity = useTransform(progress, [...range], [0, 1, 0.22]);
  const y = useTransform(progress, [...range], [18, 0, -8]);

  return (
    <motion.p
      style={reduceMotion ? undefined : { opacity, y }}
      className={`sequence-caption relative max-w-[18rem] text-balance rounded-2xl border border-stone-300 bg-[#f8f7f3]/92 px-4 py-3 text-sm font-medium leading-6 text-stone-800 shadow-[0_14px_35px_rgba(32,28,20,0.08)] backdrop-blur-md lg:absolute ${className}`}
    >
      {text}
    </motion.p>
  );
}

export function OpeningSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const phoneScale = useTransform(scrollYProgress, [0, 0.75, 1], [0.9, 1, 0.94]);
  const phoneRotate = useTransform(scrollYProgress, [0, 1], [-1.4, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0.48, 0.94], [0, 0.72]);
  const endingOpacity = useTransform(scrollYProgress, [0.79, 0.94], [0, 1]);
  const endingY = useTransform(scrollYProgress, [0.79, 0.94], [24, 0]);

  return (
    <section
      ref={sectionRef}
      id="opening"
      className="relative min-h-[220dvh] scroll-mt-14 border-t border-stone-300 bg-[#eceae4]"
    >
      <div className="sticky top-14 flex min-h-[calc(100dvh-3.5rem)] items-center overflow-hidden px-5 py-10 md:px-8">
        <div className="relative mx-auto grid w-full max-w-[1480px] gap-4 lg:block lg:min-h-[calc(100dvh-8rem)]">
          <div className="mb-4 lg:absolute lg:left-0 lg:top-0">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-600">
              How the feed changed
            </p>
          </div>

          {sequenceLines.map((line) => (
            <SequenceLine
              key={line.text}
              progress={scrollYProgress}
              text={line.text}
              className={line.className}
              range={line.range}
              reduceMotion={reduceMotion}
            />
          ))}

          <motion.div
            className="relative z-10 mx-auto my-5 w-[min(72vw,18.5rem)] lg:absolute lg:left-1/2 lg:top-1/2 lg:my-0 lg:w-[min(24vw,21rem)] lg:-translate-x-1/2 lg:-translate-y-1/2"
            style={
              reduceMotion
                ? undefined
                : { scale: phoneScale, rotate: phoneRotate }
            }
          >
            <div className="relative overflow-hidden rounded-[3rem] border-[0.45rem] border-[#1b1b1a] bg-[#1b1b1a] shadow-[0_35px_90px_rgba(30,27,20,0.25)]">
              <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#111110]" />
              <div className="relative aspect-[9/19.4] overflow-hidden rounded-[2.45rem]">
                <Image
                  src="/images/feed/desk-setup.jpg"
                  alt="A desk setup inside a simulated phone feed."
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/15" />
                <motion.div
                  className="absolute inset-0 bg-[#a9473d] mix-blend-multiply"
                  style={reduceMotion ? { opacity: 0.5 } : { opacity: overlayOpacity }}
                />
                <div className="absolute inset-x-4 bottom-6 z-10 text-white">
                  <p className="text-xs font-semibold">@your.feed</p>
                  <p className="mt-2 text-sm leading-5 text-white/80">
                    One interest. More reviews. More products. More reasons to
                    keep watching.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-20 mx-auto mt-3 max-w-xl text-center lg:absolute lg:bottom-[7%] lg:left-1/2 lg:mt-0 lg:-translate-x-1/2"
            style={
              reduceMotion
                ? undefined
                : { opacity: endingOpacity, y: endingY }
            }
          >
            <p className="text-3xl font-semibold leading-[1] tracking-[-0.05em] text-stone-950 lg:text-5xl">
              Then your feed stopped feeling like yours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
