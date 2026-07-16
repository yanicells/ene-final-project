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
  {
    id: "ken",
    member: "Kenaz Celestino",
    body: "The power that AI gives us also comes with great responsibility. Knowing how to use it responsibly and ethically allows it to supplement our learning and increase the efficiency of our workflows. Unfortunately, the rapid development of AI also came with a huge increase in its misuse. AI allows people to skip learning the foundational skills in most fields, but those with a strong grasp of the foundations still have a huge advantage. As a CS student, that is exactly why I still want to build the fundamentals myself. AI can speed up the work, but it cannot replace actually understanding how and why the code works."
  },
  {
    id: "coby",
    member: "Coby Velasco",
    body: "When it comes to AI, it's shocking how advanced it’s become, capable of so many things now. Personally, I think that it’s an important skill to have, as being able to make use of AI can lead to more efficiency and better outputs. For me, so long as it doesn’t compromise our own personal and original ideas, and instead help flesh them out, it’ll ultimately be a benefit. I’ve been told a quote by senior developers that I still stick to now, “Better than a skilled person is a skilled person who makes use of these new tools”"
  },
  {
    id: "pierce",
    member: "Pierce Cabalteja",
    body: "The progress AI has made in the last couple of years has been remarkable. The capabilities AI has shown and its future possibilities makes it inescapable, especially for people in CS such as myself. In this digital age where things move fast, AI is a fantastic tool that helps the user navigate through it. It will improve the lives of the people using it as long as it is used as a tool and not a replacement to the user’s thinking process."
  },
] as const;
