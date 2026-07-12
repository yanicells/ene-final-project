import { ArrowDown } from "lucide-react";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { CitationLink } from "@/components/research/CitationLink";

const deliberateSignals = [
  "Like",
  "Follow",
  "Not Interested",
  "Product click",
  "Feed setting",
];

const behavioralSignals = [
  "Watch duration",
  "Completion",
  "Replay",
  "Quick skip",
  "Repeated attention",
];

export function TechnicalDebrief() {
  return (
    <section className="debrief-section px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-600">
            What the system saw
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
            You did not have to say what you wanted.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600">
            Recommendation systems build predictions from observed behavior. The
            prediction may be useful, inaccurate, narrow, or persistent. It does
            not need to understand a person in a human sense. <CitationLink sourceId="boeker-2022" />
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_0.72fr_1fr] lg:items-stretch">
          <MotionReveal className="border-t border-stone-400 pt-6">
            <p className="text-sm font-semibold text-stone-950">
              What you deliberately told it
            </p>
            <ul className="mt-7 space-y-3">
              {deliberateSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3 text-sm text-stone-700"
                >
                  {signal}
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-stone-400">
                    explicit
                  </span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.08} className="flex flex-col items-center justify-center py-7">
            <div className="grid size-48 place-items-center rounded-full border border-stone-400 bg-[#f8f7f3] p-6 text-center shadow-[0_20px_50px_rgba(32,28,20,0.08)]">
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-stone-600">
                  Prediction
                </p>
                <p className="mt-2 text-xl font-semibold leading-[1.05] tracking-[-0.04em] text-stone-950">
                  What may hold attention next?
                </p>
              </div>
            </div>
            <ArrowDown aria-hidden="true" className="mt-5 text-stone-400" size={22} />
            <p className="mt-3 max-w-[12rem] text-center text-xs leading-5 text-stone-600">
              Enough signals to rank another post
            </p>
          </MotionReveal>

          <MotionReveal delay={0.14} className="border-t border-stone-400 pt-6">
            <p className="text-sm font-semibold text-stone-950">
              What behavior also revealed
            </p>
            <ul className="mt-7 space-y-3">
              {behavioralSignals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-center justify-between gap-3 border-b border-stone-200 pb-3 text-sm text-stone-700"
                >
                  {signal}
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-stone-400">
                    implicit
                  </span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-12 flex justify-end">
          <p className="max-w-xl border-l border-stone-400 pl-5 text-sm leading-7 text-stone-600">
            The exact weights remain controlled by the platform. This diagram
            shows categories of signals, not TikTok’s proprietary ranking model.
            Controlled accounts found that both explicit and implicit feedback
            changed personalized content. <CitationLink sourceId="kaplan-2026" />
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
