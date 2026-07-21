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
            Resistance is a pattern. The system reads patterns.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
            It is never one heroic click. Passive participation is easy.
            Deliberate rejection often takes more effort and may need to be
            repeated when unwanted content returns. <CitationLink sourceId="kaplan-2026" />
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

          <MotionReveal className="relative mt-4 border-l border-stone-300 pl-8 pt-10 md:pl-12">
            <div className="absolute -left-3 top-10 grid size-6 place-items-center rounded-full border border-stone-400 bg-[#f4f3ef] text-stone-700">
              <CornerDownRight aria-hidden="true" size={13} />
            </div>
            <p className="text-sm font-semibold text-stone-600">
              What rejection teaches it
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              Every correction is also information. Not Interested is an explicit
              signal, and controlled accounts found that both explicit and
              implicit feedback changed personalized content. <CitationLink sourceId="kaplan-2026" /> Telling
              the system what you do not want teaches it to predict you more
              precisely.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              The feed does not tell everyone the same story. It tells each
              person their own, and that is what makes it work. Repeated
              engagement reinforces aligned content while reducing exploration. <CitationLink sourceId="baumann-2025" /> An
              interest in resisting can be amplified the same way an interest in
              lamps can.
            </p>
          </MotionReveal>

          <MotionReveal className="relative mt-4 border-l border-stone-300 pl-8 pt-10 md:pl-12">
            <div className="absolute -left-3 top-10 grid size-6 place-items-center rounded-full border border-stone-400 bg-[#f4f3ef] text-stone-700">
              <CornerDownRight aria-hidden="true" size={13} />
            </div>
            <p className="text-sm font-semibold text-stone-600">
              What it reads poorly
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              So a micro narrative cannot only be a preference. A preference is
              readable. What the system reads poorly is what happens where it
              cannot measure: the purchase you do not make, the app you leave,
              the claim you check somewhere else, the conclusion you keep to
              yourself.
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              This is not a clean escape. Recognizing persuasion does not remove
              its effects. <CitationLink sourceId="rozendaal-2011" /> Users report
              uneven success when removing unwanted recommendations. <CitationLink sourceId="vera-2025" />
            </p>
            <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
              That is the hard part. The individualized story the system feeds
              on and the correction we push back with are the same kind of
              signal, and it reads both. A micro narrative that stays only a
              preference just becomes one more input to the grand narrative it
              was meant to resist. What actually holds is the part the system
              never gets to measure.
            </p>
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
