import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StatSection } from '../shared/index'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
      edges {
        node {
          statsTitle {
            childMdx {
              body
            }
          }
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
  return <StatSection bg='blue' mdx={statsTitle.childMdx.body} stats={stats} />
}

export default GuyStats
