import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
import FeaturedContent from "./components/FeaturedContent";
import TrendingSection from "./components/TreadingSection";
import { formatDuration } from "./util/formatDuration";

import { getBackgroundStyle } from "./util/bacgroundStyles";
import { filterContentByCategory } from "./util/contentFilters";
import { useContentState } from "./hooks/useContentState";
import { useSearch } from "./hooks/useSearch";
import { useVideoPlayer } from "./hooks/useVidioPlayer";
import { useCarousel } from "./hooks/useCarousel";
import { useMenu } from "./hooks/useMenu";

const App = () => {
  const {
    featuredContent,
    trendingContent,
    filteredContent,
    setFilteredContent,
    updateFeaturedContent,
  } = useContentState();

  const {
    searchQuery,
    setSearchQuery,
    isSearchActive,
    activateSearch,
    deactivateSearch,
  } = useSearch(trendingContent, setFilteredContent);

  const { carouselIndex, nextSlide, prevSlide, resetCarousel } = useCarousel();

  const { isVideoPlaying, startVideo } = useVideoPlayer();

  const { isMenuOpen, setIsMenuOpen, activeMenuItem, setActiveMenu } =
    useMenu();

  const handleMovieClick = (movie) => {
    updateFeaturedContent(movie);
    startVideo();
  };

  const handleMenuClick = (menuItem) => {
    setActiveMenu(menuItem);

    if (menuItem === "Search") {
      activateSearch();
    } else {
      deactivateSearch();

      if (menuItem === "Movies" || menuItem === "TV Shows") {
        const filtered = filterContentByCategory(trendingContent, menuItem);
        setFilteredContent(filtered);
      } else if (menuItem === "Home") {
        setFilteredContent(trendingContent);
      }
    }

    resetCarousel();
  };

  const handleNextSlide = () => {
    nextSlide(filteredContent.length);
  };

  const renderBackground = () => {
    const backgroundStyle = getBackgroundStyle(isVideoPlaying, featuredContent);

    return (
      <div className="absolute inset-0">
        {isVideoPlaying && featuredContent?.VideoUrl ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src={
                featuredContent?.VideoUrl ||
                "https://www.w3schools.com/html/mov_bbb.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={backgroundStyle}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {renderBackground()}

      <Sidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeMenuItem={activeMenuItem}
        onMenuClick={handleMenuClick}
      />

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="relative z-10 p-8">
          {isSearchActive && (
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}

          {featuredContent && !isSearchActive && (
            <FeaturedContent
              content={featuredContent}
              onPlayClick={handleMovieClick}
              formatDuration={formatDuration}
            />
          )}

          <TrendingSection
            isSearchActive={isSearchActive}
            filteredContent={filteredContent}
            carouselIndex={carouselIndex}
            onMovieClick={handleMovieClick}
            onNextSlide={handleNextSlide}
            onPrevSlide={prevSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
