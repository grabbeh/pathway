import React from 'react'
import Text from './Text'
import Box from './Box'
import Flex from './Flex'
import { graphql, useStaticQuery } from 'gatsby'
import CenterSection from './CenterSection'
import Animation from './ScrollAnimation'

const IntroSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            childContentfulHomePageIntroTaglineTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulHomePageIntroductionTextNode {
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
  let {
    childContentfulHomePageIntroTaglineTextNode,
    childContentfulHomePageIntroductionTextNode
  } = node

  return (
    <CenterSection>
      <Flex flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <Animation>
            <Box borderBottom='7px solid' borderColor='green' mr={4}>
              <Text
                fontWeight='bold'
                fontSize={3}
                dangerouslySetInnerHTML={{
                  __html:
                    childContentfulHomePageIntroTaglineTextNode
                      .childMarkdownRemark.html
                }}
              />
            </Box>
          </Animation>
        </Box>
        <Box mt={[4, 2]} width={[1, 1 / 2]}>
          <Animation>
            <Text
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulHomePageIntroductionTextNode
                    .childMarkdownRemark.html
              }}
            />
            <Text fontWeight='bold' color='green'>
              Alex Bax,
            </Text>
            <Text mt={0}>Chief Executive, Pathway</Text>
          </Animation>
        </Box>
      </Flex>
    </CenterSection>
  )
}

export default IntroSection
