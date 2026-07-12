# Project Instructions

## Working approach

- Discuss and confirm the experience, content, and visual direction before implementing the website.
- Make small, coherent commits as work progresses. Commit by feature or scope instead of collecting unrelated work into a large commit.
- Review `git status` and the relevant diff before every commit. Keep unrelated changes out of the commit.
- Use clear, descriptive commit messages.

## Package manager and stack

- Use `pnpm` exclusively. Do not use npm or Yarn.
- Follow the stack and constraints in `ene-mt2-website-handoff.md`.
- Apply the Vercel React Best Practices skill when writing, reviewing, or refactoring React and Next.js code.
- Prefer Server Components. Add `"use client"` only where interaction or browser APIs require it.

## Project structure

- Keep route files focused on composition rather than large component implementations.
- Organize `src/components/` by page section, feature, or coherent scope, such as `intro/`, `game/`, `results/`, `debrief/`, `research/`, and `shared/`.
- Keep feature-specific components with their feature. Put a component in `shared/` only when multiple scopes genuinely reuse it.
- Split components when they have separate responsibilities, state, or interaction patterns. Avoid both oversized all-in-one files and unnecessary one-line abstractions.
- Keep static content, game data, research sources, scoring logic, and UI components separate.
- Import modules directly rather than adding broad barrel files.

## Content and research

- Treat `ene-mt2-content-argument-draft.md` as the content and research source of truth.
- Use `ene-mt2-direct-website-flow.md` as the concise experience map and `ene-mt2-website-handoff.md` as the implementation specification.
- Use the Humanizer skill whenever drafting or revising user-facing website content. Preserve the author's argument, factual meaning, citations, and careful research qualifications while making the copy sound natural.
- Do not invent statistics, sources, findings, or claims. Keep APA 7 citations and label preprints accurately.
- Do not imply that the simulation reproduces TikTok's actual algorithm or blame users for ordinary attention and desire.

## Visual assets

- Image generation is allowed for strong placeholder and inspiration assets.
- Keep generated assets clearly identified as placeholders until approved for final use.
- Give every placeholder an intended path, dimensions or aspect ratio, purpose, and replacement notes.

## Verification

- Run the relevant focused checks throughout implementation.
- Before handing off a complete scope, run the available `pnpm` lint, typecheck, test, and build commands that apply.
- Check keyboard navigation, reduced motion, responsive layouts, and fallback content as the relevant UI is implemented.
