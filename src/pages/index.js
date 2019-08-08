import React from 'react'
import Wrapper from '../components/Wrapper'
import SEO from '../components/seo'
import FindOutMore from '../components/FindOutMore'
import AboutSection from '../components/AboutSection'
import Stats from '../components/Stats'
import Hero from '../components/Hero'
import SocialFranchise from '../components/SocialFranchise'
import Letter from '../components/Letter'

const IndexPage = () => {
  return (
    <Wrapper>
      <SEO title='Home' />
      <Hero />
      <SocialFranchise />
      <Letter />
      <Stats />
      <FindOutMore />
      <AboutSection />
    </Wrapper>
  )
}

export default IndexPage
