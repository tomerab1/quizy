interface TitleProp {
  title: string;
  emoji?: string;
}

export default function Title({ title, emoji }: TitleProp) {
  return (
    <span className="flex items-center gap-2 font-sans text-xl font-bold tracking-wide text-stone-100">
      {title} {emoji || ""}
    </span>
  );
}
