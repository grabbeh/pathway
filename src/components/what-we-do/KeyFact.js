import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '../general/Box'
import Subtitle from '../typography/Subtitle'
import Circle from '../../svg/Circle'

const query = graphql`
  query {
    allContentfulWwdPage {
      edges {
        node {
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

const KeyFacts = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulWwdPage.edges[0]
  let { wwgKeyFact } = node

  return (
    <Box mt={5} p={[3, 5]} bg='blue'>
      <Circle />
      <Subtitle color='white' html={wwgKeyFact.childMarkdownRemark.html} />
    </Box>
  )
}

export default KeyFacts
