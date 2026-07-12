# ENE 13.05i Major Task 2
## Website design and development handoff

**Working title:** *For You, For Profit*  
**Product:** Interactive research website  
**Primary audience:** Course professor  
**Target completion time:** 8 to 10 minutes  
**Game target:** 3 minutes 30 seconds to 4 minutes  
**Content source:** `ene-mt2-content-argument-draft.md`

---

## 1. Product goal

Build a guided website that lets one user experience a simplified sales-heavy short-video feed, make choices to regain control, review the effects of those choices, and continue into a research debrief.

The game should be easy to complete without missing anything. The debrief carries most of the technical and academic depth. Both parts should feel like one continuous experience rather than a game followed by a normal essay page.

The website should:

- explain how ordinary attention becomes recommendation signals;
- show one consumer grand narrative forming through repeated content;
- let the user build a micro narrative through deliberate choices;
- teach real platform controls;
- widen the argument beyond selling;
- end with individual and systemic forms of agency;
- show APA 7 in-text citations and a complete reference list.

---

## 2. Required stack

Use:

- **Next.js latest**
- **App Router**
- **TypeScript**
- **Tailwind CSS**
- **Motion for React** for animation and transitions
- **Lucide React** for generic interface icons
- no database or authentication
- local data and client state only
- deployable to Vercel

Suggested setup:

```bash
pnpm create next-app@latest ene-mt2 \
  --ts \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"

cd ene-mt2

pnpm add motion lucide-react

npx getdesign@latest add apple
```

Use the Apple design package mainly as a reference for typography, spacing, restraint, and layout polish. Do not copy an Apple product page directly.

---

## 3. Design direction

### Overall look

- white main background;
- near-black text;
- soft gray surfaces and borders;
- one restrained accent color for active states;
- optional cyan and muted pink accents around the short-video interface, without copying TikTok branding;
- large typography;
- generous whitespace;
- clean cards with subtle depth;
- high contrast and readable body text;
- minimal decoration outside interactive moments.

The site should feel designed, but not glossy or corporate. The research should remain the focus.

### Visual references

Use Apple as the main layout and typography reference:

- large, confident headings;
- short blocks of text;
- sticky visual sections;
- strong use of whitespace;
- visuals that enter only when needed;
- clean transitions between ideas.

The game can feel more playful than the debrief. The debrief should still use motion, diagrams, and interactive layouts rather than becoming a long static article.

---

## 4. Experience structure

### Section 1: Quick project introduction

**Target time:** 10 seconds.

A quiet opening screen gives context before any cinematic effect.

Content:

> Recommendation feeds do more than respond to what we like. They learn from our attention, arrange what comes next, and can slowly turn an interest into a story about what we should want.

Interaction:

- one short paragraph;
- a clear `Begin` button;
- no automatic transition before the user is ready.

Motion:

- soft fade and upward slide;
- minimal background movement;
- keep it calm.

---

### Section 2: Opening sequence

**Target time:** 30 to 45 seconds.

Show a centered phone mockup. Short lines appear beside or behind it:

- You liked a video because it was funny.
- You finished a review because you were curious.
- You followed a creator whose style you liked.
- You shared a recommendation.
- You opened one product link.

The feed becomes visibly more commercial. End with:

> Then your feed stopped feeling like yours.

Interaction:

- click or scroll to progress;
- do not depend on exact scroll speed;
- provide a `Skip intro` option in small text.

Motion ideas:

- clean slide-ins for each action;
- phone content crossfades;
- commercial cards stack around the phone;
- subtle counter that shows signals accumulating;
- use `AnimatePresence` for changing captions;
- use `useScroll` and `useTransform` only where scroll progression is reliable.

---

### Section 3: Narrative primer

Introduce the two course concepts before the game.

Layout:

- two large side-by-side cards on desktop;
- stacked cards on mobile.

Content:

**Grand narrative**

> A larger story repeated until it starts to feel normal.

**Micro narrative**

> A smaller story built through choices that question or rewrite it.

Then connect them to the game:

> This game focuses on one grand narrative: an interest should naturally lead to wanting and buying more.

Interaction:

- a short example animation that moves from interest to review to product;
- `Take back the feed` button.

---

### Section 4: Game instructions

Keep this short.

Show:

- goal;
- available actions;
- feed drift meter;
- note that this is a simplified simulation.

Suggested copy:

> Go through six videos. Decide what deserves your attention. Your choices affect the simulated feed, but there is no perfect score.

