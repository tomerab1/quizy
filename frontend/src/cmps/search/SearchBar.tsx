import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <form className={className || ""}>
      <input
        name="query"
        className="w-96 rounded-lg border border-stone-500 bg-stone-600 py-1 pl-3 pr-10 text-stone-100 shadow-2xl focus:outline-none"
        placeholder="Search..."
      />
      <div className="absolute right-2 flex h-5 items-center border-l border-stone-500 pl-2">
        <IoSearchOutline
          size={"20px"}
          className="text-stone-100 hover:cursor-pointer hover:text-stone-300"
        />
      </div>
    </form>
  );
}
