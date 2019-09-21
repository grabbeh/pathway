import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import SEO from '../components/shared/seo'
import AboutSection from '../components/about-us/AboutSection'
import Hero from '../components/about-us/AboutHero'
import FindOutMore from '../components/shared/FindOutMore'
import Survey from '../components/about-us/AboutSurvey'
import Services from '../components/about-us/Services'
import Footnotes from '../components/about-us/Footnotes'
import Footer from '../components/shared/Footer'

const AboutPage = () => (
  <Wrapper>
    <SEO title='About' />
    <Hero />
    <AboutSection />
    <Survey />
    <Services />
    <FindOutMore bg='lightGrey' />
    <Footnotes bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default AboutPage
