import { IoSearchOutline } from "react-icons/io5";

interface SearchBarProps {
  className?: string;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSubmit: (ev: React.SyntheticEvent<HTMLFormElement>) => void;
}

export default function SearchBar({
  className,
  onSearch,
  onSubmit,
  onChange,
}: SearchBarProps) {
  return (
    <form className={className || ""} onSubmit={onSubmit}>
      <input
        onChange={onChange}
        name="query"
        className="w-96 rounded-lg border border-stone-500 bg-stone-600 py-1 pl-3 text-stone-100 shadow-custom focus:outline-none"
        placeholder="Search..."
      />
      <div className="relative right-10 flex items-center border-l border-stone-500 pl-2">
        <IoSearchOutline
          size={"20px"}
          className="text-stone-100 duration-300 ease-in-out hover:-translate-y-0.5 hover:cursor-pointer hover:text-stone-300"
          onClick={onSearch}
        />
      </div>
    </form>
  );
}
