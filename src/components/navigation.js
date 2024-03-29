import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label'>Menu</div>
            <ul className='nav-links'>
              <li>
                <NavLink to='/our-vision' exact>
                  Our Vision
                </NavLink>
              </li>
              <li>
                <NavLink to='/approach' exact>
                  Our Approach
                </NavLink>
              </li>
              <li>
                <NavLink to='/services' exact>
                  Our Product
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/audit' exact>
                    See Demo online
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Headquarter</li>
                <li>Engage Education's Office</li>
                <li>Dighi Hills</li>
                <li>Pune</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Phone</li>
                <li>+91 6394644323</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>engagedstudies@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
