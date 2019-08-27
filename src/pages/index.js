import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import SEO from '../components/shared/seo'
import FindOutMore from '../components/shared/FindOutMore'
import Stats from '../components/home/HomeStats'
import Hero from '../components/home/Hero'
import SocialFranchise from '../components/home/SocialFranchise'
import Letter from '../components/home/Letter'
import Footer from '../components/shared/Footer'
import SideTopicList from '../components/shared/SideTopicList'

const IndexPage = () => (
  <Wrapper>
    <SEO title='Home' />
    <Hero />
    <SocialFranchise />
    <Letter />
    <Stats />
    <FindOutMore />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default IndexPage
