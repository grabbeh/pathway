import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StatSection } from '../shared'

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
              text
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
    <StatSection
      bg='green'
      mdx={ulchStatsTitle.childMdx.body}
      stats={ulchStats}
    />
  )
}

export default UCLHStats
