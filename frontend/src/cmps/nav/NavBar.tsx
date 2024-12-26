import Title from "./Title";
import SearchBar from "../search/SearchBar";
import DrawerMenu from "../menu/DrawerMenu";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { GoSignOut } from "react-icons/go";

interface NavBarProps {
  isMenuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
  onOpenMenu: () => void;
  onKeyDown: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSubmit: (ev: React.SyntheticEvent<HTMLFormElement>) => void;
}

export default function NavBar({
  onKeyDown,
  onSearch,
  onSubmit,
  onOpenMenu,
  isMenuOpen,
  menuRef,
}: NavBarProps) {
  return (
    <nav
      className={`sticky top-0 z-[999] flex h-16 items-center bg-stone-800/20 px-4 shadow-custom backdrop-blur-sm`}
    >
      <DrawerMenu
        isMenuOpen={isMenuOpen}
        onOpenMenu={onOpenMenu}
        menuRef={menuRef}
        items={[
          {
            label: "Profile",
            icon: <CgProfile className="mr-2" />,
          },
          { label: "Settings", icon: <CiSettings className="mr-2" /> },
          { label: "Sign-out", icon: <GoSignOut className="mr-2" /> },
        ]}
      />
      <Title
        title="Quizy"
        className={`${isMenuOpen ? "duration-300 sm:translate-x-0 sm:transition-none md:translate-x-44 md:transition-all" : ""}`}
      />

      <div
        className={`flex flex-1 justify-center ${isMenuOpen ? "duration-300 sm:ml-0 sm:transition-none md:ml-60 md:transition-all" : ""}`}
      >
        <SearchBar
          onChange={onKeyDown}
          onSearch={onSearch}
          onSubmit={onSubmit}
          className="relative flex w-full max-w-lg items-center"
        />
      </div>
    </nav>
  );
}
