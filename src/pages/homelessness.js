import React from 'react'
import Hero from '../components/shared/StandardHero'
import Wrapper from '../components/shared/Wrapper'
import HomelessMainSection from '../components/homelessness/HomelessMainSection'
import HomelessProgramme from '../components/homelessness/HomelessProgramme'
import FindOutMore from '../components/shared/FindOutMore'

const Homelessness = () => (
  <Wrapper>
    <Hero title='Homelessness' />
    <HomelessMainSection />
    <HomelessProgramme />
    <FindOutMore howyoucanhelp whatwedo />
  </Wrapper>
)

export default Homelessness
