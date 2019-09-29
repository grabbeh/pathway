import React from 'react'
import {
  FindOutMore,
  Footer,
  seo as SEO,
  Wrapper
} from '../components/shared/index'
import Stats from '../components/home/HomeStats'
import Hero from '../components/home/Hero'
import SocialFranchise from '../components/home/SocialFranchise'
import Letter from '../components/home/Letter'
import Footnotes from '../components/home/Footnotes'

const IndexPage = () => (
  <Wrapper>
    <SEO title='Home' />
    <Hero />
    <SocialFranchise />
    <Letter />
    <Stats />
    <FindOutMore />
    <Footnotes />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default IndexPage
