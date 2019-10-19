import React from 'react'
import { FindOutMore, seo as SEO, Footer, Wrapper } from '../components/shared'
import MainSection from '../components/how-we-can-help-you/MainSection'
import Hero from '../components/how-we-can-help-you/Hero'
import PathwayFranchise from '../components/how-we-can-help-you/PathwayFranchise'
import PathwayTeam from '../components/how-we-can-help-you/PathwayTeam'
import PathwayFranchiseeRequests from '../components/how-we-can-help-you/PathwayFranchiseeRequests'
import PathwayFranchiseeProfile from '../components/how-we-can-help-you/PathwayFranchiseeProfile'
import GuyStats from '../components/how-we-can-help-you/GuyStats'
import FinancialInfo from '../components/how-we-can-help-you/FranchiseeFinancialInfo'
import NextSteps from '../components/how-we-can-help-you/NextSteps'
import Footnotes from '../components/how-we-can-help-you/Footnotes'
import Quote from '../components/how-we-can-help-you/Quote'

const WhatYouCanDo = props => (
  <Wrapper>
    <SEO title='How we can help you' />
    <Hero />
    <MainSection />
    <PathwayFranchise />
    <PathwayTeam />
    <PathwayFranchiseeRequests />
    <PathwayFranchiseeProfile />
    <GuyStats />
    <FinancialInfo />
    <NextSteps />
    <Quote />
    <FindOutMore bg='white' currentPath={props.location.pathname} />
    <Footnotes />
    <Footer bg='lightGrey' />
  </Wrapper>
)

export default WhatYouCanDo
