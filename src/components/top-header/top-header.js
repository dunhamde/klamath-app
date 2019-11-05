import React, { Fragment } from 'react'
import styled from 'styled-components'
import TopHeaderLinksList from './th-site-links-list.js'
import TopHeaderSocialLinksList from './th-social-links-list.js'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(rgb(0, 0, 255), rgb(0, 128, 0));
  max-width: 100%;
  height: 48px;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin: 0 12px;
  }
  a {
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: white;
    font-size: 16.5px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 24px;
    text-shadow: black 2px 2px 0;
    cursor: pointer;
  }
  a:hover {
    color: rgba(221, 133, 0, 0.7);
  }
  li::after {
    margin-top: 2px;
    content: '';
    width: 100%;
    height: 4px;
    background: rgba(221, 133, 0, 0.7);
    display: block;
    transform: rotateY(90deg);
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  li:hover::after {
    transform: rotateY(180deg);
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