The instructions should fit on one screen.

---

### Section 5: Guided feed game

**Target time:** 3 minutes 30 seconds to 4 minutes.

Use a fixed sequence of around six videos. The combined video runtime should be close to two minutes.

Do not build a complex branching recommender system. Every user sees the same six items. Choices affect:

- feed drift score;
- interaction log;
- result labels;
- short feedback;
- which feed controls the user selects later.

Each video reaches a decision point. The user must choose before moving on.

Possible actions:

- Like
- Follow or Unfollow
- Continue
- Open product
- More options
- Not Interested

### Video data model

```ts
export type ContentKind =
  | "organic"
  | "brand-ad"
  | "sponsored-creator"
  | "affiliate"
  | "unsponsored-review"
  | "shop-content";

export type ActionId =
  | "like"
  | "follow"
  | "unfollow"
  | "continue"
  | "open-product"
  | "not-interested";

export interface FeedVideo {
  id: string;
  title: string;
  creator: string;
  contentKind: ContentKind;
  videoSrc: string;
  posterSrc: string;
  durationSeconds: number;
  disclosure?: string;
  caption: string;
  allowedActions: ActionId[];
  feedbackByAction: Partial<
    Record<
      ActionId,
      {
        shortText: string;
        feedDriftDelta: number;
        signalType: "explicit" | "implicit" | "commercial";
        citationIds?: string[];
      }
    >
  >;
}
```

### User decision model

```ts
export interface UserDecision {
  videoId: string;
  actionId: ActionId;
  feedDriftDelta: number;
  timestamp: number;
}
```

### Game state

```ts
export interface GameState {
  currentVideoIndex: number;
  feedDrift: number;
  decisions: UserDecision[];
  selectedFeedControls: string[];
  completed: boolean;
}
```

Keep `feedDrift` in a simple range, such as `-100` to `100`.

- negative values lean interest-led;
- positive values lean sales-led;
- clamp the value after each choice.

---

### Section 6: Feed drift meter

The meter should remain visible but unobtrusive during the game.

Label:

**Interest-led** ←→ **Sales-led**

Behavior:

- animate smoothly after each decision;
- show a small pulse when the value changes;
- avoid red versus green moral scoring;
- do not call the result good or bad;
- explain later that it is a metaphor.

Implementation:

- use a horizontal track;
- use `motion.div` for width or translate animation;
- keep text labels static;
- use `aria-valuemin`, `aria-valuemax`, and `aria-valuenow`.

---

### Section 7: Research feedback

Do not open a large modal after every choice.

Use a small feedback card under or beside the phone:

- one sentence;
- optional citation chip;
- disappears when the next video begins;
- can be reopened later in the results page.

Example:

> Watching to the end can act as an implicit signal.  
> `(Boeker & Urman, 2022)`

Citation chip behavior:

- click to open a small source drawer;
- show title, authors, year, and one-sentence relevance;
- include a stable external link only in the source drawer and final references.

---

### Section 8: Feed-level controls

Place this after the six videos and before results.

The phone interface zooms out and becomes a settings panel.

Show a short list of controls:

- Not Interested
- Unfollow repetitive creators
- Manage Topics
- Filter Keywords
- Refresh the For You feed
- Use Following more intentionally

The user selects two or three actions they would take.

Keep this guided:

- each item has one sentence;
- no fake nested settings maze;
- selection affects the results summary;
- clarify that controls influence the feed but do not guarantee complete removal.

Motion ideas:

- phone rotates slightly into a flat settings card;
- controls slide in from the side;
- selected controls animate into a small "micro narrative" stack.

---

### Section 9: Results overview

Show a clean dashboard, not a game-over screen.

Possible cards:

- Final feed drift
- Commercial content engaged with
- Ads recognized
- Explicit feedback used
- Implicit signals produced
- Feed controls selected

Main message:

> You influenced the feed, but the feed also shaped the choices you were responding to.

Include a `Review each video` action.

---

### Section 10: Per-video review

This can use a horizontal side-scroll section on desktop.

Each card includes:

- poster or short replay;
- content type;
- user's action;
- signal type;
- score effect;
- short explanation;
- APA citation chip.

Recommended behavior:

- sticky section title on the left;
- cards scroll horizontally on the right;
- arrow buttons and drag support;
- keyboard navigation;
- fall back to a vertical list on narrow screens.

This is a good place for playful motion because the user already completed the game.

