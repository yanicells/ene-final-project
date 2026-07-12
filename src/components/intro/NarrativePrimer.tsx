import { ArrowRight } from "lucide-react";
import { MotionReveal } from "@/components/shared/MotionReveal";

const narrativeSteps = [
  "Interest",
  "Review",
  "Lifestyle",
  "Recommendation",
  "Urgency",
  "Purchase",
];

export function NarrativePrimer() {
  return (
    <section id="concepts" className="px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="max-w-3xl">
          <h2 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-stone-950 md:text-7xl">
            The feed builds one story. Your choices can build another.
          </h2>
        </MotionReveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <MotionReveal>
            <div className="border-t border-stone-400 pt-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-600">
                Grand narrative
              </p>
              <p className="mt-5 text-3xl font-semibold leading-[1.1] tracking-[-0.045em] text-stone-950">
                Having an interest should lead to wanting more, comparing more,
                and eventually buying more.
              </p>
              <p className="mt-6 max-w-lg text-base leading-7 text-stone-600">
                No single post has to say this. The larger story forms when
                reviews, lifestyles, links, and urgency keep returning in order.
              </p>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <div className="rounded-[1.8rem] bg-stone-950 p-6 text-[#f4f3ef] md:p-9">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-stone-400">
                Micro narrative
              </p>
              <p className="mt-5 max-w-xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em]">
                I can keep the interests that are mine without letting every
                interest become a purchase.
              </p>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  ["Notice", "What is being repeated?"],
                  ["Choose", "What deserves a signal?"],
                  ["Pause", "What happens off the feed?"],
                ].map(([label, text]) => (
                  <div key={label} className="border-t border-white/20 pt-4">
                    <p className="text-sm font-semibold">{label}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-20 border-y border-stone-300 py-6">
          <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-4">
            {narrativeSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-stone-800">{step}</span>
                {index < narrativeSteps.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="text-stone-400"
                    size={15}
                    strokeWidth={1.6}
                  />
                ) : null}
              </div>
            ))}
          </div>
        </MotionReveal>

        <MotionReveal className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.04em] text-stone-950">
              Go through six fixed posts.
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-stone-600">
              Decide what deserves your attention. Your choices affect the
              simulation, but there is no perfect score.
            </p>
          </div>
          <a
            href="#game"
            className="flex items-center gap-3 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-[#f4f3ef] transition hover:bg-stone-800 active:scale-[0.98]"
          >
            Take back the feed
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </a>
        </MotionReveal>
      </div>
    </section>
  );
}
