import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { feedVideos } from "@/data/videos";
import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";

export function GrandNarrativeSection() {
  return (
    <section className="debrief-section border-y border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
              No single post told the whole story.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-stone-600 lg:justify-self-end">
            The first post reflected a real interest. What followed connected
            that interest to a product, a lifestyle, a recommendation, urgency,
            and a chance to buy. Repeated engagement can reinforce aligned
            content while reducing exploration. <CitationLink sourceId="baumann-2025" />
          </p>
        </MotionReveal>

        <MotionReveal className="mt-16 overflow-hidden rounded-[1.8rem] border border-stone-300 bg-[#f4f3ef] p-4 md:p-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {feedVideos.map((video, index) => (
              <div key={video.id} className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.1rem] bg-stone-200">
                  <Image
                    src={video.posterSrc}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 230px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 text-white">
                    <p className="font-mono text-[0.56rem] uppercase tracking-[0.1em] text-white/65">
                      {video.sequenceLabel}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-4">
                      {video.role}
                    </p>
                  </div>
                </div>
                {index < feedVideos.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full border border-stone-300 bg-[#f4f3ef] text-stone-600 xl:grid">
                    <ArrowRight aria-hidden="true" size={12} strokeWidth={1.7} />
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <p className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-stone-950 md:text-4xl">
            The system does not need to invent desire.
          </p>
          <p className="text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-stone-500 md:text-4xl">
            It can capture a real interest and repeatedly redirect it toward
            consumption.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
