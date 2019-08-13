import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StandardHero from '../shared/StandardHero'

const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          aboutTagline {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const AboutHero = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulAboutPage.edges[0]
  let { aboutTagline } = node

  return (
    <StandardHero
      title='About us'
      html={aboutTagline.childMarkdownRemark.html}
    />
  )
}

export default AboutHero
