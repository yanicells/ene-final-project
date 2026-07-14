# For You, For Profit
## Six-video and decision plan

**Status:** Working production plan. Adjust the subject, creators, products, and exact copy as real media becomes available.

> **Current implementation update (July 14, 2026):** The simulation now contains eight fixed posts. Two picture-first beats were added around the original six-video spine: an organic aesthetic discovery after the opening interest and a repetition beat before the direct brand ad. The detailed production briefs below still define the six core video assets; the two added stills may remain images or be replaced by approved vertical videos.

## 1. Core approach

The six videos should feel like one feed learning from one ordinary interest. For the first version, use **student desk setups and study productivity** as the shared interest. It is familiar, visually clear, and can move naturally from harmless interest to product pressure without suggesting that the original interest was a problem.

The sequence is:

**Interest -> Review -> Lifestyle -> Recommendation -> Urgency -> Purchase**

The six content types are:

1. organic interest-based content;
2. unsponsored product review;
3. sponsored creator post with a clear disclosure;
4. affiliate recommendation with a subtle disclosure;
5. obvious brand advertisement;
6. shop or livestream content using urgency.

The videos are fixed. The user's decisions change the feed-drift meter, the interaction record, the live data panel, and the final analysis. They do not generate a different feed.

## 2. What the user sees on desktop

Use three unequal areas:

- **Left:** the project's decision controls;
- **Center:** the realistic phone and vertical feed video;
- **Right:** the live infographic, including feed drift, `Data collected about you`, and one short research note.

The phone should carry the media, creator name, caption, disclosure, and playback progress. It should not include dead profile, share, inbox, or navigation controls.

Only one part of the right side should demand attention at a time. After a decision, the new signal enters the data panel, the feed-drift indicator moves, and the research note appears in that order.

## 3. Shared interaction loop

Each video follows the same understandable rhythm:

1. The video begins automatically while muted, with captions available.
2. The user sees enough of the post to understand its purpose.
3. The video pauses at a planned decision point.
4. Two or three valid actions appear beside the phone.
5. The selected action receives immediate tactile and visual feedback.
6. The live data panel adds the signal produced by that choice.
7. The feed-drift indicator changes without labeling the choice as good or bad.
8. One short research note appears.
9. The user continues to the next video.

The interface should never show a button that has no result. If an action opens a product, it opens a small simulated product preview and records the click. It should not send the user away from the experience.

## 4. Feed-drift model

Use a range from `-100` to `100`.

- Negative values lean **Interest-led**.
- Positive values lean **Sales-led**.
- Zero is the neutral starting point.

The values below are interaction-design defaults, not scientific weights. They can be tuned after playtesting. The meter should be described as a metaphor in the introduction and results.

## 5. Video production specifications

For each video, provide:

- vertical `9:16` media, ideally `1080 x 1920`;
- approximately 15 to 22 seconds of usable footage;
- H.264 MP4 for the initial build;
- a vertical poster image;
- the creator display name;
- the on-screen caption;
- the exact sponsorship or affiliate disclosure, when applicable;
- a plain-text transcript;
- confirmation that the media and audio can be used for the class project.

Aim for roughly 100 to 120 seconds of total video. Avoid copyrighted trending audio unless its use is clearly permitted. Natural room sound, original voiceover, and simple licensed audio will make the project easier to publish and present.

Suggested filenames:

```text
public/videos/01-organic-interest.mp4
public/videos/02-unsponsored-review.mp4
public/videos/03-sponsored-lifestyle.mp4
public/videos/04-affiliate-recommendation.mp4
public/videos/05-brand-ad.mp4
public/videos/06-shop-urgency.mp4

public/posters/01-organic-interest.webp
public/posters/02-unsponsored-review.webp
public/posters/03-sponsored-lifestyle.webp
public/posters/04-affiliate-recommendation.webp
public/posters/05-brand-ad.webp
public/posters/06-shop-urgency.webp
```

## 6. Video 1: A genuine interest

**Role in the narrative:** Interest  
**Content kind:** Organic  
**Target duration:** 15 to 18 seconds

