import React from 'react'
import { Footnotes } from '../shared'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    howWeCanHelpPage: allContentfulWhatYouCanDoPage {
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

const WWDFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.howWeCanHelpPage.nodes[0]
  return (
    <Footnotes bg='lightGrey' footnotes={footnotes.childMarkdownRemark.html} />
  )
}

export default WWDFootnotes
