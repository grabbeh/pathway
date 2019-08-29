import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StatsSection from '../shared/StatSection'
import convertTitle from '../../utils/convertTitle'
import Animation from '../animations/ScrollAnimation'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          ulchStatsId
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
  let { node } = data.allContentfulWwdPage.edges[0]
  let { ulchStatsId, ulchStatsTitle, ulchStats } = node
  return (
    <StatsSection
      bg='green'
      id={ulchStatsId}
      title={ulchStatsTitle}
      stats={ulchStats}
    />
  )
}

export default UCLHStats
