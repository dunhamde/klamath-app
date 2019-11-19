import React from 'react'
import styled from 'styled-components'
import MembersCtaLinksList from './members-cta-links'

export const MembersCtaSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style: none;
    padding: 60px 0;

    li:nth-child(1) {
      background: linear-gradient(lightblue, blue);
    }
    li:nth-child(2) {
      background: linear-gradient(lightgreen, green);
    }
    li:nth-child(3) {
      background: linear-gradient(red, darkred);
    }

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }

  li {
    border: 2px solid rgb(59, 57, 52);
    border-radius: 16px;
    font-size: 24px;
    line-height: 48px;
    padding: 0 36px;
    text-align: center;
    margin: 12px 24px;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

export const MembersCtaSection = () => {
  return (
    <MembersCtaSectionContainer>
      <MembersCtaLinksList />
    </MembersCtaSectionContainer>
  )
}

export default MembersCtaSection
