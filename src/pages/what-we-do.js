import React from 'react'
import Hero from '../components/what-we-do/Hero'
import Wrapper from '../components/Wrapper'
import FindOutMore from '../components/FindOutMore'

const page = () => (
  <Wrapper>
    <Hero />
    <FindOutMore howyoucanhelp homelessness />
  </Wrapper>
)

export default page
