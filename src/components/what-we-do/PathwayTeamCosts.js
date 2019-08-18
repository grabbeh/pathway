import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import Box from '../general/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'

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
            childMdx {
              body
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
    <Box bg='lightGrey'>
      <Section>
        <Animation>
          <SectionTitle>{hospitalTeamCostsTitle}</SectionTitle>
        </Animation>
        <Animation>
          <MDXRenderer>{hospitalTeamCostsTable.childMdx.body}</MDXRenderer>
        </Animation>
      </Section>
    </Box>
  )
}

export default PathwayTeamCosts
