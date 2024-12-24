import { SearchQuery, SearchResults } from "../../models/search/search-result";

const data: SearchResults = [
  {
    title: "History of Ancient Egypt",
    description: "Test your knowledge about the pharaohs, pyramids, and gods of ancient Egypt.",
    tags: ["History", "Ancient Civilizations"],
    difficulty: "Medium",
    imageUrl: "https://example.com/images/ancient-egypt.jpg"
  },
  {
    title: "Space Exploration",
    description: "Explore the milestones of space exploration, from Apollo missions to Mars rovers.",
    tags: ["Science", "Astronomy"],
    difficulty: "Hard",
    imageUrl: "https://example.com/images/space-exploration.jpg"
  },
  {
    title: "Famous Literary Works",
    description: "Match famous authors to their iconic books.",
    tags: ["Literature", "Arts"],
    difficulty: "Easy",
    imageUrl: "https://example.com/images/literature.jpg"
  },
  {
    title: "Basic Python Programming",
    description: "A beginner-friendly quiz on Python programming basics.",
    tags: ["Technology", "Programming"],
    difficulty: "Easy",
    imageUrl: "https://example.com/images/python.jpg"
  },
  {
    title: "World Geography Challenge",
    description: "Identify countries based on their capitals, flags, and landmarks.",
    tags: ["Geography", "Travel"],
    difficulty: "Medium",
    imageUrl: "https://example.com/images/geography.jpg"
  },
  {
    title: "Modern Art Movements",
    description: "Learn about key art movements of the 20th century and their pioneers.",
    tags: ["Art", "History"],
    difficulty: "Hard",
    imageUrl: "https://example.com/images/art.jpg"
  },
  {
    title: "Human Anatomy Basics",
    description: "Understand the basic structure and function of the human body.",
    tags: ["Biology", "Health"],
    difficulty: "Medium",
    imageUrl: "https://example.com/images/anatomy.jpg"
  },
  {
    title: "Music Genres Through the Ages",
    description: "Test your knowledge of different music genres and their evolution.",
    tags: ["Music", "History"],
    difficulty: "Easy",
    imageUrl: "https://example.com/images/music.jpg"
  },
  {
    title: "Climate Change and Its Impact",
    description: "Learn about the causes, effects, and solutions to climate change.",
    tags: ["Environment", "Science"],
    difficulty: "Hard",
    imageUrl: "https://example.com/images/climate-change.jpg"
  },
  {
    title: "Famous Scientific Discoveries",
    description: "Match discoveries to the scientists who made them.",
    tags: ["Science", "History"],
    difficulty: "Medium",
    imageUrl: "https://example.com/images/science.jpg"
  }
];

export function search(query: SearchQuery): SearchResults {
  return data.filter((item) =>
    item.title.toLowerCase().includes(query.query.toLowerCase())
  );
}
