import React from 'react'
import Subtitle from '../typography/Subtitle'
import BodyText from '../typography/BodyText'
import Section from '../general/StandardSection'
import Box from '../general/Box'
import { useStaticQuery, graphql } from 'gatsby'
import Flex from '../general/Flex'

const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          socialFranchiseSubtitle
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
  let { socialFranchiseDescription, socialFranchiseSubtitle } = node

  return (
    <Box bg='lightGrey'>
      <Section>
        <Flex alignItems='center' flexWrap='wrap'>
          <Box width={[1, 1, 1 / 2]}>
            <Subtitle color='green'>{socialFranchiseSubtitle}</Subtitle>
          </Box>
          <Box width={[1, 1, 1 / 2]}>
            <BodyText
              html={socialFranchiseDescription.childMarkdownRemark.html}
            />
          </Box>
        </Flex>
      </Section>
    </Box>
  )
}

export default SocialFranchise
