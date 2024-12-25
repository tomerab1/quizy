import { IoMdMenu } from "react-icons/io";
import Menu from "./Menu";
import MenuItems from "./MenuItems";
import MenuItem from "./MenuItem";
import React from "react";

interface DropDownMenuProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  onOpenMenu: () => void;
  items: { label: string; href?: string; icon?: React.ReactElement }[];
}

export default function DropDownMenu({
  items,
  isMenuOpen,
  menuRef,
  onOpenMenu,
}: DropDownMenuProps) {
  return (
    <Menu menuRef={menuRef}>
      <button
        type="button"
        onClick={onOpenMenu}
        className={`flex items-center justify-center p-2 text-gray-400 focus:outline-none ${isMenuOpen ? "translate-x-16 transition-all duration-300" : ""}`}
      >
        <IoMdMenu className="h-6 w-6" />
      </button>

      <div
        className={`absolute left-0 top-full h-screen w-56 transform bg-stone-800/20 shadow-customCard transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 overflow-visible opacity-100"
            : "-translate-x-full overflow-hidden opacity-0"
        }`}
      >
        <MenuItems isOpen={isMenuOpen}>
          {items.map((item, i) => (
            <MenuItem
              key={i}
              className="px-5 py-4 font-semibold text-stone-300"
            >
              <div className="flex items-center">
                {item.icon}
                <a href={item.href || "#"}>{item.label}</a>
              </div>
            </MenuItem>
          ))}
        </MenuItems>
      </div>
    </Menu>
  );
}
