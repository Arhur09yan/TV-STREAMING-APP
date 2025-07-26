import { useState } from "react";

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Home");

  const setActiveMenu = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return {
    isMenuOpen,
    setIsMenuOpen,
    activeMenuItem,
    setActiveMenu,
  };
};
