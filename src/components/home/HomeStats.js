import React from 'react'
import { StatSection } from '../shared/index'
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
  console.log(statsSubtitle)
  return (
    <StatSection
      bg='green'
      stats={statsHolder}
      mdx={statsSubtitle.childMdx.body}
    />
  )
}

export default Stats
