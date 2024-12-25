interface TitleProp {
  title: string;
  emoji?: string;
  className?: string;
}

export default function Title({ title, emoji, className }: TitleProp) {
  return (
    <span
      className={`ml-4 font-sans text-xl font-bold text-stone-100 ${className || ""}`}
    >
      {title} {emoji || ""}
    </span>
  );
}
