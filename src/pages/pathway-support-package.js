import React from 'react'
import {
  FindOutMore,
  Footer,
  seo as SEO,
  Wrapper
} from '../components/shared/index'
import Hero from '../components/online-manual/Hero'
import MainSection from '../components/online-manual/MainSection'

const OnlineManual = () => (
  <Wrapper>
    <SEO title='What you can do' />
    <Hero />
    <MainSection />
    <FindOutMore pb={[4, 5]} bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default OnlineManual
