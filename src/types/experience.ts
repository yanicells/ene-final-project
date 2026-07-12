export type ContentKind =
  | "organic"
  | "unsponsored-review"
  | "sponsored-creator"
  | "affiliate"
  | "brand-ad"
  | "shop-content";

export type SignalType = "explicit" | "implicit" | "commercial";

export type ActionId =
  | "like"
  | "follow"
  | "keep-watching"
  | "next-video"
  | "adjust-recommendation"
  | "open-product"
  | "skip"
  | "not-interested"
  | "view-voucher";

export type RecognitionAnswer = "yes" | "no" | "not-sure";

export interface FeedAction {
  id: ActionId;
  label: string;
  feedDriftDelta: number;
  signalType: SignalType;
  dataLabel: string;
  feedback?: string;
}

export interface RecognitionPrompt {
  question: string;
  correctAnswer: RecognitionAnswer;
  options: readonly RecognitionAnswer[];
}

export interface FeedVideo {
  id: string;
  sequenceLabel: string;
  role: string;
  title: string;
  creator: string;
  contentKind: ContentKind;
  posterSrc: string;
  videoSrc?: string;
  posterAlt: string;
  durationSeconds: number;
  decisionAtSeconds: number;
  disclosure?: string;
  caption: string;
  transcript: string;
  placeholderNote: string;
  accent: string;
  recognitionPrompt?: RecognitionPrompt;
  actions: readonly FeedAction[];
  researchFeedback: string;
  citationIds: readonly string[];
}

export interface UserDecision {
  videoId: string;
  actionId: ActionId;
  feedDriftDelta: number;
  signalType: SignalType;
  dataLabel: string;
}

export interface RecognitionResponse {
  videoId: string;
  answer: RecognitionAnswer;
  correct: boolean;
}

export interface GameState {
  currentVideoIndex: number;
  feedDrift: number;
  decisions: readonly UserDecision[];
  recognitionResponses: readonly RecognitionResponse[];
  selectedFeedControls: readonly string[];
  completed: boolean;
}

export interface ResearchSource {
  id: string;
  shortCitation: string;
  apa: string;
  url: string;
  sourceType: "journal" | "conference" | "preprint";
  usedIn: readonly string[];
  note: string;
}
