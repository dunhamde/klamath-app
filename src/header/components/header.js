import React, {Fragment} from 'react'
import styled from 'styled-components'
import BannerImg from './../../../public/klamathtribes1200.png'

const SiteHeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    position: fixed;
    background-color: red;
`

export const SiteHeader = () => {
    return (
        <Fragment>
            {/* <SiteHeaderContainer>SiteHeader</SiteHeaderContainer> */}
            <img src={BannerImg} />
        </Fragment>
    )

}

export default SiteHeader
