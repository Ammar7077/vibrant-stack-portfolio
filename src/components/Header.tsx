
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { useIsMobile } from "../hooks/use-mobile";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { label: "Home", to: "hero" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="mr-4"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-4 p-2 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {isMenuOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4 pt-16 pb-4"
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.to}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={50}
                      className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </>
        ) : (
          <ul className="flex items-center justify-center gap-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.to}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={50}
                  className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
