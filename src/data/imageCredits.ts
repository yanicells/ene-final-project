export interface ImageCredit {
  id: string;
  localPath: string;
  photographer: string;
  source: "Unsplash";
  sourceUrl: string;
  usageLabel: string;
}

export const imageCredits: readonly ImageCredit[] = [
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
