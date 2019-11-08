import React from 'react'
import styled from 'styled-components'
import FishRestoGoalImgSrc from '../../../public/carousel-images/slide1-1800x500.jpg'
import TribalCouncilImgSrc from '../../../public/carousel-images/Tribal-Council-East-Good_Slider-1422x500.jpg'

export const CarouselContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 504px;
`

export const CarouselFrame = styled.div`
  width: 100%;
  border: 4px solid red;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});

  ${CarouselContainer}:hover & {
    transform: translateX(500px);
    transition: all 1s;
  }
`

export const Carousel = () => (
  <CarouselContainer>
    <CarouselFrame backgroundImage={FishRestoGoalImgSrc} />
    <CarouselFrame backgroundImage={TribalCouncilImgSrc} />
  </CarouselContainer>
)

export default Carousel
