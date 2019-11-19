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
  min-height: 300px;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+ */
  /* Rules below not implemented in browsers yet */
  -o-user-select: none;
  user-select: none;
`

export const Title = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: white;

  @media (min-width: 700px) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (min-width: 1500px) {
    font-size: 32px;
    line-height: 48px;
  }
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Copy = styled.h3`
  font-size: 14px;
  color: white;

  @media (min-width: 700px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (min-width: 1500px) {
    font-size: 24px;
    line-height: 24px;
  }
`
export const CarouselLink = styled.a`
  display: inline-block;
  background-color: rgba(22, 83, 137, 0.8);
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 2px;
  border: 2px solid rgba(22, 83, 137, 0.8);
  text-transform: uppercase;
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 14px;

  :hover {
    background-color: rgb(22, 83, 137);
    border-color: rgb(22, 83, 137);
  }

  @media (min-width: 700px) {
    font-size: 18px;
    line-height: 24px;
    padding: 12px 24px;
  }
  @media (min-width: 1500px) {
    font-size: 24px;
    line-height: 24px;
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
  width: 12px;
  height: 12px;
  background-color: #fafafa;
  border-radius: 100%;
  margin: 0 6px;
  opacity: ${props => (props.order === props.activeImage ? 1 : 0.5)};
  cursor: pointer;
  :hover {
    opacity: 1;
  }

  @media (min-width: 700px) {
    width: 24px;
    height: 24px;
    margin: 0 12px;
  }
`

export const IndicatorControlsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const LinkAndIndicatorsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
`
export const ContentIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  
  ${TitleContainer}, ${Copy}, ${LinkAndIndicatorsContainer} {
    flex: 1
  }
`
export const CarouselContentContainer = styled.div`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
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
        <ContentIndicatorsContainer>
          <TitleContainer>
            <Title>{carouselContent[activeImage].title}</Title>
          </TitleContainer>
          <Copy>{carouselContent[activeImage].copy}</Copy>
          <LinkAndIndicatorsContainer>
            <CarouselLink
              target="_blank"
              rel="noopener noreferrer"
              href={carouselContent[activeImage].linkTarget}
            >
              {carouselContent[activeImage].linkCopy}
            </CarouselLink>
            <IndicatorControlsContainer>
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
            </IndicatorControlsContainer>
          </LinkAndIndicatorsContainer>
        </ContentIndicatorsContainer>
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
