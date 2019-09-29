import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general/index'
import { SectionTitle } from '../typography/index'
import Animation from '../animations/ScrollAnimation'
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
  const { node } = data.allContentfulWwdPage.edges[0]
  const { hospitalTeamCostsTitle, hospitalTeamCostsTable } = node
  return (
    <Section>
      <Animation>
        <SectionTitle text={hospitalTeamCostsTitle} />
        <MDXRenderer>{hospitalTeamCostsTable.childMdx.body}</MDXRenderer>
      </Animation>
    </Section>
  )
}

export default PathwayTeamCosts
