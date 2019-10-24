import React, { Fragment } from 'react'
import styled from 'styled-components'
import BannerImgSource from './../../../public/klamathtribes1200.png'
import HeaderBackgroundImgSource from '../../../public/headerpic2.jpg'

const BannerImg = styled.img`
  // background-color: #d33a2c;
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
`

const SiteNavigationList = styled.ul``

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBackgroundImg src={HeaderBackgroundImgSource} />
        <BannerImg src={BannerImgSource} />
        <SiteNavigationList>
          <li>Home</li>
          <li>News And Events</li>
          <li>Tribal Departments</li>
          <li>Employment</li>
          <li>Language</li>
          <li>Tribal History</li>
          <li>Tribal Permits And Schedules</li>
          <li>Contact Us</li>
        </SiteNavigationList>
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
