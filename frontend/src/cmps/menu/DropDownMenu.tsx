import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { IoClose } from "react-icons/io5";
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem";
import { useEffect, useRef, useState } from "react";

interface DropDownMenuProps {
  items: { label: string; href?: string }[];
}

export default function DropDownMenu({ items }: DropDownMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const onOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Menu menuRef={menuRef}>
      <button
        type="button"
        onClick={onOpenMenu}
        className="flex items-center justify-center p-2 text-gray-400 focus:outline-none"
      >
        <span
          className={`transition-transform duration-300 ease-in ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {!isMenuOpen ? (
            <IoMdMenu className="h-6 w-6" />
          ) : (
            <IoClose className="h-6 w-6" />
          )}
        </span>
      </button>

      <MenuItems
        isOpen={isMenuOpen}
        className={`absolute right-0 mr-5 mt-1 w-48 rounded-md bg-stone-600 py-1 shadow-customCard ${isMenuOpen ? "opacity-85" : ""}`}
      >
        {items.map((item, i) => (
          <MenuItem
            key={i}
            className="mx-2 border-b border-stone-500 pb-5 pl-3 pt-2 font-sans text-stone-100 last:border-0 hover:cursor-pointer hover:text-stone-300"
          >
            <a href={item.href || "#"}>{item.label}</a>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
