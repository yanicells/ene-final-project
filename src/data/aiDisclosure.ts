export interface AiReflection {
  id: string;
  member: string;
  body: string;
}

export const aiStatement = {
  body: "We used generative AI mainly to help with coding and web design. The overall concept, research, and flow of the site came from our own brainstorming as a group. Once we had a direction, we turned to AI for layout help, animations, effects, and details like typography and color palette. We set up the project structure and general flow ourselves, and AI mostly helped polish what we already built. The process was back and forth: we would rough something out for the idea we wanted, then bring in AI to clean it up and refine it.",
  tools: ["Claude Code", "Codex", "Cursor"],
  models: ["GPT 5.6 Sol", "Composer 2", "Opus 4.7"],
} as const;

export const aiReflections: readonly AiReflection[] = [
  {
    id: "yani",
    member: "Edrian Capistrano",
    body: "Working with generative AI showed me how strong it has become, and honestly it is a little unsettling. That capability is going to reshape the job market, especially for us as CS students. My take is that AI functions as a tool that amplifies whoever is using it well. A developer who knows how to prompt, verify, and edit AI output will outproduce one who does not, but AI on its own does not replace the developer. It replaces the version of them that refuses to use it. Skill still matters, it is just skill plus leverage now, not skill alone.",
  },
] as const;
