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
  font-size: 32px;
  line-height: 48px;
  color: white;
  font-weight: 700;
`
export const CarouselCopy = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: white;
  font-weight: 500;
`
export const CarouselLink = styled.a`
  display: inline-block;
  margin-top: 24px;
  background-color: rgba(22, 83, 137, 0.8);
  color: white;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.25;
  padding: 12px 24px;
  border-radius: 2px;
  border: 2px solid rgba(22, 83, 137, 0.8);
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 1px;

  :hover {
    background-color: rgb(22, 83, 137);
    border-color: rgb(22, 83, 137);
  }
`

export const DirectionControl = styled.div`
  align-self: center;
  width: 36px;
  height: 36px;
  transform: ${props =>
    props.backward ? 'rotate(-135deg)' : 'rotate(45deg)'};
  border-width: 12px 12px 0 0;
  border-style: solid;
  border-color: #fafafa;
  opacity: 0.5;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`
export const DirectionControlContainer = styled.div`
  display: flex;
  justify-content: center;
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
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const CarouselIndicatorControls = styled.div`
  display: flex;
`
export const CarouselContentIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${ContentContainer} {
    flex: 5;
  }

  ${CarouselIndicatorControls} {
    flex: 1;
  }
`
export const CarouselContentContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;

  ${DirectionControlContainer} {
    flex: 10;
  }

  ${CarouselContentIndicatorsContainer} {
    flex: 80;
  }
`

export const Carousel = () => {
  const [activeImage, setActiveImage] = useState(0)
  return (
    <CarouselContainer>
      <CarouselImage src={carouselContent[activeImage].image} />
      <CarouselContentContainer>
        <DirectionControlContainer>
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
        </DirectionControlContainer>
        <CarouselContentIndicatorsContainer>
          <ContentContainer>
            <CarouselTitle>
              {carouselContent[activeImage].title}
            </CarouselTitle>
            <CarouselCopy>
              {carouselContent[activeImage].copy}
            </CarouselCopy>
            <CarouselLink
              href={carouselContent[activeImage].linkTarget}
            >
              {carouselContent[activeImage].linkCopy}
            </CarouselLink>
          </ContentContainer>
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
        </CarouselContentIndicatorsContainer>
        <DirectionControlContainer>
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
        </DirectionControlContainer>
      </CarouselContentContainer>
    </CarouselContainer>
  )
}

export default Carousel
