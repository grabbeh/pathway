import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StatsSection from '../shared/StatSection'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          statsTitle
          stats {
            figure
            subtitle
            text {
              text
            }
          }
        }
      }
    }
  }
`

const GuyStats = () => {
  const data = useStaticQuery(query)
  const { statsTitle, stats } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return <StatsSection bg='blue' title={statsTitle} stats={stats} />
}

export default GuyStats
