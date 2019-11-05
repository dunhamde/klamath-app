import React from 'react'
import styled from 'styled-components'
import FishRestoGoalImgSrc from '../../../public/carousel-images/slide1-1800x500.jpg'

export const CarouselContainer = styled.div`
  max-width: 100%;
  height: 504px;
  border: 6px solid turquoise;
  background-image: url(${FishRestoGoalImgSrc});
  background-size: cover;
`

export const Carousel = () => {
  return <CarouselContainer>Content carousel</CarouselContainer>
}

export default Carousel
