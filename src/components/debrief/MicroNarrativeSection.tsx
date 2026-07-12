import { Check, CornerDownRight } from "lucide-react";
import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";

const platformChoices = [
  "Reject an unwanted recommendation",
  "Unfollow repetitive creators",
  "Filter a term or change topic settings",
  "Refresh the feed",
  "Choose Following more intentionally",
];

export function MicroNarrativeSection() {
  return (
    <section className="debrief-section px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-[1480px] gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
        <MotionReveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
            Resistance is a pattern, not one heroic click.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            Passive participation is easy. Deliberate rejection often takes more
            effort and may need to be repeated when unwanted content returns. <CitationLink sourceId="kaplan-2026" />
          </p>
        </MotionReveal>

        <div>
          <MotionReveal className="relative border-l border-stone-300 pl-8 md:pl-12">
            <div className="absolute -left-3 top-0 grid size-6 place-items-center rounded-full bg-stone-950 text-[#f4f3ef]">
              <CornerDownRight aria-hidden="true" size={13} />
            </div>
            <p className="text-sm font-semibold text-stone-600">Inside the platform</p>
            <ul className="mt-7 space-y-3">
              {platformChoices.map((choice) => (
                <li
                  key={choice}
                  className="flex items-center gap-3 rounded-xl bg-[#eceae4] px-4 py-3 text-sm font-medium text-stone-800"
                >
                  <Check aria-hidden="true" size={15} strokeWidth={2} />
                  {choice}
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal className="relative mt-4 border-l border-stone-300 pb-2 pl-8 pt-10 md:pl-12">
            <div className="absolute -left-3 top-10 grid size-6 place-items-center rounded-full border border-stone-400 bg-[#f4f3ef] text-stone-700">
              <CornerDownRight aria-hidden="true" size={13} />
            </div>
            <p className="text-sm font-semibold text-stone-600">Beyond the controls</p>
            <p className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.045em] text-stone-950 md:text-4xl">
              Feed controls help decide what appears. Critical awareness helps
              decide what deserves attention, belief, sharing, or money.
            </p>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
