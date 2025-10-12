import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaGithub, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="nav-container">
        <Link to="/" className="logo">
          <FaShieldAlt className="logo-icon" />
          <span>IoT-AI Public Safety</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
          <a 
            href="https://github.com/Nithish-o7/IoT-AI-Public-Safety" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
          
          {/* Theme Toggle Button */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDarkMode ? 0 : 180 }}
              transition={{ duration: 0.5 }}
            >
              {isDarkMode ? <FaMoon /> : <FaSun />}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
