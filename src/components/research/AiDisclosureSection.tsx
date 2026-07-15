import { aiReflections, aiStatement } from "@/data/aiDisclosure";

export function AiDisclosureSection() {
  return (
    <section
      id="ai-disclosure"
      className="scroll-mt-14 border-t border-stone-300 bg-[#eceae4] px-5 py-24 md:px-8 md:py-32"
    >
      <div className="mx-auto max-w-[1480px]">
        <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr]">
          <div>
            <h2 className="text-5xl font-semibold tracking-[-0.055em] text-stone-950 md:text-6xl">
              AI disclosure
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-6 text-stone-600">
              How generative AI was used while building this site, and what each
              member took from working with it.
            </p>
          </div>

          <div className="space-y-12">
            <div id="ai-statement" className="scroll-mt-20">
              <h3 className="border-b border-stone-400 pb-3 text-sm font-semibold text-stone-700">
                AI statement
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-700">
                {aiStatement.body}
              </p>
              <dl className="mt-4 space-y-1 text-xs leading-5 text-stone-600">
                <div className="flex gap-2">
                  <dt className="font-semibold text-stone-700">AI tools</dt>
                  <dd>{aiStatement.tools.join(", ")}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-stone-700">AI models</dt>
                  <dd>{aiStatement.models.join(", ")}</dd>
                </div>
              </dl>
            </div>

            <div id="ai-reflections" className="scroll-mt-20">
              <h3 className="border-b border-stone-400 pb-3 text-sm font-semibold text-stone-700">
                AI reflections
              </h3>
              <div className="grid gap-x-8 md:grid-cols-2">
                {aiReflections.map((reflection) => (
                  <article
                    key={reflection.id}
                    className="border-b border-stone-300 py-5"
                  >
                    <p className="text-sm font-semibold text-stone-800">
                      {reflection.member}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-700">
                      {reflection.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
