import { SearchResult } from "../../models/search/search-result";

const difficutlyToColor: Record<string, string> = {
  easy: "bg-green-400",
  medium: "bg-orange-400",
  hard: "bg-red-400",
};

export default function SearchResultCard({
  title,
  description,
  tags,
  difficulty,
  //   imageUrl,
}: SearchResult) {
  return (
    <div className="flex flex-col hover:cursor-pointer">
      <div className="flex items-center justify-between">
        <h3 className="mb-2 inline text-lg font-bold text-stone-100">
          {title}
        </h3>
        <span
          className={`self-center rounded-xl px-2 py-1 text-xs font-semibold text-stone-50 ${difficutlyToColor[difficulty.toLowerCase()]}`}
        >
          {difficulty}
        </span>
      </div>
      {description && <p className="text-sm text-stone-300">{description}</p>}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <span
            key={index}
            className="rounded-full bg-zinc-600 px-2 py-1 text-xs text-stone-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
