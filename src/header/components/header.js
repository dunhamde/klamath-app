import React, { Fragment } from 'react'
import styled from 'styled-components'
import BannerImgSource from './../../../public/klamathtribes1200.png'
import HeaderBackgroundImgSource from '../../../public/headerpic2.jpg'
import SiteNavLinks from './site-nav-links.js'

const BannerImg = styled.img`
  position: absolute;
  justify-self: center;
`

const HeaderBackgroundImg = styled.img`
  flex: 1;
`

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  li {
    background-color: blue;
  }
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBackgroundImg src={HeaderBackgroundImgSource} />
        <BannerImg src={BannerImgSource} />
      </HeaderContainer>
      <SiteNavLinks />
    </Fragment>
  )
}

export default SiteHeader
