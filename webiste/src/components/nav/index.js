import React from "react";
import "./style.css"
import { useThemeContext, useMenuContext } from "../../state";
import Hamburger from 'hamburger-react'
import { motion } from "framer-motion";
import { LogoIcon, ThemeIcon } from "./Icon"

export const links = ["Product", "Explore", "Resources"];

const Navbar = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { isMenuOpen, toggleMenu } = useMenuContext();
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
        <div key = {link} className = "nav-option">
           <div className = "nav-option-text">{link}</div>   
        </div>
      ))}
      
      <button className = "theme-icon" onClick={toggleTheme}>
          <ThemeIcon name = {theme === "dark" ? "day" : "night"} />
      </button>
      
      
     </div>
     <Hamburger duration={1} />
    </div>
    </motion.div>
  );
};

export default Navbar;

