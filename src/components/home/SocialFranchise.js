import React from 'react'
import Text from '../general/Text'
import MarkdownText from '../general/MarkdownText'
import CenterSection from '../general/CenterSection'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          whatIsASocialFranchise {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const SocialFranchise = () => {
  const data = useStaticQuery(query)
  let { node } = data.allContentfulHomePage.edges[0]
  let { whatIsASocialFranchise } = node

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
            <MarkdownText
              html={whatIsASocialFranchise.childMarkdownRemark.html}
            />
          </Box>
        </Flex>
      </CenterSection>
    </Box>
  )
}

export default SocialFranchise
