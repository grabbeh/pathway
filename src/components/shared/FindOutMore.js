import React from 'react'
import {
  Box,
  Flex,
  MarkdownText as BodyText,
  StandardSection as Section
} from '../general'
import { Text, SectionTitle } from '../typography'
import FullButton from './FullButton'
import List from '../general/List'
import { graphql, useStaticQuery } from 'gatsby'
import ReactSVG from 'react-svg'

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

const FindOutMore = ({ bg, currentPath, pb = 0 }) => {
  const data = useStaticQuery(query)
  const { title, content, links } = data.allContentfulFindOutMore.edges[0].node
  const nonCurrent = links.filter(l => {
    return `/${l.url}` !== currentPath
  })
  return (
    <section>
      <Box>
        <Section bg={bg} pb={pb}>
          <SectionTitle text={title}/>
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
    </section>
  )
}

export default FindOutMore

const SiteSection = ({ children, text, to }) => (
  <Box mb={[4, 4, 0]} minWidth={[1, 250, 250]} width={[1, 1 / 2, 1 / 3]}>
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
