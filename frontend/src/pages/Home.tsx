import React, { useEffect, useRef, useState } from "react";
import NavBar from "../cmps/nav/NavBar";
import { search } from "../services/mocks/mock-search-result";
import { SearchQuery, SearchResults } from "../models/search/search-result";
import QuizletList from "../cmps/quizlet/quizlet-list";
import QuizletListItem from "../cmps/quizlet/quizlet-list-item";
import SearchResultCard from "../cmps/search/SearchResultCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResults>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const onOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleKeyDown = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(ev.target.value);
  };

  const handleSearch = () => {
    setSearchResults(search({ query: searchQuery } as SearchQuery));
  };

  const handleSubmit = (ev: React.SyntheticEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSearchResults(search({ query: searchQuery } as SearchQuery));
  };

  return (
    <>
      <NavBar
        isMenuOpen={isMenuOpen}
        menuRef={menuRef}
        onOpenMenu={onOpenMenu}
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />

      <div
        className={`${isMenuOpen ? "duration-300 sm:ml-0 sm:blur-none sm:transition-none md:ml-60 md:blur-sm md:transition-all" : ""}`}
      >
        {searchResults.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-6 p-6">
            <QuizletList>
              {searchResults.map((res) => (
                <QuizletListItem
                  key={res.title}
                  className="mt-5 overflow-hidden rounded-lg bg-stone-700/20 p-4 text-white shadow-customCard transition-transform duration-300 hover:scale-105"
                >
                  <SearchResultCard
                    title={res.title}
                    description={res.description}
                    tags={res.tags}
                    difficulty={res.difficulty}
                    imageUrl={res.imageUrl}
                  />
                </QuizletListItem>
              ))}
            </QuizletList>
          </div>
        ) : (
          <p className="mt-10 text-center text-gray-400">No results found.</p>
        )}
      </div>
    </>
  );
}
