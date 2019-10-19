import React from 'react'
import { StatSection } from '../shared'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    homePage: allContentfulHomePage {
      nodes {
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
`
const Stats = () => {
  const data = useStaticQuery(query)
  const { statsHolder, statsSubtitle } = data.homePage.nodes[0]
  return (
    <StatSection
      bg='green'
      stats={statsHolder}
      mdx={statsSubtitle.childMdx.body}
    />
  )
}

export default Stats
