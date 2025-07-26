const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="mb-8">
      <div className="max-w-md">
        <input
          type="text"
          placeholder="Search movies and TV shows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default SearchBar;
