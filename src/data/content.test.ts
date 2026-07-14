import { describe, expect, it } from "vitest";
import { researchSources } from "./sources";
import { feedVideos } from "./videos";

describe("experience content", () => {
  it("defines eight unique feed posts with complete fallback content", () => {
    expect(feedVideos).toHaveLength(8);
    expect(new Set(feedVideos.map((video) => video.id)).size).toBe(8);

    for (const video of feedVideos) {
      expect(video.actions).toHaveLength(3);
      expect(video.posterSrc).toMatch(/^\/images\/feed\/.+\.jpg$/);
      expect(video.posterAlt.length).toBeGreaterThan(20);
      expect(video.transcript.length).toBeGreaterThan(40);
      expect(video.placeholderNote).toContain("1080 x 1920");
    }
  });

  it("uses unique action identifiers within each post", () => {
    for (const video of feedVideos) {
      const actionIds = video.actions.map((action) => action.id);
      expect(new Set(actionIds).size).toBe(actionIds.length);
    }
  });

  it("links every feed citation to the source registry", () => {
    const sourceIds = new Set<string>(researchSources.map((source) => source.id));

    for (const video of feedVideos) {
      for (const citationId of video.citationIds) {
        expect(sourceIds.has(citationId)).toBe(true);
      }
    }
  });

  it("keeps all research links secure and source identifiers unique", () => {
    expect(new Set(researchSources.map((source) => source.id)).size).toBe(
      researchSources.length,
    );

    for (const source of researchSources) {
      expect(source.url).toMatch(/^https:\/\//);
      expect(source.apa.length).toBeGreaterThan(50);
    }
  });
});