---

### Section 11: Technical debrief

Transition from results into the research section by visually opening the phone into layers.

Possible visual:

- phone at center;
- left side: deliberate actions;
- right side: behavioral signals;
- arrows move into a recommendation box.

Content groups:

**What you told the system**

- like;
- follow;
- Not Interested;
- product click;
- feed setting.

**What behavior also revealed**

- watch duration;
- completion;
- replay;
- quick skip;
- repeated attention;
- pauses.

Design:

- sticky phone visual;
- text sections scroll beside it;
- each signal appears as a small data token;
- tokens should not imply that every real platform uses the exact same weighting.

---

### Section 12: How the grand narrative formed

Use the six game videos again.

Layout:

- wide sequence or timeline;
- content begins as interest and ends as purchase pressure;
- each item is visually connected.

Sequence:

**Interest → Review → Lifestyle → Recommendation → Urgency → Purchase**

Key copy:

> No single video told the whole story. The narrative formed through what kept returning.

Add research support from Baumann et al. and other TikTok audit sources.

Motion:

- line draws as the user scrolls;
- cards snap into place;
- final zoom-out reveals that all six items form one larger path.

---

### Section 13: The micro narrative

Show the user's own choices as a separate path.

Possible visual:

- a thin line branches away from the commercial sequence;
- each deliberate choice becomes a labeled node;
- platform controls appear first;
- personal judgment appears next.

Key idea:

> A micro narrative is not one heroic click. It is a pattern of smaller choices.

Keep this section personal and grounded.

---

### Section 14: Agency beyond controls

This section should feel practical, not preachy.

Use an interactive set of "pause cards":

- Did I want this before I saw it repeatedly?
- Does the creator earn money if I buy?
- Is urgency being used to shorten my decision?
- Have I checked information outside the feed?
- Am I reacting because the post made me angry or afraid?

Possible interaction:

- click each question to reveal a short explanation;
- the questions assemble into a simple personal checklist;
- provide a `Save as image` option only if easy, otherwise omit.

Research cards should connect to persuasion knowledge, advertising literacy, self-control tools, and the illusory truth effect.

---

### Section 15: Beyond selling

Keep this short and visually distinct.

Opening line:

> The feed can sell a product. It can also normalize a worldview.

Use four compact cards:

1. **Selective visibility**  
   Ranking decides what becomes easy to see.

2. **Political recommendation**  
   Audits have found uneven partisan exposure on recommendation feeds.

3. **Emotional amplification**  
   Anger, fear, and partisan hostility can be amplified through ranked exposure.

4. **Moderation and disappearance**  
   Automated rules can affect which languages and perspectives remain visible.

Do not turn this into a second interactive game or a full political case study.

Visual idea:

- the white background shifts slightly darker;
- cards enter one by one;
- a feed grid rearranges itself to show that visibility is constructed;
- return to white before the next section.

Keep claims careful. Mention study limitations and do not accuse a platform of intentional political manipulation without evidence.

---

### Section 16: Limits of individual agency

Use a split layout.

**You can control**

- some interactions;
- some settings;
- your purchases;
- what you share;
- where you verify information.

**You cannot fully control**

- ranking rules;
- signal weights;
- commercial eligibility;
- moderation systems;
- platform incentives.

The split should slowly become uneven to show that the two sides do not carry equal power.

Key line:

> Users are neither powerless nor fully in control.

---

### Section 17: Systemic responsibility

Shift from the user to the platform.

Show possible design and policy improvements:

- visible recommendation controls;
- clear "Why this post?" explanations;
- durable topic preferences;
- unmissable sponsorship and affiliate disclosure;
- stronger separation between entertainment and shopping;
- transparent moderation and appeals;
- independent algorithm audits.

Use simple cards or a vertical list. Do not make this section sound like a product roadmap for TikTok. It is the advocacy ending of the project.

---

### Section 18: Final message

Use a near-empty screen with one short sequence.

Suggested copy:

> Your attention begins with you.  
> The system decides what to do with it next.  
>  
> Keep your interests. Question who is arranging what comes next.

Then show:

- `View sources`
- `Replay experience`

---

### Section 19: References

- full APA 7 bibliography;
- searchable or filterable by section only if easy;
- each in-text citation links to its reference;
- each reference can show a short "used in" label;
- include preprint labels;
- external links open in a new tab.

Keep this section visually clean. A simple list is enough.

---

## 5. Suggested route and component structure

