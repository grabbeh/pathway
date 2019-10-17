import React from 'react'
import { FindOutMore, Footer, seo as SEO, Wrapper } from '../components/shared'
import Stats from '../components/home/HomeStats'
import Hero from '../components/home/Hero'
import SocialFranchise from '../components/home/SocialFranchise'
import Letter from '../components/home/Letter'
import Quote from '../components/home/Quote'
import Footnotes from '../components/home/Footnotes'

const IndexPage = props => (
  <Wrapper>
    <SEO title='Home' />
    <Hero />
    <SocialFranchise />
    <Letter />
    <Stats />
    <Quote />
    <FindOutMore />
    <Footnotes currentPath={props.location.pathname} />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default IndexPage
