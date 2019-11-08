import React from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'
import FloatingHeader from './components/floating-header/floating-header'
import TopHeader from './components/top-header/top-header'
import { Carousel } from './components/carousel/carousel'

const AppContainer = styled.div`
  margin: 16px;
  font-family: Arial, Helvetica, sans-serif;
`

const App = () => (
  <AppContainer>
    <TopHeader />
    <FloatingHeader />
    <Carousel />
  </AppContainer>
)

export default hot(module)(App)