A single page is enough.

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css

  components/
    intro/
      ProjectIntro.tsx
      OpeningSequence.tsx
      NarrativePrimer.tsx

    game/
      FeedGame.tsx
      PhoneFrame.tsx
      FeedVideoPlayer.tsx
      DecisionControls.tsx
      FeedDriftMeter.tsx
      ResearchFeedback.tsx
      FeedControlPanel.tsx

    results/
      ResultsOverview.tsx
      VideoReviewRail.tsx
      VideoReviewCard.tsx

    debrief/
      TechnicalDebrief.tsx
      GrandNarrativeSection.tsx
      MicroNarrativeSection.tsx
      AgencyBeyondControls.tsx
      BeyondSellingSection.tsx
      AgencyLimitsSection.tsx
      SystemicResponsibility.tsx
      FinalMessage.tsx

    research/
      CitationChip.tsx
      SourceDrawer.tsx
      ReferencesSection.tsx

    shared/
      Section.tsx
      StickyVisual.tsx
      ProgressNav.tsx
      PlaceholderVisual.tsx

  data/
    videos.ts
    sources.ts
    debrief.ts

  hooks/
    useGameState.ts
    useReducedMotionSafe.ts

  lib/
    scoring.ts
    citations.ts

public/
  videos/
  posters/
  placeholders/
```

---

## 6. Rendering strategy

Use server components for:

- static introduction;
- debrief copy;
- references;
- non-interactive layouts.

Use client components only for:

- game state;
- video player;
- user decisions;
- meter animation;
- interactive controls;
- horizontal result review;
- citation drawers.

Keep the interactive state local. No backend is needed.

Optionally persist the current section and completed game result in `sessionStorage` so an accidental refresh does not erase progress.

---

## 7. Motion direction

Use Motion for React through `motion/react`.

Recommended motion patterns:

- fade and slide for new sections;
- `AnimatePresence` for changing game feedback;
- smooth meter transitions;
- sticky phone mockup during debrief;
- horizontal result cards;
- scroll-linked diagram assembly;
- subtle scale changes for selected controls;
- shared layout transitions when the phone changes into settings or results.

Avoid:

- constant floating elements;
- excessive parallax;
- long entrance animations;
- animation on every sentence;
- transitions that make reading slower;
- scroll hijacking.

Respect `prefers-reduced-motion`. When reduced motion is enabled:

- remove parallax and scroll-linked transforms;
- use simple fades;
- preserve all information and interactions.

---

## 8. Visual placeholders

The AI should create clear placeholders rather than inventing final media.

Use components such as:

```tsx
<PlaceholderVisual
  label="Opening feed montage"
  aspectRatio="9/16"
  notes="Replace with a vertical video or animated mock feed"
