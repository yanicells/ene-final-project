import { sourcesById } from "@/data/sources";

interface CitationLinkProps {
  sourceId: string;
  inverse?: boolean;
}

export function CitationLink({ sourceId, inverse = false }: CitationLinkProps) {
  const source = sourcesById.get(sourceId);
  if (!source) return null;

  return (
    <a
      href={`#source-${source.id}`}
      className={`whitespace-nowrap font-semibold underline underline-offset-4 transition ${
        inverse
          ? "text-stone-200 decoration-stone-600 hover:text-[#f4f3ef]"
          : "text-stone-700 decoration-stone-300 hover:text-stone-950"
      }`}
    >
      ({source.shortCitation})
    </a>
  );
}
