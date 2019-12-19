import React, { useState } from 'react'
import styled from 'styled-components'
import FloatingHeaderLinksList from '../floating-header/fh-links-list'

export const HamburgerMenu = styled.div`
  div {
    width: 35px;
    height: 5px;
    background-color: rgba(221, 133, 0, 0.7);
    margin: 6px 0;
  }

  /* Rotate the first bar */
  div:first-child {
    -webkit-transform: ${props =>
      props.menuOpen && 'rotate(-45deg) translate(-9px, 6px)'};
    transform: ${props =>
      props.menuOpen && 'rotate(-45deg) translate(-9px, 6px)'};
  }

  /* Fade out the second bar */
  div:nth-child(2) {
    opacity: ${props => props.menuOpen && 0};
  }

  /* Rotate last bar */
  div:nth-child(3) {
    -webkit-transform: ${props =>
      props.menuOpen && 'rotate(45deg) translate(-8px, -8px)'};
    transform: ${props =>
      props.menuOpen && 'rotate(45deg) translate(-8px, -8px)'};
  }
`

export const SideNavigation = styled.div`
  height: 100%;
  width: ${props => (props.menuOpen ? '250px' : '0')}
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;

  a {
    padding: 8px 8px 8px 32px;
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
        <FloatingHeaderLinksList />
      </SideNavigation>
    </>
  )
}

export default Menu
