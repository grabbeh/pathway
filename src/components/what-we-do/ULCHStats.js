import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StatsSection } from '../shared/index'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          ulchStatsTitle {
            childMdx {
              body
            }
          }
          ulchStats {
            figure
            text {
              childMarkdownRemark {
                html
              }
            }
            subtitle
          }
        }
      }
    }
  }
`

const UCLHStats = () => {
  const data = useStaticQuery(query)
  const { ulchStatsTitle, ulchStats } = data.allContentfulWwdPage.edges[0].node

  return (
    <StatsSection
      bg='green'
      mdx={ulchStatsTitle.childMdx.body}
      stats={ulchStats}
    />
  )
}

export default UCLHStats
