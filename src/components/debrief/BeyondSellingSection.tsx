import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { WorldviewCaseCarousel } from "./WorldviewCaseCarousel";

export function BeyondSellingSection() {
  return (
    <section className="debrief-section px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="max-w-5xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-600">
            Beyond selling
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
            The feed can sell a product. It can also normalize a worldview.
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <MotionReveal>
            <div className="relative overflow-hidden rounded-[1.8rem] bg-stone-950 p-7 text-[#f4f3ef] md:min-h-[34rem] md:p-10">
              <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(241,207,79,0.32),transparent_32%),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:auto,42px_42px,42px_42px]" />
              <div className="relative flex min-h-[28rem] flex-col justify-between">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.13em] text-stone-400">
                    Selective visibility
                  </p>
                  <p className="mt-5 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-5xl">
                    Ranking decides what becomes easy to see.
                  </p>
                </div>
                <p className="max-w-xl text-base leading-7 text-stone-300">
                  Both Facebook’s ranking and users’ choices reduced exposure to
                  politically cross-cutting news. The information environment was
                  shaped by platform curation and human behavior together. <CitationLink sourceId="bakshy-2015" inverse />
                </p>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <WorldviewCaseCarousel />
          </MotionReveal>
        </div>

        <MotionReveal className="mt-14 border-l-4 border-[#f1cf4f] pl-6">
          <p className="max-w-3xl text-2xl font-semibold leading-[1.2] tracking-[-0.035em] text-stone-950">
            Frequent does not mean true. Visible does not mean representative.
            Personalized does not mean neutral.
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
