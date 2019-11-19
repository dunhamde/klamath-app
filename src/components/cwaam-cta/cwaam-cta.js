import React from 'react'
import styled from 'styled-components'

export const CwaamCtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-weight: 600;
    line-height: 48px;
    font-size: 36px;
    color: rgb(59, 57, 52);
    line-height: 48px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 24px;

  a {
    border: 2px solid rgb(59, 57, 52);
    border-radius: 16px;
    font-size: 24px;
    line-height: 48px;
    padding: 0 36px;
    text-align: center;
    text-decoration: none;
    margin: 12px 0;
  }
  iframe {
    margin: 36px 0;
    height: 250px;
    width: 300px;
  }

  @media (min-width: 1000px) {
    iframe {
      height: 315px;
      width: 560px;
    }
  }
`

export const CwaamCta = () => {
  const ctaTitle = `Saving endangered C’waam and Koptu will also help salmon and bring back a
  healthy Upper Klamath Lake`

  return (
    <CwaamCtaContainer>
      <ContentContainer>
        <h2>{ctaTitle}</h2>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/restoring-fish-and-a-dying-lake/"
        >
          Press Release and Filing Information
        </a>
        <iframe
          title="cwaam cta"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/PlcoCz6-1CQ"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/video-2/"
        >
          More Tribal Videos
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/quail-trail-bus-schedule/"
        >
          Looking for BUS Schedules?
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/word-of-the-day/"
        >
          Word of the Day!
        </a>
      </ContentContainer>
    </CwaamCtaContainer>
  )
}

export default CwaamCta
