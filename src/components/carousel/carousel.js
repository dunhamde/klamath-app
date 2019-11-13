import React, { useState } from 'react'
import styled from 'styled-components'
import FishRestoGoalImgSrc from '../../../public/carousel-images/edited-slide1.jpg'
import TribalCouncilImgSrc from '../../../public/carousel-images/Tribal-Council-East-Good_Slider-1422x500.jpg'
import LowWaterLevelImgSrc from '../../../public/carousel-images/edited-slime-edge.jpg'
import AlgaeImgSrc from '../../../public/carousel-images/edited-Ron_Larson_AFA_3S.jpg'
import FisheryCollapseImgSrc from '../../../public/carousel-images/edited-deadfish.jpg'
import SolutionImgSrc from '../../../public/carousel-images/edited-yuck-1.jpg'
import CwaamImgSrc from '../../../public/carousel-images/edited-cwaamdark.jpg'

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`

export const CarouselControls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CarouselImage = styled.img`
  width: 100%;
`

export const ControlLabel = styled.div`
  width: 36px;
  height: 36px;
  z-index: 2;
  transform: ${props =>
    props.backward ? 'rotate(-135deg)' : 'rotate(45deg)'};
  margin: 24px;
  border-width: 5px 5px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.5;
  outline: 0;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`
export const CarouselIndicators = styled.div``

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0)
  const carouselImages = [
    FishRestoGoalImgSrc,
    TribalCouncilImgSrc,
    LowWaterLevelImgSrc,
    AlgaeImgSrc,
    FisheryCollapseImgSrc,
    SolutionImgSrc,
    CwaamImgSrc,
  ]
  return (
    <CarouselContainer>
      <CarouselControls>
        <ControlLabel
          backward
          onClick={() =>
            setActiveImage(activeImage - 1 >= 0 ? activeImage - 1 : 0)
          }
        />
        <ControlLabel
          forward
          onClick={() =>
            setActiveImage(
              activeImage + 1 <= carouselImages.length - 1
                ? activeImage + 1
                : carouselImages.length - 1,
            )
          }
        />
      </CarouselControls>
      <CarouselImage src={carouselImages[activeImage]} />

      {/* <CarouselIndicators>
      <ControlLabel htmlFor="1" className="carousel__indicator" />
      <ControlLabel htmlFor="2" className="carousel__indicator" />
      <ControlLabel htmlFor="3" className="carousel__indicator" />
    </CarouselIndicators> */}
    </CarouselContainer>
  )
}

export default Carousel
