import { useState, useEffect } from "react";

export const useSearch = (trendingContent, setFilteredContent) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredContent(trendingContent);
    } else {
      const filtered = trendingContent.filter(
        (item) =>
          item.Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.Category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredContent(filtered);
    }
  }, [searchQuery, trendingContent, setFilteredContent]);

  const activateSearch = () => {
    setIsSearchActive(true);
  };

  const deactivateSearch = () => {
    setIsSearchActive(false);
    setSearchQuery("");
  };

  return {
    searchQuery,
    setSearchQuery,
    isSearchActive,
    activateSearch,
    deactivateSearch,
  };
};
