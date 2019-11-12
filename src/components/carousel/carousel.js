import React from 'react'
import styled from 'styled-components'
import FishRestoGoalImgSrc from '../../../public/carousel-images/slide1-1800x500.jpg'
import TribalCouncilImgSrc from '../../../public/carousel-images/Tribal-Council-East-Good_Slider-1422x500.jpg'

export const CarouselContainer = styled.div`
  display: flex;
  max-width: 100%;
  height: 504px;
`

export const CarouselSlide = styled.div`
  width: 100%;
  border: 4px solid red;
  background-size: cover;
  background-image: url(${props => props.backgroundImage});
`

export const ControlRadio = styled.input``
export const ControlLabel = styled.label``
export const CarouselTrack = styled.div``
export const CarouselControls = styled.div``
export const CarouselIndicators = styled.div``

export const Carousel = () => (
  <CarouselContainer>
    <CarouselControls>
      <ControlRadio
        type="radio"
        id="1"
        name="activator"
        checked="checked"
      />

      <ControlRadio type="radio" id="2" name="activator" />
      <ControlRadio type="radio" id="3" name="activator" />
      <ControlLabel
        htmlFor="1"
        className="carousel__control carousel__control--forward"
      />
      <ControlLabel
        htmlFor="2"
        className="carousel__control carousel__control--backward"
      />
    </CarouselControls>
    <CarouselTrack>
      <CarouselSlide backgroundImage={FishRestoGoalImgSrc} />
      <CarouselSlide backgroundImage={TribalCouncilImgSrc} />
    </CarouselTrack>
    <CarouselIndicators>
      <ControlLabel htmlFor="1" className="carousel__indicator" />
      <ControlLabel htmlFor="2" className="carousel__indicator" />
      <ControlLabel htmlFor="3" className="carousel__indicator" />
    </CarouselIndicators>
  </CarouselContainer>
)

export default Carousel
