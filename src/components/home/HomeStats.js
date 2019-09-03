import React from 'react'
import StatsSection from '../shared/StatSection'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          statsSubtitle {
            childMarkdownRemark {
              html
            }
          }
          statsHolder {
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
const Stats = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulHomePage.edges[0]
  let { statsHolder, statsSubtitle } = node
  return (
    <StatsSection
      bg='green'
      stats={statsHolder}
      html={statsSubtitle.childMarkdownRemark.html}
    />
  )
}

export default Stats
