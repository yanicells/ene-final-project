export const feedControls = [
  {
    id: "manage-topics",
    label: "Manage topic frequency",
    description: "Ask the feed to show more or less of broad topic groups.",
  },
  {
    id: "filter-keyword",
    label: "Filter a keyword",
    description: "Reduce posts whose captions contain a word or phrase you choose.",
  },
  {
    id: "unfollow",
    label: "Unfollow repetitive creators",
    description: "Remove a direct source when its content no longer serves you.",
  },
  {
    id: "refresh-feed",
    label: "Refresh the For You feed",
    description: "Reset recommendation signals and rebuild the feed through new activity.",
  },
  {
    id: "following-feed",
    label: "Use Following intentionally",
    description: "Choose a feed based more directly on creators you selected.",
  },
  {
    id: "repeat-feedback",
    label: "Repeat Not Interested",
    description: "Keep giving explicit feedback when unwanted content returns.",
  },
] as const;
