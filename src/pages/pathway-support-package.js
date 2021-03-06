import React from 'react'
import { FindOutMore, Footer, seo as SEO, Wrapper } from '../components/shared'
import Hero from '../components/online-manual/Hero'
import MainSection from '../components/online-manual/MainSection'
import Quote from '../components/online-manual/Quote'

const OnlineManual = props => (
  <Wrapper>
    <SEO title='Pathway support package' />
    <Hero />
    <MainSection />
    <Quote />
    <FindOutMore
      pb={[4, 5]}
      bg='lightGrey'
      currentPath={props.location.pathname}
    />
    <Footer />
  </Wrapper>
)

export default OnlineManual
