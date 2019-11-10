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

export const CarouselTrack = styled.div``
export const CarouselControls = styled.div``
export const CarouselIndicators = styled.div``

export const Carousel = () => (
  <CarouselContainer>
    <CarouselTrack>
      <input
        type="radio"
        id="1"
        name="activator"
        checked="checked"
        className="carousel__activator"
      />

      <input
        type="radio"
        id="1"
        name="activator"
        className="carousel__activator"
      />
      <input
        type="radio"
        id="1"
        name="activator"
        className="carousel__activator"
      />
      <CarouselControls>
        <label
          htmlFor="2"
          className="carousel__control carousel__control--forward"
        />
        <label
          htmlFor="3"
          className="carousel__control carousel__control--backward"
        />
      </CarouselControls>
      <CarouselControls>
        <label
          htmlFor="3"
          className="carousel__control carousel__control--forward"
        />
        <label
          htmlFor="1"
          className="carousel__control carousel__control--backward"
        />
      </CarouselControls>
      <CarouselControls>
        <label
          htmlFor="1"
          className="carousel__control carousel__control--forward"
        />
        <label
          htmlFor="2"
          className="carousel__control carousel__control--backward"
        />
      </CarouselControls>
      <CarouselFrame backgroundImage={FishRestoGoalImgSrc} />
      <CarouselFrame backgroundImage={TribalCouncilImgSrc} />
      <CarouselIndicators>
        <label htmlFor="1" className="carousel__indicator" />
        <label htmlFor="2" className="carousel__indicator" />
        <label htmlFor="3" className="carousel__indicator" />
      </CarouselIndicators>
    </CarouselTrack>
  </CarouselContainer>
)

export default Carousel
