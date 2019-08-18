import React from 'react'
import Wrapper from '../components/shared/Wrapper'
import Footer from '../components/shared/Footer'
import FindOutMore from '../components/shared/FindOutMore'
import MainSection from '../components/what-you-can-do/MainSection'
import Hero from '../components/what-you-can-do/Hero'
import SEO from '../components/shared/seo'
import PathwayFranchise from '../components/what-you-can-do/PathwayFranchise'
import PathwayTeam from '../components/what-you-can-do/PathwayTeam'
import PathwayFranchiseeRequests from '../components/what-you-can-do/PathwayFranchiseeRequests'
import PathwayFranchiseeProfile from '../components/what-you-can-do/PathwayFranchiseeProfile'
import GuyStats from '../components/what-you-can-do/GuyStats'
import FinancialInfo from '../components/what-you-can-do/FranchiseeFinancialInfo'
import NextSteps from '../components/what-you-can-do/NextSteps'

const WhatYouCanDo = () => (
  <Wrapper>
    <SEO title='What you can do' />
    <Hero />
    <MainSection />
    <PathwayFranchise />
    <PathwayTeam />
    <PathwayFranchiseeRequests />
    <PathwayFranchiseeProfile />
    <GuyStats />
    <FinancialInfo />
    <NextSteps />
    <FindOutMore bg='lightGrey' homelessness whatwedo />
    <Footer />
  </Wrapper>
)

export default WhatYouCanDo
