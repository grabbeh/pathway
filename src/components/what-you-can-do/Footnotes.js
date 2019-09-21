import React from 'react'
import Footnotes from '../shared/Footnotes'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulWhatYouCanDoPage {
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
  const { footnotes } = data.allContentfulWhatYouCanDoPage.edges[0].node
  return (
    <Footnotes bg='lightGrey' footnotes={footnotes.childMarkdownRemark.html} />
  )
}

export default WWDFootnotes
