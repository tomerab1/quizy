import { useEffect, useRef, useState } from "react";
import Title from "./Title";
import DropDownMenu from "../menu/DropDownMenu";
import SearchBar from "../search/SearchBar";

export default function NavBar() {
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
    <nav className="sticky top-0 flex h-16 items-center bg-stone-800/20 px-4 opacity-95 shadow-custom backdrop-blur-sm">
      <Title title="Quizy" emoji="🤔" />
      <SearchBar className="relative m-auto flex items-center" />

      <DropDownMenu
        isOpen={isMenuOpen}
        toggleMenu={onOpenMenu}
        menuRef={menuRef}
        items={[
          { label: "Profile" },
          { label: "Settings" },
          { label: "Sign-out" },
        ]}
      />
    </nav>
  );
}