/>
```

Suggested placeholder labels:

- opening feed montage;
- six game videos;
- phone poster images;
- recommendation signal diagram;
- grand narrative sequence;
- political visibility grid;
- moderation and language visual;
- final advocacy visual.

Placeholders should show:

- recommended dimensions;
- intended file path;
- short description;
- whether the asset should be image, video, or SVG.

---

## 9. Citation system

Create one central source registry.

```ts
export interface ResearchSource {
  id: string;
  shortCitation: string;
  apa: string;
  url: string;
  sourceType: "journal" | "conference" | "preprint" | "report";
  usedIn: string[];
  note: string;
}
```

Example:

```ts
export const sources: ResearchSource[] = [
  {
    id: "baumann-2025",
    shortCitation: "Baumann et al., 2025",
    apa: "Baumann, F., Arora, N., Rahwan, I., & Czaplicka, A. (2025)...",
    url: "https://doi.org/10.48550/arXiv.2503.20231",
    sourceType: "preprint",
    usedIn: ["opening", "grand-narrative"],
    note: "TikTok sock-puppet audit on amplification and content diversity.",
  },
];
```

Citation behavior:

- inline chip displays author and year;
- click opens a drawer;
- drawer shows source type and limitation;
- reference list reuses the same source data;
- do not hardcode references in multiple components.

---

## 10. Accessibility

Required:

- full keyboard navigation;
- visible focus styles;
- captions or transcripts for every video;
- muted autoplay only;
- play and pause controls;
- no information communicated by color alone;
- accessible labels for icons;
- reduced-motion support;
- semantic headings;
- minimum readable body size;
- sufficient contrast;
- mobile fallback for horizontal scrolling.

The experience should still work if videos fail to load. Show the poster, caption, transcript, and choices.

---

## 11. Performance

- keep video files compressed;
- preload only the next video, not all videos;
- use poster images;
- lazy-load debrief visuals;
- avoid large animation libraries beyond Motion;
- use Next Image for static visuals;
- keep the first screen fast;
- do not fetch research data at runtime;
- store all copy and sources locally.

---

## 12. Timing guardrails

| Part | Target |
|---|---:|
| Quick introduction | 10 seconds |
| Opening sequence | 30 to 45 seconds |
| Narrative primer and instructions | 30 to 45 seconds |
| Guided game | 3 minutes 30 seconds to 4 minutes |
| Feed controls | 30 to 45 seconds |
| Results and per-video review | 1 minute |
| Research debrief | 3 to 4 minutes |
| Final message | 20 to 30 seconds |
| Total | 8 to 10 minutes |

The per-video review and references can remain available for deeper inspection after the main flow.

---

## 13. Content rules

- Use the supplied content draft as the source of truth.
- Do not invent statistics.
- Do not claim that the simulation reproduces TikTok's actual algorithm.
- Label research preprints clearly.
- Use APA 7 author-date citations.
- Keep the game copy short.
- Put technical depth in the debrief.
- Use only grand narrative and micro narrative as course terms.
- Do not blame users for ordinary attention or desire.
- Do not imply that all product content is paid advertising.
- Do not frame every advertisement as a grand narrative by itself.
- Keep the political extension brief and evidence-based.
- End with both individual agency and platform responsibility.

---

## 14. Acceptance criteria

The first complete version is ready when:

- the user can finish the full guided game without confusion;
- all six videos require a decision;
- the feed drift meter updates correctly;
- feed controls appear after the game;
- results can reopen every video;
- the debrief follows the agreed section order;
- citations appear inline and link to the reference list;
- all visuals have usable placeholders;
- the page is responsive;
- keyboard controls work;
- reduced-motion mode works;
- the experience takes under 10 minutes;
- there are no unsupported research claims.

---

## 15. Ready-to-use build prompt

```text
Build a single-page interactive research website for an ENE 13.05i Major Task 2 project.

Use the latest Next.js with the App Router, TypeScript, Tailwind CSS, Motion for React, and Lucide React. Initialize the project with create-next-app and run `npx getdesign@latest add apple`. Use the Apple package mainly for typography, spacing, and clean layout inspiration.

The website is called "For You, For Profit" for now. It explores how recommendation feeds turn ordinary attention into commercial and social narratives. The main interactive example is a TikTok-inspired, but not trademark-copying, short-video feed.

Use the attached content and argument draft as the source of truth. Do not invent statistics or research claims.

Core experience:
1. A 10-second project introduction.
2. A short opening sequence showing normal actions such as liking, watching, following, sharing, and opening a product link. The feed gradually becomes sales-heavy.
3. A simple explanation of grand narratives and micro narratives.
4. A guided game with six fixed videos and required decisions after each video.
5. A feed drift meter from Interest-led to Sales-led.
6. A feed-level controls section after the videos.
7. A results dashboard with a replay and analysis card for every video.
8. A large animated research debrief covering signals, recommendation inference, how the grand narrative formed, the user's micro narrative, awareness beyond controls, a brief beyond-selling political extension, limits of individual agency, and systemic responsibility.
9. A final message and APA 7 references.

Design:
- white main background;
- minimal, clean, readable;
- large Apple-like typography;
- generous whitespace;
- refined grids and cards;
- subtle borders and depth;
- smooth slide-ins, fades, sticky visuals, horizontal card rails, and scroll-linked diagrams;
- playful during the game, calmer during the debrief;
- no excessive parallax or scroll hijacking.

Create clear media placeholders for videos, posters, diagrams, and illustrations. Each placeholder should state its intended file path, size or aspect ratio, and what the final asset should contain.

Architecture:
- static content as server components;
- interactive game components as client components;
- local state only;
- source registry in a TypeScript data file;
- all game videos in a typed data structure;
- accessible keyboard controls, video transcripts, reduced-motion support, and mobile fallbacks.

Do not build a real recommendation algorithm. Every user sees the same fixed six-video sequence. Their choices only affect the feed drift score, interaction log, feedback, selected controls, and final results.

Start by scaffolding the page structure, typed data models, design tokens, placeholder assets, and game state. Then implement the full guided flow.
```
