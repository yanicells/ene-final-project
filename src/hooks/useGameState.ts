"use client";

import { useReducer } from "react";
import { feedVideos } from "@/data/videos";
import { applyFeedAction } from "@/lib/scoring";
import type {
  FeedAction,
  GameState,
  RecognitionAnswer,
} from "@/types/experience";

const initialGameState: GameState = {
  currentVideoIndex: 0,
  feedDrift: 0,
  decisions: [],
  recognitionResponses: [],
  selectedFeedControls: [],
  completed: false,
};

type GameAction =
  | { type: "answer-recognition"; videoId: string; answer: RecognitionAnswer }
  | { type: "record-decision"; videoId: string; action: FeedAction }
  | { type: "advance-video" }
  | { type: "toggle-feed-control"; controlId: string }
  | { type: "complete-game" }
  | { type: "reset" };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case "answer-recognition": {
      const video = feedVideos.find((item) => item.id === action.videoId);
      const correct = Boolean(
        video?.recognitionPrompt?.correctAnswer === action.answer,
      );

      return {
        ...state,
        recognitionResponses: [
          ...state.recognitionResponses.filter(
            (response) => response.videoId !== action.videoId,
          ),
          { videoId: action.videoId, answer: action.answer, correct },
        ],
      };
    }
    case "record-decision": {
      if (state.decisions.some((decision) => decision.videoId === action.videoId)) {
        return state;
      }

      return {
        ...state,
        feedDrift: applyFeedAction(state.feedDrift, action.action),
        decisions: [
          ...state.decisions,
          {
            videoId: action.videoId,
            actionId: action.action.id,
            feedDriftDelta: action.action.feedDriftDelta,
            signalType: action.action.signalType,
            dataLabel: action.action.dataLabel,
          },
        ],
      };
    }
    case "advance-video":
      return {
        ...state,
        currentVideoIndex: Math.min(
          feedVideos.length,
          state.currentVideoIndex + 1,
        ),
      };
    case "toggle-feed-control": {
      const selected = state.selectedFeedControls.includes(action.controlId);
      if (!selected && state.selectedFeedControls.length >= 3) return state;

      return {
        ...state,
        selectedFeedControls: selected
          ? state.selectedFeedControls.filter((id) => id !== action.controlId)
          : [...state.selectedFeedControls, action.controlId],
      };
    }
    case "complete-game":
      if (state.selectedFeedControls.length < 2) return state;
      return { ...state, completed: true };
    case "reset":
      return initialGameState;
    default:
      return state;
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  return {
    state,
    answerRecognition: (videoId: string, answer: RecognitionAnswer) =>
      dispatch({ type: "answer-recognition", videoId, answer }),
    recordDecision: (videoId: string, action: FeedAction) =>
      dispatch({ type: "record-decision", videoId, action }),
    advanceVideo: () => dispatch({ type: "advance-video" }),
    toggleFeedControl: (controlId: string) =>
      dispatch({ type: "toggle-feed-control", controlId }),
    completeGame: () => dispatch({ type: "complete-game" }),
    resetGame: () => dispatch({ type: "reset" }),
  };
}
