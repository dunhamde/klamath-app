import React, { Fragment } from 'react'
import styled from 'styled-components'
import BannerImgSource from './../../../public/klamathtribes1200.png'
import HeaderBackgroundImgSource from '../../../public/headerpic2.jpg'

const BannerImg = styled.img`
  // background-color: #d33a2c;
  position: absolute;
`

const HeaderBackgroundImg = styled.img`
  flex: 1;
`

const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBackgroundImg src={HeaderBackgroundImgSource} />
        <BannerImg src={BannerImgSource} />
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
