"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { feedVideos } from "@/data/videos";
import { sourcesById } from "@/data/sources";
import type { UserDecision } from "@/types/experience";

interface VideoReviewRailProps {
  decisions: readonly UserDecision[];
}

export function VideoReviewRail({ decisions }: VideoReviewRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    railRef.current?.scrollBy({ left: direction * 370, behavior: "smooth" });
  };

  return (
    <div className="mt-10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">
            Review each post
          </h3>
          <p className="mt-2 text-sm text-stone-600">
            Your choice, its signal, and the research behind the moment.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => move(-1)}
            className="grid size-10 place-items-center rounded-full border border-stone-300 transition hover:border-stone-950 active:scale-[0.96]"
          >
            <ArrowLeft aria-hidden="true" size={17} />
          </button>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => move(1)}
            className="grid size-10 place-items-center rounded-full border border-stone-300 transition hover:border-stone-950 active:scale-[0.96]"
          >
            <ArrowRight aria-hidden="true" size={17} />
          </button>
        </div>
      </div>

      <div
        ref={railRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 [scrollbar-width:thin]"
      >
        {feedVideos.map((video) => {
          const decision = decisions.find((item) => item.videoId === video.id);
          const action = video.actions.find(
            (item) => item.id === decision?.actionId,
          );
          const source = sourcesById.get(video.citationIds[0]);

          return (
            <article
              key={video.id}
              className="w-[19rem] shrink-0 snap-start overflow-hidden rounded-[1.4rem] border border-stone-300 bg-[#f8f7f3] md:w-[22rem]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={video.posterSrc}
                  alt=""
                  fill
                  sizes="352px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                  {video.sequenceLabel}
                </p>
              </div>
              <div className="p-5">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-stone-600">
                  {video.contentKind.replaceAll("-", " ")}
                </p>
                <h4 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-stone-950">
                  {video.role}
                </h4>
                <dl className="mt-5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-2 text-sm">
                  <dt className="text-stone-600">You chose</dt>
                  <dd className="font-medium text-stone-900">{action?.label}</dd>
                  <dt className="text-stone-600">Signal</dt>
                  <dd className="font-medium capitalize text-stone-900">
                    {decision?.signalType}
                  </dd>
                  <dt className="text-stone-600">Drift</dt>
                  <dd className="font-mono text-stone-900">
                    {decision && decision.feedDriftDelta > 0 ? "+" : ""}
                    {decision?.feedDriftDelta}
                  </dd>
                </dl>
                <p className="mt-5 text-sm leading-6 text-stone-600">
                  {video.researchFeedback}
                </p>
                {source ? (
                  <a
                    href={`#source-${source.id}`}
                    className="mt-4 inline-block text-xs font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4"
                  >
                    {source.shortCitation}
                  </a>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
