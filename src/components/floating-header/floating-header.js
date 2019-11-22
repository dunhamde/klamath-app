import React from 'react'
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu'
import HeaderLogoSource from '../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import FloatingHeaderLinksList from './fh-links-list'

const HeaderLogo = styled.img`
  align-self: flex-start;
  @media (min-width: 1000px) {
    align-self: center;
  }
`

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  border: 1px solid blue;
  height: 63px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  ul {
    display: none;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    text-align: center;

    li:first-child {
      border-left: 0;
    }
  }

  li {
    list-style: none;
    border-left: 2px solid black;
    padding: 12px;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: black 2px 2px;
    overflow: hidden;
    cursor: pointer;
  }
  a:hover {
    color: rgba(221, 133, 0, 0.7);
  }
  li::after {
    margin-top: 2px;
    content: '';
    width: 100%;
    height: 4px;
    background: rgba(221, 133, 0, 0.7);
    display: block;
    transform: rotateY(90deg);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  li:hover::after {
    transform: rotateY(180deg);
  }

  @media (min-width: 1000px) {
    height: 303px;
    ul {
      display: flex;
    }
  }
`

export const StyledBurgerMenu = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: absolute;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }  }
`

export const TopHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={HeaderLogoSource} />
      <FloatingHeaderLinksList />
      <StyledBurgerMenu>
        <Menu>
          <FloatingHeaderLinksList />
        </Menu>
      </StyledBurgerMenu>
    </HeaderContainer>
  )
}

export default TopHeader
