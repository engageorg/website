import React from "react";
import "./style.css"
import { useThemeContext } from "../../state/Theme";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoIcon } from "./Icon"

export const links = ["Product", "Explore", "Resources"];

const Navbar = () => {
  const { theme } = useThemeContext();

  return (
    <motion.div 
    initial={{
      opacity: 0,
      y: -40 ,
    }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.4,
      ease: 'easeIn',
    }}
    className = "nav-container"
    >
    <div className = "nav-links">
     <div className = "nav-logo">
     <LogoIcon name = { theme === "dark" ? "day" : "night"} />
     </div>
     <div className = "nav-options">
     {links.map((link) => (
        <div className = "nav-option">
           <div className = "nav-option-text">{link} </div>
           
        </div>
      ))}
      {/* <li>
        <button onClick={toggleTheme}>
          <ThemeIcon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li> */}
     </div>
    </div>
    </motion.div>
  );
};

export default Navbar;

