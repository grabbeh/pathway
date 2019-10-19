import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StatSection } from '../shared'

const query = graphql`
  query {
    whatWeDoPage: allContentfulWwdPage {
      nodes {
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
`

const UCLHStats = () => {
  const data = useStaticQuery(query)
  const { ulchStatsTitle, ulchStats } = data.whatWeDoPage.nodes[0]
  return (
    <StatSection
      bg='green'
      mdx={ulchStatsTitle.childMdx.body}
      stats={ulchStats}
    />
  )
}

export default UCLHStats
