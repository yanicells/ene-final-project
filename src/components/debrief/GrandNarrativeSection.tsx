import Image from "next/image";
import { feedVideos } from "@/data/videos";
import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";

export function GrandNarrativeSection() {
  return (
    <section className="debrief-section border-y border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-600">
              Grand narrative
            </p>
            <h2 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
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

        <MotionReveal className="mt-16 rounded-[1.8rem] border border-stone-300 bg-[#f4f3ef] p-4 md:p-6 lg:p-8">
          <div className="mx-auto grid max-w-[76rem] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {feedVideos.map((video) => (
              <div key={video.id}>
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

        <MotionReveal className="mt-14 border-t border-stone-400 pt-7">
          <p className="max-w-3xl text-lg leading-8 text-stone-600">
            This story was about buying. The system that told it was not built
            for buying. It was built to hold attention. Consumption is one story
            that holds attention. It is not the only one. The same ranking can
            arrange a story around a politics, meeting attention paid to one
            side with more of that side until a worldview starts to feel like
            the whole feed. <CitationLink sourceId="baumann-2025" />
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
