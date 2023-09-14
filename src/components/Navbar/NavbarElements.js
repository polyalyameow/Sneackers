import styled from 'styled-components';
import {ReactComponent as logo} from ".././../images/logo.svg";
import  avatar from "../../images/image-avatar.jpg";
import {ReactComponent as basket} from "../../images/icon-cart.svg";
import {Link as LinkR} from 'react-router-dom'; 



export const NavLogo = styled(LinkR)`
    cursor: pointer;
    /* border: 2px solid red; */
    height: 20px;  
    width: 137.5px;
`

export const NavSvgIcon = styled(logo)`
    height: 20px;  
    width: 137.5px;
    /* border: 2px solid rosybrown; */
`

export const MobileIcon = styled.div`
    display: none;
`

export const Nav = styled.nav`
   
    
    height: 50px;   
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid yellow;
`
export const NavbarContainer = styled.div`
    max-width: 620px;
    width: 100%;
    max-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid firebrick; */
`

export const NavMenu = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    /* border: 2px solid yellowgreen; */
    
`

export const NavLink = styled(LinkR)`
   
    text-decoration: none;
    cursor: pointer;
    font-family: 'Kumbh Sans', sans-serif;;
    font-size: 15px;
    line-height: 26px;
    color: #69707D;
    transition: all 0.2s ease-in-out;
    /* border: 1px solid fuchsia; */
    align-self: center;
    padding-right: 33px;
    
   
    

    &:hover{
        transition: all 0.2s ease-in-out;
        text-decoration: underline #FF7E1B;
        text-decoration-thickness: 3px;
        text-underline-offset: 41px;
        color: black;
        
    }
`
export const NavbarInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100px;
    justify-content: space-between;
    /* border: 2px solid salmon; */
    
`
export const NavBasket = styled(basket)`
    height: 20px;  
    width: 21.82px;
    transition: all 0.2s ease-in-out;

    &:hover{
        stroke: black;
        stroke-width: 0.5;
        height: 22px; 
        transition: all 0.2s ease-in-out;
    }
`

export const NavAvatar = styled.img.attrs({
    src: `${avatar}`
  })`
    height: 50px;  
    width: 50px;
    transition: all 0.1s ease-in-out;

    &:hover{
        transition: all 0.1s ease-in-out;
        border: 2px solid #FF7E1B;
        border-radius: 50%;
    }
`

