import React from 'react'
import { FindOutMore, Footer, seo as SEO, Wrapper } from '../components/shared'
import Hero from '../components/what-we-do/Hero'
import MainSection from '../components/what-we-do/MainSection'
import CaseStudy from '../components/what-we-do/CaseStudy'
import PathwayModel from '../components/what-we-do/PathwayModel'
import ULCHStats from '../components/what-we-do/ULCHStats'
import CostEffective from '../components/what-we-do/CostEffective'
import PathwayTeamCosts from '../components/what-we-do/PathwayTeamCosts'
import PathwayTeam from '../components/what-we-do/PathwayTeam'
import Footnotes from '../components/what-we-do/Footnotes'
import Quote from '../components/what-we-do/Quote'

const WhatWeDoPage = props => (
  <Wrapper>
    <SEO title='What we do' />
    <Hero />
    <MainSection />
    <CaseStudy />
    <PathwayModel />
    <ULCHStats />
    <CostEffective />
    <PathwayTeam />
    <PathwayTeamCosts />
    <Quote />
    <FindOutMore bg='lightGrey' currentPath={props.location.pathname} />
    <Footnotes bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default WhatWeDoPage
