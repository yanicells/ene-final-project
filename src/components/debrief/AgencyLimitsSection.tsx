import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";

const userControls = [
  "Some interactions and settings",
  "Which creators to follow",
  "What to buy and share",
  "Where to verify information",
  "When to leave the feed",
];

const platformControls = [
  "Ranking rules and signal weights",
  "Which commercial posts are eligible",
  "Disclosure enforcement",
  "Moderation systems and appeals",
  "The incentives behind engagement",
];

export function AgencyLimitsSection() {
  return (
    <section className="debrief-section border-y border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="text-center">
          <p className="mx-auto max-w-5xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] text-stone-950 md:text-7xl">
            Users are neither powerless nor fully in control.
          </p>
        </MotionReveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <MotionReveal className="rounded-[1.6rem] border border-stone-300 bg-[#f8f7f3] p-6 md:p-8">
            <p className="text-sm font-semibold text-stone-500">You can control</p>
            <ul className="mt-8 space-y-5">
              {userControls.map((item) => (
                <li key={item} className="text-lg font-medium text-stone-900">
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>
          <MotionReveal delay={0.08} className="rounded-[1.6rem] bg-stone-950 p-6 text-[#f4f3ef] md:p-8">
            <p className="text-sm font-semibold text-stone-400">
              You cannot fully control
            </p>
            <ul className="mt-8 space-y-5">
              {platformControls.map((item) => (
                <li key={item} className="text-2xl font-semibold tracking-[-0.035em]">
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>

        <MotionReveal className="mt-10 flex justify-end">
          <p className="max-w-2xl text-sm leading-7 text-stone-600">
            Users report uneven success when removing unwanted recommendations,
            and explicit preferences may not produce lasting control. <CitationLink sourceId="vera-2025" /> <CitationLink sourceId="kaplan-2026" />
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
