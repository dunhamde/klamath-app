import React from 'react'
import styled from 'styled-components'
import HeaderLogoSource from '../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'

const HeaderLogo = styled.img`
  align-self: flex-start;
  @media (min-width: 1000px) {
    align-self: center;
  }
`

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
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

export const HamburgerMenu = styled.div`
  div {
    width: 35px;
    height: 5px;
    background-color: black;
    margin: 6px 0;
  }
`

export const MobileHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={HeaderLogoSource} />
      <HamburgerMenu>
        <div />
        <div />
        <div />
      </HamburgerMenu>
    </HeaderContainer>
  )
}

export default MobileHeader
