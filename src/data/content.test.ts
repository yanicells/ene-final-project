import { describe, expect, it } from "vitest";
import { researchSources } from "./sources";
import { feedVideos } from "./videos";
import { worldviewCases } from "./worldviewCases";
import { imageCredits } from "./imageCredits";

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

  it("links every feed poster image to an image credit", () => {
    const creditPaths = new Set(imageCredits.map((credit) => credit.localPath));

    for (const video of feedVideos) {
      expect(creditPaths.has(video.posterSrc)).toBe(true);
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

  it("links every worldview case to a source and contextual image", () => {
    const sourceIds = new Set<string>(researchSources.map((source) => source.id));
    const imageCreditIds = new Set(imageCredits.map((credit) => credit.id));

    expect(worldviewCases).toHaveLength(5);
    expect(new Set(worldviewCases.map((item) => item.id)).size).toBe(5);

    for (const item of worldviewCases) {
      expect(sourceIds.has(item.sourceId)).toBe(true);
      expect(imageCreditIds.has(item.imageCreditId)).toBe(true);
      expect(item.imageSrc).toMatch(/^\/images\/worldview\/.+\.jpg$/);
      expect(item.imageAlt.length).toBeGreaterThan(20);
    }
  });

  it("keeps every image credit unique and linked to its local asset", () => {
    expect(new Set(imageCredits.map((credit) => credit.id)).size).toBe(
      imageCredits.length,
    );
    expect(new Set(imageCredits.map((credit) => credit.localPath)).size).toBe(
      imageCredits.length,
    );

    for (const credit of imageCredits) {
      expect(credit.sourceUrl).toMatch(
        /^https:\/\/(unsplash\.com\/photos\/|www\.pexels\.com\/photo\/)/,
      );
      expect(credit.photographer.length).toBeGreaterThan(2);
    }
  });

  it("keeps all research links secure and source identifiers unique", () => {
    expect(new Set(researchSources.map((source) => source.id)).size).toBe(
      researchSources.length,
    );

    for (const source of researchSources) {
      expect(source.url).toMatch(/^https:\/\//);

      const apaText = source.apa
        .map((segment) =>
          typeof segment === "string" ? segment : segment.italic,
        )
        .join("");
      expect(apaText.length).toBeGreaterThan(50);
      expect(
        source.apa.some((segment) => typeof segment !== "string"),
      ).toBe(true);
    }
  });
});
