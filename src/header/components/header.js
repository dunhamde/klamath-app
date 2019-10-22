import React from 'react'
import styled from 'styled-components'

const SiteHeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    position: fixed;
    background-color: red;
`

export const SiteHeader = () => {
    return (
        <SiteHeaderContainer>SiteHeader</SiteHeaderContainer>
    )
}

export default SiteHeader
