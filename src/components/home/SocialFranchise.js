import React from 'react'
import Text from '../typography/Text'
import MarkdownText from '../general/MarkdownText'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          socialFranchiseDescription {
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
  let { socialFranchiseDescription } = node

  return (
    <Box bg='lightGrey'>
      <Section>
        <Flex alignItems='center' flexWrap='wrap'>
          <Box width={[1, 1, 1 / 2]}>
            <Text fontWeight='subtitle' fontSize={3} color='green'>
              What is a social franchise?
            </Text>
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <MarkdownText
              html={socialFranchiseDescription.childMarkdownRemark.html}
            />
          </Box>
        </Flex>
      </Section>
    </Box>
  )
}

export default SocialFranchise
