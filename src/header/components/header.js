import React, { Fragment } from 'react'
import styled from 'styled-components'
import HeaderBannerSource from './../../../public/klamathtribes1200.png'
import HeaderLogoSource from '../../../public/headerpic2.jpg'
import HeaderLinksList from './header-links-list.js'

const HeaderLogo = styled.img`
  position: relative;
  z-index: 1;
  // justify-self: center;
`

const HeaderBannerImg = styled.img`
  // flex: 1;
  // z-index: -1;
  position: absolute;
`

const HeaderContainer = styled.div`
  position: absolute;
  max-width: 100%;
  // height: 144px
  height: 432px;
`

const SiteNavigationList = styled(HeaderLinksList)`
  display: flex;
  height: 100px;
  background-color: red;
  li {
    background-color: orange;
    list-style: none;
    border: 2px solid black;
    padding: 12px;
  }
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBannerImg src={HeaderBannerSource} />
        <HeaderLogo src={HeaderLogoSource} />
        <SiteNavigationList />
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
