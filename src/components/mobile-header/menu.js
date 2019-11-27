import React, { useState } from 'react'
import styled from 'styled-components'

export const HamburgerMenu = styled.div`
  div {
    width: 35px;
    height: 5px;
    background-color: rgba(221, 133, 0, 0.7);
    margin: 6px 0;
  }
`

export const Menu = () => {
  const [menuOpen, setMenuState] = useState(0)
  return (
    <HamburgerMenu>
      <div />
      <div />
      <div />
    </HamburgerMenu>
  )
}

export default Menu
