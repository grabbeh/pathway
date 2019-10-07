import React from 'react'
import { Footnotes } from '../shared'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulHomelessnessPage {
      edges {
        node {
          footnotes {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const HomelessnessFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.allContentfulHomelessnessPage.edges[0].node
  return <Footnotes footnotes={footnotes.childMarkdownRemark.html} />
}

export default HomelessnessFootnotes
