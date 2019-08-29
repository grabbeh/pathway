import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Section from '../general/StandardSection'
import SectionTitle from '../typography/SectionTitle'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import convertTitle from '../../utils/convertTitle'

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
  const url = convertTitle(hospitalTeamCostsTitle)

  return (
    <Section bg='lightGrey'>
      <Animation id={url}>
        <SectionTitle>{hospitalTeamCostsTitle}</SectionTitle>
        <MDXRenderer>{hospitalTeamCostsTable.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default PathwayTeamCosts
