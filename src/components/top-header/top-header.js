import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopHeaderLinksList from './th-site-links-list.js'
import TopHeaderSocialLinksList from './th-social-links-list.js'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(rgb(0, 0, 255), rgb(0, 128, 0));
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
  img {
    height: 48px;
    width: 48px;
  }
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <SiteNavigationList />
        <SocialMediaContainer>
          <TopHeaderSocialLinksList />
        </SocialMediaContainer>
      </HeaderContainer>
    </Fragment>
  )
}

export default SiteHeader
