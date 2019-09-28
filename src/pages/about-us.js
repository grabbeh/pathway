import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import SEO from '../components/shared/seo'
import MainSection from '../components/about-us/MainSection'
import Hero from '../components/about-us/Hero'
import FindOutMore from '../components/shared/FindOutMore'
import Survey from '../components/about-us/Survey'
import Services from '../components/about-us/Services'
import Footnotes from '../components/about-us/Footnotes'
import Footer from '../components/shared/Footer'

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
