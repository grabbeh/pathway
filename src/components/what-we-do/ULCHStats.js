import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StatsSection from '../shared/StatSection'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          ulchStatsTitle
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

  return <StatsSection bg='green' title={ulchStatsTitle} stats={ulchStats} />
}

export default UCLHStats
