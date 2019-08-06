import React from 'react'
import Wrapper from '../components/Wrapper'
import SEO from '../components/seo'
import IntroSection from '../components/IntroSection'
import AboutSection from '../components/AboutSection'
import Stats from '../components/Stats'
import Hero from '../components/Hero'

const IndexPage = () => {
  return (
    <Wrapper>
      <SEO title='Home' />
      <Hero />
      <IntroSection />
      <Stats />
      <AboutSection />
    </Wrapper>
  )
}

export default IndexPage
