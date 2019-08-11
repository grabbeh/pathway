import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StandardHero from './StandardHero'

const AboutHero = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        edges {
          node {
            childContentfulAboutPageAboutTaglineTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  let { node } = data.allContentfulAboutPage.edges[0]
  let {
    childContentfulAboutPageAboutTaglineTextNode: {
      childMarkdownRemark: { html }
    }
  } = node

  return <StandardHero title='About us' html={html} />
}

export default AboutHero
