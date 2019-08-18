import React from 'react'
import Hero from '../components/homelessness/Hero'
import Wrapper from '../components/shared/Wrapper'
import HomelessMainSection from '../components/homelessness/HomelessMainSection'
import HomelessProgramme from '../components/homelessness/HomelessProgramme'
import FindOutMore from '../components/shared/FindOutMore'
import Footer from '../components/shared/Footer'

const Homelessness = () => (
  <Wrapper>
    <Hero  />
    <HomelessMainSection />
    <HomelessProgramme />
    <FindOutMore howyoucanhelp whatwedo />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default Homelessness
