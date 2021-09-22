import React from "react";
import styled from "styled-components";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Navbar = () => {
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
    >
    <Nav>
      <DesktopNav />
      <MobileNav />
    </Nav>
    </motion.div>
  );
};

export default Navbar;

const Nav = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
