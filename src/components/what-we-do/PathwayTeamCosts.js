import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import Box from '../general/Box'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import changeCase from 'change-case'

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
  const { node } = data.allContentfulWwdPage.edges[0]
  const { hospitalTeamCostsTitle, hospitalTeamCostsTable } = node
  const url = changeCase.hyphenCase(hospitalTeamCostsTitle)

  return (
    <Box bg='lightGrey'>
      <Section>
        <Animation id={url}>
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
