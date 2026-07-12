import { describe, expect, it } from "vitest";
import type { FeedAction } from "@/types/experience";
import {
  applyFeedAction,
  clampFeedDrift,
  getFeedDriftLabel,
  getFeedDriftPosition,
  summarizeDecisions,
} from "./scoring";

const commercialAction: FeedAction = {
  id: "open-product",
  label: "Open product",
  feedDriftDelta: 18,
  signalType: "commercial",
  dataLabel: "Product click added",
};

describe("feed drift", () => {
  it("clamps values to the documented range", () => {
    expect(clampFeedDrift(130)).toBe(100);
    expect(clampFeedDrift(-140)).toBe(-100);
  });

  it("applies an action delta", () => {
    expect(applyFeedAction(10, commercialAction)).toBe(28);
    expect(applyFeedAction(95, commercialAction)).toBe(100);
  });

  it("maps drift to readable labels and positions", () => {
    expect(getFeedDriftLabel(-20)).toBe("Interest-led");
    expect(getFeedDriftLabel(0)).toBe("In between");
    expect(getFeedDriftLabel(20)).toBe("Sales-led");
    expect(getFeedDriftPosition(-100)).toBe(0);
    expect(getFeedDriftPosition(0)).toBe(50);
    expect(getFeedDriftPosition(100)).toBe(100);
  });
});

describe("decision summary", () => {
  it("counts signal types and correct recognition responses", () => {
    const summary = summarizeDecisions(
      [
        {
          videoId: "one",
          actionId: "like",
          feedDriftDelta: -8,
          signalType: "explicit",
          dataLabel: "Interest added",
        },
        {
          videoId: "two",
          actionId: "open-product",
          feedDriftDelta: 18,
          signalType: "commercial",
          dataLabel: "Product click added",
        },
      ],
      [
        { videoId: "one", answer: "yes", correct: true },
        { videoId: "two", answer: "not-sure", correct: false },
      ],
    );

    expect(summary).toEqual({
      explicitSignals: 1,
      implicitSignals: 0,
      commercialActions: 1,
      recognizedRelationships: 1,
    });
  });
});
