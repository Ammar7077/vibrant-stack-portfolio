import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const menuItems = [
    { label: "Home", to: "hero" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
    >
      <nav className="container mx-auto px-4 py-4">
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
                duration={500}
                className="text-sm font-medium cursor-pointer hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;