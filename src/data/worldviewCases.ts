export interface WorldviewCase {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  sourceId: string;
  imageSrc: string;
  imageAlt: string;
  imageNote: string;
  accent: string;
}

export const worldviewCases: readonly WorldviewCase[] = [
  {
    id: "political-recommendation",
    eyebrow: "Uneven exposure",
    title: "Political recommendation",
    body: "A TikTok audit found uneven partisan recommendation patterns during the 2024 U.S. election. It did not establish intentional favoritism or voting effects.",
    sourceId: "ibrahim-2025",
    imageSrc: "/images/worldview/political-recommendation.jpg",
    imageAlt: "Rows of television screens showing different colored images.",
    imageNote: "Context image: many screens, many possible frames",
    accent: "#8f86df",
  },
  {
    id: "emotional-amplification",
    eyebrow: "Ranked emotion",
    title: "Emotional amplification",
    body: "Changing exposure to partisan hostility on X affected users’ emotions and attitudes toward the opposing party in a field experiment.",
    sourceId: "piccardi-2024",
    imageSrc: "/images/worldview/emotional-amplification.jpg",
    imageAlt: "A person looking at a phone in a dark room.",
    imageNote: "Context image: a screen entering a private moment",
    accent: "#d36c68",
  },
  {
    id: "palestinian-visibility",
    eyebrow: "Whose context counts?",
    title: "Palestinian visibility and moderation",
    body: "A study of 448 deleted Arabic Facebook posts found a gap between Arab annotators’ interpretation of the platform’s standards and Facebook’s moderation decisions.",
    sourceId: "magdy-2025",
    imageSrc: "/images/worldview/palestinian-visibility.jpg",
    imageAlt: "A Palestinian flag being waved at a public protest in São Paulo.",
    imageNote: "Documentary image: a public solidarity protest",
    accent: "#70a17e",
  },
  {
    id: "document-dumps",
    eyebrow: "Context collapse",
    title: "The Epstein files in the feed",
    body: "The DOJ library separates official releases and warns that some records may be difficult to search. A cropped page or isolated name can lose its document type, date, and context. Appearance in a file is not proof of wrongdoing.",
    sourceId: "doj-epstein-library-2026",
    imageSrc: "/images/worldview/document-dumps.jpg",
    imageAlt: "Generic stacks of paper documents and file folders.",
    imageNote: "Concept image: generic files, not Epstein records",
    accent: "#d09a58",
  },
  {
    id: "repetition",
    eyebrow: "Familiar is not factual",
    title: "Repetition can feel like truth",
    body: "Repeated claims can feel more accurate even when people already know the correct answer. A feed can make frequency look like consensus.",
    sourceId: "fazio-2015",
    imageSrc: "/images/worldview/repetition.jpg",
    imageAlt: "Repeated red, blue, and green lights out of focus.",
    imageNote: "Context image: the same signals returning",
    accent: "#60a8c1",
  },
] as const;
