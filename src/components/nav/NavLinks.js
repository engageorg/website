import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMenuContext, useThemeContext } from "../../state";
import { ThemeIcon } from "../Icon";


export const links = ["Product", "Explore", "Resources"];


const DesktopNavLinks = () => {
  const { closeMenu } = useMenuContext();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <NavLinksWrapper className="nav-links">
      {links.map((link) => (
        <li key={link}>
          <NavLink to={`/${link}`} className="link" onClick={closeMenu}>
            {link}
          </NavLink>
        </li>
      ))}
      <li>
        <button onClick={toggleTheme}>
          <ThemeIcon name={theme === "dark" ? "day" : "night"} />
        </button>
      </li>
    </NavLinksWrapper>
  );
};

export default DesktopNavLinks;

const NavLinksWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  
  li:not(:last-child) {
    margin-left: auto;
    margin-top: auto;
    font-size: 35px;
    
  }

  li:last-child {
    margin-left: auto;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    li {
      padding: 12px;
      margin: 0 !important;
    }
  }
`;

export const NavLink = styled(Link)`
  position: relative;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  color: var(--text);
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 0;
    background: var(--text);
    transition: width 150ms linear;
  }
  &:hover::before {
    width: 100%;
  }
`;
