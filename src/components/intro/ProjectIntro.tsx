import { ArrowDownRight } from "lucide-react";

export function ProjectIntro() {
  return (
    <section
      id="intro"
      className="relative flex min-h-[100dvh] scroll-mt-14 items-end px-5 pb-12 pt-28 md:px-8 md:pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1480px] gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
        <div className="lg:pb-3">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-stone-500">
            ENE 13.05i Major Task 2
          </p>
          <p className="mt-5 max-w-sm text-sm leading-6 text-stone-500">
            A research-informed simulation about attention, recommendation, and
            the stories a feed can assemble around an ordinary interest.
          </p>
        </div>

        <div>
          <h1 className="max-w-5xl text-[clamp(4.2rem,9vw,9.2rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-stone-950">
            For You,
            <span className="block text-stone-400">For Profit.</span>
          </h1>
          <div className="mt-9 flex flex-col gap-7 border-t border-stone-300 pt-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-stone-650">
              Recommendation feeds learn from our attention, arrange what comes
              next, and can slowly turn an interest into a story about what we
              should want.
            </p>
            <a
              href="#opening"
              className="group flex w-fit shrink-0 items-center gap-3 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-[#f4f3ef] transition hover:bg-stone-800 active:scale-[0.98]"
            >
              Begin experience
              <ArrowDownRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                size={17}
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
