import React from 'react'
import StatsSection from '../shared/StatSection'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          statsSubtitle {
            childMdx {
              body
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
  const {
    statsHolder,
    statsSubtitle
  } = data.allContentfulHomePage.edges[0].node
  return (
    <StatsSection
      bg='green'
      stats={statsHolder}
      mdx={statsSubtitle.childMdx.body}
    />
  )
}

export default Stats
