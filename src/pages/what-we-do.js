import React from 'react'
import Hero from '../components/what-we-do/Hero'
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
import Footer from '../components/shared/Footer'
// import SideTopicList from '../components/shared/SideTopicList'
// import { graphql, useStaticQuery } from 'gatsby'
// import ShowOnDesktop from '../components/shared/ShowOnWideDesktop'
// import RefCreator from '../components/shared/RefCreator'

/*
const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          wwdMainSectionTitle
          caseStudyTitle
          pathwayModelTitle
          ulchStatsId
          pathwayTeamCostEffectivenessTitle
          pathwayTeamTitle
          hospitalTeamCostsTitle
        }
      }
    }
  }
` */

const page = ({ location }) => {
  // const data = useStaticQuery(query)
  // let topics = Object.values(data.allContentfulWwdPage.edges[0].node)
  return (
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
      <FindOutMore currentPath={location.pathname} />
      <Footer bg='lightGrey' />
    </Wrapper>
  )
}

export default page
