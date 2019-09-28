import React from 'react'
import Hero from '../components/homelessness/Hero'
import Wrapper from '../components/shared/Wrapper'
import MainSection from '../components/homelessness/MainSection'
import Programme from '../components/homelessness/Programme'
import Footnotes from '../components/homelessness/Footnotes'
import FindOutMore from '../components/shared/FindOutMore'
import Footer from '../components/shared/Footer'

const Homelessness = props => (
  <Wrapper>
    <Hero />
    <MainSection />
    <Programme />
    <FindOutMore currentPath={props.location.pathname} />
    <Footnotes />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default Homelessness
