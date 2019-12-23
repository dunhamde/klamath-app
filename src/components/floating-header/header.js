import React from 'react'
import styled from 'styled-components'
import HeaderLogoSource from '../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import NavigationLinks, {
  NavigationLinksList,
  LinkSectionListItem,
  Dropdown,
  LinkContainer,
  DropdownLinksList,
  DropdownContent,
} from './navigation-links'

const HeaderLogo = styled.img`
  align-self: flex-start;
  @media (min-width: 1000px) {
    align-self: center;
  }
`

const HeaderContainer = styled.div`
  /* Header background and container styling */

  box-sizing: border-box;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  border: 1px solid blue;
  height: 303px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  /* Header links lists and list items */

  ${NavigationLinksList} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: 0;
    text-align: center;

    ${LinkSectionListItem}:first-child {
      border-left: 0;
    }
  }

  ${LinkSectionListItem} {
    list-style: none;
    border-left: 2px solid black;
  }

  /* Header dropdown menus */

  ${LinkContainer} {
    padding: 0 12px;
  }

  ${DropdownLinksList} {
  }

  ${DropdownContent} {
    display: none;
    flex-direction: column;
    position: absolute;
    background: lightblue;
    z-index: 1;
  }

  ${Dropdown}:hover ${DropdownContent} {
    display: flex;
  }

  /* Header links */

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
  a::after {
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
  a:hover::after {
    transform: rotateY(180deg);
  }

  /* Media queries */

  @media (min-width: 1000px) {
    display: flex;
  }
`

export const TopHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={HeaderLogoSource} />
      <NavigationLinks />
    </HeaderContainer>
  )
}

export default TopHeader
