import React from 'react'
import { Footnotes } from '../shared/index'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    allContentfulAboutPage {
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

const AboutFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.allContentfulAboutPage.edges[0].node
  return (
    <Footnotes bg='lightGrey' footnotes={footnotes.childMarkdownRemark.html} />
  )
}

export default AboutFootnotes
