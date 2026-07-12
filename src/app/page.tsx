import { FeedGame } from "@/components/game/FeedGame";
import { NarrativePrimer } from "@/components/intro/NarrativePrimer";
import { OpeningSequence } from "@/components/intro/OpeningSequence";
import { ProjectIntro } from "@/components/intro/ProjectIntro";
import { ProgressNav } from "@/components/shared/ProgressNav";

export default function HomePage() {
  return (
    <>
      <ProgressNav />
      <main>
        <ProjectIntro />
        <OpeningSequence />
        <NarrativePrimer />
        <FeedGame />
      </main>
    </>
  );
}
