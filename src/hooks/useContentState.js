import { useState, useEffect } from "react";
import { sampleData } from "../data/dampleData";

export const useContentState = () => {
  const [featuredContent, setFeaturedContent] = useState(null);
  const [trendingContent, setTrendingContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    let sortedTrending = [...sampleData.TendingNow];

    const lastViewedId = sessionStorage.getItem("lastViewedMovieId");
    if (lastViewedId) {
      const lastViewedIndex = sortedTrending.findIndex(
        (item) => item.Id === lastViewedId
      );
      if (lastViewedIndex > -1) {
        const lastViewed = sortedTrending.splice(lastViewedIndex, 1)[0];
        sortedTrending.unshift(lastViewed);
        setFeaturedContent(lastViewed);
      }
    } else {
      setFeaturedContent(sampleData.Featured);
    }

    setTrendingContent(sortedTrending);
    setFilteredContent(sortedTrending);
  }, []);

  const updateFeaturedContent = (movie) => {
    setFeaturedContent(movie);
    sessionStorage.setItem("lastViewedMovieId", movie.Id);
  };

  return {
    featuredContent,
    trendingContent,
    filteredContent,
    setFilteredContent,
    updateFeaturedContent,
  };
};
