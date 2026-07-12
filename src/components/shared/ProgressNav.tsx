export function ProgressNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-300/70 bg-[#f4f3ef]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-[1480px] items-center justify-between gap-6 px-5 md:px-8">
        <a
          href="#intro"
          className="text-sm font-semibold tracking-[-0.025em] text-stone-950"
        >
          For You, For Profit
        </a>
        <nav aria-label="Experience chapters">
          <ul className="flex items-center gap-1 text-xs font-medium text-stone-500 sm:gap-4">
            <li className="hidden sm:block">
              <a className="transition hover:text-stone-950" href="#opening">
                How it changed
              </a>
            </li>
            <li>
              <a className="transition hover:text-stone-950" href="#game">
                Simulation
              </a>
            </li>
            <li>
              <a className="transition hover:text-stone-950" href="#debrief">
                Debrief
              </a>
            </li>
            <li>
              <a className="transition hover:text-stone-950" href="#sources">
                Sources
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
