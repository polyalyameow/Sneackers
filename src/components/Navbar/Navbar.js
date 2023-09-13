import React from 'react';
import { FaBars } from "react-icons/fa";

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavSvgIcon,
    MobileIcon,
    NavMenu,
    NavLink,
    NavbarInfo,
    NavBasket,
    NavAvatar
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
    
    <Nav>
    <NavbarContainer>
          <NavLogo to="/">
            <NavSvgIcon />
          </NavLogo>
          {/* adding mobile icon */}
          <MobileIcon>
            <FaBars /> {/*icons from react icons*/}
          </MobileIcon>
          <NavMenu> 
            <NavLink to="collections">Collections</NavLink>
            <NavLink to="men">Men</NavLink>
            <NavLink to="women">Women</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </NavMenu>
        </NavbarContainer>
        <NavbarInfo>
            <NavBasket />
            <NavAvatar />
        </NavbarInfo>
    </Nav>
    </>
  )
}

export default Navbar;