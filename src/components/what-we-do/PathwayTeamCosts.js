import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StandardSection as Section } from '../general'
import { SectionTitle } from '../typography'
import Animation from '../animations/ScrollAnimation'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const query = graphql`
  query {
    whatWeDoPage: allContentfulWwdPage {
      nodes {
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
`

const PathwayTeamCosts = () => {
  const data = useStaticQuery(query)
  const {
    hospitalTeamCostsTitle,
    hospitalTeamCostsTable
  } = data.whatWeDoPage.nodes[0]
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
