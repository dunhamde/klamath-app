import React, { Fragment } from 'react'
import styled from 'styled-components'
import BannerImg from './../../../public/klamathtribes1200.png'

const SiteHeaderContainer = styled.img`
  position: fixed;
  background-color: black;
`

export const SiteHeader = () => {
  return (
    <Fragment>
      <SiteHeaderContainer src={BannerImg} />
    </Fragment>
  )
}

export default SiteHeader
