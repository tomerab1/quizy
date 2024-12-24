import { useState } from "react";
import NavBar from "../cmps/nav/NavBar";
import { search } from "../services/mocks/mock-search-result";
import { SearchQuery, SearchResults } from "../models/search/search-result";
import QuizletList from "../cmps/quizlet/quizlet-list";
import QuizletListItem from "../cmps/quizlet/quizlet-list-item";
import SearchResultCard from "../cmps/search/SearchResultCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResults>([]);

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
        onKeyDown={handleKeyDown}
        onSearch={handleSearch}
        onSubmit={handleSubmit}
      />

      {searchResults.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6 p-6">
          <QuizletList>
            {searchResults.map((res) => (
              <QuizletListItem
                key={res.title}
                className="shadow-customCard mt-5 overflow-hidden rounded-lg bg-stone-700/20 p-4 text-white transition-transform duration-300 hover:scale-105"
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
    </>
  );
}
