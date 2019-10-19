import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StatSection } from '../shared'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
      nodes {
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
`

const GuyStats = () => {
  const data = useStaticQuery(query)
  const { statsTitle, stats } = data.howWeCanHelpPage.nodes[0]
  return <StatSection bg='blue' mdx={statsTitle.childMdx.body} stats={stats} />
}

export default GuyStats
