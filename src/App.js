import React from 'react'
import styled from 'styled-components'
import Header from './components/floating-header/header'
import TopHeader from './components/top-header/top-header'
import Carousel from './components/carousel/carousel'
import MembersCtaSection from './components/members-cta-section/members-cta-section'
import MedallionSection from './components/medallion-section/medallion-section'
import CwaamCta from './components/cwaam-cta/cwaam-cta'
import Footer from './components/footer/footer'
import MobileHeader from './components/mobile-header/mobile-header'

const AppContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(245, 237, 221);
  border: 2px solid rgb(59, 57, 52);
`

const App = () => (
  <AppContainer>
    <TopHeader />
    <Header />
    <MobileHeader />
    <Carousel />
    <MembersCtaSection />
    <MedallionSection />
    <CwaamCta />
    <Footer />
  </AppContainer>
)

export default App
