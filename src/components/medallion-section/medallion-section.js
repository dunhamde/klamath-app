import React from 'react'
import styled from 'styled-components'
import MedallionList from './medallion-list'

export const MedallionListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
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
