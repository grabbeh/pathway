import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import Circle from '../../svg/Circle'
import SectionTitle from '../typography/SectionTitle'
import FullButton from './FullButton'
import BodyText from '../general/MarkdownText'
import List from '../general/List'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  query {
    allContentfulFindOutMore {
      edges {
        node {
          title
          links {
            title
            url
          }
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`

const FindOutMore = ({ bg, currentPath }) => {
  const data = useStaticQuery(query)
  const { title, content, links } = data.allContentfulFindOutMore.edges[0].node
  const nonCurrent = links.filter(l => {
    return `/${l.url}` !== currentPath
  })
  return (
    <Flex justifyContent='center'>
      <Box maxWidth={[null, 800, 1000]} py={[4, 5]} mx={3} bg={bg}>
        <SectionTitle>{title}</SectionTitle>
        <BodyText html={content.childMarkdownRemark.html} />
        <List mt={3}>
          <Flex flexWrap='wrap'>
            {nonCurrent.map(({ title, url }) => (
              <SiteSection key={title} text={title} to={`/${url}`}>
                <Text textAlign='center'>
                  <Circle size={125} />
                </Text>
              </SiteSection>
            ))}
          </Flex>
        </List>
      </Box>
</Flex>
  )
}

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box mb={[4, 4, 0]} minWidth={(1, 250, 250)} width={[1, 1 / 2, 1 / 3]}>
    <Box mr={[0, 4]} mb={3}>
      <Box mb={3}>
        <Text textAlign='center'>{children}</Text>
      </Box>
      <Box mt={[3, 0]}>
        <FullButton text={text} to={to} />
      </Box>
    </Box>
  </Box>
)
