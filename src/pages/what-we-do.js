import React from 'react'
import Hero from '../components/what-we-do/Hero'
import Wrapper from '../components/general/Wrapper'
import FindOutMore from '../components/general/FindOutMore'
import SEO from '../components/general/seo'

const page = () => (
  <Wrapper>
    <SEO title='What we do' />
    <Hero />
    <FindOutMore howyoucanhelp homelessness />
  </Wrapper>
)

export default page
