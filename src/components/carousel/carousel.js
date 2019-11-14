import React, { useState } from 'react'
import styled from 'styled-components'
import carouselContent from './carousel-content'

export const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  align-items: center;
  justify-content: center;
`

export const CarouselDirectionControls = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const CarouselIndicatorControls = styled.div`
  position: absolute;
  display: flex;
  align-self: end;
  margin-bottom: 12px;
`

export const CarouselImage = styled.img`
  width: 100%;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
`

export const CarouselTitle = styled.div`
  position: absolute;
  margin-bottom: 60px;
  font-size: 32px;
  line-height: 48px;
  color: white;
  font-weight: 700;
`
export const CarouselCopy = styled.div`
  position: absolute;
  margin-top: 60px;
  font-size: 24px;
  line-height: 36px;
  color: white;
  font-weight: 500;
`
export const CarouselLink = styled.div``

export const DirectionControl = styled.div`
  width: 36px;
  height: 36px;
  z-index: 2;
  transform: ${props =>
    props.backward ? 'rotate(-135deg)' : 'rotate(45deg)'};
  margin: 24px;
  border-width: 12px 12px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`
export const IndicatorControl = styled.div`
  width: 24px;
  height: 24px;
  background-color: #fafafa;
  border-radius: 100%;
  margin: 12px;
  opacity: ${props => (props.order === props.activeImage ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0)
  return (
    <CarouselContainer>
      <CarouselDirectionControls>
        <DirectionControl
          backward
          onClick={() =>
            setActiveImage(
              activeImage - 1 >= 0
                ? activeImage - 1
                : carouselContent.length - 1,
            )
          }
        />
        <DirectionControl
          forward
          onClick={() =>
            setActiveImage(
              activeImage + 1 <= carouselContent.length - 1
                ? activeImage + 1
                : 0,
            )
          }
        />
      </CarouselDirectionControls>
      <CarouselImage src={carouselContent[activeImage].image} />
      <CarouselTitle>
        {carouselContent[activeImage].title}
      </CarouselTitle>
      <CarouselCopy>{carouselContent[activeImage].copy}</CarouselCopy>
      <CarouselIndicatorControls>
        {carouselContent.map((currElement, index) => {
          return (
            <IndicatorControl
              onClick={() => setActiveImage(index)}
              key={`${currElement.title}-${currElement.linkCopy}`}
              order={index}
              activeImage={activeImage}
            />
          )
        })}
      </CarouselIndicatorControls>
    </CarouselContainer>
  )
}

export default Carousel
