import { AgencyBeyondControls } from "./AgencyBeyondControls";
import { AgencyLimitsSection } from "./AgencyLimitsSection";
import { BeyondSellingSection } from "./BeyondSellingSection";
import { FinalMessage } from "./FinalMessage";
import { GrandNarrativeSection } from "./GrandNarrativeSection";
import { MicroNarrativeSection } from "./MicroNarrativeSection";
import { SystemicResponsibility } from "./SystemicResponsibility";
import { TechnicalDebrief } from "./TechnicalDebrief";

export function ResearchDebrief() {
  return (
    <div id="debrief" className="scroll-mt-14">
      <TechnicalDebrief />
      <GrandNarrativeSection />
      <BeyondSellingSection />
      <MicroNarrativeSection />
      <AgencyBeyondControls />
      <AgencyLimitsSection />
      <SystemicResponsibility />
      <FinalMessage />
    </div>
  );
}
