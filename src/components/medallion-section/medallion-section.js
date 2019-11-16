import React from 'react'
import styled from 'styled-components'
import MedallionList from './medallion-list'

export const MedallionListContainer = styled.div`
  display: flex;

  ul {
    width: 80%;
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
