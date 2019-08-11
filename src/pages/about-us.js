import React from 'react'
import Wrapper from '../components/Wrapper'
import SEO from '../components/seo'
import AboutSection from '../components/AboutSection'
import Hero from '../components/AboutHero'
import FindOutMore from '../components/FindOutMore'
import Survey from '../components/AboutSurvey'
import Services from '../components/Services'

const AboutPage = () => {
  return (
    <Wrapper>
      <SEO title='About' />
      <Hero />
      <AboutSection />
      <Survey />
      <Services />
      <FindOutMore bg='lightGrey' homelessness howyoucanhelp whatwedo />
    </Wrapper>
  )
}

export default AboutPage
