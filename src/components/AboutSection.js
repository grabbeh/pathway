import React from 'react'
import Text from './Text'
import Box from './Box'
import { graphql, useStaticQuery } from 'gatsby'
import Flex from './Flex'
import Animation from './ScrollAnimation'

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAboutPage {
        edges {
          node {
            childContentfulAboutPageAboutDescriptionTextNode {
              childMarkdownRemark {
                html
              }
            }
            childContentfulAboutPageAboutSubtitleTextNode {
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
    childContentfulAboutPageAboutDescriptionTextNode,
    childContentfulAboutPageAboutSubtitleTextNode
  } = node

  return (
    <Flex justifyContent='center'>
      <Box mx={[3, 6]} maxWidth={800} py={5}>
        <Animation>
          <Box mb={3}>
            <Text fontSize={3} color='green'>
              About
            </Text>
            <Text fontWeight='bold' fontSize={5}>
              Who is Pathway?
            </Text>
          </Box>
        </Animation>
        <Box>
          <Animation>
            <Text
              fontSize={4}
              fontWeight='bold'
              color='green'
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulAboutPageAboutSubtitleTextNode
                    .childMarkdownRemark.html
              }}
            />
          </Animation>
        </Box>
        <Box>
          <Animation>
            <Text
              fontSize={4}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulAboutPageAboutDescriptionTextNode
                    .childMarkdownRemark.html
              }}
            />
          </Animation>
        </Box>
      </Box>
    </Flex>
  )
}

export default AboutSection
