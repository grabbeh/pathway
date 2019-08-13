import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../general/SectionTitle'
import BodyText from '../general/BodyText'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          hospitalTeamCostsTitle
          hospitalTeamCostsTable {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayTeamCosts = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let { hospitalTeamCostsTitle, hospitalTeamCostsTable } = node

  return (
    <Section>
      <Animation>
        <SectionTitle>{hospitalTeamCostsTitle}</SectionTitle>
      </Animation>
      <Animation>
        <BodyText html={hospitalTeamCostsTable.childMarkdownRemark.html} />
      </Animation>
    </Section>
  )
}

export default PathwayTeamCosts
