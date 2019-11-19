import React from 'react'
import styled from 'styled-components'
import MedallionList from './medallion-list'

export const MedallionListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 60px 0;

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }
`

export const MembersCtaSection = () => {
  return (
    <MedallionListContainer>
      <MedallionList />
    </MedallionListContainer>
  )
}

export default MembersCtaSection
