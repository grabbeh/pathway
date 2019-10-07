import React from 'react'
import {
  Wrapper,
  FindOutMore,
  seo as SEO,
  Footer
} from '../components/shared'
import MainSection from '../components/about-us/MainSection'
import Hero from '../components/about-us/Hero'
import Survey from '../components/about-us/Survey'
import Services from '../components/about-us/Services'
import Footnotes from '../components/about-us/Footnotes'

const AboutPage = () => (
  <Wrapper>
    <SEO title='About' />
    <Hero />
    <MainSection />
    <Survey />
    <Services />
    <FindOutMore bg='lightGrey' />
    <Footnotes bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default AboutPage
