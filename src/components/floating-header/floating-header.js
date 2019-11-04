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
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  border: 1px solid blue;
  height: 432px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  ul {
    display: flex;
    padding-left: 0;
    text-align: center;

    li:first-child {
      border-left: 0;
    }
  }

  li {
    list-style: none;
    border-left: 2px solid black;
    padding: 12px;
  }
  a {
    text-transform: uppercase;
    font-family: 'Source Sans Pro', Arial, sans-serif;
    color: white;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: black 2px 2px;
    overflow: hidden;
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

export const TopHeader = () => {
  return (
    <Fragment>
      <HeaderContainer>
        <HeaderLogo src={HeaderLogoSource} />

        <FloatingHeaderLinksList />
      </HeaderContainer>
    </Fragment>
  )
}

export default TopHeader
