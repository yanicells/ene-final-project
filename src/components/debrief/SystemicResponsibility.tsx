import { ArrowUpRight } from "lucide-react";
import { CitationLink } from "@/components/research/CitationLink";
import { MotionReveal } from "@/components/shared/MotionReveal";

const responsibilities = [
  ["Explain", "Tell users why a post appears and which broad signals shaped it."],
  ["Persist", "Make topic preferences produce meaningful and durable changes."],
  ["Disclose", "Make sponsorships, gifts, and affiliate commissions unmissable."],
  ["Separate", "Create a clearer boundary between entertainment and shopping."],
  ["Appeal", "Provide transparent moderation decisions and accessible appeals."],
  ["Audit", "Allow independent study of political and commercial recommendation outcomes."],
] as const;

export function SystemicResponsibility() {
  return (
    <section className="debrief-section px-5 py-24 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1480px]">
        <MotionReveal className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="text-5xl font-semibold leading-[0.94] tracking-[-0.06em] text-stone-950 md:text-7xl">
              Agency is also a design decision.
            </h2>
          </div>
          <div className="lg:pt-3">
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              Platforms decide whether controls are visible, understandable, and
              durable. Meaningful agency should not depend on constant user
              vigilance. <CitationLink sourceId="mathur-2018" /> <CitationLink sourceId="kaplan-2026" />
            </p>
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-x-12 md:grid-cols-2">
          {responsibilities.map(([verb, description], index) => (
            <MotionReveal
              key={verb}
              delay={(index % 2) * 0.05}
              className="group border-t border-stone-300 py-7"
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.045em] text-stone-950">
                    {verb}
                  </h3>
                  <p className="mt-3 max-w-lg text-base leading-7 text-stone-600">
                    {description}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 text-stone-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  size={22}
                  strokeWidth={1.5}
                />
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
