import React from 'react'
import CenterSection from './CenterSection'
import Text from './Text'
import Box from './Box'
import Flex from './Flex'
import { useStaticQuery, graphql } from 'gatsby'

const Letter = () => {
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
    childContentfulHomePageIntroductionTextNode,
    childContentfulHomePageIntroTaglineTextNode
  } = node
  return (
    <CenterSection>
      <Box mb={4}>
        <Text textAlign='center' fontSize={3} color='blue'>
          Welcome
        </Text>
        <Text textAlign='center' fontWeight='bold' fontSize={5} color='grey'>
          Letter from our Chief Executive
        </Text>
      </Box>
      <Flex justifyContent='space-between' flexWrap='wrap'>
        <Box width={[1, 1 / 2]}>
          <Box mt={-4} mr={[0, 4]}>
            <Text
              lineHeight='45px'
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulHomePageIntroTaglineTextNode
                    .childMarkdownRemark.html
              }}
              textAlign={['center', 'right']}
              color='blue'
              fontWeight='bold'
              fontSize={5}
            />
          </Box>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Box ml={[0, 4]}>
            <Text
              lineHeight='25px'
              fontSize={3}
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulHomePageIntroductionTextNode
                    .childMarkdownRemark.html
              }}
            />
            <Box mt={3}>
              <Text fontSize={3} fontWeight='bold' color='green'>
                Alex Bax,
              </Text>
            </Box>
            <Text fontSize={3}>Chief Executive, Pathway</Text>
          </Box>
        </Box>
      </Flex>
    </CenterSection>
  )
}
export default Letter
