import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const TrendingSection = ({
  isSearchActive,
  filteredContent,
  carouselIndex,
  onMovieClick,
  onNextSlide,
  onPrevSlide,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-6">
        {isSearchActive
          ? `Search Results (${filteredContent.length})`
          : "Trending Now"}
      </h2>
      <div className="relative">
        {carouselIndex > 0 && (
          <button
            onClick={onPrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${carouselIndex * 200}px)` }}
          >
            {filteredContent.map((movie) => (
              <MovieCard
                key={movie.Id}
                movie={movie}
                onClick={() => onMovieClick(movie)}
              />
            ))}
          </div>
        </div>

        {carouselIndex < filteredContent.length - 8 && (
          <button
            onClick={onNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingSection;
