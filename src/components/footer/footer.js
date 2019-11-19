import React from 'react'
import styled from 'styled-components'
import HeaderBannerSource from '../../../public/headerpic2.jpg'
import TopHeaderSocialLinksList from '../top-header/th-social-links-list'

export const CreditsFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 1000px) {
    align-items: start;
    flex-direction: row;
  }
`
export const FooterItemContainer = styled.div`
  img {
    max-width: 360px;
    max-height: 100%;
  }
`

export const PrimaryFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 96px;
  background: #282634;
  color: white;
  margin-top: 60px;
  padding: 0 60px;
`

export const FooterContainer = styled.div`
  margin-top: 72px;
`

const SocialMediaContainer = styled.div`
  img {
    height: 48px;
    width: 48px;
  }
`

export const Footer = () => {
  return (
    <FooterContainer>
      <CreditsFooter>
        <FooterItemContainer>
          <h3>Photo Credit</h3>
          <h2>Ron Larson</h2>
          <img src={HeaderBannerSource} alt="banner credit" />
        </FooterItemContainer>
        <FooterItemContainer>
          <h3>Weather</h3>
          <iframe
            title="weather"
            id="forecast_embed"
            frameBorder="0"
            height="245"
            width="100%"
            src="//forecast.io/embed/#lat=42.2185 &lon=-121.7749&name=Klamath Falls"
          />
        </FooterItemContainer>
        <FooterItemContainer>
          <h3>No LNG</h3>
          <iframe
            title="no lng"
            width="261"
            height="147"
            src="https://www.youtube.com/embed/PFpIalwW9bY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </FooterItemContainer>
      </CreditsFooter>
      <PrimaryFooter>
        <h2>The Klamath Tribes, 2019</h2>
        <SocialMediaContainer>
          <TopHeaderSocialLinksList />
        </SocialMediaContainer>
      </PrimaryFooter>
    </FooterContainer>
  )
}

export default Footer
