import { Play, Info } from "lucide-react";

const FeaturedContent = ({ content, onPlayClick, formatDuration }) => {
  return (
    <div className="mb-16">
      <div className="max-w-2xl">
        <div className="text-gray-300 text-sm uppercase tracking-wider mb-2">
          {content.Category}
        </div>
        <h1 className="text-6xl font-bold mb-4 text-white">
          {content.Title.toUpperCase()}
        </h1>
        <div className="flex items-center space-x-4 text-gray-300 mb-6">
          <span>{content.ReleaseYear}</span>
          <span>{content.MpaRating}</span>
          <span>{formatDuration(parseInt(content.Duration))}</span>
        </div>
        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          {content.Description}
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => onPlayClick(content)}
            className="flex items-center px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-semibold"
          >
            <Play className="w-5 h-5 mr-2" />
            Play
          </button>
          <button className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold">
            <Info className="w-5 h-5 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;
