import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import { IoClose } from "react-icons/io5";
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem";
import React from "react";

interface DropDownMenuProps {
  isOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  toggleMenu: () => void;
  items: { label: string; href?: string }[];
}

export default function DropDownMenu({
  isOpen,
  menuRef,
  toggleMenu,
  items,
}: DropDownMenuProps) {
  return (
    <div className="flex items-center" ref={menuRef}>
      <Menu>
        <button
          type="button"
          onClick={toggleMenu}
          className="flex items-center justify-center p-2 text-gray-400 focus:outline-none"
        >
          <span
            className={`transition-transform duration-300 ease-in ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          >
            {!isOpen ? (
              <IoMdMenu className="h-6 w-6" />
            ) : (
              <IoClose className="h-6 w-6" />
            )}
          </span>
        </button>

        <MenuItems
          isOpen={isOpen}
          className={`absolute right-0 mr-5 mt-1 w-48 rounded-md bg-stone-600 py-1 shadow-lg ${isOpen ? "opacity-85" : ""}`}
        >
          {items.map((item) => (
            <MenuItem className="mx-2 border-b border-stone-500 pb-2 pl-3 pt-2 text-stone-100 last:border-0 hover:cursor-pointer hover:text-stone-400">
              <a href={item.href || "#"}>{item.label}</a>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
