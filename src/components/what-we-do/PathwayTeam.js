import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          pathwayTeamTitle
          hospitalTeamTable {
            childMdx {
              body
            }
          }
        }
      }
    }
  }
`

const PathwayTeam = () => {
  const data = useStaticQuery(query)
  let {
    pathwayTeamTitle,
    hospitalTeamTable
  } = data.allContentfulWwdPage.edges[0].node
  return (
    <Section bg='lightGrey'>
      <Animation>
        <SectionTitle>{pathwayTeamTitle}</SectionTitle>
      </Animation>
      <Animation>
        <MDXRenderer>{hospitalTeamTable.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default PathwayTeam
