import React, { Fragment } from 'react'
import styled from 'styled-components'
import HeaderLogoSource from './../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import HeaderLinksList from './header-links-list.js'

const HeaderBannerImg = styled.img`
  position: absolute;
  z-index: 1;
`

const HeaderLogo = styled.img`
  z-index: 2;
  position: relative;
  height: auto;
  width: 80%;
`

const HeaderContainer = styled.div`
  max-width: 100%;
  border: 12px solid blue;
  height: 432px;
  background-image: url(${HeaderBannerSource});
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
        {/* <div>
          <HeaderBannerImg src={HeaderBannerSource} />
        </div> */}
        <HeaderLogo src={HeaderLogoSource} />
        <SiteNavigationList />
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
