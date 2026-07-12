import type {
  FeedAction,
  RecognitionResponse,
  UserDecision,
} from "@/types/experience";

export const FEED_DRIFT_MIN = -100;
export const FEED_DRIFT_MAX = 100;

export function clampFeedDrift(value: number) {
  return Math.min(FEED_DRIFT_MAX, Math.max(FEED_DRIFT_MIN, value));
}

export function applyFeedAction(currentDrift: number, action: FeedAction) {
  return clampFeedDrift(currentDrift + action.feedDriftDelta);
}

export function getFeedDriftLabel(feedDrift: number) {
  if (feedDrift <= -20) return "Interest-led";
  if (feedDrift >= 20) return "Sales-led";
  return "In between";
}

export function getFeedDriftPosition(feedDrift: number) {
  return ((clampFeedDrift(feedDrift) - FEED_DRIFT_MIN) /
    (FEED_DRIFT_MAX - FEED_DRIFT_MIN)) *
    100;
}

export function summarizeDecisions(
  decisions: readonly UserDecision[],
  recognitionResponses: readonly RecognitionResponse[],
) {
  return {
    explicitSignals: decisions.filter(
      (decision) => decision.signalType === "explicit",
    ).length,
    implicitSignals: decisions.filter(
      (decision) => decision.signalType === "implicit",
    ).length,
    commercialActions: decisions.filter(
      (decision) => decision.signalType === "commercial",
    ).length,
    recognizedRelationships: recognitionResponses.filter(
      (response) => response.correct,
    ).length,
  };
}
