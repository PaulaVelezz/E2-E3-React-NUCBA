import React from 'react'
import styled from "styled-components";
import { LinksContainer, NavbarContainerStyled, NaviconStyled } from './NavbarStyles'
import {NavLink} from 'react-router-dom';
import {HiOutlineHome} from "react-icons/hi";
import {BsListCheck} from "react-icons/bs";
import {TbPokeball} from "react-icons/tb";



const NavLinkStyled = styled(NavLink)`
  color:#242424;
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 5px;
  border: solid 1px #242424;
  display: flex;
  gap: 7px;
  padding: 5px;
  &.active {
    border:  1px solid #974983;
    color: #974983;
  }
`;


const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <LinksContainer>
        <NavLinkStyled to="/" >
            Home
            <NaviconStyled><HiOutlineHome/></NaviconStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/todoapp" >
            ToDo
            <NaviconStyled><BsListCheck/></NaviconStyled>
        </NavLinkStyled>

        <NavLinkStyled to="/pokesuki" >
            Poke
            <NaviconStyled><TbPokeball/></NaviconStyled>
        </NavLinkStyled>
        </LinksContainer>
    </NavbarContainerStyled>
  );
};

export default Navbar;