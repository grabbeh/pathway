import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import KeyFactCircle from '../shared/KeyStatCircle'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
          keyFactIntro
          wwgKeyFact {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const KeyFacts = ({ width = '82%' }) => {
  const data = useStaticQuery(query)
  const { wwgKeyFact, keyFactIntro } = data.allContentfulWwdPage.edges[0].node
  return (
    <KeyFactCircle
      intro={keyFactIntro}
      mainContent={wwgKeyFact.childMarkdownRemark.html}
    />
  )
}

export default KeyFacts
