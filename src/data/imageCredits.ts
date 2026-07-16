export interface ImageCredit {
  id: string;
  localPath: string;
  photographer: string;
  source: "Unsplash" | "Pexels";
  sourceUrl: string;
  usageLabel: string;
}

export const imageCredits: readonly ImageCredit[] = [
  {
    id: "feed-organic-interest",
    localPath: "/images/feed/1-sandrin.jpg",
    photographer: "sandrin",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/keyboard-and-monitor-on-desk-24357529/",
    usageLabel: "Simulation post 1 — Interest",
  },
  {
    id: "feed-aesthetic-discovery",
    localPath: "/images/feed/2-thuan-pham.jpg",
    photographer: "Thuan Pham",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/cozy-reading-nook-with-warm-lamp-light-in-jaipur-34056820/",
    usageLabel: "Simulation post 2 — Discovery",
  },
  {
    id: "feed-unsponsored-review",
    localPath: "/images/feed/3-ron-lach.jpg",
    photographer: "Ron Lach",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/a-magazines-and-desk-lamp-at-the-table-8085253/",
    usageLabel: "Simulation post 3 — Review",
  },
  {
    id: "feed-sponsored-lifestyle",
    localPath: "/images/feed/4-zinep.jpg",
    photographer: "Zeynep M.",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/books-and-pen-on-bed-18348191/",
    usageLabel: "Simulation post 4 — Lifestyle",
  },
  {
    id: "feed-affiliate-recommendation",
    localPath: "/images/feed/5-elijah-pilchard.jpg",
    photographer: "Elijah Pilchard",
    source: "Pexels",
    sourceUrl: "https://www.pexels.com/photo/wooden-desk-at-home-12792218/",
    usageLabel: "Simulation post 5 — Recommendation",
  },
  {
    id: "feed-trend-repetition",
    localPath: "/images/feed/6-hedefneydii.jpg",
    photographer: "Hedefneydii",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/cozy-study-desk-with-warm-lighting-and-notes-35462658/",
    usageLabel: "Simulation post 6 — Repetition",
  },
  {
    id: "feed-brand-ad",
    localPath: "/images/feed/7-alphaen.jpg",
    photographer: "Alpha En",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/modern-yellow-desk-lamp-in-minimalist-workspace-28461166/",
    usageLabel: "Simulation post 7 — Urgency",
  },
  {
    id: "feed-shop-urgency",
    localPath: "/images/feed/8-davdkuko.jpg",
    photographer: "David Kwewum",
    source: "Pexels",
    sourceUrl:
      "https://www.pexels.com/photo/a-man-is-writing-on-a-tablet-while-sitting-at-a-desk-17794197/",
    usageLabel: "Simulation post 8 — Purchase",
  },
  {
    id: "worldview-political-recommendation",
    localPath: "/images/worldview/political-recommendation.jpg",
    photographer: "Markus Winkler",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/b8azydT_3tA",
    usageLabel: "Political recommendation case",
  },
  {
    id: "worldview-emotional-amplification",
    localPath: "/images/worldview/emotional-amplification.jpg",
    photographer: "Zac Wolff",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/ZS0MMDRkprc",
    usageLabel: "Emotional amplification case",
  },
  {
    id: "worldview-palestinian-visibility",
    localPath: "/images/worldview/palestinian-visibility.jpg",
    photographer: "Selena Jiménez",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/vupney9yBmM",
    usageLabel: "Palestinian visibility case",
  },
  {
    id: "worldview-document-dumps",
    localPath: "/images/worldview/document-dumps.jpg",
    photographer: "Wesley Tingey",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/snNHKZ-mGfE",
    usageLabel: "Epstein files context case",
  },
  {
    id: "worldview-repetition",
    localPath: "/images/worldview/repetition.jpg",
    photographer: "Nick Pampoukidis",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/RL8tosu2lYM",
    usageLabel: "Repetition case",
  },
] as const;

export const imageCreditsById = new Map<string, ImageCredit>(
  imageCredits.map((credit) => [credit.id, credit] as const),
);

export const imageCreditsByPath = new Map<string, ImageCredit>(
  imageCredits.map((credit) => [credit.localPath, credit] as const),
);
