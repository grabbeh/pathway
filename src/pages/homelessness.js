import React from 'react'
import { FindOutMore, Footer, Wrapper } from '../components/shared'
import Hero from '../components/homelessness/Hero'
import MainSection from '../components/homelessness/MainSection'
import Programme from '../components/homelessness/Programme'
import Footnotes from '../components/homelessness/Footnotes'
import Quote from '../components/homelessness/Quote'

const Homelessness = props => (
  <Wrapper>
    <Hero />
    <MainSection />
    <Programme />
    <Quote />
    <FindOutMore currentPath={props.location.pathname} />
    <Footnotes />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default Homelessness
