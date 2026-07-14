import { ExternalLink } from "lucide-react";
import { imageCredits } from "@/data/imageCredits";
import { researchSources } from "@/data/sources";
import type { ResearchSource } from "@/types/experience";

const sourceGroups: Array<{
  label: string;
  type: ResearchSource["sourceType"];
}> = [
  { label: "Journal articles", type: "journal" },
  { label: "Conference research", type: "conference" },
  { label: "Preprints and audits", type: "preprint" },
  { label: "Official records", type: "official" },
];

export function ReferencesSection() {
  return (
    <section
      id="sources"
      className="scroll-mt-14 border-t border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <h2 className="text-5xl font-semibold tracking-[-0.055em] text-stone-950 md:text-6xl">
              Sources
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-stone-600">
              Recent TikTok audits are labeled as preprints. Their findings are
              evidence from controlled studies, not a complete description of
              every user’s feed.
            </p>
          </div>

          <div className="space-y-12">
            {sourceGroups.map((group) => {
              const sources = researchSources.filter(
                (source) => source.sourceType === group.type,
              );
              return (
                <div key={group.type}>
                  <h3 className="border-b border-stone-400 pb-3 text-sm font-semibold text-stone-700">
                    {group.label}
                  </h3>
                  <div className="grid gap-x-8 md:grid-cols-2">
                    {sources.map((source) => (
                      <article
                        key={source.id}
                        id={`source-${source.id}`}
                        className="scroll-mt-20 border-b border-stone-300 py-5"
                      >
                        <p className="text-sm leading-6 text-stone-700">
                          {source.apa}
                        </p>
                        <p className="mt-3 text-xs leading-5 text-stone-600">
                          {source.note}
                        </p>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950"
                        >
                          Open source
                          <ExternalLink aria-hidden="true" size={12} />
                        </a>
                      </article>
                    ))}
                  </div>
                </div>
              );
            })}

            <div>
              <h3 className="border-b border-stone-400 pb-3 text-sm font-semibold text-stone-700">
                Image credits
              </h3>
              <p className="mt-4 max-w-2xl text-xs leading-5 text-stone-600">
                The photographs used in the worldview cards are cropped from the
                linked originals under the Unsplash License. They provide visual
                context, not research evidence.
              </p>
              <div className="mt-6 grid gap-x-8 md:grid-cols-2 xl:grid-cols-3">
                {imageCredits.map((credit) => (
                  <article
                    key={credit.id}
                    id={`image-credit-${credit.id}`}
                    className="border-t border-stone-300 py-4"
                  >
                    <p className="text-sm font-semibold text-stone-800">
                      {credit.usageLabel}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-stone-600">
                      {credit.photographer}, {credit.source}
                    </p>
                    <a
                      href={credit.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-950"
                    >
                      View original photo
                      <ExternalLink aria-hidden="true" size={12} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-stone-400 pt-6 text-xs text-stone-600 sm:flex-row sm:items-center sm:justify-between">
          <p>ENE 13.05i Major Task 2</p>
          <p>Research-informed simulation. Local state only.</p>
        </footer>
      </div>
    </section>
  );
}
