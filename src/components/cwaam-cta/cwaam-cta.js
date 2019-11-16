import React from 'react'
import styled from 'styled-components'

export const CwaamCtaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 60px 0;

  h2 {
    font-weight: 600;
    line-height: 48px;
    font-size: 36px;
    color: rgb(59, 57, 52);
    line-height: 1.25em;
  }
`

export const CwaamCta = () => {
  const ctaTitle = `Saving endangered C’waam and Koptu will also help salmon and bring back a
  healthy Upper Klamath Lake`

  return (
    <CwaamCtaContainer>
      <h2>{ctaTitle}</h2>
      <iframe
        title="cwaam cta"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PlcoCz6-1CQ"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </CwaamCtaContainer>
  )
}

export default CwaamCta
