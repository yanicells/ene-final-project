import type { FeedVideo } from "@/types/experience";

export const feedVideos: readonly FeedVideo[] = [
  {
    id: "organic-interest",
    sequenceLabel: "Interest",
    role: "A genuine interest",
    title: "Resetting my desk before I focus",
    creator: "@mika.studies",
    contentKind: "organic",
    posterSrc: "/images/feed/1-sandrin.jpg",
    posterAlt: "A warm desk setup with a monitor, keyboard, plants, and a light bar.",
    durationSeconds: 17,
    decisionAtSeconds: 8,
    caption: "resetting my desk before I try to focus again",
    transcript:
      "A warm desk setup comes into view after a quick reset. The post focuses on the routine and atmosphere rather than a product.",
    placeholderNote: "Replace with 01-organic-interest.mp4, 1080 x 1920, 15 to 18 seconds.",
    accent: "#74a889",
    actions: [
      {
        id: "like",
        label: "Like",
        feedDriftDelta: -8,
        signalType: "explicit",
        dataLabel: "Interested in study setups",
      },
      {
        id: "follow",
        label: "Follow creator",
        feedDriftDelta: -10,
        signalType: "explicit",
        dataLabel: "Creator affinity added",
      },
      {
        id: "keep-watching",
        label: "Keep watching",
        feedDriftDelta: -4,
        signalType: "implicit",
        dataLabel: "Video completed",
      },
    ],
    researchFeedback:
      "Your interest is real. A like, follow, or completed view can help the system decide what belongs next.",
    citationIds: ["boeker-2022"],
  },
  {
    id: "aesthetic-discovery",
    sequenceLabel: "Discovery",
    role: "A quiet visual break",
    title: "A study corner worth saving",
    creator: "@corners.afterclass",
    contentKind: "organic",
    posterSrc: "/images/feed/2-thuan-pham.jpg",
    posterAlt:
      "A quiet study corner with a desk beside a bright window, bookshelves, and a warm hanging lamp.",
    durationSeconds: 16,
    decisionAtSeconds: 8,
    caption: "saving this corner for the next time I need to focus",
    transcript:
      "A still study corner appears, with a desk by a bright window and a warm lamp glowing over the bookshelves. Soft music and a short caption about finding focus. No product or commercial relationship is presented.",
    placeholderNote:
      "Picture-first placeholder. Replace with 02-aesthetic-discovery.mp4, 1080 x 1920, 14 to 18 seconds, or an approved vertical still.",
    accent: "#d4a563",
    actions: [
      {
        id: "like",
        label: "Like the mood",
        feedDriftDelta: -4,
        signalType: "explicit",
        dataLabel: "Warm study aesthetic added",
      },
      {
        id: "follow",
        label: "Follow creator",
        feedDriftDelta: -5,
        signalType: "explicit",
        dataLabel: "Study-aesthetic creator affinity added",
      },
      {
        id: "next-video",
        label: "Next post",
        feedDriftDelta: -2,
        signalType: "implicit",
        dataLabel: "Aesthetic post skipped",
      },
    ],
    researchFeedback:
      "Liking one desk photo gives the system another clue about what to show next.",
    citationIds: ["baumann-2025"],
  },
  {
    id: "unsponsored-review",
    sequenceLabel: "Review",
    role: "The useful review",
    title: "The lamp I kept on my desk",
    creator: "@afterclass",
    contentKind: "unsponsored-review",
    posterSrc: "/images/feed/3-ron-lach.jpg",
    posterAlt: "A small white table lamp glowing over open magazines on a desk.",
    durationSeconds: 19,
    decisionAtSeconds: 9,
    disclosure: "Bought with my own money",
    caption: "what I liked, what annoyed me, and whether I would buy it again",
    transcript:
      "The creator shows the small table lamp beside their reading stack and explains one useful feature, one drawback, and that they purchased it themselves.",
    placeholderNote: "Replace with 03-unsponsored-review.mp4, 1080 x 1920, 18 to 20 seconds.",
    accent: "#8b91a0",
    actions: [
      {
        id: "keep-watching",
        label: "Keep watching",
        feedDriftDelta: 4,
        signalType: "implicit",
        dataLabel: "Product review completed",
      },
      {
        id: "like",
        label: "Like review",
        feedDriftDelta: 7,
        signalType: "explicit",
        dataLabel: "Product-review interest added",
      },
      {
        id: "next-video",
        label: "Next video",
        feedDriftDelta: -3,
        signalType: "implicit",
        dataLabel: "Review skipped early",
      },
    ],
    researchFeedback:
      "A post can encourage consumption even when the creator was not paid to make it.",
    citationIds: ["friestad-1994"],
  },
  {
    id: "sponsored-lifestyle",
    sequenceLabel: "Lifestyle",
    role: "The disclosed promotion",
    title: "My late-night study reset",
    creator: "@toni.afterdark",
    contentKind: "sponsored-creator",
    posterSrc: "/images/feed/4-zinep.jpg",
    posterAlt:
      "An open book and notebook on a bed beside a glowing bedside lamp at night.",
    durationSeconds: 20,
    decisionAtSeconds: 9,
    disclosure: "Paid partnership with Luma",
    caption: "my late-night study reset with Luma",
    transcript:
      "A polished late-night wind-down: an open book and notebook on the bed, lit by a warm lamp. A paid partnership disclosure identifies the brand relationship.",
    placeholderNote: "Replace with 04-sponsored-lifestyle.mp4, 1080 x 1920, 18 to 22 seconds.",
    accent: "#d99b4d",
    recognitionPrompt: {
      question: "Is there a commercial relationship here?",
      correctAnswer: "yes",
      options: ["yes", "no", "not-sure"],
    },
    actions: [
      {
        id: "follow",
        label: "Follow creator",
        feedDriftDelta: 10,
        signalType: "explicit",
        dataLabel: "Creator and brand affinity added",
      },
      {
        id: "keep-watching",
        label: "Keep watching",
        feedDriftDelta: 6,
        signalType: "implicit",
        dataLabel: "Sponsored post completed",
      },
      {
        id: "adjust-recommendation",
        label: "Adjust recommendation",
        feedDriftDelta: -12,
        signalType: "explicit",
        dataLabel: "Not Interested selected",
      },
    ],
    researchFeedback:
      "A clear disclosure can make a creator's commercial relationship easier to recognize.",
    citationIds: ["boerman-2017"],
  },
  {
    id: "affiliate-recommendation",
    sequenceLabel: "Recommendation",
    role: "The subtle affiliate",
    title: "Three desk upgrades I use daily",
    creator: "@softfocus.setup",
    contentKind: "affiliate",
    posterSrc: "/images/feed/5-elijah-pilchard.jpg",
    posterAlt:
      "A wooden desk with a laptop, two lamps, a candle, and small plants.",
    durationSeconds: 21,
    decisionAtSeconds: 10,
    disclosure: "links and code in bio #affiliate",
    caption: "3 desk upgrades I would buy again",
    transcript:
      "A creator pans across a wooden desk filled with upgrades and recommends three favorites. The featured lamp appears with a link, discount code, and brief affiliate label.",
    placeholderNote: "Replace with 05-affiliate-recommendation.mp4, 1080 x 1920, 18 to 22 seconds.",
    accent: "#be7aa5",
    recognitionPrompt: {
      question: "Could the creator benefit if you buy?",
      correctAnswer: "yes",
      options: ["yes", "no", "not-sure"],
    },
    actions: [
      {
        id: "open-product",
        label: "Open product",
        feedDriftDelta: 18,
        signalType: "commercial",
        dataLabel: "Product click and shopping interest added",
      },
      {
        id: "like",
        label: "Like recommendation",
        feedDriftDelta: 10,
        signalType: "explicit",
        dataLabel: "Affiliate-content interest added",
      },
      {
        id: "adjust-recommendation",
        label: "Adjust recommendation",
        feedDriftDelta: -14,
        signalType: "explicit",
        dataLabel: "Not Interested selected",
      },
    ],
    researchFeedback:
      "Affiliate posts can resemble ordinary recommendations, and a short label may not explain the creator's financial incentive clearly.",
    citationIds: ["mathur-2018"],
  },
  {
    id: "trend-repetition",
    sequenceLabel: "Repetition",
    role: "The lamp keeps returning",
    title: "This lamp is suddenly everywhere",
    creator: "@setup.loop",
    contentKind: "organic",
    posterSrc: "/images/feed/6-hedefneydii.jpg",
    posterAlt:
      "A glowing pleated lamp beside a candle, tea, and handwritten notes at night.",
    durationSeconds: 18,
    decisionAtSeconds: 9,
    caption: "this desk lamp keeps turning up on my feed",
    transcript:
      "Another cozy study desk appears, centered on the same style of warm lamp beside a candle and handwritten notes. The caption notices how this lamp keeps returning across different posts.",
    placeholderNote:
      "Picture-first placeholder. Replace with 06-trend-repetition.mp4, 1080 x 1920, 16 to 20 seconds, or an approved vertical still.",
    accent: "#8278a8",
    actions: [
      {
        id: "like",
        label: "Like the setup",
        feedDriftDelta: 8,
        signalType: "explicit",
        dataLabel: "Repeated desk object reinforced",
      },
      {
        id: "keep-watching",
        label: "Watch the montage",
        feedDriftDelta: 6,
        signalType: "implicit",
        dataLabel: "Repeated product motif completed",
      },
      {
        id: "adjust-recommendation",
        label: "See fewer like this",
        feedDriftDelta: -12,
        signalType: "explicit",
        dataLabel: "Repeated setup pattern reduced",
      },
    ],
    researchFeedback:
      "Seeing the same object repeatedly can make it feel normal or necessary. Repetition does not tell you how useful or popular it really is.",
    citationIds: ["fazio-2015"],
  },
  {
    id: "brand-ad",
    sequenceLabel: "Urgency",
    role: "The obvious advertisement",
    title: "Better light for late nights",
    creator: "Luma Studio",
    contentKind: "brand-ad",
    posterSrc: "/images/feed/7-alphaen.jpg",
    posterAlt: "A glossy yellow desk lamp glowing in a dim, minimalist workspace.",
    durationSeconds: 17,
    decisionAtSeconds: 8,
    disclosure: "Advertisement",
    caption: "limited-time offer this week",
    transcript:
      "A stylized product shot presents the Luma Arc glowing on a dim desk, with a limited-time offer and direct invitation to open the product.",
    placeholderNote: "Replace with 07-brand-ad.mp4, 1080 x 1920, 15 to 18 seconds.",
    accent: "#e2c83b",
    actions: [
      {
        id: "open-product",
        label: "Open product",
        feedDriftDelta: 18,
        signalType: "commercial",
        dataLabel: "Direct product intent added",
      },
      {
        id: "skip",
        label: "Skip",
        feedDriftDelta: -8,
        signalType: "implicit",
        dataLabel: "Advertisement skipped early",
        feedback:
          "Skipping changes watch behavior, but it is less direct than explicitly rejecting the recommendation.",
      },
      {
        id: "not-interested",
        label: "Not Interested",
        feedDriftDelta: -16,
        signalType: "explicit",
        dataLabel: "Advertisement rejected explicitly",
        feedback:
          "Not Interested is a clear signal, but real feeds may require repeated feedback before unwanted topics decrease.",
      },
    ],
    researchFeedback:
      "Skipping and explicit rejection can both shape the feed, but they do not communicate the same thing.",
    citationIds: ["kaplan-2026"],
  },
  {
    id: "shop-urgency",
    sequenceLabel: "Purchase",
    role: "The purchase push",
    title: "Voucher available during this stream",
    creator: "Luma Live",
    contentKind: "shop-content",
    posterSrc: "/images/feed/8-davdkuko.jpg",
    posterAlt:
      "A person writing in a notebook while a phone mounted on a gimbal records them.",
    durationSeconds: 20,
    decisionAtSeconds: 9,
    disclosure: "Simulated shop livestream",
    caption: "live demo. voucher available during this stream",
    transcript:
      "A livestream-style post invites the viewer to inspect a voucher while the seller takes notes on camera, a phone mounted on a gimbal recording the demo.",
    placeholderNote: "Replace with 08-shop-urgency.mp4, 1080 x 1920, 18 to 22 seconds.",
    accent: "#dd7063",
    actions: [
      {
        id: "view-voucher",
        label: "View voucher",
        feedDriftDelta: 20,
        signalType: "commercial",
        dataLabel: "Deal engagement added",
      },
      {
        id: "keep-watching",
        label: "Keep watching",
        feedDriftDelta: 10,
        signalType: "implicit",
        dataLabel: "Shopping stream completed",
      },
      {
        id: "not-interested",
        label: "Not Interested",
        feedDriftDelta: -18,
        signalType: "explicit",
        dataLabel: "Shop content rejected explicitly",
      },
    ],
    researchFeedback:
      "Urgency can shorten the time between interest and action. Leaving the feed creates space to decide without the countdown.",
    citationIds: ["friestad-1994", "lyngs-2019"],
  },
] as const;

export function getFeedVideo(videoId: string) {
  return feedVideos.find((video) => video.id === videoId);
}
