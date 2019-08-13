import React from 'react'
import Hero from '../components/what-we-do/Hero'
import Wrapper from '../components/shared/Wrapper'
import FindOutMore from '../components/shared/FindOutMore'
import SEO from '../components/shared/seo'

const page = () => (
  <Wrapper>
    <SEO title='What we do' />
    <Hero />
    <FindOutMore howyoucanhelp homelessness />
  </Wrapper>
)

export default page
