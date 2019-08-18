import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import BodyText from '../typography/BodyText'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayTeamTitle
          hospitalTeamTable {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const PathwayTeam = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let { pathwayTeamTitle, hospitalTeamTable } = node
  console.log(data)

  return (
    <Section bg='lightGrey'>
      <Animation>
        <SectionTitle>{pathwayTeamTitle}</SectionTitle>
      </Animation>
      <Animation>
        <BodyText html={hospitalTeamTable.childMarkdownRemark.html} />
      </Animation>
    </Section>
  )
}

export default PathwayTeam
