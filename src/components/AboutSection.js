import React from 'react'
import Text from './Text'
import Box from './Box'
import { graphql, useStaticQuery } from 'gatsby'
import CenterSection from './CenterSection'

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            childContentfulHomePageAboutTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  `)

  let { node } = data.allContentfulHomePage.edges[0]
  let { childContentfulHomePageAboutTextNode } = node

  return (
    <CenterSection>
      <Box mb={3}>
        <Text fontWeight='bold' fontSize={3} textAlign='center'>
          Who is Pathway?
        </Text>
      </Box>
      <Box>
        <Text fontSize={3} textAlign='center' color='blue'>
          Pathway is the UK’s leading homeless healthcare charity. We work with
          the NHS and other partners to create improved models of care for
          homeless people.
        </Text>
      </Box>
      <Box>
        <Text
          dangerouslySetInnerHTML={{
            __html:
              childContentfulHomePageAboutTextNode.childMarkdownRemark.html
          }}
        />
      </Box>
    </CenterSection>
  )
}

export default IntroSection
