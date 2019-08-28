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
     <Animation id={url}>
      <Section  bg='lightGrey'>
          <SectionTitle>{hospitalTeamCostsTitle}</SectionTitle>
          <MDXRenderer>{hospitalTeamCostsTable.childMdx.body}</MDXRenderer>
      </Section>
    </Animation>

  )
}

export default PathwayTeamCosts
