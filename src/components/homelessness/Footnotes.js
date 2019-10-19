import React from 'react'
import { Footnotes } from '../shared'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    homelessnessPage: allContentfulHomelessnessPage {
      nodes {
        footnotes {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

const HomelessnessFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.homelessnessPage.nodes[0]
  return <Footnotes footnotes={footnotes.childMarkdownRemark.html} />
}

export default HomelessnessFootnotes
