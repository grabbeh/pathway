import React from 'react'
import Hero from '../components/shared/StandardHero'
import Wrapper from '../components/shared/Wrapper'
import FindOutMore from '../components/shared/FindOutMore'
import SEO from '../components/shared/seo'
import MainSection from '../components/what-we-do/MainSection'
import CaseStudy from '../components/what-we-do/CaseStudy'
import PathwayModel from '../components/what-we-do/PathwayModel'
import ULCHStats from '../components/what-we-do/ULCHStats'
import CostEffective from '../components/what-we-do/CostEffective'
import PathwayTeamCosts from '../components/what-we-do/PathwayTeamCosts'
import PathwayTeam from '../components/what-we-do/PathwayTeam'

const page = () => (
  <Wrapper>
    <SEO title='What we do' />
    <Hero title='What we do' />
    <MainSection />
    <CaseStudy />
    <PathwayModel />
    <ULCHStats />
    <CostEffective />
    <PathwayTeam />
    <PathwayTeamCosts />
    <FindOutMore bg='lightGrey' howyoucanhelp homelessness />
  </Wrapper>
)

export default page