### Content brief

A student creator resets a cluttered desk before studying. The focus is the satisfying transformation, routine, or study atmosphere. No product is named, linked, or highlighted. A lamp or accessory may be visible naturally, but the post should not frame it as something to buy.

Suggested caption:

> resetting my desk before I try to focus again

### Decision point

Pause after the desk transformation becomes clear.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| Like | -8 | Explicit | Interested in study setups |
| Follow creator | -10 | Explicit | Creator affinity added |
| Keep watching | -4 | Implicit | Video completed |

### Feedback

> Your interest is real. A like, follow, or completed view can help the system decide what belongs next.

Research support: Boeker and Urman (2022).

### Purpose

Begin without blame. The user's first choice should feel ordinary and reasonable. Moving toward Interest-led here shows that the meter tracks the direction of the feed, not whether engagement itself is bad.

## 7. Video 2: The useful review

**Role in the narrative:** Review  
**Content kind:** Unsponsored review  
**Target duration:** 18 to 20 seconds

### Content brief

A creator reviews a compact desk lamp or another visible item from the first video. They say they purchased it themselves and give one real advantage and one limitation. The tone should feel helpful rather than sales-heavy.

Suggested caption:

> bought this myself. here is what I actually liked and what annoyed me

### Decision point

Pause after the benefit is shown but before the final verdict.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| Keep watching | +4 | Implicit | Product review completed |
| Like review | +7 | Explicit | Product-review interest added |
| Next video | -3 | Implicit | Review skipped early |

### Feedback

> A post can encourage consumption even when the creator was not paid to make it.

### Purpose

Show that commercial direction does not begin only with advertising. Useful and honest content can still move the feed from a broad interest toward products connected to it.

## 8. Video 3: The disclosed promotion

**Role in the narrative:** Lifestyle  
**Content kind:** Sponsored creator  
**Target duration:** 18 to 22 seconds

### Content brief

A lifestyle creator shows an evening study routine built around the featured lamp or desk accessory. A clear `Paid partnership` or `Sponsored by` disclosure is visible from the beginning. The product is integrated into an attractive routine rather than presented as a direct commercial.

Suggested caption:

> my late-night study reset with [fictional brand] | paid partnership

### Recognition check

Before showing the action controls, ask:

> Is there a commercial relationship here?

Answers: `Yes`, `No`, `Not sure`.

This is one of only two recognition checks in the game.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| Follow creator | +10 | Explicit | Creator and brand affinity added |
| Keep watching | +6 | Implicit | Sponsored post completed |
| Adjust recommendation | -12 | Explicit | Not Interested selected |

`Adjust recommendation` opens a small, guided choice containing `Not Interested`. The control should be clear even while demonstrating that rejection takes more effort than ordinary engagement.

### Feedback

> A clear disclosure can make the creator's commercial relationship easier to recognize.

Research support: Boerman et al. (2017).

### Purpose

Show that disclosure helps without claiming that it cancels persuasion. The attractive lifestyle context should still carry persuasive force.

## 9. Video 4: The subtle affiliate recommendation

**Role in the narrative:** Recommendation  
**Content kind:** Affiliate  
**Target duration:** 18 to 22 seconds

### Content brief

A creator shares three desk upgrades they use every day. The featured product appears second. The creator says the links are in their profile or uses a discount code. The affiliate disclosure is present but brief, low in the caption, or unexplained.

Suggested caption:

> 3 desk upgrades I would buy again. links and code in bio #affiliate

### Recognition check

Ask:

> Could the creator benefit if you buy?

Answers: `Yes`, `No`, `Not sure`.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| Open product | +18 | Commercial | Product click and shopping interest added |
| Like recommendation | +10 | Explicit | Affiliate-content interest added |
| Adjust recommendation | -14 | Explicit | Not Interested selected |

### Feedback

> Affiliate posts can resemble ordinary recommendations, and a short label may not explain the creator's financial incentive clearly.

Research support: Mathur et al. (2018).

### Purpose

