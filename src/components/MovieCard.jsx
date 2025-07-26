import { Play } from "lucide-react";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div
      className="flex-shrink-0 w-48 mr-4 cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={movie.CoverImage}
          alt={movie.Title}
          className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <h3 className="text-white font-semibold text-sm">{movie.Title}</h3>
          <p className="text-gray-300 text-xs">
            {movie.Category} • {movie.ReleaseYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
