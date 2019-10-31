import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopHeaderLinksList from './th-links-list.js'
import YouTubeLogo from '../../../public/youtube-logo-hd-8.png'
import FacebookLogo from '../../../public/fb-logo.png'

const HeaderContainer = styled.div`
  display: flex;
  max-width: 100%;
  background-color: green;
  height: 48px;
  ul {
    display: flex;
  }
  li {
    background-color: orange;
    list-style: none;
    border: 1px solid black;
    padding: 0 8px;
    margin: 0 4px;
  }
`

const SiteNavigationList = styled(TopHeaderLinksList)`
  height: 100px;
  background-color: red;
`
const SocialMediaContainer = styled.div`
  display: flex;
  height: 48px;
  width: 48px;
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <SiteNavigationList />
        <SocialMediaContainer>
          <img src={YouTubeLogo} />
          <img src={FacebookLogo} />
        </SocialMediaContainer>
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