Create the most ambiguous commercial post. The viewer should understand why trust in a creator can carry a recommendation further than an obvious advertisement.

## 10. Video 5: The obvious advertisement

**Role in the narrative:** Urgency  
**Content kind:** Brand advertisement  
**Target duration:** 15 to 18 seconds

### Content brief

A polished vertical advertisement for the same product uses a clear brand name, product close-ups, a limited-time discount, and a direct call to action. It should be unmistakably commercial.

Suggested caption:

> Better light for late nights. Limited-time offer this week.

### Decision point

Pause when the discount and call to action appear.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| Open product | +18 | Commercial | Direct product intent added |
| Skip | -8 | Implicit | Advertisement skipped early |
| Not Interested | -16 | Explicit | Advertisement rejected explicitly |

### Feedback

For `Skip`:

> Skipping changes watch behavior, but it is less direct than explicitly rejecting the recommendation.

For `Not Interested`:

> Not Interested is a clear signal, but real feeds may require repeated feedback before unwanted topics decrease.

Research support: Kaplan et al. (2026).

### Purpose

Contrast implicit avoidance with explicit feedback. Because the post is obviously commercial, the main lesson is control rather than recognition.

## 11. Video 6: The purchase push

**Role in the narrative:** Purchase  
**Content kind:** Shop, voucher, or livestream  
**Target duration:** 18 to 22 seconds

### Content brief

A livestream-style host demonstrates the product while a voucher, countdown, or limited-stock message adds pressure. The urgency should feel familiar but should not use fabricated real-world inventory claims. Present it as a fictional simulated promotion.

Suggested caption:

> live demo. voucher available during this stream

### Decision point

Pause when the voucher or countdown becomes prominent.

### Available actions

| Action | Drift | Signal | Data panel update |
|---|---:|---|---|
| View voucher | +20 | Commercial | Deal engagement added |
| Keep watching | +10 | Implicit | Shopping stream completed |
| Not Interested | -18 | Explicit | Shop content rejected explicitly |

### Feedback

> Urgency can shorten the time between interest and action. Leaving the feed creates space to decide without the countdown.

### Purpose

Complete the narrative without forcing a purchase. The highest-drift action opens a simulated voucher or product detail, then returns to the experience.

## 12. Live `Data collected about you` panel

Use the stronger title because the simulation has already been disclosed. The panel should make invisible signals feel immediate and personal.

Possible entries include:

- topic interest;
- creator affinity;
- watch duration;
- completion or early skip;
- likes and follows;
- product clicks;
- sponsorship recognition;
- affiliate recognition;
- shopping or voucher interest;
- explicit rejection feedback.

Only show values actually produced by the user's session. If exact watch time is measured, the panel may display it. Do not invent precision that was not recorded.

Keep a small persistent label such as `Simulation data` near the panel title. This maintains factual clarity without weakening the immersive wording.

## 13. Feed-level controls after the videos

After video six, let the user choose two or three broader actions:

- manage topic frequency;
- filter a keyword;
- unfollow a repetitive creator;
- refresh the For You feed;
- use the Following feed more intentionally;
- continue using Not Interested on repeated content.

Do not give these controls scientific drift values. Record the selections as the user's micro narrative and explain that they may influence recommendations without guaranteeing permanent removal.

## 14. Results derived from the session

The results page can calculate:

- final feed drift;
- videos completed and skipped;
- explicit signals used;
- implicit signals produced;
- commercial actions taken;
- the two commercial relationships recognized;
- broader feed controls selected.

Use this framing:

> You influenced the feed, but the feed also shaped the choices you were responding to.

Do not label the result as a win, failure, resistance score, health score, or measure of personal virtue.

## 15. What can change later without rebuilding the experience

The following can remain data-driven and adjustable:

- the interest category;
- creator names and captions;
- product and fictional brand;
- video and poster files;
- decision-point timestamps;
- allowed actions;
- feed-drift values;
- feedback copy;
- recognition prompts;
- citations linked to each explanation.

This lets the media evolve while the interaction architecture remains stable.
