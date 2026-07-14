export interface WorldviewCase {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  sourceId: string;
  imageSrc: string;
  imageAlt: string;
  imageCreditId: string;
  accent: string;
}

export const worldviewCases: readonly WorldviewCase[] = [
  {
    id: "political-recommendation",
    eyebrow: "Recommendation audit",
    title: "Political posts in recommendations",
    body: "During the 2024 U.S. election, a TikTok audit found more Republican than Democratic posts in its recommendations. The study did not test why this happened or whether it changed votes.",
    sourceId: "ibrahim-2025",
    imageSrc: "/images/worldview/political-recommendation.jpg",
    imageAlt: "Rows of television screens showing different colored images.",
    imageCreditId: "worldview-political-recommendation",
    accent: "#8f86df",
  },
  {
    id: "emotional-amplification",
    eyebrow: "Field experiment",
    title: "Hostile posts change how people feel",
    body: "In a field experiment on X, changing how much partisan hostility people saw affected their emotions and how they viewed the other party.",
    sourceId: "piccardi-2024",
    imageSrc: "/images/worldview/emotional-amplification.jpg",
    imageAlt: "A person looking at a phone in a dark room.",
    imageCreditId: "worldview-emotional-amplification",
    accent: "#d36c68",
  },
  {
    id: "palestinian-visibility",
    eyebrow: "Content moderation study",
    title: "Palestinian posts and moderation",
    body: "Researchers showed 448 Arabic posts removed by Facebook to Arab annotators. The annotators often read the platform's rules differently from Facebook's moderators.",
    sourceId: "magdy-2025",
    imageSrc: "/images/worldview/palestinian-visibility.jpg",
    imageAlt: "A Palestinian flag being waved at a public protest in São Paulo.",
    imageCreditId: "worldview-palestinian-visibility",
    accent: "#70a17e",
  },
  {
    id: "document-dumps",
    eyebrow: "Reading document releases",
    title: "Reading the Epstein files in context",
    body: "The DOJ library contains several kinds of releases, and some files cannot be searched reliably. A cropped page or isolated name loses its document type, date, and surrounding context. Being named in a file does not prove wrongdoing.",
    sourceId: "doj-epstein-library-2026",
    imageSrc: "/images/worldview/document-dumps.jpg",
    imageAlt: "Generic stacks of paper documents and file folders.",
    imageCreditId: "worldview-document-dumps",
    accent: "#d09a58",
  },
  {
    id: "repetition",
    eyebrow: "Repetition study",
    title: "Repetition changes what feels true",
    body: "When the same claim keeps appearing, it can start to feel accurate, even to someone who knows the correct answer. A crowded feed can make a common claim look widely accepted.",
    sourceId: "fazio-2015",
    imageSrc: "/images/worldview/repetition.jpg",
    imageAlt: "Repeated red, blue, and green lights out of focus.",
    imageCreditId: "worldview-repetition",
    accent: "#60a8c1",
  },
] as const;
