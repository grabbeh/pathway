import React from 'react'
import {
  FindOutMore,
  seo as SEO,
  Footer,
  Wrapper
} from '../components/shared'
import MainSection from '../components/what-you-can-do/MainSection'
import Hero from '../components/what-you-can-do/Hero'
import PathwayFranchise from '../components/what-you-can-do/PathwayFranchise'
import PathwayTeam from '../components/what-you-can-do/PathwayTeam'
import PathwayFranchiseeRequests from '../components/what-you-can-do/PathwayFranchiseeRequests'
import PathwayFranchiseeProfile from '../components/what-you-can-do/PathwayFranchiseeProfile'
import GuyStats from '../components/what-you-can-do/GuyStats'
import FinancialInfo from '../components/what-you-can-do/FranchiseeFinancialInfo'
import NextSteps from '../components/what-you-can-do/NextSteps'
import Footnotes from '../components/what-you-can-do/Footnotes'

const WhatYouCanDo = ({ location }) => (
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
    <FindOutMore currentPath={location.pathname} bg='lightGrey' />
    <Footnotes bg='lightGrey' />
    <Footer />
  </Wrapper>
)

export default WhatYouCanDo
