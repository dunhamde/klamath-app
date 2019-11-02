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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  border: 12px solid blue;
  height: 432px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  ul {
    display: flex;
  }
  li {
    background-color: orange;
    list-style: none;
    border: 2px solid black;
    padding: 12px;
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
