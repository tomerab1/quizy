import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import DropDownMenu from "../menu/DropDownMenu";
import SearchBar from "../search/SearchBar";

interface NavBarProps {
  onKeyDown: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  onSubmit: (ev: React.SyntheticEvent<HTMLFormElement>) => void;
}

export default function NavBar({ onKeyDown, onSearch, onSubmit }: NavBarProps) {
  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center bg-stone-800/20 px-4 opacity-95 shadow-custom backdrop-blur-sm">
      <Title title="Quizy" />
      <SearchBar
        onChange={onKeyDown}
        onSearch={onSearch}
        onSubmit={onSubmit}
        className="relative m-auto flex items-center"
      />

      <DropDownMenu
        items={[
          { label: "Profile" },
          { label: "Settings" },
          { label: "Sign-out" },
        ]}
      />
    </nav>
  );
}
