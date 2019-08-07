import React from 'react'
import Text from './Text'
import Box from './Box'
import { graphql, useStaticQuery } from 'gatsby'
import CenterSection from './CenterSection'
import Animation from './ScrollAnimation'

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
      <Animation>
        <Box mb={3}>
          <Text fontWeight='bold' fontSize={3} textAlign='center'>
            Who is Pathway?
          </Text>
        </Box>
      </Animation>
      <Box>
        <Animation>
          <Text fontSize={3} textAlign='center' color='blue'>
            Pathway is the UK’s leading homeless healthcare charity. We work
            with the NHS and other partners to create improved models of care
            for homeless people.
          </Text>
        </Animation>
      </Box>
      <Box>
        <Animation>
          <Text
            dangerouslySetInnerHTML={{
              __html:
                childContentfulHomePageAboutTextNode.childMarkdownRemark.html
            }}
          />
        </Animation>
      </Box>
    </CenterSection>
  )
}

export default IntroSection
