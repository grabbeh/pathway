import React from 'react'
import { Footnotes } from '../shared'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query {
    homePage: allContentfulHomePage {
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

const HomeFootnotes = () => {
  const data = useStaticQuery(query)
  const { footnotes } = data.homePage.nodes[0]
  return <Footnotes footnotes={footnotes.childMarkdownRemark.html} />
}

export default HomeFootnotes
