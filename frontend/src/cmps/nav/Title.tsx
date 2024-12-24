interface TitleProp {
  title: string;
  emoji: string;
}

export default function Title({ title, emoji }: TitleProp) {
  return (
    <span className="pl-5 font-sans text-xl font-bold tracking-wide text-stone-100">
      {title} {emoji}
    </span>
  );
}
