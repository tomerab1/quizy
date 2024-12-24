export interface SearchResult {
    title: string;
    description: string;
    tags: string[];
    difficulty: string;
    imageUrl: string;
}

export interface SearchQuery {
    query: string
}

export type SearchResults = SearchResult[];
