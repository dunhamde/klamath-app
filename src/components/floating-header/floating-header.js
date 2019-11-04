import React, { Fragment } from 'react'
import styled from 'styled-components'
import HeaderLogoSource from './../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import FloatingHeaderLinksList from './fh-links-list.js'

const HeaderLogo = styled.img`
  align-self: center;
  width: 80%;
`

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  border: 1px solid blue;
  height: 432px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  ul {
    display: flex;

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
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: black 2px 2px;
  }
  a:hover {
    color: rgba(221, 133, 0, 0.7);

    ::before {
      content: '♥';
    }
  }
`

const SiteNavigationList = styled(FloatingHeaderLinksList)`
  display: flex;
  height: 100px;
  background-color: red;
`

export const TopHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderLogo src={HeaderLogoSource} />
        <SiteNavigationList />
      </HeaderContainer>
    </Fragment>
  )
}

export default TopHeader
