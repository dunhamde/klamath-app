import React from 'react'
import styled from 'styled-components'
import HeaderLogoSource from '../../../public/klamathtribes1200.png'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import Menu from './menu'

export const StyledMenu = styled(Menu)``
export const HeaderLogo = styled.img`
  align-self: flex-start;
  width: 385px;
  height: 60px;
`

export const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  border: 1px solid blue;
  height: 63px;
  background-image: url(${HeaderBannerSource});
  background-size: cover;

  ${StyledMenu} {
    padding-right: 12px;
  }
`

export const MobileHeader = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={HeaderLogoSource} />
      <StyledMenu />
    </HeaderContainer>
  )
}

export default MobileHeader
