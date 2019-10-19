import React from 'react'
import { Footnotes } from '../shared'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulAboutPage {
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

const AboutFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.allContentfulAboutPage.nodes[0]
  return (
    <Footnotes bg='lightGrey' footnotes={footnotes.childMarkdownRemark.html} />
  )
}

export default AboutFootnotes
