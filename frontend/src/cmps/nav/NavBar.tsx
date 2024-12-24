import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import Menu from "../menu/Menu";
import MenuItem from "../menu/MenuItem";
import MenuItems from "../menu/MenuItems";
import NavBarItem from "./NavBarItem";
import Title from "./Title";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="shadow-custom sticky top-0 flex h-16 items-center bg-stone-800/20 px-4 opacity-95 backdrop-blur-sm">
      <Title title="Trivia Game" emoji="🤔" />
      <NavBarItem className="ml-auto mr-5 font-sans font-bold text-stone-100 hover:text-stone-400">
        <span>Home</span>
      </NavBarItem>

      <div className="flex items-center">
        <Menu>
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
            className={`absolute right-0 mr-5 mt-1 w-48 rounded-md bg-stone-600 py-1 shadow-lg ${isMenuOpen ? "opacity-85" : ""}`}
          >
            <MenuItem className="mx-4 border-b border-stone-500 pb-2 pt-2 text-stone-100 hover:cursor-pointer hover:text-stone-400">
              <a>Profile</a>
            </MenuItem>
            <MenuItem className="mx-4 border-b border-stone-500 pb-2 pt-2 text-stone-100 hover:cursor-pointer hover:text-stone-400">
              <a>Settings</a>
            </MenuItem>
            <MenuItem className="pb-2 pt-2 text-stone-100 hover:cursor-pointer hover:text-stone-400">
              <a>Sign out</a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
}
