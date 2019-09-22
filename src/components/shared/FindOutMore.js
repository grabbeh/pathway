import React from 'react'
import Box from '../general/Box'
import Text from '../typography/Text'
import Flex from '../general/Flex'
import SectionTitle from '../typography/SectionTitle'
import FullButton from './FullButton'
import BodyText from '../general/MarkdownText'
import List from '../general/List'
import { graphql, useStaticQuery } from 'gatsby'
import ReactSVG from 'react-svg'
import Section from '../general/StandardSection'

const query = graphql`
  query {
    allContentfulFindOutMore {
      edges {
        node {
          title
          links {
            title
            url
            icon {
              file {
                url
              }
            }
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
    <Box bg={bg}>
      <Section pb={3} px={[3, 3, 0]}>
        <SectionTitle>{title}</SectionTitle>
        <BodyText html={content.childMarkdownRemark.html} />
        <List mt={4}>
          <Flex flexWrap='wrap'>
            {nonCurrent.map(({ title, url, icon }) => (
              <SiteSection key={title} text={title} to={`/${url}`}>
                <Box height={200}>
                  <ReactSVG src={icon.file.url} />
                </Box>
              </SiteSection>
            ))}
          </Flex>
        </List>
      </Section>
    </Box>
  )
}

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box mb={[4, 4, 0]} minWidth={[1, 220, 220]} width={[1, 1 / 2, 1 / 3]}>
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
