import type { ResearchSource } from "@/types/experience";

export const researchSources = [
  {
    id: "bakshy-2015",
    shortCitation: "Bakshy et al., 2015",
    apa: [
      "Bakshy, E., Messing, S., & Adamic, L. A. (2015). Exposure to ideologically diverse news and opinion on Facebook. ",
      { italic: "Science, 348" },
      "(6239), 1130-1132.",
    ],
    url: "https://doi.org/10.1126/science.aaa1160",
    sourceType: "journal",
    usedIn: ["beyond-selling"],
    note: "Examines how ranking and user choice both shape exposure to politically different news.",
  },
  {
    id: "baumann-2025",
    shortCitation: "Baumann et al., 2025",
    apa: [
      "Baumann, F., Arora, N., Rahwan, I., & Czaplicka, A. (2025). ",
      { italic: "Dynamics of algorithmic content amplification on TikTok" },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2503.20231",
    sourceType: "preprint",
    usedIn: ["opening", "grand-narrative"],
    note: "A TikTok audit studying interest amplification and declining exploration.",
  },
  {
    id: "boeker-2022",
    shortCitation: "Boeker & Urman, 2022",
    apa: [
      "Boeker, M., & Urman, A. (2022). ",
      { italic: "An empirical investigation of personalization factors on TikTok" },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2201.12271",
    sourceType: "preprint",
    usedIn: ["opening", "game", "signals"],
    note: "Tests how follows, likes, view rate, language, and location affect recommendations.",
  },
  {
    id: "boerman-2017",
    shortCitation: "Boerman et al., 2017",
    apa: [
      "Boerman, S. C., Willemsen, L. M., & Van Der Aa, E. P. (2017). This post is sponsored: Effects of sponsorship disclosure on persuasion knowledge and electronic word of mouth in the context of Facebook. ",
      { italic: "Journal of Interactive Marketing, 38" },
      ", 82-92.",
    ],
    url: "https://doi.org/10.1016/j.intmar.2016.12.002",
    sourceType: "journal",
    usedIn: ["game", "persuasion"],
    note: "Studies how sponsorship disclosure can activate persuasion knowledge.",
  },
  {
    id: "fazio-2015",
    shortCitation: "Fazio et al., 2015",
    apa: [
      "Fazio, L. K., Brashier, N. M., Payne, B. K., & Marsh, E. J. (2015). Knowledge does not protect against illusory truth. ",
      { italic: "Journal of Experimental Psychology: General, 144" },
      "(5), 993-1002.",
    ],
    url: "https://doi.org/10.1037/xge0000098",
    sourceType: "journal",
    usedIn: ["awareness"],
    note: "Shows how repetition can increase perceived truth even when people know the correct answer.",
  },
  {
    id: "friestad-1994",
    shortCitation: "Friestad & Wright, 1994",
    apa: [
      "Friestad, M., & Wright, P. (1994). The persuasion knowledge model: How people cope with persuasion attempts. ",
      { italic: "Journal of Consumer Research, 21" },
      "(1), 1-31.",
    ],
    url: "https://doi.org/10.1086/209380",
    sourceType: "journal",
    usedIn: ["game", "persuasion"],
    note: "Introduces a framework for how people recognize and respond to persuasion.",
  },
  {
    id: "doj-epstein-library-2026",
    shortCitation: "U.S. Department of Justice, 2026",
    apa: [
      "U.S. Department of Justice. (2026). ",
      { italic: "Epstein Library" },
      ".",
    ],
    url: "https://www.justice.gov/epstein",
    sourceType: "official",
    usedIn: ["beyond-selling"],
    note: "Official document library. Its own notice warns that some files may be difficult to search and that sensitive material may be present.",
  },
  {
    id: "ibrahim-2025",
    shortCitation: "Ibrahim et al., 2025",
    apa: [
      "Ibrahim, H., Jang, H. D., Aldahoul, N., Kaufman, A. R., Rahwan, T., & Zaki, Y. (2025). ",
      {
        italic:
          "TikTok's recommendations skewed towards Republican content during the 2024 U.S. presidential race",
      },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2501.17831",
    sourceType: "preprint",
    usedIn: ["beyond-selling"],
    note: "A controlled audit reporting uneven partisan recommendation patterns without establishing intent.",
  },
  {
    id: "kaplan-2026",
    shortCitation: "Kaplan et al., 2026",
    apa: [
      "Kaplan, L., Patel, D., Gerzon, N., Mislove, A., & Sapiezynski, P. (2026). ",
      {
        italic:
          "When “For You” isn't for you: Measuring user agency in TikTok's algorithmic feed",
      },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2605.10690",
    sourceType: "preprint",
    usedIn: ["game", "controls", "limits"],
    note: "Compares implicit and explicit signals and examines the limits of Not Interested.",
  },
  {
    id: "lyngs-2019",
    shortCitation: "Lyngs et al., 2019",
    apa: [
      "Lyngs, U., Lukoff, K., Slovak, P., Binns, R., Slack, A., Inzlicht, M., Van Kleek, M., & Shadbolt, N. (2019). Self-control in cyberspace: Applying dual systems theory to a review of digital self-control tools. ",
      {
        italic:
          "Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems",
      },
      ".",
    ],
    url: "https://doi.org/10.1145/3290605.3300361",
    sourceType: "conference",
    usedIn: ["agency"],
    note: "Reviews tools that add limits, reminders, and friction to support deliberate action.",
  },
  {
    id: "magdy-2025",
    shortCitation: "Magdy et al., 2025",
    apa: [
      "Magdy, W., Mubarak, H., & Salminen, J. (2025). ",
      {
        italic:
          "Who should set the standards? Analysing censored Arabic content on Facebook during the Palestine-Israel conflict",
      },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2504.02175",
    sourceType: "preprint",
    usedIn: ["beyond-selling"],
    note: "Examines cultural context and disagreement around moderation of Arabic conflict-related posts.",
  },
  {
    id: "mathur-2018",
    shortCitation: "Mathur et al., 2018",
    apa: [
      "Mathur, A., Narayanan, A., & Chetty, M. (2018). Endorsements on social media: An empirical study of affiliate marketing disclosures on YouTube and Pinterest. ",
      { italic: "Proceedings of the ACM on Human-Computer Interaction, 2" },
      "(CSCW), Article 119.",
    ],
    url: "https://doi.org/10.1145/3274388",
    sourceType: "conference",
    usedIn: ["game", "responsibility"],
    note: "Studies affiliate disclosures and how difficult commercial relationships can be to recognize.",
  },
  {
    id: "piccardi-2024",
    shortCitation: "Piccardi et al., 2024",
    apa: [
      "Piccardi, T., Saveski, M., Jia, C., Hancock, J. T., Tsai, J. L., & Bernstein, M. S. (2024). ",
      {
        italic:
          "Social media algorithms can shape affective polarization via exposure to antidemocratic attitudes and partisan animosity",
      },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2411.14652",
    sourceType: "preprint",
    usedIn: ["beyond-selling"],
    note: "A field experiment on how ranked exposure can affect emotions and out-party attitudes.",
  },
  {
    id: "rozendaal-2011",
    shortCitation: "Rozendaal et al., 2011",
    apa: [
      "Rozendaal, E., Lapierre, M. A., van Reijmersdal, E. A., & Buijzen, M. (2011). Reconsidering advertising literacy as a defense against advertising effects. ",
      { italic: "Journal of Advertising, 40" },
      "(1), 83-94.",
    ],
    url: "https://doi.org/10.2753/JOA0091-3367400108",
    sourceType: "journal",
    usedIn: ["persuasion"],
    note: "Explains why recognizing advertising does not automatically remove its effects.",
  },
  {
    id: "vera-2025",
    shortCitation: "Vera & Ghosh, 2025",
    apa: [
      "Vera, J. A., & Ghosh, S. (2025). ",
      {
        italic:
          "They've over-emphasized that one search: Controlling unwanted content on TikTok's For You Page",
      },
      " [Preprint]. arXiv.",
    ],
    url: "https://doi.org/10.48550/arXiv.2504.13895",
    sourceType: "preprint",
    usedIn: ["controls", "limits"],
    note: "Documents user experiences and uneven success when trying to remove unwanted recommendations.",
  },
] as const satisfies readonly ResearchSource[];

export const sourcesById = new Map<string, ResearchSource>(
  researchSources.map((source) => [source.id, source] as const),
);
