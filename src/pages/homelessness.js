import React from 'react'
import Hero from '../components/StandardHero'
import Wrapper from '../components/Wrapper'
import HomelessMainSection from '../components/HomelessMainSection'
import HomelessProgramme from '../components/HomelessProgramme'
import FindOutMore from '../components/FindOutMore'

const Homelessness = () => (
  <Wrapper>
    <Hero title='Homelessness' />
    <HomelessMainSection />
    <HomelessProgramme />
    <FindOutMore howyoucanhelp whatwedo />
  </Wrapper>
)

export default Homelessness
