import React, { useState } from 'react'
import styled from 'styled-components'
import NavigationLinks from '../floating-header/navigation-links'

export const HamburgerMenu = styled.div`
  padding-right: 12px;

  div {
    width: 35px;
    height: 5px;
    background-color: rgba(221, 133, 0, 0.7);
    margin: 6px 0;
  }

  div:first-child {
    -webkit-transform: ${props =>
      props.menuOpen && 'rotate(-45deg) translate(-9px, 6px)'};
    transform: ${props =>
      props.menuOpen && 'rotate(-45deg) translate(-9px, 6px)'};
  }

  div:nth-child(2) {
    opacity: ${props => props.menuOpen && 0};
  }

  div:nth-child(3) {
    -webkit-transform: ${props =>
      props.menuOpen && 'rotate(45deg) translate(-8px, -8px)'};
    transform: ${props =>
      props.menuOpen && 'rotate(45deg) translate(-8px, -8px)'};
  }
`
export const CloseButton = styled.a`
  font-family: Verdana, sans-serif;
`

export const SideNavigation = styled.div`
  height: 100%;
  width: ${props => (props.menuOpen ? '250px' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  ${CloseButton} {
    position: absolute;
    top: 0;
    left: 24px;
    font-size: 36px;
  }

  ul {
    list-style: none;
  }

  a {
    padding: 12px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }

  a:hover {
    color: #f1f1f1;
  }
`

export const Menu = () => {
  const [menuOpen, setMenuState] = useState(false)
  return (
    <>
      <HamburgerMenu
        onClick={() => setMenuState(!menuOpen)}
        menuOpen={menuOpen}
      >
        <div />
        <div />
        <div />
      </HamburgerMenu>
      <SideNavigation menuOpen={menuOpen}>
        <CloseButton onClick={() => setMenuState(false)}>
          ×
        </CloseButton>
        <NavigationLinks />
      </SideNavigation>
    </>
  )
}

export default Menu
