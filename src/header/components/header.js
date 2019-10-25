import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import BannerImgSource from './../../../public/klamathtribes1200.png'
import HeaderBackgroundImgSource from '../../../public/headerpic2.jpg'

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
`

const SiteNavigationList = styled.ul``

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderBackgroundImg src={HeaderBackgroundImgSource} />
        <BannerImg src={BannerImgSource} />
      </HeaderContainer>
      <BrowserRouter>
        <SiteNavigationList>
          <li>
            <Link to="www.google.com">News And Events</Link>
          </li>
          <li>
            <Route path="">Tribal Departments</Route>
          </li>
          <li>
            <Route path="">Employment</Route>
          </li>
          <li>
            <Route path="">Tribal History</Route>
          </li>
          <li>
            <Route path="">Tribal Permits And Schedules</Route>
          </li>
          <li>
            <Route path="">Contact Us</Route>
          </li>
        </SiteNavigationList>
      </BrowserRouter>
    </Fragment>
  )
}

export default SiteHeader
