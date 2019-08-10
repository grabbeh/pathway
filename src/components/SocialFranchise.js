import React from 'react'
import Text from './Text'
import CenterSection from './CenterSection'
import Box from './Box'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from './Flex'

const SocialFranchise = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        edges {
          node {
            childContentfulHomePageWhatIsASocialFranchiseTextNode {
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
  let { childContentfulHomePageWhatIsASocialFranchiseTextNode } = node

  return (
    <Box bg='lightGrey'>
      <CenterSection>
        <Flex alignItems='center' flexWrap='wrap'>
          <Box width={[1, 1 / 2]}>
            <Text fontWeight='subtitle' fontSize={3} color='green'>
              What is a social franchise?
            </Text>
          </Box>
          <Box width={[1, 1 / 2]}>
            <Text
              dangerouslySetInnerHTML={{
                __html:
                  childContentfulHomePageWhatIsASocialFranchiseTextNode
                    .childMarkdownRemark.html
              }}
            />
          </Box>
        </Flex>
      </CenterSection>
    </Box>
  )
}

export default SocialFranchise
