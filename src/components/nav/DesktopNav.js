import React from "react";
import styled, { css } from "styled-components";
import { useMenuContext, useThemeContext } from "../../state";
import { Squash as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import { useScroll } from "../../hooks";
import { LogoIcon } from "../../../webiste/src/components/nav/Icon";


const DesktopNavbar = () => {
  const { theme } = useThemeContext();
  console.log(theme);
  const { isMenuOpen, toggleMenu } = useMenuContext();
  const { isScrolled } = useScroll();
  return (
    <DesktopNav isScrolled={isScrolled}>
      <LogoIcon name = { theme === "dark" ? "day" : "night"} />
      <NavLinks />
      <Hamburger toggled={isMenuOpen} toggle={toggleMenu} duration={0.5} />
    </DesktopNav>
  );
};

export default DesktopNavbar;

const DesktopNav = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  background: var(--bg);
  color: var(--text);
  transition: all 150ms linear;

  ${(props) =>
    props.isScrolled &&
    css`
      background: var(--headerBg);
      box-shadow: var(--headerBoxShadow);
    `}

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  padding: 0 60px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    padding: 0 30px;
  }

  .nav-links {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .hamburger-react {
    display: none;
    z-index: 99;
    & > div > div {
      background: var(--text) !important;
    }
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;
