# For You, For Profit

An interactive, research-informed website for ENE 13.05i Major Task 2. The experience follows an ordinary interest as a recommendation feed gradually connects it to reviews, lifestyle content, advertising, and purchase prompts.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The primary presentation target is desktop.

## Project checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Replacing the feed media

The six current poster images live in `public/images/feed`. Each entry in `src/data/videos.ts` includes the intended filename, duration, and framing in `placeholderNote`.

To use a final video, place it in `public/videos/feed` and add its public path as `videoSrc` on the matching feed entry. The phone player uses muted inline autoplay, custom play and pause controls, a poster fallback, and a written transcript.

Image credits and source links are recorded in `ASSET_SOURCES.md`. Research references are maintained in `src/data/sources.ts` and rendered in the site’s Sources chapter.
