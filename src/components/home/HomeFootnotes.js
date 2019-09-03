import React from 'react'
import Footnotes from '../shared/Footnotes'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulHomePage {
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

const HomeFootnotes = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulHomePage.edges[0]
  let { footnotes } = node
  return <Footnotes footnotes={footnotes.childMarkdownRemark.html} />
}

export default HomeFootnotes
