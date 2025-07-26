import { menuItems } from "../data/menuItems";

const Sidebar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeMenuItem,
  onMenuClick,
}) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full z-50 transition-all duration-300 ${
        isMenuOpen ? "w-64" : "w-16"
      }`}
      onMouseEnter={() => setIsMenuOpen(true)}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div
        className={`h-full bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-90"
        }`}
      >
        {isMenuOpen && (
          <div className="p-4 border-b border-gray-700 animate-fade-in">
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white font-medium">Artur</span>
            </div>
          </div>
        )}

        <div className="py-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => onMenuClick(item.label)}
              className={`flex items-center px-4 py-3 hover:bg-blue-600/20 cursor-pointer transition-all duration-200 ${
                activeMenuItem === item.label
                  ? "bg-blue-600/30 border-r-2 border-blue-500"
                  : ""
              }`}
            >
              <item.icon className="w-6 h-6 text-white" />
              {isMenuOpen && (
                <span className="ml-4 text-white font-medium animate-fade-in">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>

        {isMenuOpen && (
          <div className="absolute bottom-4 left-4 right-4 space-y-2 animate-fade-in">
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Language
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Get Help
            </div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">
              Exit
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
