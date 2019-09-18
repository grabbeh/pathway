import React from 'react'
import Footnotes from '../shared/Footnotes'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulWwdPage {
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

const WWDFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.allContentfulWwdPage.edges[0].node
  return <Footnotes footnotes={footnotes.childMarkdownRemark.html} />
}

export default WWDFootnotes
