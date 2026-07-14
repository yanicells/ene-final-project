export type ImageUsage = "feed" | "worldview";

export interface ImageCredit {
  id: string;
  localPath: string;
  photographer: string;
  source: "Unsplash";
  sourceUrl: string;
  usage: ImageUsage;
  usageLabel: string;
}

export const imageCredits: readonly ImageCredit[] = [
  {
    id: "feed-desk-setup",
    localPath: "/images/feed/desk-setup.jpg",
    photographer: "Elijah Pilchard",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/CjFZM1IiGw4",
    usage: "feed",
    usageLabel: "Interest post",
  },
  {
    id: "feed-cozy-corner",
    localPath: "/images/feed/cozy-corner.jpg",
    photographer: "Tsimur Asayonak",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/1zgfRSa4ucc",
    usage: "feed",
    usageLabel: "Discovery post",
  },
  {
    id: "feed-lamp-detail",
    localPath: "/images/feed/lamp-detail.jpg",
    photographer: "Andrej Lišakov",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/3A4XZUopCJA",
    usage: "feed",
    usageLabel: "Review post",
  },
  {
    id: "feed-student-reading",
    localPath: "/images/feed/student-reading.jpg",
    photographer: "Karina Nizametdinova",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/TtAHLsnbz3o",
    usage: "feed",
    usageLabel: "Lifestyle post",
  },
  {
    id: "feed-hanging-light",
    localPath: "/images/feed/hanging-light.jpg",
    photographer: "Nubelson Fernandes",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/L4b8DB_NPbM",
    usage: "feed",
    usageLabel: "Recommendation post",
  },
  {
    id: "feed-repeated-desks",
    localPath: "/images/feed/repeated-desks.jpg",
    photographer: "Brooke Balentine",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/QSwKgj4qzTQ",
    usage: "feed",
    usageLabel: "Repetition post",
  },
  {
    id: "feed-brand-lamp",
    localPath: "/images/feed/brand-lamp.jpg",
    photographer: "ObjectType RAW",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/MSUXmdgq8nc",
    usage: "feed",
    usageLabel: "Advertisement post",
  },
  {
    id: "feed-shop-phone",
    localPath: "/images/feed/shop-phone.jpg",
    photographer: "Jonas Leupe",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/o0A5BpHxziU",
    usage: "feed",
    usageLabel: "Purchase post",
  },
  {
    id: "worldview-political-recommendation",
    localPath: "/images/worldview/political-recommendation.jpg",
    photographer: "Markus Winkler",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/b8azydT_3tA",
    usage: "worldview",
    usageLabel: "Political recommendation case",
  },
  {
    id: "worldview-emotional-amplification",
    localPath: "/images/worldview/emotional-amplification.jpg",
    photographer: "Zac Wolff",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/ZS0MMDRkprc",
    usage: "worldview",
    usageLabel: "Emotional amplification case",
  },
  {
    id: "worldview-palestinian-visibility",
    localPath: "/images/worldview/palestinian-visibility.jpg",
    photographer: "Selena Jiménez",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/vupney9yBmM",
    usage: "worldview",
    usageLabel: "Palestinian visibility case",
  },
  {
    id: "worldview-document-dumps",
    localPath: "/images/worldview/document-dumps.jpg",
    photographer: "Wesley Tingey",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/snNHKZ-mGfE",
    usage: "worldview",
    usageLabel: "Epstein files context case",
  },
  {
    id: "worldview-repetition",
    localPath: "/images/worldview/repetition.jpg",
    photographer: "Nick Pampoukidis",
    source: "Unsplash",
    sourceUrl: "https://unsplash.com/photos/RL8tosu2lYM",
    usage: "worldview",
    usageLabel: "Repetition case",
  },
] as const;

export const imageCreditsById = new Map<string, ImageCredit>(
  imageCredits.map((credit) => [credit.id, credit] as const),
);
