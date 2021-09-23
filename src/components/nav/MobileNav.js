import React from "react";
import styled from "styled-components";
import { useMenuContext } from "../../state";
import { useScrollFreeze } from "../../hooks";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";


const MobileNavbar = () => {
  const { isMenuOpen } = useMenuContext();
  useScrollFreeze(isMenuOpen);
  return (
    <div>
      {isMenuOpen && (
        <motion.div 
        initial={{
          y: -100 ,
        }}
        animate={{ opacity: 1, y: 400 }}
        transition={{
          duration: 1,
          ease: 'easeIn',
        }}
        >
        <MobileNav>
          <NavLinks />
        </MobileNav>
        </motion.div>
      )}
    </div>
  );
};

export default MobileNavbar;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
`;
