import React, { useState } from 'react'
import styled from 'styled-components'

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

export const Menu = () => {
  const [menuOpen, setMenuState] = useState(false)
  return (
    <HamburgerMenu
      onClick={() => setMenuState(!menuOpen)}
      menuOpen={menuOpen}
    >
      <div />
      <div />
      <div />
    </HamburgerMenu>
  )
}

export default Menu
