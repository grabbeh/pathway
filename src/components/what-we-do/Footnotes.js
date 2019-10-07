import React from 'react'
import { Footnotes } from '../shared'
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
  return (
    <Footnotes bg='lightGrey' footnotes={footnotes.childMarkdownRemark.html} />
  )
}

export default WWDFootnotes
